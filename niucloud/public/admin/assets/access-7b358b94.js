import{d as j,f as S,r as v,v as I,a0 as N,h as T,c as q,a as e,t as o,u as n,N as a,e as s,w as t,aJ as b,i as w,R as B,aC as z,aD as F,a1 as R,E as $,al as D,am as M,an as J,V as P,ao as Q}from"./index-30b146d4.js";/* empty css               *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                  *//* empty css                *//* empty css                    */import{g as U}from"./wechat-8188ca62.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const G={class:"w-full p-5 bg-white"},H={class:"flex justify-between items-center mb-[20px]"},K={class:"text-page-title"},L={class:"p-[20px]"},O={class:"text-[16px] mb-[20px]"},X={class:"text-[14px] text-[#303133] font-[700]"},Y={class:"text-[#999]"},Z={class:"mt-[20px] mb-[40px] h-[32px]"},ee={class:"text-[14px] text-[#303133] font-[700]"},te={class:"text-[#999]"},se={class:"mt-[20px] mb-[40px] h-[32px]"},ne={class:"text-[14px] text-[#303133] font-[700]"},ae={class:"text-[#999]"},oe={class:"mt-[20px] mb-[40px] h-[32px]"},le={class:"flex justify-center"},ce={class:"w-[100%] h-[100%] flex items-center justify-center bg-[#f5f7fa]"},ie={class:"mt-[22px] text-center"},pe={class:"text-[14px] text-[#303133] font-[700]"},de=j({__name:"access",setup(re){const r=S(),_=v("/channel/wechat"),c=v(2),p=v("");I(async()=>{const i=await U();p.value=i.data.qr_code});const y=i=>{window.open(i,"_blank")},k=i=>{r.push({path:_.value})};return(i,l)=>{const u=z,C=F,x=N("CircleCheckFilled"),f=R,m=$,h=D,E=M,g=J,A=P,V=Q;return T(),q("div",G,[e("div",H,[e("span",K,o(n(a)("title")),1)]),s(C,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=d=>_.value=d),class:"demo-tabs",onTabChange:k},{default:t(()=>[s(u,{label:n(a)("wechatAccessFlow"),name:"/channel/wechat"},null,8,["label"]),s(u,{label:n(a)("customMenu"),name:"/channel/wechat/menu"},null,8,["label"]),s(u,{label:n(a)("wechatTemplate"),name:"/channel/wechat/message"},null,8,["label"])]),_:1},8,["modelValue"]),e("div",L,[e("p",O,o(n(a)("wechatInlet")),1),s(V,null,{default:t(()=>[s(g,{span:20},{default:t(()=>[s(E,{direction:"vertical"},{default:t(()=>[s(h,null,b({title:t(()=>[e("p",X,o(n(a)("wechatAttestation")),1)]),description:t(()=>[e("span",Y,o(n(a)("wechatAttestation1")),1),e("div",Z,[s(m,{type:"primary",onClick:l[1]||(l[1]=d=>y("https://mp.weixin.qq.com/"))},{default:t(()=>[w(o(n(a)("clickAccess")),1)]),_:1})])]),_:2},[c.value>1?{name:"icon",fn:t(()=>[s(f,{size:"25px",class:"text-color"},{default:t(()=>[s(x)]),_:1})]),key:"0"}:c.value==1?{name:"icon",fn:t(()=>[e("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[e("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:t(()=>[e("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 1")]),key:"2"}]),1024),s(h,null,b({title:t(()=>[e("p",ee,o(n(a)("wechatSetting")),1)]),description:t(()=>[e("span",te,o(n(a)("wechatSetting1")),1),e("div",se,[s(m,{type:"primary",plain:"",onClick:l[2]||(l[2]=d=>n(r).push("/channel/wechat/config"))},{default:t(()=>[w(o(n(a)("settingInfo")),1)]),_:1})])]),_:2},[c.value>2?{name:"icon",fn:t(()=>[s(f,{size:"25px"},{default:t(()=>[s(x)]),_:1})]),key:"0"}:c.value==2?{name:"icon",fn:t(()=>[e("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[e("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:t(()=>[e("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 2")]),key:"2"}]),1024),s(h,null,b({title:t(()=>[e("p",ne,o(n(a)("wechatAccess")),1)]),description:t(()=>[e("span",ae,o(n(a)("wechatAccess")),1),e("div",oe,[s(m,{type:"primary",plain:"",onClick:l[3]||(l[3]=d=>n(r).push("/channel/wechat/course"))},{default:t(()=>[w(o(n(a)("releaseCourse")),1)]),_:1})])]),_:2},[c.value>3?{name:"icon",fn:t(()=>[s(f,{size:"25px"},{default:t(()=>[s(x)]),_:1})]),key:"0"}:c.value==3?{name:"icon",fn:t(()=>[e("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[e("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:t(()=>[e("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 3")]),key:"2"}]),1024)]),_:1})]),_:1}),s(g,{span:4},{default:t(()=>[e("div",le,[s(A,{class:"w-[180px] h-[180px]",src:p.value?n(B)(p.value):""},{error:t(()=>[e("div",ce,[e("span",null,o(p.value?n(a)("fileErr"):n(a)("emptyQrCode")),1)])]),_:1},8,["src"])]),e("div",ie,[e("p",pe,o(n(a)("clickAccess2")),1)])]),_:1})]),_:1})])])}}});const ye=W(de,[["__scopeId","data-v-bf594cad"]]);export{ye as default};
