import{d as B,r as f,n as C,l as S,h as b,s as y,w as a,a as U,e as r,i as c,t as m,u as s,q as i,R as h,b$ as N,c0 as $,as as j,at as I,L,M as O,E as q,X as G,Y as M}from"./index-39857e33.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                       *//* empty css                 */const T={class:"dialog-footer"},Z=B({__name:"storage-local",emits:["complete"],setup(X,{expose:D,emit:V}){const u=f(!1),t=f(!0),_={is_use:"",storage_type:""},o=C({..._}),p=f(),w=S(()=>({})),E=async n=>{t.value||!n||await n.validate(async e=>{e&&(t.value=!0,N(o).then(v=>{t.value=!1,u.value=!1,V("complete")}).catch(()=>{t.value=!1}))})};return D({showDialog:u,setFormData:async(n=null)=>{if(t.value=!0,Object.assign(o,_),n){const e=await(await $(n.storage_type)).data;Object.keys(o).forEach(l=>{e[l]!=null&&(o[l]=e[l])})}t.value=!1}}),(n,e)=>{const l=j,v=I,x=L,R=O,g=q,F=G,k=M;return b(),y(F,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=d=>u.value=d),title:s(i)("localStorage"),width:"580px","destroy-on-close":!0},{footer:a(()=>[U("span",T,[r(g,{onClick:e[1]||(e[1]=d=>u.value=!1)},{default:a(()=>[c(m(s(i)("cancel")),1)]),_:1}),r(g,{type:"primary",loading:t.value,onClick:e[2]||(e[2]=d=>E(p.value))},{default:a(()=>[c(m(s(i)("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[h((b(),y(R,{model:o,"label-width":"140px",ref_key:"formRef",ref:p,rules:s(w),class:"page-form"},{default:a(()=>[r(x,{label:s(i)("isUse")},{default:a(()=>[r(v,{modelValue:o.is_use,"onUpdate:modelValue":e[0]||(e[0]=d=>o.is_use=d)},{default:a(()=>[r(l,{label:"1"},{default:a(()=>[c(m(s(i)("startUsing")),1)]),_:1}),r(l,{label:"0"},{default:a(()=>[c(m(s(i)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[k,t.value]])]),_:1},8,["modelValue","title"])}}});export{Z as default};
