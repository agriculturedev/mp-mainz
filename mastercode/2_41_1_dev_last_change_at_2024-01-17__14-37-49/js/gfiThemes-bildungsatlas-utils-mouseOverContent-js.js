(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{4012:function(l,v){var o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,i=(e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})},u=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of c(t))!p.call(e,n)&&n!==r&&o(e,n,{get:()=>t[n],enumerable:!(s=a(t,n))||s.enumerable});return e},b=e=>u(o({},"__esModule",{value:!0}),e),d={};i(d,{default:()=>_}),l.exports=b(d);function h(e){return`<table class="table table-striped schulWohnort">
    <thead>
        <tr>
            <th colspan="3">`+e.schoolName+`</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="25%">Adresse:</td>
            <td colspan="2">`+e.address.street+"<br>"+e.address.city+`</td>
        </tr>
        <tr>
            <td colspan="2">Anzahl der Sch\xFClerinnen und<br>Sch\xFCler in allen Stufen:</td>
            <td width="25%">`+e.numberOfStudents+`</td>
        </tr>
        <tr>
            <td colspan="2">Anzahl der Sch\xFClerinnen und Sch\xFCler<br>in der `+e.schoolLevelTitle+`:</td>
            <td>`+e.numberOfStudentsStep+`</td>
        </tr>
        <tr>
            <td colspan="2">Anteil der Sch\xFClerschaft des angeklickten<br>Gebiets, der diese Schule besucht<br>an der gesamten Sch\xFClerschaft des<br>angeklickten Gebiets (`+e.schoolLevelTitle+`):</td>
            <td>`+e.percentageOfStudentsFromDistrict+`%</td>
        </tr>
        <tr>
            <td colspan="2">Anzahl:</td>
            <td>`+e.numberOfStudentsFromDistrict+`</td>
        </tr>
    </tbody>
</table>`}var _=h}}]);
