import{d as U,O as I,r as g,n as x,h as i,c as E,a as b,t as u,u as l,y as S,I as d,w as o,e as r,N as n,cO as k,B as f,i as p,F as W,G,aL as H,X as L,W as P,ay as j,az as K,aA as $,cP as M,_ as X,Y,E as q,$ as J}from"./index-efa627c5.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                          *//* empty css                    *//* empty css                 *//* empty css                 *//* empty css                  */import{b as Q,H as Z,I as ee}from"./member-1a4f1a79.js";const te={class:"main-container"},ae={class:"flex ml-[18px] justify-between items-center mt-[20px]"},oe={class:"text-page-title"},le=b("span",{class:"ml-2"},"%",-1),se={class:"fixed-footer-wrap"},ne={class:"fixed-footer"},Ee=U({__name:"cash_out",setup(re){const R=I().meta.title,c=g(!0),v=g(),t=x({is_auto_transfer:"0",is_auto_verify:"0",is_open:"0",min:"0.01",rate:"0",transfer_type:[]}),V=g([]);(async()=>{V.value=await(await Q()).data})(),(async(m=0)=>{const e=await(await Z()).data;Object.keys(t).forEach(s=>{e[s]!=null&&(t[s]=e[s])}),t.is_open=Boolean(Number(t.is_open)),c.value=!1})();const C=x({min:[{validator:(m,e,s)=>{Number(e)<.01?s(new Error(n("cashWithdrawalAmountHint"))):s()},trigger:"blur"}],rate:[{validator:(m,e,s)=>{Number(e)>100||Number(e)<0?s(new Error(n("commissionRatioHint"))):s()},trigger:"blur"}]}),N=async m=>{c.value||!m||await m.validate(e=>{if(e){const s={...t};s.is_open=Number(s.is_open).toString(),ee(s).then(()=>{c.value=!1}).catch(()=>{c.value=!1})}})};return(m,e)=>{const s=H,_=L,w=P,y=j,h=K,F=$,B=M,T=X,z=Y,A=q,D=J;return i(),E("div",te,[b("div",ae,[b("span",oe,u(l(R)),1)]),S((i(),d(z,{model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:v,rules:C,class:"page-form"},{default:o(()=>[r(T,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[r(_,{label:l(n)("isOpen")},{default:o(()=>[r(s,{modelValue:t.is_open,"onUpdate:modelValue":e[0]||(e[0]=a=>t.is_open=a)},null,8,["modelValue"])]),_:1},8,["label"]),t.is_open?(i(),d(_,{key:0,label:l(n)("cashWithdrawalAmount"),prop:"min"},{default:o(()=>[r(w,{modelValue:t.min,"onUpdate:modelValue":e[1]||(e[1]=a=>t.min=a),onKeyup:e[2]||(e[2]=a=>l(k)(a)),class:"input-width",placeholder:l(n)("cashWithdrawalAmountPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),d(_,{key:1,label:l(n)("commissionRatio"),prop:"rate"},{default:o(()=>[r(w,{modelValue:t.rate,"onUpdate:modelValue":e[3]||(e[3]=a=>t.rate=a),onKeyup:e[4]||(e[4]=a=>l(k)(a)),class:"input-width",placeholder:l(n)("commissionRatioPlaceholder")},null,8,["modelValue","placeholder"]),le]),_:1},8,["label"])):f("",!0),t.is_open?(i(),d(_,{key:2,label:l(n)("audit"),class:"items-center"},{default:o(()=>[r(h,{modelValue:t.is_auto_verify,"onUpdate:modelValue":e[5]||(e[5]=a=>t.is_auto_verify=a)},{default:o(()=>[r(y,{label:"0",size:"large"},{default:o(()=>[p(u(l(n)("manualAudit")),1)]),_:1}),r(y,{label:"1",size:"large"},{default:o(()=>[p(u(l(n)("automaticAudit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),d(_,{key:3,label:l(n)("transfer"),class:"items-center"},{default:o(()=>[r(h,{modelValue:t.is_auto_transfer,"onUpdate:modelValue":e[6]||(e[6]=a=>t.is_auto_transfer=a)},{default:o(()=>[r(y,{label:"0",size:"large"},{default:o(()=>[p(u(l(n)("manualTransfer")),1)]),_:1}),r(y,{label:"1",size:"large"},{default:o(()=>[p(u(l(n)("automatedTransit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),d(_,{key:4,label:l(n)("transferMode"),class:"items-center"},{default:o(()=>[r(B,{modelValue:t.transfer_type,"onUpdate:modelValue":e[7]||(e[7]=a=>t.transfer_type=a),size:"large"},{default:o(()=>[(i(!0),E(W,null,G(V.value,(a,O)=>(i(),d(F,{label:a.key,key:"a"+O},{default:o(()=>[p(u(a.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0)]),_:1})]),_:1},8,["model","rules"])),[[D,c.value]]),b("div",se,[b("div",ne,[r(A,{type:"primary",onClick:e[8]||(e[8]=a=>N(v.value))},{default:o(()=>[p(u(l(n)("save")),1)]),_:1})])])])}}});export{Ee as default};
