import{d as E,r as c,n as F,l as U,q as l,h as v,s as y,w as n,a as q,e as d,i as b,t as V,u as t,P as B,J as C,K as I,L as N,E as R,a1 as j,U as L}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{e as O,a as $,g as J}from"./dict-77a41fa5.js";const K={class:"dialog-footer"},Z=E({__name:"edit",emits:["complete"],setup(S,{expose:h,emit:D}){const m=c(!1),r=c(!1),p={id:"",name:"",key:"",memo:""},a=F({...p}),f=c(),k=U(()=>({name:[{required:!0,message:l("namePlaceholder"),trigger:"blur"}],key:[{required:!0,message:l("keyPlaceholder"),trigger:"blur"}],data:[{required:!0,message:l("dataPlaceholder"),trigger:"blur"}]})),w=async i=>{if(r.value||!i)return;const e=a.id?O:$;await i.validate(async o=>{o&&(r.value=!0,e(a).then(_=>{r.value=!1,m.value=!1,D("complete")}).catch(()=>{r.value=!1}))})};return h({showDialog:m,setFormData:async(i=null)=>{if(Object.assign(a,p),r.value=!0,i){const e=await(await J(i.id)).data;e&&Object.keys(a).forEach(o=>{e[o]!=null&&(a[o]=e[o])})}r.value=!1}}),(i,e)=>{const o=C,u=I,_=N,g=R,x=j,P=L;return v(),y(x,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=s=>m.value=s),title:a.id?t(l)("updateDict"):t(l)("addDict"),width:"480",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:n(()=>[q("span",K,[d(g,{onClick:e[3]||(e[3]=s=>m.value=!1)},{default:n(()=>[b(V(t(l)("cancel")),1)]),_:1}),d(g,{type:"primary",loading:r.value,onClick:e[4]||(e[4]=s=>w(f.value))},{default:n(()=>[b(V(t(l)("confirm")),1)]),_:1},8,["loading"])])]),default:n(()=>[B((v(),y(_,{model:a,"label-width":"120px",ref_key:"formRef",ref:f,rules:t(k),class:"page-form"},{default:n(()=>[d(u,{label:t(l)("name"),prop:"name"},{default:n(()=>[d(o,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=s=>a.name=s),clearable:"",placeholder:t(l)("namePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:t(l)("key"),prop:"key"},{default:n(()=>[d(o,{modelValue:a.key,"onUpdate:modelValue":e[1]||(e[1]=s=>a.key=s),clearable:"",placeholder:t(l)("keyPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:t(l)("memo")},{default:n(()=>[d(o,{modelValue:a.memo,"onUpdate:modelValue":e[2]||(e[2]=s=>a.memo=s),type:"textarea",clearable:"",placeholder:t(l)("memoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[P,r.value]])]),_:1},8,["modelValue","title"])}}});export{Z as _};
