import{d as J,r as f,c as C,R as K,e as i,v as c,x as t,g as F,y as s,A as v,B as b,u as r,Q as M,f as w,F as B,z as q,H as U,an as W}from"./base-9962c822.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import{_ as X}from"./index-500ed4b6.js";/* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  */import{_ as Y}from"./member_head-a897263d.js";import{t as o}from"./index-5516aed6.js";import{g as Z,a as ee}from"./user-160c2ff0.js";import{e as le,a as ae}from"./site-a8df7d1b.js";import{r as oe}from"./sys-7988dced.js";import{f as re,j as te}from"./storage-0874d153.js";import{E as se}from"./index-886a23f9.js";import{a as de,E as ue}from"./index-22970d5d.js";import{a as ie,E as ne}from"./index-7c833df7.js";import{E as me}from"./index-19251c17.js";import{E as pe,b as ce}from"./index-13fd1eb5.js";import{E as fe}from"./index-7ab57426.js";import{E as _e}from"./index-e2acd187.js";import{v as ge}from"./directive-f75d4a7d.js";const ve={class:"flex items-center"},be={key:1,src:Y,alt:"",class:"mr-[10px] w-[24px]"},we={key:2},he={key:0},Ve={class:"dialog-footer"},Ze=J({__name:"edit-user",emits:["complete"],setup(ye,{expose:I,emit:L}){const P=f([]),n=f(""),A=d=>{n.value=d,typeof d=="string"&&(e.username=d)},k=()=>{Z({}).then(({data:d})=>{P.value=d}).catch()};k();const j=C(()=>!!(e.uid||!n.value||typeof n.value=="string")),_=f(!1),m=f(!1);let V="";const R={uid:0,username:"",head_img:"",real_name:"",password:"",confirm_password:"",status:1,role_ids:[],userrole:{}},e=K({...R}),x=f(),O=C(()=>({uid:[{validator:(d,l,u)=>{!e.uid&&n.value===""?u(new Error(o("managerPlaceholder"))):u()},trigger:"blur"}],username:[{required:e.uid==0,message:o("accountNumberPlaceholder"),trigger:"blur"}],real_name:[{required:!0,message:o("userRealNamePlaceholder"),trigger:"blur"}],role_ids:[{required:!0,message:o("userRolePlaceholder"),trigger:"blur"}],password:[{required:e.uid==0,message:o("passwordPlaceholder"),trigger:"blur"}],confirm_password:[{required:e.uid==0,message:o("confirmPasswordPlaceholder"),trigger:"blur"},{validator:(d,l,u)=>{l!=e.password?u(new Error(o("confirmPasswordError"))):u()},trigger:"blur"}]})),y=f([]);oe().then(d=>{y.value=d.data,y.value.forEach(l=>{l.role_id=l.role_id.toString()})});const S=async d=>{if(m.value||!d)return;const l=e.uid?le:ae;await d.validate(async u=>{if(u){m.value=!0;const g=te(W(e));!e.uid&&typeof n.value=="number"&&(g.uid=n.value),l(g).then(E=>{m.value=!1,_.value=!1,!e.uid&&k(),L("complete")}).catch(()=>{m.value=!1})}})};return I({showDialog:_,setFormData:async(d=null)=>{if(m.value=!0,n.value="",Object.assign(e,R),V=o("addUser"),d){V=o("updateUser");const l=await(await ee(d.uid)).data;l.role_ids=l.role_ids||[],Object.keys(e).forEach(u=>{l[u]!=null&&(e[u]=l[u])})}m.value=!1}}),(d,l)=>{const u=se,g=de,E=ue,p=ie,h=me,z=X,N=pe,T=ce,$=ne,D=fe,G=_e,H=ge;return i(),c(G,{modelValue:_.value,"onUpdate:modelValue":l[9]||(l[9]=a=>_.value=a),title:r(V),width:"500px","destroy-on-close":!0},{footer:t(()=>[F("span",Ve,[s(D,{onClick:l[7]||(l[7]=a=>_.value=!1)},{default:t(()=>[v(b(r(o)("cancel")),1)]),_:1}),s(D,{type:"primary",loading:m.value,onClick:l[8]||(l[8]=a=>S(x.value))},{default:t(()=>[v(b(r(o)("confirm")),1)]),_:1},8,["loading"])])]),default:t(()=>[M((i(),c($,{model:e,"label-width":"90px",ref_key:"formRef",ref:x,rules:r(O),class:"page-form"},{default:t(()=>[e.uid?(i(),c(p,{key:1,label:r(o)("accountNumber"),prop:"username"},{default:t(()=>[s(h,{modelValue:e.username,"onUpdate:modelValue":l[0]||(l[0]=a=>e.username=a),placeholder:r(o)("accountNumberPlaceholder"),clearable:"",disabled:e.uid,class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"])):(i(),c(p,{key:0,label:r(o)("accountNumber"),prop:"uid"},{default:t(()=>[s(E,{"model-value":n.value,placeholder:r(o)("accountNumberPlaceholder"),class:"input-width",filterable:"",clearable:"","allow-create":!0,onChange:A,"default-first-option":!0},{default:t(()=>[(i(!0),w(B,null,q(P.value,a=>(i(),c(g,{key:a.uid,label:a.username,value:a.uid},{default:t(()=>[F("div",ve,[a.head_img?(i(),c(u,{key:0,src:r(re)(a.head_img),size:"small",class:"mr-[10px]"},null,8,["src"])):(i(),w("img",be)),v(" "+b(a.username),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["model-value","placeholder"])]),_:1},8,["label"])),r(j)?(i(),w("div",we,[s(p,{label:r(o)("headImg")},{default:t(()=>[s(z,{modelValue:e.head_img,"onUpdate:modelValue":l[1]||(l[1]=a=>e.head_img=a)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:r(o)("userRealName"),prop:"real_name"},{default:t(()=>[s(h,{modelValue:e.real_name,"onUpdate:modelValue":l[2]||(l[2]=a=>e.real_name=a),placeholder:r(o)("userRealNamePlaceholder"),clearable:"",class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e.uid?U("",!0):(i(),w("div",he,[s(p,{label:r(o)("password"),prop:"password"},{default:t(()=>[s(h,{modelValue:e.password,"onUpdate:modelValue":l[3]||(l[3]=a=>e.password=a),placeholder:r(o)("passwordPlaceholder"),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(p,{label:r(o)("confirmPassword"),prop:"confirm_password"},{default:t(()=>[s(h,{modelValue:e.confirm_password,"onUpdate:modelValue":l[4]||(l[4]=a=>e.confirm_password=a),placeholder:r(o)("confirmPasswordPlaceholder"),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]))])):U("",!0),e.userrole.is_admin?U("",!0):(i(),c(p,{key:3,label:r(o)("userRoleName"),prop:"role_ids"},{default:t(()=>[s(E,{modelValue:e.role_ids,"onUpdate:modelValue":l[5]||(l[5]=a=>e.role_ids=a),placeholder:r(o)("userRolePlaceholder"),class:"input-width",multiple:"","collapse-tags":"","collapse-tags-tooltip":""},{default:t(()=>[(i(!0),w(B,null,q(y.value,(a,Q)=>(i(),c(g,{label:a.role_name,value:a.role_id,key:Q},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])),s(p,{label:r(o)("status")},{default:t(()=>[s(T,{modelValue:e.status,"onUpdate:modelValue":l[6]||(l[6]=a=>e.status=a)},{default:t(()=>[s(N,{label:1},{default:t(()=>[v(b(r(o)("statusUnlock")),1)]),_:1}),s(N,{label:0},{default:t(()=>[v(b(r(o)("lock")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[H,m.value]])]),_:1},8,["modelValue","title"])}}});export{Ze as _};
