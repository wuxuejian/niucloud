import{d as N,r as _,n as B,q as C,N as a,h as b,I as g,w as o,a as y,e as s,i as c,t as p,u as l,y as I,X as U,ay as $,az as k,aG as q,W as A,Y as G,E as O,aa as T,$ as z}from"./index-9fd19666.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css                 */import{y as L}from"./member-b4a7dae3.js";const S={class:"input-width"},W={class:"dialog-footer"},le=N({__name:"member-point-edit",emits:["complete"],setup(X,{expose:V,emit:h}){const m=_(!1),u=_(!0),f={member_id:0,point:"",memo:"",adjust:"",account_data:"",adjust_type:1},e=B({...f}),j=_(),P=C(()=>({adjust:[{required:!0,message:a("adjustPointPlaceholder"),trigger:"blur"},{validator:(d,t,n)=>{e.adjust=Math.floor(e.adjust);const i=Math.abs(parseFloat(e.adjust));i||n(new Error(a("adjustPointPlaceholder"))),e.adjust_type==-1&&parseFloat(e.point)-i<0&&n(new Error(a("adjustPointMaxAccountMessage"))),n()},trigger:"blur"}]})),E=async d=>{u.value||!d||await d.validate(async t=>{t&&(u.value=!0,e.account_data=Math.abs(parseFloat(e.adjust))*e.adjust_type,L(e).then(i=>{u.value=!1,m.value=!1,h("complete")}).catch(()=>{u.value=!1}))})};return V({showDialog:m,setFormData:async(d=null)=>{u.value=!0,Object.assign(e,f),d&&Object.keys(e).forEach(t=>{d[t]!=null&&(e[t]=d[t])}),u.value=!1}}),(d,t)=>{const n=U,i=$,w=k,x=q,D=A,F=G,v=O,R=T,M=z;return b(),g(R,{modelValue:m.value,"onUpdate:modelValue":t[5]||(t[5]=r=>m.value=r),title:l(a)("adjustPoint"),width:"550px","destroy-on-close":!0},{footer:o(()=>[y("span",W,[s(v,{onClick:t[3]||(t[3]=r=>m.value=!1)},{default:o(()=>[c(p(l(a)("cancel")),1)]),_:1}),s(v,{type:"primary",loading:u.value,onClick:t[4]||(t[4]=r=>E(j.value))},{default:o(()=>[c(p(l(a)("confirm")),1)]),_:1},8,["loading"])])]),default:o(()=>[I((b(),g(F,{model:e,"label-width":"110px",ref_key:"formRef",ref:j,rules:l(P),class:"page-form"},{default:o(()=>[s(n,{label:l(a)("currPoint")},{default:o(()=>[y("div",S,p(e.point),1)]),_:1},8,["label"]),s(n,{label:l(a)("adjustType")},{default:o(()=>[s(w,{modelValue:e.adjust_type,"onUpdate:modelValue":t[0]||(t[0]=r=>e.adjust_type=r)},{default:o(()=>[s(i,{label:1},{default:o(()=>[c(p(l(a)("adjustAddPoint")),1)]),_:1}),s(i,{label:-1},{default:o(()=>[c(p(l(a)("adjustReducePoint")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(n,{label:l(a)("adjustPoint"),prop:"adjust"},{default:o(()=>[s(x,{modelValue:e.adjust,"onUpdate:modelValue":t[1]||(t[1]=r=>e.adjust=r),clearable:"",min:0,max:999999,placeholder:l(a)("adjustPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(n,{label:l(a)("memo"),prop:"memo"},{default:o(()=>[s(D,{modelValue:e.memo,"onUpdate:modelValue":t[2]||(t[2]=r=>e.memo=r),type:"textarea",rows:"4",clearable:"",placeholder:l(a)("memoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[M,u.value]])]),_:1},8,["modelValue","title"])}}});export{le as _};
