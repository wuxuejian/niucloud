import{d as a,r as e,u as l,a as o,c as t,o as r,b as g,g as p,e as s,f as u,s as n,h as i,i as d,j as m,w as v,k as b,l as c,v as f,m as h,n as S,p as x,q as y,t as C,x as j,y as _}from"./index-6f7dfcc0.js";import{_ as B}from"./u-loading-page.007a6425.js";import{u as k}from"./useShare.fe539fd2.js";import{d as $,f as w}from"./index.2a51d28c.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.8bd45fe0.js";import"./u-transition.77d401ec.js";import"./wechat.ec95f9a4.js";import"./u-icon.4a3c5455.js";import"./u-avatar.bc26441f.js";import"./u-popup.1c7e0660.js";import"./u-safe-bottom.fa559bf3.js";import"./u-parse.4d699b43.js";import"./u-tabbar.1b42031e.js";const E=D(a({__name:"index",setup(a){const{setShare:D,onShareAppMessage:E,onShareTimeline:M}=k();D(),E(),M();const T=e(!0),R=l(),A=e(0);let I=e(!1);const U=e(0),G=e("DIY_INDEX"),H=e(""),N=o({pageMode:"diy",title:"",global:{},value:[]}),X=t((()=>"decorate"==R.mode?R:N));r((a=>{R.mode=a.mode||"","decorate"==R.mode&&(T.value=!1),U.value=a.id||"",H.value=a.template||""})),g((()=>{"decorate"==R.mode?R.init():p({id:U.value,name:G.value,template:H.value}).then((a=>{let e=a.data;if(e.value){N.pageMode=e.mode,N.title=e.title;let a=JSON.parse(e.value);N.global=a.global,N.value=a.value,N.value.forEach(((a,e)=>{a.pageStyle="",a.pageStartBgColor&&(a.pageStartBgColor&&a.pageEndBgColor?a.pageStyle+=`background:linear-gradient(${a.pageGradientAngle},${a.pageStartBgColor},${a.pageEndBgColor});`:a.pageStyle+="background-color:"+a.pageStartBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),I.value=N.value.some((a=>a&&a.position&&"top_fixed"==a.position))}else e.page&&s({url:e.page,mode:"reLaunch"});T.value=!1}))}));const Y=t((()=>{var a="";return X.value.global.pageStartBgColor&&X.value.global.pageEndBgColor?a+=`background:linear-gradient(${X.value.global.pageGradientAngle},${X.value.global.pageStartBgColor},${X.value.global.pageEndBgColor});`:a+="background-color:"+X.value.global.pageStartBgColor+";",a+="min-height:calc(100vh - 50px);",X.value.global.bgUrl&&(a+=`background-image:url('${_(X.value.global.bgUrl)}');`),X.value.global.bgHeightScale&&(a+=`background-size: 100% ${X.value.global.bgHeightScale}%;`),a}));return u((()=>{A.value++,n()})),i((a=>{R.scrollTop=a.scrollTop})),(a,e)=>{const l=y(C("u-loading-page"),B),o=j;return d(),m(o,{style:x(a.themeColor())},{default:v((()=>[b(l,{loading:T.value,loadingText:"","bg-color":"#f7f7f7"},null,8,["loading"]),c(b(o,null,{default:v((()=>[h(" 自定义模板渲染 "),"fixed"!=S(X).pageMode?(d(),m(o,{key:0,class:"diy-template-wrap bg-index",style:x(S(Y))},{default:v((()=>[b($,{data:S(X),pullDownRefreshCount:A.value},null,8,["data","pullDownRefreshCount"])])),_:1},8,["style"])):h("v-if",!0),h(" 固定模板渲染 "),"fixed"==S(X).pageMode?(d(),m(o,{key:1,class:"fixed-template-wrap"},{default:v((()=>[b(w,{data:S(X),pullDownRefreshCount:A.value},null,8,["data","pullDownRefreshCount"])])),_:1})):h("v-if",!0)])),_:1},512),[[f,!T.value]])])),_:1},8,["style"])}}}),[["__scopeId","data-v-4b8733de"]]);export{E as default};
