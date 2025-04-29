(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{3757:function(b,v,j){var l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,h=(t,e)=>{for(var u in e)l(t,u,{get:e[u],enumerable:!0})},w=(t,e,u,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!d.call(t,r)&&r!==u&&l(t,r,{get:()=>e[r],enumerable:!(a=c(e,r))||a.enumerable});return t},O=t=>w(l({},"__esModule",{value:!0}),t),_={};h(_,{addChapter:()=>f}),b.exports=O(_);function f(t,e){const u={text:t.title,style:"header",bold:!0,fontSize:14},a={text:t.description,style:"header"},r={text:t.tool,style:"header"};let o="Quelleninformation fehlt.";if(t.output.sourceInfo&&(o=Object.values(t.output.sourceInfo).map(p=>{const s=p;return s.Abstrakt=p.Abstrakt.replace(/<p>/g,`
`).replace(/<\/p>/g,`
`),Object.values(s).map((n,g)=>Object.keys(s)[g]+": "+n)}),o=o.map(p=>[p,`
`])),e.content.push(u),e.content.push(`
`),e.content.push(a),e.content.push(`
`),e.content.push(r),e.content.push(`
`),t.output.type==="table"){const p=Object.keys(t.output.result[0]).map(n=>({border:[!1,!1,!1,!0],fillColor:"#dddddd",text:n})),s=t.output.result.map(n=>Object.values(n));e.content.push({table:{headerRows:1,body:[p,...s]},fontSize:8,pageBreak:"after"})}return t.output.type==="image"&&e.content.push({image:t.output.result,width:500,pageBreak:"after"}),e.content.push(`
`),e.content.push(`
`),e.content.push(`Datenquellen:

`,o),e}}}]);
