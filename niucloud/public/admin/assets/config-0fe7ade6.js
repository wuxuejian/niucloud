import{a3 as y,d as D,O as I,r as v,n as F,aL as M,s as O,a4 as g,N as a,h,c as R,a as n,t as u,u as l,y as $,I as j,w as i,e as r,i as H,aM as L,X as U,W as T,$ as W,Y as X,E as Y,a0 as z,_ as A}from"./index-9d601459.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  */import{m as G}from"./sys-45a56363.js";function J(){return y.get("channel/h5/config")}function K(_){return y.put("channel/h5/config",_,{showSuccessMessage:!0})}const P={class:"main-container"},Q={class:"flex ml-[18px] justify-between items-center mt-[20px]"},Z={class:"text-[20px]"},ee={class:"fixed-footer-wrap"},te={class:"fixed-footer"},se=D({__name:"config",setup(_){const w=I().meta.title,o=v(!0),e=F({is_open:!1,request_url:""}),d=v();J().then(t=>{Object.assign(e,t.data),e.is_open=Boolean(Number(e.is_open)),o.value=!1}),G().then(t=>{e.request_url=t.data.wap_url+"/"});const{copy:x,isSupported:b,copied:m}=M(),C=t=>{if(!b.value){g({message:a("notSupportCopy"),type:"warning"});return}x(t)};O(m,()=>{m.value&&g({message:a("copySuccess"),type:"success"})});const E=()=>{window.open(e.request_url)},k=async t=>{o.value||!t||await t.validate(async s=>{if(s){o.value=!0;let c={...e};c.is_open=Number(c.is_open),K(c).then(()=>{o.value=!1}).catch(()=>{o.value=!1})}})};return(t,s)=>{const c=L,f=U,N=T,V=W,q=X,B=Y,S=z;return h(),R("div",P,[n("div",Q,[n("span",Z,u(l(w)),1)]),$((h(),j(q,{model:e,"label-width":"150px",ref_key:"formRef",ref:d,class:"page-form"},{default:i(()=>[r(V,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[r(f,{label:l(a)("isOpen")},{default:i(()=>[r(c,{modelValue:e.is_open,"onUpdate:modelValue":s[0]||(s[0]=p=>e.is_open=p)},null,8,["modelValue"])]),_:1},8,["label"]),r(f,{label:l(a)("h5DomainName")},{default:i(()=>[r(N,{"model-value":e.request_url,class:"input-width",readonly:!0},{append:i(()=>[n("div",{class:"cursor-pointer",onClick:s[1]||(s[1]=p=>C(e.request_url))},u(l(a)("copy")),1)]),_:1},8,["model-value"]),n("span",{class:"ml-2 cursor-pointer visit-btn",onClick:E},u(l(a)("clickVisit")),1)]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[S,o.value]]),n("div",ee,[n("div",te,[r(B,{type:"primary",loading:o.value,onClick:s[2]||(s[2]=p=>k(d.value))},{default:i(()=>[H(u(l(a)("save")),1)]),_:1},8,["loading"])])])])}}});const de=A(se,[["__scopeId","data-v-6c14296d"]]);export{de as default};
