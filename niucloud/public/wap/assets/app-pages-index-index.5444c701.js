import{d as a,r as e,u as l,a as o,c as t,o as r,b as s,s as p,e as i,g,f as d,h as u,i as n,w as m,j as f,k as c,v as b,l as v,m as _,n as h,p as x,q as j,t as y,x as S}from"./index-849cf30e.js";import{_ as w}from"./u-loading-page.195e23a4.js";import{_ as k,a as D}from"./index.69a24174.js";import{u as M}from"./useShare.5c07111a.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.d012ecbf.js";import"./u-transition.75065529.js";import"./u-icon.e3aa4770.js";import"./u-image.5cc88b24.js";import"./app-link.vue_vue_type_script_setup_true_lang.d62f9cf3.js";import"./u-avatar.2111318d.js";import"./u-tabbar.9997804a.js";import"./u-safe-bottom.2f6af56c.js";import"./wechat.b5eac334.js";const I=C(a({__name:"index",setup(a){const{setShare:C,onShareAppMessage:I,onShareTimeline:R}=M();C(),I(),R();const B=e(!0),U=l(),E=e(0),N=o({pageMode:"diy",title:"",global:{},value:[]}),T=t((()=>"decorate"==U.mode?U:N));return r((a=>{U.mode=a.mode||"","decorate"==U.mode&&(B.value=!1)})),s((()=>{E.value++,p()})),i((()=>{"decorate"==U.mode?U.init():g({name:"DIY_INDEX"}).then((a=>{if(a.data.value){let e=a.data;N.pageMode=e.mode,N.title=e.title;let l=JSON.parse(e.value);N.global=l.global,N.value=l.value,N.value.forEach(((a,e)=>{a.pageStyle="",a.pageBgColor&&(a.pageStyle+="background-color:"+a.pageBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),d({title:N.title})}B.value=!1}))})),(a,e)=>{const l=x(j("u-loading-page"),w),o=x(j("diy-group"),k),t=y,r=x(j("fixed-group"),D);return u(),n(t,null,{default:m((()=>[f(l,{loading:B.value,loadingText:"","bg-color":"#f7f7f7"},null,8,["loading"]),c(f(t,null,{default:m((()=>[v(" 自定义模板渲染 "),"fixed"!=_(T).pageMode?(u(),n(t,{key:0,class:"diy-template-wrap bg-index",style:h({backgroundColor:_(T).global.pageBgColor,minHeight:"calc(100vh - 50px)",backgroundImage:_(T).global.bgUrl?"url("+_(S)(_(T).global.bgUrl)+")":""})},{default:m((()=>[f(o,{data:_(T),pullDownRefresh:E.value},null,8,["data","pullDownRefresh"])])),_:1},8,["style"])):v("v-if",!0),v(" 固定模板渲染 "),"fixed"==_(T).pageMode?(u(),n(t,{key:1,class:"fixed-template-wrap"},{default:m((()=>[f(r,{data:_(T),pullDownRefresh:E.value},null,8,["data","pullDownRefresh"])])),_:1})):v("v-if",!0)])),_:1},512),[[b,!B.value]])])),_:1})}}}),[["__scopeId","data-v-09cbcf22"]]);export{I as default};
