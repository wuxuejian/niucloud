import{d as x,s as V,R as S,h as y,c as v,y as _,z as b,u as l,a as i,t as p,N as a,e as t,w as n,F as U,W as B,X as C,aM as E,Y as k,cD as T,cC as N}from"./index-9d601459.js";/* empty css                  *//* empty css                        *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{_ as z}from"./index-2292609c.js";/* empty css                        *//* empty css                  *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{u as D}from"./diy-f8a7f13a.js";const F={class:"content-wrap"},I={class:"edit-attr-item-wrap"},P={class:"mb-[10px]"},j={class:"text-sm text-gray-400"},M={class:"style-wrap"},O={class:"edit-attr-item-wrap"},W={class:"mb-[10px]"},H={class:"edit-attr-item-wrap"},R={class:"mb-[10px]"},X=x({__name:"edit-page",setup(Y,{expose:c}){const e=D();return V(()=>e.global.bgUrl,(g,o)=>{let r=new Image;r.src=S(e.global.bgUrl),r.onload=async()=>{e.global.imgWidth=r.width,e.global.imgHeight=r.height}}),c({}),(g,o)=>{const r=B,m=C,u=E,d=k,h=T,w=z,f=N;return y(),v(U,null,[_(i("div",F,[i("div",I,[i("h3",P,p(l(a)("pageContent")),1),t(d,{"label-width":"80px",class:"px-[10px]"},{default:n(()=>[t(m,{label:l(a)("pageName")},{default:n(()=>[t(r,{modelValue:l(e).global.title,"onUpdate:modelValue":o[0]||(o[0]=s=>l(e).global.title=s),placeholder:l(a)("pageNamePlaceholder"),clearable:"",maxlength:"12","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(m,{label:l(a)("tabbar"),class:"display-block"},{default:n(()=>[t(u,{modelValue:l(e).global.bottomTabBarSwitch,"onUpdate:modelValue":o[1]||(o[1]=s=>l(e).global.bottomTabBarSwitch=s)},null,8,["modelValue"]),i("div",j,p(l(a)("tabbarSwitchTips")),1)]),_:1},8,["label"])]),_:1})])],512),[[b,l(e).editTab=="content"]]),_(i("div",M,[i("div",O,[i("h3",W,p(l(a)("pageStyle")),1),t(d,{"label-width":"80px",class:"px-[10px]"},{default:n(()=>[t(m,{label:l(a)("pageBgColor")},{default:n(()=>[t(h,{modelValue:l(e).global.pageBgColor,"onUpdate:modelValue":o[2]||(o[2]=s=>l(e).global.pageBgColor=s),"show-alpha":"",predefine:l(e).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(m,{label:l(a)("bgUrl")},{default:n(()=>[t(w,{modelValue:l(e).global.bgUrl,"onUpdate:modelValue":o[3]||(o[3]=s=>l(e).global.bgUrl=s),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),i("div",H,[i("h3",R,p(l(a)("marginSet")),1),t(d,{"label-width":"80px",class:"px-[10px]"},{default:n(()=>[t(m,{label:l(a)("marginBoth")},{default:n(()=>[t(f,{modelValue:l(e).global.template.margin.both,"onUpdate:modelValue":o[4]||(o[4]=s=>l(e).global.template.margin.both=s),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})])],512),[[b,l(e).editTab=="style"]])],64)}}}),al=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{al as _};
