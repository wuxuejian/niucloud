import{d as X,r as _,q as C,n as Y,N as o,h as n,I as c,w as s,a as F,e as t,i as w,t as v,u as r,y as J,c as b,F as I,G as q,R as K,B as E,aH as M,aw as Q,aI as Z,as as ee,aE as le,X as ae,W as oe,ay as re,az as se,Y as te,E as de,aa as ue,$ as ne}from"./index-30b146d4.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 */import{_ as ie}from"./index-703c7b0d.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  */import{_ as me}from"./member_head-a897263d.js";import{a as pe,b as ce}from"./user-9f5ed5cd.js";import{e as _e,c as fe}from"./site-6277ee8c.js";import{p as ge}from"./sys-60b0e237.js";const we={class:"flex items-center"},ve={key:1,src:me,alt:"",class:"mr-[10px] w-[24px]"},be={key:2},he={key:0},Ve={class:"dialog-footer"},ze=X({__name:"edit-user",emits:["complete"],setup(ye,{expose:B,emit:L}){const P=_([]),i=_(""),A=d=>{i.value=d,typeof d=="string"&&(e.username=d)},k=()=>{pe({}).then(({data:d})=>{P.value=d}).catch()};k();const O=C(()=>!!(e.uid||!i.value||typeof i.value=="string")),f=_(!1),m=_(!1);let V="";const N={uid:0,username:"",head_img:"",real_name:"",password:"",confirm_password:"",status:1,role_ids:[],userrole:{}},e=Y({...N}),R=_(),S=C(()=>({uid:[{validator:(d,l,u)=>{!e.uid&&i.value===""?u(new Error(o("managerPlaceholder"))):u()},trigger:"blur"}],username:[{required:e.uid==0,message:o("accountNumberPlaceholder"),trigger:"blur"}],real_name:[{required:!0,message:o("userRealNamePlaceholder"),trigger:"blur"}],role_ids:[{required:!0,message:o("userRolePlaceholder"),trigger:"blur"}],password:[{required:e.uid==0,message:o("passwordPlaceholder"),trigger:"blur"}],confirm_password:[{required:e.uid==0,message:o("confirmPasswordPlaceholder"),trigger:"blur"},{validator:(d,l,u)=>{l!=e.password?u(new Error(o("confirmPasswordError"))):u()},trigger:"blur"}]})),y=_([]);ge().then(d=>{y.value=d.data,y.value.forEach(l=>{l.role_id=l.role_id.toString()})});const $=async d=>{if(m.value||!d)return;const l=e.uid?_e:fe;await d.validate(async u=>{if(u){m.value=!0;const g=M(Q(e));!e.uid&&typeof i.value=="number"&&(g.uid=i.value),l(g).then(U=>{m.value=!1,f.value=!1,!e.uid&&k(),L("complete")}).catch(()=>{m.value=!1})}})};return B({showDialog:f,setFormData:async(d=null)=>{if(m.value=!0,i.value="",Object.assign(e,N),V=o("addUser"),d){V=o("updateUser");const l=await(await ce(d.uid)).data;l.role_ids=l.role_ids||[],Object.keys(e).forEach(u=>{l[u]!=null&&(e[u]=l[u])})}m.value=!1}}),(d,l)=>{const u=Z,g=ee,U=le,p=ae,h=oe,j=ie,x=re,z=se,G=te,D=de,T=ue,H=ne;return n(),c(T,{modelValue:f.value,"onUpdate:modelValue":l[9]||(l[9]=a=>f.value=a),title:r(V),width:"500px","destroy-on-close":!0},{footer:s(()=>[F("span",Ve,[t(D,{onClick:l[7]||(l[7]=a=>f.value=!1)},{default:s(()=>[w(v(r(o)("cancel")),1)]),_:1}),t(D,{type:"primary",loading:m.value,onClick:l[8]||(l[8]=a=>$(R.value))},{default:s(()=>[w(v(r(o)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[J((n(),c(G,{model:e,"label-width":"90px",ref_key:"formRef",ref:R,rules:r(S),class:"page-form"},{default:s(()=>[e.uid?(n(),c(p,{key:1,label:r(o)("accountNumber"),prop:"username"},{default:s(()=>[t(h,{modelValue:e.username,"onUpdate:modelValue":l[0]||(l[0]=a=>e.username=a),placeholder:r(o)("accountNumberPlaceholder"),clearable:"",disabled:e.uid,class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"])):(n(),c(p,{key:0,label:r(o)("accountNumber"),prop:"uid"},{default:s(()=>[t(U,{"model-value":i.value,placeholder:r(o)("accountNumberPlaceholder"),class:"input-width",filterable:"",clearable:"","allow-create":!0,onChange:A,"default-first-option":!0},{default:s(()=>[(n(!0),b(I,null,q(P.value,a=>(n(),c(g,{key:a.uid,label:a.username,value:a.uid},{default:s(()=>[F("div",we,[a.head_img?(n(),c(u,{key:0,src:r(K)(a.head_img),size:"small",class:"mr-[10px]"},null,8,["src"])):(n(),b("img",ve)),w(" "+v(a.username),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["model-value","placeholder"])]),_:1},8,["label"])),r(O)?(n(),b("div",be,[t(p,{label:r(o)("headImg")},{default:s(()=>[t(j,{modelValue:e.head_img,"onUpdate:modelValue":l[1]||(l[1]=a=>e.head_img=a)},null,8,["modelValue"])]),_:1},8,["label"]),t(p,{label:r(o)("userRealName"),prop:"real_name"},{default:s(()=>[t(h,{modelValue:e.real_name,"onUpdate:modelValue":l[2]||(l[2]=a=>e.real_name=a),placeholder:r(o)("userRealNamePlaceholder"),clearable:"",class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e.uid?E("",!0):(n(),b("div",he,[t(p,{label:r(o)("password"),prop:"password"},{default:s(()=>[t(h,{modelValue:e.password,"onUpdate:modelValue":l[3]||(l[3]=a=>e.password=a),placeholder:r(o)("passwordPlaceholder"),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:r(o)("confirmPassword"),prop:"confirm_password"},{default:s(()=>[t(h,{modelValue:e.confirm_password,"onUpdate:modelValue":l[4]||(l[4]=a=>e.confirm_password=a),placeholder:r(o)("confirmPasswordPlaceholder"),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]))])):E("",!0),e.userrole.is_admin?E("",!0):(n(),c(p,{key:3,label:r(o)("userRoleName"),prop:"role_ids"},{default:s(()=>[t(U,{modelValue:e.role_ids,"onUpdate:modelValue":l[5]||(l[5]=a=>e.role_ids=a),placeholder:r(o)("userRolePlaceholder"),class:"input-width",multiple:"","collapse-tags":"","collapse-tags-tooltip":""},{default:s(()=>[(n(!0),b(I,null,q(y.value,(a,W)=>(n(),c(g,{label:a.role_name,value:a.role_id,key:W},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])),t(p,{label:r(o)("status")},{default:s(()=>[t(z,{modelValue:e.status,"onUpdate:modelValue":l[6]||(l[6]=a=>e.status=a)},{default:s(()=>[t(x,{label:1},{default:s(()=>[w(v(r(o)("statusUnlock")),1)]),_:1}),t(x,{label:0},{default:s(()=>[w(v(r(o)("lock")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[H,m.value]])]),_:1},8,["modelValue","title"])}}});export{ze as _};
