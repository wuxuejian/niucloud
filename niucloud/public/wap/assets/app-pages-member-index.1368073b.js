import{d as a,r as e,u as l,a as t,c as o,o as s,b as p,s as r,e as i,g,f as d,h as u,Y as n,i as m,j as f,w as b,k as v,l as c,v as _,m as x,n as y,p as h,q as j,t as k,x as w,y as M}from"./index-5af37f77.js";import{_ as S}from"./u-loading-page.c64edf94.js";import{d as D,f as I}from"./index.b9e15d16.js";import{_ as R}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.b81180ef.js";import"./u-transition.10136d61.js";import"./u-icon.cc249a8e.js";import"./app-link.vue_vue_type_script_setup_true_lang.3917cdb4.js";import"./u-avatar.4919cbed.js";import"./u-popup.c65b2f82.js";import"./u-safe-bottom.6bd82b41.js";import"./u-tabbar.3efb5352.js";const B=R(a({__name:"index",setup(a){const R=e(!0),B=l(),C=e(0),E=t({pageMode:"diy",title:"",global:{},value:[]}),U=o((()=>"decorate"==B.mode?B:E));return s((a=>{B.mode=a.mode||"","decorate"==B.mode&&(R.value=!1)})),p((()=>{C.value++,r()})),i((()=>{"decorate"==B.mode?B.init():g({name:"DIY_MEMBER_INDEX"}).then((a=>{let e=a.data;if(e.value){E.pageMode=e.mode,E.title=e.title;let a=JSON.parse(e.value);E.global=a.global,E.value=a.value,E.value.forEach(((a,e)=>{a.pageStyle="",a.pageBgColor&&(a.pageStyle+="background-color:"+a.pageBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),d({title:E.title})}else e.page&&u({url:e.page});R.value=!1})),n().getMemberInfo()})),(a,e)=>{const l=j(k("u-loading-page"),S),t=w;return m(),f(t,null,{default:b((()=>[v(l,{loading:R.value,loadingText:"","bg-color":"#f7f7f7"},null,8,["loading"]),c(v(t,null,{default:b((()=>[x(" 自定义模板渲染 "),"fixed"!=y(U).pageMode?(m(),f(t,{key:0,class:"diy-template-wrap bg-index",style:h({backgroundColor:y(U).global.pageBgColor,minHeight:"calc(100vh - 50px)",backgroundImage:y(U).global.bgUrl?"url("+y(M)(y(U).global.bgUrl)+")":""})},{default:b((()=>[v(D,{data:y(U),pullDownRefresh:C.value},null,8,["data","pullDownRefresh"])])),_:1},8,["style"])):x("v-if",!0),x(" 固定模板渲染 "),"fixed"==y(U).pageMode?(m(),f(t,{key:1,class:"fixed-template-wrap"},{default:b((()=>[v(I,{data:y(U),pullDownRefresh:C.value},null,8,["data","pullDownRefresh"])])),_:1})):x("v-if",!0)])),_:1},512),[[_,!R.value]])])),_:1})}}}),[["__scopeId","data-v-f8b64bd5"]]);export{B as default};
