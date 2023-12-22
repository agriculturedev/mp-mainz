import rasterio
from rasterio import Affine
from rasterio.merge import merge
from rasterio.warp import calculate_default_transform, reproject, Resampling
import numpy as np
import os

def reproject_to_common_crs(src_path, dst_crs, resampling_method=Resampling.nearest):
    with rasterio.open(src_path) as src:
        transform, width, height = calculate_default_transform(
            src.crs, dst_crs, src.width, src.height, *src.bounds)
        kwargs = src.meta.copy()
        kwargs.update({
            'crs': dst_crs,
            'transform': transform,
            'width': width,
            'height': height
        })

        reprojected_path = os.path.splitext(src_path)[0] + '_reprojected.tif'
        with rasterio.open(reprojected_path, 'w', **kwargs) as dst:
            for i in range(1, src.count + 1):
                reproject(
                    source=rasterio.band(src, i),
                    destination=rasterio.band(dst, i),
                    src_transform=src.transform,
                    src_crs=src.crs,
                    dst_transform=transform,
                    dst_crs=dst_crs,
                    resampling=resampling_method
                )
        return reprojected_path

def flip_and_shift_geotiff(input_path, output_path):
    with rasterio.open(input_path) as src:
        # Read the data
        data = src.read()

        # Flip the image data vertically
        flipped_data = data[:, ::-1, :]

        # Update the affine transform
        # We flip (height) and then shift up (-2 * height)
        transform = src.transform * Affine.translation(0, src.height) * Affine.translation(0, -src.height)

        # Write the flipped and shifted image to a new file
        with rasterio.open(
            output_path, 'w',
            driver=src.driver,
            height=src.height,
            width=src.width,
            count=src.count,
            dtype=src.dtypes[0],
            crs=src.crs,
            transform=transform,
        ) as dst:
            dst.write(flipped_data)

def merge_geotiffs(input_paths, output_path, dst_crs='EPSG:4326'):
    reprojected_paths = [reproject_to_common_crs(path, dst_crs) for path in input_paths]

    # Open the reprojected files
    src_files = [rasterio.open(path) for path in reprojected_paths]

    # Merge the files
    mosaic, out_trans = merge(src_files)

    # Copy the metadata
    out_meta = src_files[0].meta.copy()
    out_meta.update({
        "driver": "GTiff",
        "height": mosaic.shape[1],
        "width": mosaic.shape[2],
        "transform": out_trans
    })

    # Write the merged file
    with rasterio.open(output_path, "w", **out_meta) as dest:
        dest.write(mosaic)

    # Close the files
    for file in src_files:
        file.close()

    # Optionally, clean up temporary reprojected files
    for path in reprojected_paths:
        os.remove(path)

# Example usage
flip_and_shift_geotiff('4637_4737_4837.tif', 'flipped_4637_4737_4837.tif')
flip_and_shift_geotiff('4638_4738_4838.tif', 'flipped_4638_4738_4838.tif')
flip_and_shift_geotiff('4839_4739_4639.tif', 'flipped_4839_4739_4639.tif')

# merge_geotiffs(["flipped_4638_4738_4838.tif", "flipped_4839_4739_4639.tif", "flipped_4637_4737_4837.tif"], "output.tif")
merge_geotiffs(["flipped_4638_4738_4838.tif", "flipped_4839_4739_4639.tif"], "output.tif")
