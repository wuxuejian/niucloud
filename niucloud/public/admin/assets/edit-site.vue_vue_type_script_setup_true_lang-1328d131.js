import{d as K,r as m,n as W,q as N,N as l,a1 as X,h as u,I as c,w as s,a as b,e as t,i as v,t as w,u as o,y as S,c as _,F as y,G as E,R as Y,z as H,W as Q,X as Z,as as ee,aF as le,a2 as ae,aJ as re,cK as oe,Y as te,E as se,aa as de,a0 as ie}from"./index-4dcc0234.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                *//* empty css               *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as ue}from"./member_head-a897263d.js";import{i as ne,j as pe,k as me,m as ce}from"./site-ac963391.js";import{a as _e}from"./user-1e1ca1a9.js";import{g as ge}from"./addon-8fbd8692.js";const fe={key:0},ve={class:"flex items-center"},we={class:"flex items-center"},be={key:1,src:ue,alt:"",class:"mr-[10px] w-[24px]"},he={key:1},Ve={class:"dialog-footer"},ze=K({__name:"edit-site",emits:["complete"],setup(Pe,{expose:q,emit:L}){const g=m(!1),n=m(!0),h=m([]),k=m([]),T=m([]);_e({}).then(({data:i})=>{k.value=i}).catch();const V=new Date;V.setTime(V.getTime()+3600*1e3*2*360);const I={site_id:"",site_name:"",real_name:"",uid:"",username:"",password:"",confirm_password:"",expire_time:V,group_id:""},a=W({...I}),U=m();(async()=>{h.value=await(await ne()).data})();const F=m([]);ge().then(({data:i})=>{F.value=i}).catch();const A=async(i=null)=>{if(n.value=!0,Object.assign(a,I),i){const r=await(await pe(i.site_id)).data;T.value=r,Object.keys(a).forEach(d=>{r[d]!=null&&(a[d]=r[d])})}n.value=!1},B=N(()=>({site_name:[{required:!0,message:l("siteNamePlaceholder"),trigger:"blur"}],group_id:[{required:!0,message:l("groupIdPlaceholder"),trigger:"blur"}],uid:[{validator:(i,r,d)=>{a.uid===""?d(new Error(l("managerPlaceholder"))):d()},trigger:"blur"}],username:[{required:a.uid==0,message:l("usernamePlaceholder"),trigger:"blur"}],password:[{required:a.uid==0,message:l("passwordPlaceholder"),trigger:"blur"}],real_name:[{required:!0,message:l("userRealNamePlaceholder"),trigger:"blur"}],confirm_password:[{required:a.uid==0,message:l("confirmPasswordPlaceholder"),trigger:"blur"},{validator:(i,r,d)=>{a.uid==0&&r!=a.password?d(new Error(l("confirmPasswordError"))):d()},trigger:"blur"}],expire_time:[{required:!0,message:l("expireTimePlaceholder"),trigger:"blur"}]})),C=N(()=>n.value?"":a.site_id?l("editSite"):l("addSite")),R=async i=>{n.value||!i||await i.validate(async r=>{if(r){n.value=!0;const d=a;(d.site_id?me:ce)(d).then(f=>{n.value=!1,g.value=!1,L("complete")}).catch(()=>{n.value=!1})}})};return q({showDialog:g,setFormData:A,loading:n}),(i,r)=>{const d=Q,p=Z,f=ee,P=le,G=X("Plus"),j=ae,O=re,z=oe,M=te,D=se,$=de,J=ie;return u(),c($,{modelValue:g.value,"onUpdate:modelValue":r[10]||(r[10]=e=>g.value=e),title:o(C),width:"500px","destroy-on-close":!0},{footer:s(()=>[b("span",Ve,[t(D,{onClick:r[8]||(r[8]=e=>g.value=!1)},{default:s(()=>[v(w(o(l)("cancel")),1)]),_:1}),t(D,{type:"primary",loading:n.value,onClick:r[9]||(r[9]=e=>R(U.value))},{default:s(()=>[v(w(o(l)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[S((u(),c(M,{model:a,"label-width":"90px",ref_key:"formRef",ref:U,rules:o(B),class:"page-form"},{default:s(()=>[a.site_id==0?(u(),_("div",fe,[t(p,{label:o(l)("siteName"),prop:"site_name"},{default:s(()=>[t(d,{modelValue:a.site_name,"onUpdate:modelValue":r[0]||(r[0]=e=>a.site_name=e),clearable:"",placeholder:o(l)("siteNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:o(l)("groupId"),prop:"group_id"},{default:s(()=>[t(P,{modelValue:a.group_id,"onUpdate:modelValue":r[1]||(r[1]=e=>a.group_id=e),clearable:"",placeholder:o(l)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[(u(!0),_(y,null,E(h.value,(e,x)=>(u(),c(f,{label:e.group_name,value:e.group_id,key:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:o(l)("manager"),prop:"uid"},{default:s(()=>[t(P,{modelValue:a.uid,"onUpdate:modelValue":r[2]||(r[2]=e=>a.uid=e),placeholder:o(l)("managerPlaceholder"),class:"input-width",filterable:""},{default:s(()=>[t(f,{label:o(l)("newAddManager"),value:0},{default:s(()=>[b("div",ve,[t(j,{class:"mr-[10px]"},{default:s(()=>[t(G)]),_:1}),v(" "+w(o(l)("newAddManager")),1)])]),_:1},8,["label"]),(u(!0),_(y,null,E(k.value,e=>(u(),c(f,{key:e.uid,label:e.username,value:e.uid},{default:s(()=>[b("div",we,[e.head_img?(u(),c(O,{key:0,src:o(Y)(e.head_img),size:"small",class:"mr-[10px]"},null,8,["src"])):(u(),_("img",be)),v(" "+w(e.username),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),S(b("div",null,[t(p,{label:o(l)("username"),prop:"username"},{default:s(()=>[t(d,{modelValue:a.username,"onUpdate:modelValue":r[3]||(r[3]=e=>a.username=e),clearable:"",placeholder:o(l)("usernamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:o(l)("password"),prop:"password"},{default:s(()=>[t(d,{modelValue:a.password,"onUpdate:modelValue":r[4]||(r[4]=e=>a.password=e),clearable:"",placeholder:o(l)("passwordPlaceholder"),class:"input-width","show-password":!0,type:"password"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:o(l)("confirmPassword"),prop:"confirm_password"},{default:s(()=>[t(d,{modelValue:a.confirm_password,"onUpdate:modelValue":r[5]||(r[5]=e=>a.confirm_password=e),placeholder:o(l)("confirmPasswordPlaceholder"),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])],512),[[H,a.uid===0]])])):(u(),_("div",he,[t(p,{label:o(l)("siteName")},{default:s(()=>[v(w(a.site_name),1)]),_:1},8,["label"]),t(p,{label:o(l)("groupId"),prop:"group_id"},{default:s(()=>[t(P,{modelValue:a.group_id,"onUpdate:modelValue":r[6]||(r[6]=e=>a.group_id=e),clearable:"",placeholder:o(l)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[(u(!0),_(y,null,E(h.value,(e,x)=>(u(),c(f,{label:e.group_name,value:e.group_id,key:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])])),t(p,{label:o(l)("expireTime"),prop:"expire_time",class:"input-width"},{default:s(()=>[t(z,{class:"flex-1 !flex",modelValue:a.expire_time,"onUpdate:modelValue":r[7]||(r[7]=e=>a.expire_time=e),clearable:"",type:"datetime",placeholder:o(l)("expireTimePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[J,n.value]])]),_:1},8,["modelValue","title"])}}});export{ze as _};
