import{l as e,m as t,p as i,q as r,t as l,x as n,o as s,c as o,n as a,i as d}from"./index-f0b22e55.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const m=h({name:"u-line",mixins:[t,i,{props:{color:{type:String,default:()=>e.line.color},length:{type:[String,Number],default:()=>e.line.length},direction:{type:String,default:()=>e.line.direction},hairline:{type:Boolean,default:()=>e.line.hairline},margin:{type:[String,Number],default:()=>e.line.margin},dashed:{type:Boolean,default:()=>e.line.dashed}}}],computed:{lineStyle(){const e={};return e.margin=this.margin,"row"===this.direction?(e.borderBottomWidth="1px",e.borderBottomStyle=this.dashed?"dashed":"solid",e.width=r(this.length),this.hairline&&(e.transform="scaleY(0.5)")):(e.borderLeftWidth="1px",e.borderLeftStyle=this.dashed?"dashed":"solid",e.height=r(this.length),this.hairline&&(e.transform="scaleX(0.5)")),e.borderColor=this.color,l(e,n(this.customStyle))}}},[["render",function(e,t,i,r,l,n){const h=d;return s(),o(h,{class:"u-line",style:a([n.lineStyle])},null,8,["style"])}],["__scopeId","data-v-9482bdca"]]);export{m as _};
