import{d as J,r as v,x as K,f as O,l as Q,q as d,Y as X,P as q,h as a,c as m,a as l,t as u,u as r,e as t,w as s,s as f,F as B,Q as F,i as D,J as Y,K as H,I as M,X as W,aB as Z,dv as ee,L as le,E as oe,a0 as se,U as te,p as ae,g as ne}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                *//* empty css                  *//* empty css                *//* empty css                          *//* empty css                    *//* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                 */import{p as de,q as re,r as ce}from"./site-6efacd4c.js";import{g as ue}from"./addon-36ff97ba.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";const R=h=>(ae("data-v-b017cc54"),h=h(),ne(),h),pe={class:"main-container mb-80"},_e={class:"detail-head !mb-[10px]"},me=R(()=>l("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),fe={class:"ml-[1px]"},ve=R(()=>l("span",{class:"adorn"},"|",-1)),he={class:"right"},ge={key:0,class:"text-gray-400"},xe={class:"w-full"},be={class:"flex"},we={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},ye={class:"image-error"},ke={class:"flex-1 w-0 flex flex-col justify-center"},Ve={class:"font-bold truncate"},Ee=["title"],Ie={key:0,class:"text-gray-400"},Le={class:"w-full"},Ce={class:"flex"},Ae={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},Ne={class:"image-error"},Pe={class:"flex-1 w-0 flex flex-col justify-center"},Se={class:"font-bold truncate"},qe=["title"],Be={class:"fixed-footer-wrap"},Fe={class:"fixed-footer"},De=J({__name:"group_edit",setup(h){const x=v(!0),b=v([]),w=v([]),y=K(),U=O(),j=y.meta.title,g=v(!1),n=v({group_id:0,group_name:"",group_desc:"",app:[],addon:[]});let k=[];(async()=>{await ue().then(({data:c})=>{const o=[],_=[];Object.keys(c).forEach(i=>{k.push(i);const p=c[i];p.type=="addon"?_.push(p):o.push(p)}),b.value=o,w.value=_}).catch()})(),y.query.id?de(y.query.id).then(({data:c})=>{c.app=c.app.filter(o=>k.includes(o)),c.addon=c.addon.filter(o=>k.includes(o)),n.value=c,x.value=!1}).catch():x.value=!1;const V=()=>{U.push("/admin/site/group")},I=v(),G=Q(()=>({group_name:[{required:!0,message:d("groupNamePlaceholder"),trigger:"blur"}],app:[{required:!0,message:d("mainAppPlaceholder"),trigger:"blur"}]})),T=async c=>{if(g.value||!c)return;const o=n.value.group_id?re:ce;await c.validate(async _=>{_&&(g.value=!0,o(n.value).then(i=>{setTimeout(()=>{V()},1e3)}).catch(()=>{g.value=!1}))})};return(c,o)=>{const _=Y,i=H,p=M,L=X("icon-picture"),C=W,A=Z,N=ee,$=le,P=oe,z=se,S=te;return q((a(),m("div",pe,[l("div",_e,[l("div",{class:"left",onClick:V},[me,l("span",fe,u(r(d)("returnToPreviousPage")),1)]),ve,l("span",he,u(r(j)),1)]),t(z,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[t($,{model:n.value,"label-width":"110px",ref_key:"formRef",ref:I,rules:r(G),class:"page-form"},{default:s(()=>[t(i,{label:r(d)("groupName"),prop:"group_name"},{default:s(()=>[t(_,{modelValue:n.value.group_name,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value.group_name=e),placeholder:r(d)("groupNamePlaceholder"),clearable:"",disabled:n.value.uid,class:"input-width",maxlength:"20","show-word-limit":!0},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),t(i,{label:r(d)("groupDesc"),prop:"group_desc"},{default:s(()=>[t(_,{modelValue:n.value.group_desc,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value.group_desc=e),type:"textarea",rows:"4",clearable:"",placeholder:r(d)("groupDescPlaceholder"),class:"input-width",maxlength:"100"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:r(d)("mainApp"),prop:"app"},{default:s(()=>[b.value.length?(a(),f(N,{key:1,modelValue:n.value.app,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value.app=e),class:"flex flex-wrap w-full"},{default:s(()=>[(a(!0),m(B,null,F(b.value,(e,E)=>(a(),m("div",{class:"flex w-[300px]",key:E},[t(A,{label:e.key,name:"",class:"w-full !h-auto border border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:s(()=>[l("div",xe,[l("div",be,[l("div",we,[e.icon?(a(),f(p,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(a(),f(p,{key:1,class:"w-full h-full"},{error:s(()=>[l("div",ye,[t(C,null,{default:s(()=>[t(L)]),_:1})])]),_:1}))]),l("div",ke,[l("div",Ve,u(e.title),1),l("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,Ee)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(a(),m("div",ge,u(r(d)("appListEmpty")),1))]),_:1},8,["label"]),t(i,{label:r(d)("containAddon")},{default:s(()=>[w.value.length?(a(),f(N,{key:1,modelValue:n.value.addon,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value.addon=e),class:"flex flex-wrap w-full"},{default:s(()=>[(a(!0),m(B,null,F(w.value,(e,E)=>(a(),m("div",{class:"flex w-[300px]",key:E},[t(A,{label:e.key,name:"",class:"w-full !h-auto border border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:s(()=>[l("div",Le,[l("div",Ce,[l("div",Ae,[e.icon?(a(),f(p,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(a(),f(p,{key:1,class:"w-full h-full"},{error:s(()=>[l("div",Ne,[t(C,null,{default:s(()=>[t(L)]),_:1})])]),_:1}))]),l("div",Pe,[l("div",Se,u(e.title),1),l("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,qe)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(a(),m("div",Ie,u(r(d)("addonListEmpty")),1))]),_:1},8,["label"])]),_:1},8,["model","rules"]),l("div",Be,[l("div",Fe,[q((a(),f(P,{type:"primary",onClick:o[4]||(o[4]=e=>T(I.value))},{default:s(()=>[D(u(r(d)("save")),1)]),_:1})),[[S,g.value]]),t(P,{onClick:o[5]||(o[5]=e=>V())},{default:s(()=>[D(u(r(d)("cancel")),1)]),_:1})])])]),_:1})])),[[S,x.value]])}}});const Ze=ie(De,[["__scopeId","data-v-b017cc54"]]);export{Ze as default};
