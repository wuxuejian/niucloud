import{d as C,f as V,K as N,r as y,n as R,y as M,h as l,c as x,a as e,t as s,u as a,N as o,e as u,w as c,F as j,G as D,R as T,I as U,i as $,B as k,ad as b,U as w,E as z,V as G,ah as K,aj as O,ac as P,$ as q,p as H,g as J}from"./index-b19d04dd.js";/* empty css                   *//* empty css                 *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                  */import{_ as Q}from"./apply_empty-cdca3e85.js";import{g as W}from"./addon-898c6ab6.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Y=""+new URL("app_store_default-c0531792.png",import.meta.url).href,f=_=>(H("data-v-e51b31c1"),_=_(),J(),_),Z={class:"box-border pt-[68px] px-[76px] overview-top"},ee={key:0},te={class:"flex justify-between items-center"},se={class:"font-[600] text-[26px] text-[#222] leading-[37px]"},ae={class:"font-[500] text-[14px] text-[#222] leading-[20px] mt-[12px]"},oe=f(()=>e("div",{class:"mr-[9px] text-[#3F3F3F] iconfont iconxiazai01"},null,-1)),ne={class:"font-[600] text-[14px] text-[#222] leading-[20px]"},pe={class:"flex flex-wrap mt-[40px]"},ce=["onClick"],ie={class:"bg-[#F7FAFB] py-[18px] px-[24px] flex items-center app-item-head"},re=f(()=>e("div",{class:"image-slot"},[e("img",{class:"w-[40px] h-[40px] rounded-[8px]",src:Y})],-1)),le={class:"py-[18px] px-[24px]"},_e={class:"font-[600] leading-[1] text-[14px] text-[#222]"},de={class:"text-[13px] text-[#6D7278] leading-[18px] mt-[6px] truncate"},xe=f(()=>e("div",{class:"w-[230px] mx-auto"},[e("img",{src:Q,class:"max-w-full",alt:""})],-1)),ue={class:"flex items-center"},me=C({__name:"app_manage",setup(_){const v=V(),m=N(),n=y(!0),d=R({appList:[]}),h=y({});(()=>{n.value=!0,W().then(p=>{Object.values(p.data).forEach((t,i)=>{t.type=="app"&&d.appList.push(t)}),m.routers.forEach((t,i)=>{t.children&&t.children.length?(t.name=b(t.children),h.value[t.meta.app]=b(t.children)):h.value[t.meta.app]=t.name}),n.value=!1}).catch(()=>{n.value=!1})})();const L=p=>{w.set({key:"menuAppStorage",data:p.key}),w.set({key:"plugMenuTypeStorage",data:""});const t=m.appMenuList;t.push(p.key),m.setAppMenuList(t);const i=h.value[p.key];v.push({name:i})},g=()=>{v.push("/app_manage/app_store")};return(p,t)=>{const i=z,F=G,E=K,S=O,I=P,A=q;return M((l(),x("div",Z,[d.appList&&!n.value?(l(),x("div",ee,[e("div",te,[e("div",null,[e("div",se,s(a(o)("app")),1),e("div",ae,s(a(o)("versionInfo"))+" "+s(a(o)("currentVersion")),1)]),u(i,{onClick:g,class:"px-[15px]"},{default:c(()=>[oe,e("span",ne,s(a(o)("appStore")),1)]),_:1})]),e("div",pe,[(l(!0),x(j,null,D(d.appList,(r,B)=>(l(),x("div",{key:B,class:"app-item w-[280px] box-border !bg-[#fff] rounded-[6px] cursor-pointer mr-[20px] mb-[20px] overflow-hidden",onClick:fe=>L(r)},[e("div",ie,[u(F,{class:"w-[44px] h-[44px] rounded-[8px]",src:a(T)(r.icon),fit:"contain"},{error:c(()=>[re]),_:2},1032,["src"])]),e("div",le,[e("div",_e,s(r.title),1),u(E,{class:"box-item",effect:"light",content:r.desc,placement:"bottom-start"},{default:c(()=>[e("div",de,s(r.desc),1)]),_:2},1032,["content"])])],8,ce))),128)),!d.appList.length&&!n.value?(l(),U(I,{key:0,class:"mx-auto overview-empty"},{image:c(()=>[xe]),description:c(()=>[e("p",ue,[e("span",null,s(a(o)("descriptionLeft")),1),u(S,{type:"primary",onClick:g,class:"mx-[5px]"},{default:c(()=>[$(s(a(o)("link")),1)]),_:1}),e("span",null,s(a(o)("descriptionRight")),1)])]),_:1})):k("",!0)])])):k("",!0)])),[[A,n.value]])}}});const Be=X(me,[["__scopeId","data-v-e51b31c1"]]);export{Be as default};
