import{d as K,r as f,n as P,q as F,N as a,h as V,I as h,w as o,a as R,e as s,i as m,t as c,u as t,y as q,az as A,aA as B,X as C,W as I,Y as N,E as j,aa as O,a0 as $}from"./index-4dcc0234.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 */import{b as z,g as G}from"./notice-b720dec8.js";const L={class:"dialog-footer"},le=K({__name:"sms-ali",emits:["complete"],setup(T,{expose:w,emit:k}){const u=f(!1),n=f(!0),g={sms_type:"",sign:"",app_key:"",secret_key:"",is_use:""},l=P({...g}),v=f(),S=F(()=>({sign:[{required:!0,message:a("aliSignPlaceholder"),trigger:"blur"}],app_key:[{required:!0,message:a("aliAppKeyPlaceholder"),trigger:"blur"}],secret_key:[{required:!0,message:a("aliSecretKeyPlaceholder"),trigger:"blur"}]})),D=async d=>{n.value||!d||await d.validate(async e=>{e&&(n.value=!0,z(l).then(y=>{n.value=!1,u.value=!1,k("complete")}).catch(()=>{n.value=!1}))})};return w({showDialog:u,setFormData:async(d=null)=>{if(n.value=!0,Object.assign(l,g),d){const e=await(await G(d.sms_type)).data;Object.keys(l).forEach(i=>{e[i]!=null&&(l[i]=e[i]),e.params[i]!=null&&(l[i]=e.params[i].value)})}n.value=!1}}),(d,e)=>{const i=A,y=B,p=C,_=I,E=N,b=j,U=O,x=$;return V(),h(U,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=r=>u.value=r),title:t(a)("aliSms"),width:"580px","destroy-on-close":!0},{footer:o(()=>[R("span",L,[s(b,{onClick:e[4]||(e[4]=r=>u.value=!1)},{default:o(()=>[m(c(t(a)("cancel")),1)]),_:1}),s(b,{type:"primary",loading:n.value,onClick:e[5]||(e[5]=r=>D(v.value))},{default:o(()=>[m(c(t(a)("confirm")),1)]),_:1},8,["loading"])])]),default:o(()=>[q((V(),h(E,{model:l,"label-width":"140px",ref_key:"formRef",ref:v,rules:t(S),class:"page-form"},{default:o(()=>[s(p,{label:t(a)("isUse")},{default:o(()=>[s(y,{modelValue:l.is_use,"onUpdate:modelValue":e[0]||(e[0]=r=>l.is_use=r)},{default:o(()=>[s(i,{label:1},{default:o(()=>[m(c(t(a)("startUsing")),1)]),_:1}),s(i,{label:0},{default:o(()=>[m(c(t(a)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(p,{label:t(a)("aliSign"),prop:"sign"},{default:o(()=>[s(_,{modelValue:l.sign,"onUpdate:modelValue":e[1]||(e[1]=r=>l.sign=r),placeholder:t(a)("aliSignPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(p,{label:t(a)("aliAppKey"),prop:"app_key"},{default:o(()=>[s(_,{modelValue:l.app_key,"onUpdate:modelValue":e[2]||(e[2]=r=>l.app_key=r),placeholder:t(a)("aliAppKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(p,{label:t(a)("aliSecretKey"),prop:"secret_key"},{default:o(()=>[s(_,{modelValue:l.secret_key,"onUpdate:modelValue":e[3]||(e[3]=r=>l.secret_key=r),placeholder:t(a)("aliSecretKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[x,n.value]])]),_:1},8,["modelValue","title"])}}});export{le as _};
