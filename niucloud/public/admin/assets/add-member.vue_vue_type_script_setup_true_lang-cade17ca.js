import{d as F,r as b,R as M,c as R,e as v,v as h,x as d,g as $,y as s,A as V,B as y,u as r,Q as H}from"./base-9962c822.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{t as l}from"./index-5516aed6.js";import{p as I,q as j,r as A}from"./member-8490bdef.js";import{E as L}from"./index-19251c17.js";import{a as O,E as T}from"./index-7c833df7.js";import{E as z}from"./index-7ab57426.js";import{E as Q}from"./index-e2acd187.js";import{v as S}from"./directive-f75d4a7d.js";const Z={class:"dialog-footer"},ne=F({__name:"add-member",emits:["complete"],setup(G,{expose:N,emit:E}){const p=b(!1),i=b(!1);let u="",c="";const f={member_id:"",nickname:"",member_no:"",init_member_no:"",mobile:"",password:"",password_copy:""},a=M({...f}),_=b(),P=R(()=>({member_no:[{required:!0,message:l("memberNoPlaceholder"),trigger:"blur"},{validator:C,trigger:"blur"}],mobile:[{required:!0,message:l("mobilePlaceholder"),trigger:"blur"},{validator:x,trigger:"blur"}],password:[{required:!0,message:l("passwordPlaceholder"),trigger:"blur"}],password_copy:[{required:!0,message:l("passwordPlaceholder"),trigger:"blur"},{validator:D,trigger:"blur"}]})),x=(m,e,o)=>{e&&!/^1[3-9]\d{9}$/.test(e)?o(new Error(l("mobileHint"))):o()},D=(m,e,o)=>{e!=a.password?o(l("doubleCipherHint")):o()},C=(m,e,o)=>{e&&!/^[0-9a-zA-Z]*$/g.test(e)?o(new Error(l("memberNoHint"))):o()},k=async()=>{await j().then(m=>{c=m.data}).catch(()=>{})},U=async m=>{if(i.value||!m)return;const e=A;await m.validate(async o=>{o&&(i.value=!0,e(a).then(g=>{i.value=!1,p.value=!1,E("complete")}).catch(()=>{i.value=!1}))})};return N({showDialog:p,setFormData:async(m=null)=>{if(i.value=!0,Object.assign(a,f),u=l("addMember"),m){u=l("updateMember");const e=await(await I(m.member_id)).data;e&&Object.keys(a).forEach(o=>{e[o]!=null&&(a[o]=e[o])})}else await k(),a.member_no=c,a.init_member_no=c;i.value=!1}}),(m,e)=>{const o=L,n=O,g=T,w=z,q=Q,B=S;return v(),h(q,{modelValue:p.value,"onUpdate:modelValue":e[7]||(e[7]=t=>p.value=t),title:r(u),width:"500px","destroy-on-close":!0},{footer:d(()=>[$("span",Z,[s(w,{onClick:e[5]||(e[5]=t=>p.value=!1)},{default:d(()=>[V(y(r(l)("cancel")),1)]),_:1}),s(w,{type:"primary",loading:i.value,onClick:e[6]||(e[6]=t=>U(_.value))},{default:d(()=>[V(y(r(l)("confirm")),1)]),_:1},8,["loading"])])]),default:d(()=>[H((v(),h(g,{model:a,"label-width":"90px",ref_key:"formRef",ref:_,rules:r(P),class:"page-form"},{default:d(()=>[s(n,{label:r(l)("memberNo"),prop:"member_no"},{default:d(()=>[s(o,{modelValue:a.member_no,"onUpdate:modelValue":e[0]||(e[0]=t=>a.member_no=t),clearable:"",maxlength:"20",placeholder:r(l)("memberNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(n,{label:r(l)("mobile"),prop:"mobile"},{default:d(()=>[s(o,{modelValue:a.mobile,"onUpdate:modelValue":e[1]||(e[1]=t=>a.mobile=t),clearable:"",placeholder:r(l)("mobilePlaceholder"),type:"number",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(n,{label:r(l)("nickname")},{default:d(()=>[s(o,{modelValue:a.nickname,"onUpdate:modelValue":e[2]||(e[2]=t=>a.nickname=t),clearable:"",placeholder:r(l)("nickNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(n,{label:r(l)("password"),prop:"password"},{default:d(()=>[s(o,{modelValue:a.password,"onUpdate:modelValue":e[3]||(e[3]=t=>a.password=t),type:"password",placeholder:r(l)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(n,{label:r(l)("passwordCopy"),prop:"password_copy"},{default:d(()=>[s(o,{modelValue:a.password_copy,"onUpdate:modelValue":e[4]||(e[4]=t=>a.password_copy=t),type:"password",placeholder:r(l)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[B,i.value]])]),_:1},8,["modelValue","title"])}}});export{ne as _};
