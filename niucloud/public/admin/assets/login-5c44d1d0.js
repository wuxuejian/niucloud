import{d as y,O as B,r as b,n as E,h as g,c as N,a as i,t as r,u as s,y as D,I as S,w as d,e as n,N as a,i as U,aB as k,X as F,aM as M,$ as T,Y as O,E as R,a0 as j,_ as I}from"./index-4dcc0234.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                    */import{J,K as L}from"./member-97cfd04b.js";const A={class:"main-container"},$={class:"flex ml-[18px] justify-between items-center mt-[20px]"},K={class:"text-[20px]"},X={class:"panel-title !text-sm"},Y={class:"form-tip"},q={class:"form-tip"},z={class:"form-tip"},G={class:"form-tip"},H={class:"panel-title !text-sm"},P={class:"form-tip"},Q={class:"fixed-footer-wrap"},W={class:"fixed-footer"},Z=y({__name:"login",setup(ee){const v=B().meta.title,u=b(!0),c=b(),o=E({is_username:0,is_mobile:0,is_auth_register:0,is_bind_mobile:0,agreement_show:0});(async(_=0)=>{const e=await(await J()).data;Object.keys(o).forEach(l=>{e[l]!=null&&(o[l]=Boolean(Number(e[l])))}),u.value=!1})();const p=(_,e)=>{o[e]=_},h=async _=>{u.value||!_||await _.validate(e=>{if(e){const l=JSON.parse(JSON.stringify(o));Object.keys(l).forEach(m=>{l[m]=Number(l[m])}),L(l).then(()=>{u.value=!1}).catch(()=>{u.value=!1})}})};return(_,e)=>{const l=k,m=F,f=M,x=T,w=O,V=R,C=j;return g(),N("div",A,[i("div",$,[i("span",K,r(s(v)),1)]),D((g(),S(w,{model:o,"label-width":"150px",ref_key:"ruleFormRef",ref:c,class:"page-form"},{default:d(()=>[n(x,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[i("h3",X,r(s(a)("commonSetting")),1),n(m,{label:s(a)("logonMode")},{default:d(()=>[n(l,{modelValue:o.is_username,"onUpdate:modelValue":e[0]||(e[0]=t=>o.is_username=t),label:s(a)("isUsername"),onChange:e[1]||(e[1]=t=>p(t,"is_username"))},null,8,["modelValue","label"]),i("div",Y,r(s(a)("isUsernameTip")),1),n(l,{modelValue:o.is_mobile,"onUpdate:modelValue":e[2]||(e[2]=t=>o.is_mobile=t),label:s(a)("isMobile"),onChange:e[3]||(e[3]=t=>p(t,"is_mobile"))},null,8,["modelValue","label"]),i("div",q,r(s(a)("isMobileTip")),1)]),_:1},8,["label"]),n(m,{label:s(a)("isBindMobile"),prop:"formData.is_bind_mobile"},{default:d(()=>[n(f,{modelValue:o.is_bind_mobile,"onUpdate:modelValue":e[4]||(e[4]=t=>o.is_bind_mobile=t),onChange:e[5]||(e[5]=t=>p(t,"is_bind_mobile"))},null,8,["modelValue"]),i("div",z,r(s(a)("isBindMobileTip")),1)]),_:1},8,["label"]),n(m,{label:s(a)("agreement"),prop:"formData.agreement_show"},{default:d(()=>[n(f,{modelValue:o.agreement_show,"onUpdate:modelValue":e[6]||(e[6]=t=>o.agreement_show=t),onChange:e[7]||(e[7]=t=>p(t,"agreement_show"))},null,8,["modelValue"]),i("div",G,r(s(a)("agreementTips")),1)]),_:1},8,["label"]),i("h3",H,r(s(a)("tripartiteSetting")),1),n(m,{label:s(a)("isAuthRegister"),prop:"formData.is_auth_register"},{default:d(()=>[n(f,{modelValue:o.is_auth_register,"onUpdate:modelValue":e[8]||(e[8]=t=>o.is_auth_register=t),onChange:e[9]||(e[9]=t=>p(t,"is_auth_register"))},null,8,["modelValue"]),i("div",P,r(s(a)("isAuthRegisterTip")),1)]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[C,u.value]]),i("div",Q,[i("div",W,[n(V,{type:"primary",onClick:e[10]||(e[10]=t=>h(c.value))},{default:d(()=>[U(r(s(a)("save")),1)]),_:1})])])])}}});const ue=I(Z,[["__scopeId","data-v-cfffdd1c"]]);export{ue as default};
