import{d as a,h as t,i as e,w as s,S as r,ab as n,aV as d,a0 as i,aW as l,$ as o,t as u}from"./index-e4516e00.js";const p=a({__name:"app-link",props:{url:String,data:{type:Object,default:()=>({})},mode:{type:String,default:"navigateTo"}},setup(a){const p=a,f=()=>{if(Object.keys(p.data).length){if(!p.data.url)return;if("app/pages/member/index"==n()&&!d())return void i().setLoginBack({url:p.data.url});l(p.data)}else o(p)};return(a,n)=>{const d=u;return t(),e(d,{onClick:f},{default:s((()=>[r(a.$slots,"default")])),_:3})}}});export{p as _};
