import{d as W,r as i,l as F,n as X,q as o,aN as Y,h as n,s as f,w as t,a as q,e as s,i as g,t as w,u as r,P as Z,c as b,F as I,Q as L,A as ee,B as N,aO as le,au as ae,aP as oe,ak as re,aI as te,K as se,J as ue,az as de,aA as ne,L as ie,E as me,a1 as pe,U as ce}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 */import fe from"./index-b111e282.js";/* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  */import{_ as _e}from"./member_head-a897263d.js";import{a as ve,b as ge}from"./user-a55a9e95.js";import{e as we,c as be}from"./site-6efacd4c.js";const he={class:"flex items-center"},Ve={key:1,src:_e,alt:"",class:"mr-[10px] w-[24px]"},ye={key:2},Ue={key:0},ke={class:"dialog-footer"},Qe=W({__name:"edit-user",emits:["complete"],setup(Pe,{expose:A,emit:O}){const R=i([]),m=i(""),S=u=>{m.value=u,typeof u=="string"&&(l.username=u)},x=()=>{ve({}).then(({data:u})=>{R.value=u}).catch()};x();const V=i(!0),y=i(!0),U=i(!0),j=F(()=>!!(l.uid||!m.value||typeof m.value=="string")),_=i(!1),p=i(!1);let k="";const C={uid:0,username:"",head_img:"",real_name:"",password:"",confirm_password:"",status:1,role_ids:[],userrole:{}},l=X({...C}),B=i(),z=F(()=>({uid:[{validator:(u,e,d)=>{!l.uid&&m.value===""?d(new Error(o("managerPlaceholder"))):d()},trigger:"blur"}],username:[{required:l.uid==0,message:o("accountNumberPlaceholder"),trigger:"blur"}],real_name:[{required:!0,message:o("userRealNamePlaceholder"),trigger:"blur"}],role_ids:[{required:!0,message:o("userRolePlaceholder"),trigger:"blur"}],password:[{required:l.uid==0,message:o("passwordPlaceholder"),trigger:"blur"}],confirm_password:[{required:l.uid==0,message:o("confirmPasswordPlaceholder"),trigger:"blur"},{validator:(u,e,d)=>{e!=l.password?d(new Error(o("confirmPasswordError"))):d()},trigger:"blur"}]})),P=i([]);Y().then(u=>{P.value=u.data,P.value.forEach(e=>{e.role_id=e.role_id.toString()})});const T=async u=>{if(p.value||!u)return;const e=l.uid?we:be;await u.validate(async d=>{if(d){p.value=!0;const v=le(ae(l));!l.uid&&typeof m.value=="number"&&(v.uid=m.value),e(v).then(E=>{p.value=!1,_.value=!1,!l.uid&&x(),O("complete")}).catch(()=>{p.value=!1})}})};return A({showDialog:_,setFormData:async(u=null)=>{if(p.value=!0,m.value="",Object.assign(l,C),k=o("addUser"),u){k=o("updateUser");const e=await(await ge(u.uid)).data;e.role_ids=e.role_ids||[],Object.keys(l).forEach(d=>{e[d]!=null&&(l[d]=e[d])})}p.value=!1}}),(u,e)=>{const d=oe,v=re,E=te,c=se,h=ue,G=fe,D=de,J=ne,K=ie,$=me,Q=pe,H=ce;return n(),f(Q,{modelValue:_.value,"onUpdate:modelValue":e[15]||(e[15]=a=>_.value=a),title:r(k),width:"500px","destroy-on-close":!0},{footer:t(()=>[q("span",ke,[s($,{onClick:e[13]||(e[13]=a=>_.value=!1)},{default:t(()=>[g(w(r(o)("cancel")),1)]),_:1}),s($,{type:"primary",loading:p.value,onClick:e[14]||(e[14]=a=>T(B.value))},{default:t(()=>[g(w(r(o)("confirm")),1)]),_:1},8,["loading"])])]),default:t(()=>[Z((n(),f(K,{model:l,"label-width":"90px",ref_key:"formRef",ref:B,rules:r(z),class:"page-form"},{default:t(()=>[l.uid?(n(),f(c,{key:1,label:r(o)("accountNumber"),prop:"username"},{default:t(()=>[s(h,{modelValue:l.username,"onUpdate:modelValue":e[0]||(e[0]=a=>l.username=a),placeholder:r(o)("accountNumberPlaceholder"),clearable:"",disabled:l.uid,class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"])):(n(),f(c,{key:0,label:r(o)("accountNumber"),prop:"uid"},{default:t(()=>[s(E,{"model-value":m.value,placeholder:r(o)("accountNumberPlaceholder"),class:"input-width",filterable:"",clearable:"","allow-create":!0,onChange:S,"default-first-option":!0},{default:t(()=>[(n(!0),b(I,null,L(R.value,a=>(n(),f(v,{key:a.uid,label:a.username,value:a.uid},{default:t(()=>[q("div",he,[a.head_img?(n(),f(d,{key:0,src:r(ee)(a.head_img),size:"small",class:"mr-[10px]"},null,8,["src"])):(n(),b("img",Ve)),g(" "+w(a.username),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["model-value","placeholder"])]),_:1},8,["label"])),r(j)?(n(),b("div",ye,[s(c,{label:r(o)("headImg")},{default:t(()=>[s(G,{modelValue:l.head_img,"onUpdate:modelValue":e[1]||(e[1]=a=>l.head_img=a)},null,8,["modelValue"])]),_:1},8,["label"]),s(c,{label:r(o)("userRealName"),prop:"real_name"},{default:t(()=>[s(h,{modelValue:l.real_name,"onUpdate:modelValue":e[2]||(e[2]=a=>l.real_name=a),placeholder:r(o)("userRealNamePlaceholder"),readonly:V.value,onClick:e[3]||(e[3]=a=>V.value=!1),onBlur:e[4]||(e[4]=a=>V.value=!0),clearable:"",class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),l.uid?N("",!0):(n(),b("div",Ue,[s(c,{label:r(o)("password"),prop:"password"},{default:t(()=>[s(h,{modelValue:l.password,"onUpdate:modelValue":e[5]||(e[5]=a=>l.password=a),placeholder:r(o)("passwordPlaceholder"),readonly:y.value,onClick:e[6]||(e[6]=a=>y.value=!1),onBlur:e[7]||(e[7]=a=>y.value=!0),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),s(c,{label:r(o)("confirmPassword"),prop:"confirm_password"},{default:t(()=>[s(h,{modelValue:l.confirm_password,"onUpdate:modelValue":e[8]||(e[8]=a=>l.confirm_password=a),placeholder:r(o)("confirmPasswordPlaceholder"),readonly:U.value,onClick:e[9]||(e[9]=a=>U.value=!1),onBlur:e[10]||(e[10]=a=>U.value=!0),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"])]))])):N("",!0),l.userrole.is_admin?N("",!0):(n(),f(c,{key:3,label:r(o)("userRoleName"),prop:"role_ids"},{default:t(()=>[s(E,{modelValue:l.role_ids,"onUpdate:modelValue":e[11]||(e[11]=a=>l.role_ids=a),placeholder:r(o)("userRolePlaceholder"),class:"input-width",multiple:"","collapse-tags":"","collapse-tags-tooltip":""},{default:t(()=>[(n(!0),b(I,null,L(P.value,(a,M)=>(n(),f(v,{label:a.role_name,value:a.role_id,key:M},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])),s(c,{label:r(o)("status")},{default:t(()=>[s(J,{modelValue:l.status,"onUpdate:modelValue":e[12]||(e[12]=a=>l.status=a)},{default:t(()=>[s(D,{label:1},{default:t(()=>[g(w(r(o)("statusUnlock")),1)]),_:1}),s(D,{label:0},{default:t(()=>[g(w(r(o)("lock")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[H,p.value]])]),_:1},8,["modelValue","title"])}}});export{Qe as _};
