import{d as A,f as I,r as v,v as B,a0 as N,h as z,c as T,a as t,t as a,u as o,N as n,e as s,w as e,aJ as u,i as w,R as F,aC as R,aD as q,a1 as D,E as $,ak as J,al as M,am as P,V as Q,an as U,p as G,g as H}from"./index-b19d04dd.js";/* empty css               *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                  *//* empty css                *//* empty css                    */import{g as K}from"./aliapp-f934cfbe.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const O=i=>(G("data-v-373ebb36"),i=i(),H(),i),W={class:"w-full p-5 bg-white"},X={class:"flex justify-between items-center mb-[20px]"},Y={class:"text-[20px]"},Z={class:"p-[20px]"},ee={class:"text-[16px] mb-[20px]"},te={class:"text-[14px] text-[#303133] font-[700]"},se={class:"text-[#999]"},oe={class:"mt-[20px] mb-[40px] h-[32px]"},ne={class:"text-[14px] text-[#303133] font-[700]"},ae={class:"text-[#999]"},le={class:"mt-[20px] mb-[40px] h-[32px]"},ce={class:"text-[14px] text-[#303133] font-[700]"},pe={class:"text-[#999]"},ie=O(()=>t("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1)),de={class:"text-[14px] text-[#303133] font-[700]"},re={class:"text-[#999]"},_e={class:"flex justify-center"},xe={class:"w-[100%] h-[100%] flex items-center justify-center bg-[#f5f7fa]"},ue={class:"mt-[22px] text-center"},fe={class:"text-[14px] text-[#303133] font-[700]"},me=A({__name:"access",setup(i){const h=I(),f=v("/channel/aliapp"),l=v(2),d=v("");B(async()=>{const p=await K();d.value=p.data.qr_code});const y=p=>{window.open(p,"_blank")},k=p=>{h.push({path:f.value})};return(p,c)=>{const C=R,E=q,r=N("CircleCheckFilled"),_=D,b=$,x=J,S=M,g=P,V=Q,j=U;return z(),T("div",W,[t("div",X,[t("span",Y,a(o(n)("title")),1)]),s(E,{modelValue:f.value,"onUpdate:modelValue":c[0]||(c[0]=m=>f.value=m),class:"demo-tabs",onTabChange:k},{default:e(()=>[s(C,{label:o(n)("weappAccessFlow"),name:"/channel/aliapp"},null,8,["label"])]),_:1},8,["modelValue"]),t("div",Z,[t("p",ee,a(o(n)("weappInlet")),1),s(j,null,{default:e(()=>[s(g,{span:20},{default:e(()=>[s(S,{direction:"vertical"},{default:e(()=>[s(x,null,u({title:e(()=>[t("p",te,a(o(n)("weappAttestation")),1)]),description:e(()=>[t("span",se,a(o(n)("weappAttest")),1),t("div",oe,[s(b,{type:"primary",onClick:c[1]||(c[1]=m=>y("https://open.alipay.com/develop/manage"))},{default:e(()=>[w(a(o(n)("clickAccess")),1)]),_:1})])]),_:2},[l.value>1?{name:"icon",fn:e(()=>[s(_,{size:"25px",class:"text-color"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==1?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 1")]),key:"2"}]),1024),s(x,null,u({title:e(()=>[t("p",ne,a(o(n)("weappSetting")),1)]),description:e(()=>[t("span",ae,a(o(n)("emplace")),1),t("div",le,[s(b,{type:"primary",plain:"",onClick:c[2]||(c[2]=m=>o(h).push("/channel/aliapp/config"))},{default:e(()=>[w(a(o(n)("weappSettingBtn")),1)]),_:1})])]),_:2},[l.value>2?{name:"icon",fn:e(()=>[s(_,{size:"25px"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==2?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 2")]),key:"2"}]),1024),s(x,null,u({title:e(()=>[t("p",ce,a(o(n)("uploadVersion")),1)]),description:e(()=>[t("span",pe,a(o(n)("releaseCourse")),1),ie]),_:2},[l.value>3?{name:"icon",fn:e(()=>[s(_,{size:"25px"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==3?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 3")]),key:"2"}]),1024),s(x,null,u({title:e(()=>[t("p",de,a(o(n)("completeAccess")),1)]),description:e(()=>[t("span",re,a(o(n)("releaseCourse")),1)]),_:2},[l.value>4?{name:"icon",fn:e(()=>[s(_,{size:"25px"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==4?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 4")]),key:"2"}]),1024)]),_:1})]),_:1}),s(g,{span:4},{default:e(()=>[t("div",_e,[s(V,{class:"w-[180px] h-[180px]",src:d.value?o(F)(d.value):""},{error:e(()=>[t("div",xe,[t("span",null,a(d.value?o(n)("fileErr"):o(n)("emptyQrCode")),1)])]),_:1},8,["src"])]),t("div",ue,[t("p",fe,a(o(n)("clickAccess2")),1)])]),_:1})]),_:1})])])}}});const Ve=L(me,[["__scopeId","data-v-373ebb36"]]);export{Ve as default};
