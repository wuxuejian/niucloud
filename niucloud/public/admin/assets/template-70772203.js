import{d as S,O as j,f as I,r as v,n as R,a0 as $,h as d,c as g,a as p,t as i,u as e,e as t,w as n,N as a,y as q,I as z,F as M,G as O,i as h,aM as U,aC as W,aD as G,a1 as P,ar as H,ah as J,E as K,aj as Q,_ as X,$ as Y}from"./index-30b146d4.js";/* empty css                   *//* empty css                *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                *//* empty css                    */import{e as Z,f as ee}from"./weapp-b0208463.js";import{e as ae}from"./notice-736f6aad.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";const le={class:"main-container p-5"},ne={class:"flex justify-between items-center mb-[20px]"},oe={class:"text-page-title"},se={class:"flex"},ie={class:"text-base"},ce={class:"text-base"},pe=S({__name:"template",setup(re){const w=j(),y=I(),k=w.meta.title,m=v("/channel/weapp/message"),x=c=>{y.push({path:m.value})},o=R({loading:!0,data:[]}),u=(c=1)=>{o.loading=!0,Z().then(l=>{o.loading=!1,o.data=l.data}).catch(()=>{o.loading=!1})};u();const C=(c=null)=>{const l=U.service({lock:!0,background:"rgba(0, 0, 0, 0)"});ee({keys:c?[c.key]:[]}).then(()=>{u(),l.close()}).catch(()=>{l.close()})},T=c=>{const l=v({key:"",type:"",status:0});l.value.status=c.is_weapp?0:1,l.value.key=c.key,l.value.type="weapp",o.loading=!0,ae(l.value).then(_=>{u()}).catch(()=>{o.loading=!1})};return(c,l)=>{const _=W,E=G,N=$("Warning"),B=P,D=H,r=J,f=K,V=Q,L=X,A=Y;return d(),g("div",le,[p("div",ne,[p("span",oe,i(e(k)),1)]),t(E,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=s=>m.value=s),class:"demo-tabs",onTabChange:x},{default:n(()=>[t(_,{label:e(a)("weappAccessFlow"),name:"/channel/weapp"},null,8,["label"]),t(_,{label:e(a)("subscribeMessage"),name:"/channel/weapp/message"},null,8,["label"]),t(_,{label:e(a)("weappRelease"),name:"/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),t(L,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[t(D,{class:"warm-prompt !my-[20px]",type:"info"},{default:n(()=>[p("div",se,[t(B,{class:"mr-2 mt-[2px]",size:"18"},{default:n(()=>[t(N)]),_:1}),p("div",null,[p("p",ie,i(e(a)("operationTip"))+" 1、"+i(e(a)("operationTipOne")),1),p("p",ce,"2、"+i(e(a)("operationTipTwo")),1)])])]),_:1}),p("div",null,[q((d(),z(V,{data:o.data,size:"large"},{empty:n(()=>[p("span",null,i(o.loading?"":e(a)("emptyData")),1)]),default:n(()=>[t(r,{prop:"name","show-overflow-tooltip":!0,label:e(a)("name"),"min-width":"150"},null,8,["label"]),t(r,{label:e(a)("response"),"min-width":"180"},{default:n(({row:s})=>[(d(!0),g(M,null,O(s.weapp.content,(b,F)=>(d(),g("div",{key:"a"+F,class:"text-left"},i(b.join(":")),1))),128))]),_:1},8,["label"]),t(r,{label:e(a)("isStart"),"min-width":"100",align:"center"},{default:n(({row:s})=>[h(i(s.is_weapp==1?e(a)("startUsing"):e(a)("statusDeactivate")),1)]),_:1},8,["label"]),t(r,{prop:"weapp_template_id",label:e(a)("serialNumber"),"min-width":"180"},null,8,["label"]),t(r,{label:e(a)("operation"),fixed:"right",align:"right",width:"200"},{default:n(({row:s})=>[t(f,{type:"primary",link:"",onClick:b=>T(s)},{default:n(()=>[h(i(s.is_weapp==1?e(a)("close"):e(a)("open")),1)]),_:2},1032,["onClick"]),t(f,{type:"primary",link:"",onClick:b=>C(s)},{default:n(()=>[h(i(e(a)("regain")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[A,o.loading]])])]),_:1})])}}});const Ne=te(pe,[["__scopeId","data-v-02ae00cd"]]);export{Ne as default};
