import{d as x,r as u,n as B,q as F,h as c,I as h,w as s,a as r,e as i,i as N,t as o,u as t,N as a,y as C,c as p,B as f,X as I,Y as R,E as T,a9 as j,$ as O}from"./index-b19d04dd.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";const $={class:"input-width"},q={key:0},K={key:1},L={key:2},S={class:"input-width"},U={class:"input-width"},X={class:"input-width"},Y={class:"input-width"},z={class:"dialog-footer"},Z=x({__name:"notice-records-info",setup(A,{expose:b}){const m=u(!1),_=u(!0),v={create_time:0,message_data:"",message_key:"",message_type:"",name:"",nickname:"",receiver:""},e=B({...v}),y=u(),w=F(()=>({}));return b({showDialog:m,setFormData:async(d=null)=>{_.value=!0,Object.assign(e,v),d&&Object.keys(e).forEach(l=>{d[l]!=null&&(e[l]=d[l])}),_.value=!1}}),(d,l)=>{const n=I,k=R,D=T,E=j,V=O;return c(),h(E,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=g=>m.value=g),title:t(a)("messageInfo"),width:"550px","destroy-on-close":!0},{footer:s(()=>[r("span",z,[i(D,{type:"primary",onClick:l[0]||(l[0]=g=>m.value=!1)},{default:s(()=>[N(o(t(a)("confirm")),1)]),_:1})])]),default:s(()=>[C((c(),h(k,{model:e,"label-width":"110px",ref_key:"formRef",ref:y,rules:t(w),class:"page-form"},{default:s(()=>[i(n,{label:t(a)("messageKey")},{default:s(()=>[r("div",$,o(e.name),1)]),_:1},8,["label"]),i(n,{label:t(a)("messageType")},{default:s(()=>[e.message_type=="sms"?(c(),p("div",q,o(t(a)("sms")),1)):f("",!0),e.message_type=="wechat"?(c(),p("div",K,o(t(a)("wechat")),1)):f("",!0),e.message_type=="weapp"?(c(),p("div",L,o(t(a)("weapp")),1)):f("",!0)]),_:1},8,["label"]),i(n,{label:t(a)("messageData")},{default:s(()=>[r("div",S,o(e.message_data),1)]),_:1},8,["label"]),i(n,{label:t(a)("nickname")},{default:s(()=>[r("div",U,o(e.nickname),1)]),_:1},8,["label"]),i(n,{label:t(a)("receiver")},{default:s(()=>[r("div",X,o(e.receiver),1)]),_:1},8,["label"]),i(n,{label:t(a)("createTime")},{default:s(()=>[r("div",Y,o(e.create_time),1)]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[V,_.value]])]),_:1},8,["modelValue","title"])}}});export{Z as _};
