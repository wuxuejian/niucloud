import{d as w,r as i,n as y,N as l,h as _,c as E,y as T,I as V,w as n,e as s,a as c,t as d,u as r,i as B,W as D,X as C,E as N,_ as I,Y as R,$ as F}from"./index-30b146d4.js";/* empty css                   *//* empty css                     *//* empty css                *//* empty css                  *//* empty css                 */import{S as P,T as S}from"./sys-60b0e237.js";const $={class:"main-container"},q={class:"panel-title !text-sm"},L={class:"text-[14px] text-[#a9a9a9] leading-tight mt-[10px]"},H=w({__name:"developer_token",setup(U){const e=i(!0),o=i({token:""});P().then(({data:t})=>{e.value=!1,t.token&&(o.value=t)}).catch();const u=i(),v=y({token:[{required:!0,message:l("tokenPlaceholder"),trigger:"blur"}]}),f=async t=>{e.value||!t||await t.validate(async a=>{a&&(e.value=!0,S(o.value).then(()=>{e.value=!1}).catch(()=>{e.value=!1}))})};return(t,a)=>{const k=D,m=C,h=N,g=I,x=R,b=F;return _(),E("div",$,[T((_(),V(x,{model:o.value,"label-width":"0",ref_key:"formRef",ref:u,rules:v,class:"page-form"},{default:n(()=>[s(g,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[c("h3",q,d(r(l)("developerTokenEdit")),1),s(m,{label:"",prop:"token"},{default:n(()=>[c("div",null,[s(k,{modelValue:o.value.token,"onUpdate:modelValue":a[0]||(a[0]=p=>o.value.token=p),placeholder:r(l)("tokenPlaceholder"),class:"input-width",clearable:"",maxlength:"30"},null,8,["modelValue","placeholder"])]),c("div",L,d(r(l)("tokenTips")),1)]),_:1}),s(m,{label:""},{default:n(()=>[s(h,{type:"primary",loading:e.value,onClick:a[1]||(a[1]=p=>f(u.value))},{default:n(()=>[B(d(r(l)("save")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[b,e.value]])])}}});export{H as default};
