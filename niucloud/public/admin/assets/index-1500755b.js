import{d as M,R,a4 as W,r as S,f as a,g as t,u as s,B as i,y as x,x as h,n as g,F as E,z as V,Q as q,H as $,b9 as z,ba as U,e as n,A as O}from"./base-d79f9f62.js";/* empty css                   *//* empty css                 *//* empty css                *//* empty css                  */import{w as Q,d as T}from"./index-3fd412a3.js";import{_ as G}from"./icon-addon-339e16d0.js";import{_ as J}from"./member_head-a897263d.js";import{_ as P}from"./empty-77b60adb.js";import{E as X,M as Y}from"./index-2048a34f.js";import{b as Z,u as j}from"./index-6fcaf7b3.js";import{g as tt}from"./sys-3d5b784a.js";import{f as D,a as y}from"./storage-5316d819.js";import{g as et}from"./addon-3b05baad.js";import{b as st}from"./vue-router-fc35ac55.js";/* empty css                   */import{E as ot}from"./index-03649f16.js";import{E as at}from"./index-f249e665.js";import{v as nt}from"./directive-13582d99.js";import{a as rt}from"./index-542aa78e.js";import{_ as it}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-9e0d1e6c.js";import"./pinia-55149fa9.js";import"./system-d23898e7.js";import"./index-5dbb8f83.js";import"./index-bdfee32a.js";import"./index-427f5a83.js";import"./index-71aec1df.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./index-b6ca69fd.js";import"./error-78e43d3e.js";import"./index-34cd7f55.js";function pt(c){return Z.get("home/site",{params:c})}const v=c=>(z("data-v-1f185a37"),c=c(),U(),c),ct={class:"flex justify-between items-center py-[24px] pl-[62px] pr-[64px] home-head"},lt={class:"flex items-center"},dt=["src"],mt={key:1,class:"w-[32x] h-[32px] rounded-full",src:G,alt:""},_t={class:"ml-[10px] text-[16px] font-bold"},xt={class:"flex items-center"},ft={class:"mr-[12px] text-[14px]"},ut={class:"w-[1200px] m-auto mt-[62px]"},ht={class:"flex justify-between items-center"},gt=v(()=>t("span",{class:"text-[24px] font-bold"},"站点列表",-1)),yt={class:"flex justify-between items-center mt-[18px]"},vt={class:"flex items-center flex-wrap text-[14px] w-[800px]"},kt=["onClick"],wt={class:"flex flex-wrap mt-[30px]"},bt=["onClick"],Ct={class:"flex items-center px-[24px] pt-[22px] pb-[16px] bg-[#F0F2F4] home-item-head"},Ft=["src"],It={key:1,class:"w-[48px] h-[48px] mr-[15px] rounded-[50%] overflow-hidden",src:J},St={class:"flex flex-col flex-1 justify-center"},Et={class:"flex items-center flex-wrap"},Vt={class:"text-[16px] text-[#000] max-w-[145px] font-bold truncate mr-[10px]"},$t={key:0,class:"flex items-center justify-center min-w-[42px] h-[18px] bg-[#FF5500] rounded-tl-md rounded-br-md items-tab"},jt={class:"text-[12px] text-[#fff]"},Dt={class:"text-[12px] mt-[3px] text-[#555]"},Bt={class:"px-[24px] py-[20px] text-[#6D7278]"},Lt={class:"text-[14px]"},Nt={class:"text-[14px] mt-[2px]"},At={key:0,class:"m-auto"},Ht=v(()=>t("img",{src:P},null,-1)),Kt=v(()=>t("p",{class:"text-center text-gray-400"},"暂无站点",-1)),Mt=[Ht,Kt],Rt=M({__name:"index",setup(c){const k=j();st();const p=R({params:{keywords:"",page:1,limit:12,app:"",sort:!1},loading:!1,tableData:[]}),{params:d,loading:w,tableData:b}=W(p),f=()=>{p.loading=!0,pt(p.params).then(o=>{p.tableData=o.data.data,p.loading=!1}).catch(()=>{p.loading=!1})};f();const C=o=>{p.params.app=o,f()};let m=S({});(()=>{tt().then(o=>{m.value=o.data})})();const F=()=>{p.params.page=1,f()},B=o=>{y.set({key:"siteId",data:o.site_id}),y.set({key:"siteInfo",data:o}),y.set({key:"comparisonSiteIdStorage",data:o.site_id}),j().$patch(r=>{r.siteInfo=o}),location.href=`${location.origin}/site/`},L=()=>{k.logout()},I=S([]);et().then(({data:o})=>{const r=[];Object.keys(o).forEach(u=>{const _=o[u];_.type=="app"&&r.push(_)}),I.value=r}).catch();const N=()=>{rt("加班加点研发中...")};return(o,r)=>{const u=ot,_=X,A=at,H=nt;return n(),a("div",null,[t("div",ct,[t("div",lt,[s(m).icon?(n(),a("img",{key:0,class:"w-[32x] h-[32px] rounded-full",src:s(D)(s(m).icon),alt:""},null,8,dt)):(n(),a("img",mt)),t("span",_t,i(s(m).site_name),1)]),t("div",xt,[t("span",ft,i(s(k).userInfo.username),1),t("span",{onClick:r[0]||(r[0]=e=>L()),class:"text-[14px] cursor-pointer text-[var(--el-color-primary)]"},"退出")])]),t("div",ut,[t("div",ht,[gt,x(u,{type:"primary",class:"w-[90px] !h-[34px]",onClick:N},{default:h(()=>[O("创建站点")]),_:1})]),t("div",yt,[t("div",vt,[t("span",{class:g(["mr-[12px] cursor-pointer",{"text-[var(--el-color-primary)]":s(d).app==""}]),onClick:r[1]||(r[1]=e=>C(""))},"所有应用",2),(n(!0),a(E,null,V(I.value,(e,l)=>(n(),a("span",{class:g(["mr-[12px] cursor-pointer",{"text-[var(--el-color-primary)]":s(d).app==e.key}]),onClick:K=>C(e.key),key:l},i(e.title),11,kt))),128))]),x(A,{modelValue:s(d).keywords,"onUpdate:modelValue":r[2]||(r[2]=e=>s(d).keywords=e),class:"!w-[300px] !h-[34px]",placeholder:"输入要搜索的站点名称",onKeyup:Q(F,["enter","native"])},{suffix:h(()=>[x(_,{onClick:T(F,["stop"]),class:"cursor-pointer"},{default:h(()=>[x(s(Y))]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeyup"])]),q((n(),a("div",wt,[(n(!0),a(E,null,V(s(b),(e,l)=>(n(),a("div",{key:l,onClick:K=>B(e),class:g(["home-item w-[285px] box-border mb-[20px] cursor-pointer",{"mr-[20px]":l==0||(l+1)%4!=0}])},[t("div",Ct,[e.logo?(n(),a("img",{key:0,class:"w-[48px] h-[48px] mr-[15px] rounded-[50%] overflow-hidden",src:s(D)(e.logo)},null,8,Ft)):(n(),a("img",It)),t("div",St,[t("div",Et,[t("span",Vt,i(e.site_name),1),e.app_name?(n(),a("div",$t,[t("span",jt,i(e.app_name),1)])):$("",!0)]),t("span",Dt,i(e.create_time?e.create_time.split(" ")[0]:"--")+" 到 "+i(e.expire_time?e.expire_time.split(" ")[0]:"--"),1)])]),t("div",Bt,[t("p",Lt,"站点编号："+i(e.site_id),1),t("p",Nt,"站点套餐："+i(e.group_name||"--"),1)])],10,bt))),128)),!s(b).length&&!s(w)?(n(),a("div",At,Mt)):$("",!0)])),[[H,s(w)]])])])}}});const ke=it(Rt,[["__scopeId","data-v-1f185a37"]]);export{ke as default};
