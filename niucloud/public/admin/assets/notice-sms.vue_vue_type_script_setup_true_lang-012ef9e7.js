import"./base-962c0c23.js";/* empty css                   */import{E as B}from"./el-overlay-60700377.js";/* empty css                  *//* empty css                     *//* empty css                 */import{E as N,b as U}from"./el-radio-bfd4b1ad.js";import{t as a}from"./index-e8f72538.js";import{a as j}from"./notice-16d21c53.js";import{a as k,E as q}from"./index-61c777fa.js";import{E as L}from"./index-93f2c618.js";import{E as O}from"./index-bba9e58c.js";import{v as P}from"./directive-c0c3e9a3.js";import{d as S,r as f,M as $,c as G,b as E,m as V,p as o,f as _,q as l,v as p,x as r,u as s,L as M}from"./runtime-core.esm-bundler-dc7a07d7.js";const T={class:"input-width"},z={class:"input-width"},A={class:"input-width"},H={class:"dialog-footer"},re=S({__name:"notice-sms",emits:["complete"],setup(J,{expose:D,emit:w}){const u=f(!1),n=f(!0),v={is_sms:0,key:"",name:"",sms_default_content:"",title:"",type:"",sms_id:"",content:""},t=$({...v}),b=f(),x=G(()=>({sms_id:[{required:!0,message:a("smsIdPlaceholder"),trigger:"blur"}]})),y=async i=>{n.value||!i||await i.validate(async e=>{if(e){n.value=!0;const d=t;d.status=d.is_sms,j(d).then(g=>{n.value=!1,u.value=!1,w("complete")}).catch(()=>{n.value=!1})}})};return D({showDialog:u,setFormData:async(i=null)=>{n.value=!0,Object.assign(t,v),i&&Object.keys(t).forEach(e=>{i[e]!=null&&(t[e]=i[e]),i.sms&&i.sms[e]!=null&&(t[e]=i.sms[e])}),n.value=!1}}),(i,e)=>{const d=N,g=U,c=k,C=L,F=q,h=O,I=B,R=P;return E(),V(I,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=m=>u.value=m),title:s(a)("noticeSetting"),width:"550px","destroy-on-close":!0},{footer:o(()=>[_("span",H,[l(h,{onClick:e[2]||(e[2]=m=>u.value=!1)},{default:o(()=>[p(r(s(a)("cancel")),1)]),_:1}),l(h,{type:"primary",loading:n.value,onClick:e[3]||(e[3]=m=>y(b.value))},{default:o(()=>[p(r(s(a)("confirm")),1)]),_:1},8,["loading"])])]),default:o(()=>[M((E(),V(F,{model:t,"label-width":"110px",ref_key:"formRef",ref:b,rules:s(x),class:"page-form"},{default:o(()=>[l(c,{label:s(a)("status")},{default:o(()=>[l(g,{modelValue:t.is_sms,"onUpdate:modelValue":e[0]||(e[0]=m=>t.is_sms=m)},{default:o(()=>[l(d,{label:1},{default:o(()=>[p(r(s(a)("startUsing")),1)]),_:1}),l(d,{label:0},{default:o(()=>[p(r(s(a)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(c,{label:s(a)("name")},{default:o(()=>[_("div",T,r(t.name),1)]),_:1},8,["label"]),l(c,{label:s(a)("title")},{default:o(()=>[_("div",z,r(t.title),1)]),_:1},8,["label"]),l(c,{label:s(a)("smsId"),prop:"sms_id"},{default:o(()=>[l(C,{modelValue:t.sms_id,"onUpdate:modelValue":e[1]||(e[1]=m=>t.sms_id=m),placeholder:s(a)("smsIdPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(c,{label:s(a)("smsContent")},{default:o(()=>[_("div",A,r(t.content),1)]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[R,n.value]])]),_:1},8,["modelValue","title"])}}});export{re as _};
