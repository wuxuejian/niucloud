import{d as W,r as v,O as X,f as Y,q as H,N as r,a0 as J,y as F,h as n,c as m,a as l,t as u,u as t,e as a,w as s,I as f,F as P,G as R,R as B,i as D,W as K,X as M,V as Q,a1 as Z,aA as ee,cN as le,Y as oe,E as se,_ as te,$ as ae,p as ne,g as de}from"./index-b19d04dd.js";/* empty css                   *//* empty css                *//* empty css                  *//* empty css                *//* empty css                          *//* empty css                    *//* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                 */import{p as re,q as ce,r as ue}from"./site-1bd1f736.js";import{g as ie}from"./addon-898c6ab6.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";const G=h=>(ne("data-v-34c9957b"),h=h(),de(),h),_e={class:"main-container mb-80"},me={class:"detail-head !mb-[10px]"},fe=G(()=>l("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),ve={class:"ml-[1px]"},he=G(()=>l("span",{class:"adorn"},"|",-1)),ge={class:"right"},xe={key:0,class:"text-gray-400"},be={class:"w-full"},we={class:"flex"},ye={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},ke={class:"image-error"},Ve={class:"flex-1 w-0 flex flex-col justify-center"},Ee={class:"font-bold truncate"},Ie=["title"],Le={key:0,class:"text-gray-400"},Ce={class:"w-full"},Ne={class:"flex"},Ae={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},Se={class:"image-error"},qe={class:"flex-1 w-0 flex flex-col justify-center"},Fe={class:"font-bold truncate"},Pe=["title"],Re={class:"fixed-footer-wrap"},Be={class:"fixed-footer"},De=W({__name:"group_edit",setup(h){const x=v(!0),b=v([]),w=v([]),y=X(),j=Y(),U=y.meta.title,g=v(!1),d=v({group_id:0,group_name:"",group_desc:"",app:[],addon:[]});let k=[];(async()=>{await ie().then(({data:c})=>{const o=[],_=[];Object.keys(c).forEach(i=>{k.push(i);const p=c[i];p.type=="addon"?_.push(p):o.push(p)}),b.value=o,w.value=_}).catch()})(),y.query.id?re(y.query.id).then(({data:c})=>{c.app=c.app.filter(o=>k.includes(o)),c.addon=c.addon.filter(o=>k.includes(o)),d.value=c,x.value=!1}).catch():x.value=!1;const V=()=>{j.push("/admin/site/group")},I=v(),T=H(()=>({group_name:[{required:!0,message:r("groupNamePlaceholder"),trigger:"blur"}],app:[{required:!0,message:r("mainAppPlaceholder"),trigger:"blur"}]})),$=async c=>{if(g.value||!c)return;const o=d.value.group_id?ce:ue;await c.validate(async _=>{_&&(g.value=!0,o(d.value).then(i=>{setTimeout(()=>{V()},1e3)}).catch(()=>{g.value=!1}))})};return(c,o)=>{const _=K,i=M,p=Q,L=J("icon-picture"),C=Z,N=ee,A=le,O=oe,S=se,z=te,q=ae;return F((n(),m("div",_e,[l("div",me,[l("div",{class:"left",onClick:V},[fe,l("span",ve,u(t(r)("returnToPreviousPage")),1)]),he,l("span",ge,u(t(U)),1)]),a(z,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[a(O,{model:d.value,"label-width":"110px",ref_key:"formRef",ref:I,rules:t(T),class:"page-form"},{default:s(()=>[a(i,{label:t(r)("groupName"),prop:"group_name"},{default:s(()=>[a(_,{modelValue:d.value.group_name,"onUpdate:modelValue":o[0]||(o[0]=e=>d.value.group_name=e),placeholder:t(r)("groupNamePlaceholder"),clearable:"",disabled:d.value.uid,class:"input-width",maxlength:"20","show-word-limit":!0},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),a(i,{label:t(r)("groupDesc"),prop:"group_desc"},{default:s(()=>[a(_,{modelValue:d.value.group_desc,"onUpdate:modelValue":o[1]||(o[1]=e=>d.value.group_desc=e),type:"textarea",rows:"4",clearable:"",placeholder:t(r)("groupDescPlaceholder"),class:"input-width",maxlength:"100"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(i,{label:t(r)("mainApp"),prop:"app"},{default:s(()=>[b.value.length?(n(),f(A,{key:1,modelValue:d.value.app,"onUpdate:modelValue":o[2]||(o[2]=e=>d.value.app=e),class:"flex flex-wrap w-full"},{default:s(()=>[(n(!0),m(P,null,R(b.value,(e,E)=>(n(),m("div",{class:"flex w-[300px]",key:E},[a(N,{label:e.key,name:"",class:"w-full !h-auto border border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:s(()=>[l("div",be,[l("div",we,[l("div",ye,[e.icon?(n(),f(p,{key:0,src:t(B)(e.icon),class:"w-full h-full"},null,8,["src"])):(n(),f(p,{key:1,class:"w-full h-full"},{error:s(()=>[l("div",ke,[a(C,null,{default:s(()=>[a(L)]),_:1})])]),_:1}))]),l("div",Ve,[l("div",Ee,u(e.title),1),l("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,Ie)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(n(),m("div",xe,u(t(r)("appListEmpty")),1))]),_:1},8,["label"]),a(i,{label:t(r)("containAddon")},{default:s(()=>[w.value.length?(n(),f(A,{key:1,modelValue:d.value.addon,"onUpdate:modelValue":o[3]||(o[3]=e=>d.value.addon=e),class:"flex flex-wrap w-full"},{default:s(()=>[(n(!0),m(P,null,R(w.value,(e,E)=>(n(),m("div",{class:"flex w-[300px]",key:E},[a(N,{label:e.key,name:"",class:"w-full !h-auto border border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:s(()=>[l("div",Ce,[l("div",Ne,[l("div",Ae,[e.icon?(n(),f(p,{key:0,src:t(B)(e.icon),class:"w-full h-full"},null,8,["src"])):(n(),f(p,{key:1,class:"w-full h-full"},{error:s(()=>[l("div",Se,[a(C,null,{default:s(()=>[a(L)]),_:1})])]),_:1}))]),l("div",qe,[l("div",Fe,u(e.title),1),l("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,Pe)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(n(),m("div",Le,u(t(r)("appListEmpty")),1))]),_:1},8,["label"])]),_:1},8,["model","rules"]),l("div",Re,[l("div",Be,[F((n(),f(S,{type:"primary",onClick:o[4]||(o[4]=e=>$(I.value))},{default:s(()=>[D(u(t(r)("save")),1)]),_:1})),[[q,g.value]]),a(S,{onClick:o[5]||(o[5]=e=>V())},{default:s(()=>[D(u(t(r)("cancel")),1)]),_:1})])])]),_:1})])),[[q,x.value]])}}});const el=pe(De,[["__scopeId","data-v-34c9957b"]]);export{el as default};
