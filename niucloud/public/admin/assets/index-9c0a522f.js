import{N as A,d as H,j as K,n as M,O,l as P,r as R,c as n,a as e,u as o,t as r,B as g,e as d,w as f,C as T,P as q,F,Q as j,R as G,E as J,S as Q,J as W,T as X,U as Y,p as Z,g as tt,h as i,A as E,i as et,v,V as st,W as ot,D as at,G as y,X as nt}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                *//* empty css                  */import{_ as it}from"./icon-addon-339e16d0.js";import{_ as pt}from"./member_head-a897263d.js";import{_ as rt}from"./empty-77b60adb.js";import{g as lt}from"./addon-36ff97ba.js";import{_ as ct}from"./_plugin-vue_export-helper-c27b6911.js";function dt(l){return A.get("home/site",{params:l})}const w=l=>(Z("data-v-5d6ac4bc"),l=l(),tt(),l),_t={class:"flex justify-between items-center py-[24px] pl-[62px] pr-[64px] home-head"},mt={key:0,class:"flex items-center"},xt=["src"],ut={key:1,class:"w-[32x] h-[32px] rounded-full",src:it,alt:""},ft={class:"ml-[10px] text-[16px] font-bold"},ht={class:"flex items-center"},gt={class:"mr-[12px] text-[14px]"},vt={class:"w-[1200px] m-auto mt-[62px]"},yt={class:"flex justify-between items-center"},wt=w(()=>e("span",{class:"text-[24px] font-bold"},"站点列表",-1)),kt={class:"flex justify-between items-center mt-[18px]"},bt={class:"w-[800px] text-[14px] whitespace-nowrap"},Ct=["onClick"],St={class:"min-h-[580px]"},It={class:"flex flex-wrap mt-[30px]"},Ft=["onClick"],jt={class:"flex items-center px-[24px] pt-[22px] pb-[16px] bg-[#F0F2F4] home-item-head"},Et=["src"],$t={key:1,class:"w-[48px] h-[48px] mr-[15px] rounded-[50%] overflow-hidden",src:pt},Vt={class:"flex flex-col flex-1 justify-center"},Dt={class:"flex items-center flex-wrap"},zt={class:"text-[16px] text-[#000] max-w-[145px] font-bold truncate mr-[10px]"},Bt={key:0,class:"flex items-center justify-center min-w-[42px] h-[18px] bg-[#FF5500] rounded-tl-md rounded-br-md items-tab"},Nt={class:"text-[12px] text-[#fff]"},Ut={class:"text-[12px] mt-[3px] text-[#555]"},Lt={class:"px-[24px] py-[20px] text-[#6D7278]"},At={class:"text-[14px]"},Ht={class:"text-[14px] mt-[2px]"},Kt={key:0,class:"m-auto"},Mt=w(()=>e("img",{src:rt},null,-1)),Ot=w(()=>e("p",{class:"text-center text-gray-400"},"暂无站点",-1)),Pt=[Mt,Ot],Rt={class:"mt-[16px] flex justify-end"},Tt=H({__name:"index",setup(l){const k=K(),a=M({params:{keywords:"",page:1,limit:12,app:"",sort:!1},loading:!1,tableData:[],total:0}),{params:m,loading:b,tableData:C}=O(a),c=(p=1)=>{a.params.page=p,a.loading=!0,dt(a.params).then(s=>{a.tableData=s.data.data,a.total=s.data.total,a.loading=!1}).catch(()=>{a.loading=!1})};c();const S=p=>{a.params.app=p,c()},x=P(()=>at().website),$=p=>{y.set({key:"siteId",data:p.site_id}),y.set({key:"siteInfo",data:p}),y.set({key:"comparisonSiteIdStorage",data:p.site_id}),location.href=`${location.origin}/site/`},V=()=>{k.logout()},I=R([]);lt().then(({data:p})=>{const s=[];Object.keys(p).forEach(h=>{const u=p[h];u.type=="app"&&s.push(u)}),I.value=s}).catch();const D=()=>{G("加班加点研发中...")};return(p,s)=>{const h=J,u=Q,z=nt,B=W,N=X,U=Y;return i(),n("div",null,[e("div",_t,[o(x)?(i(),n("div",mt,[o(x).icon?(i(),n("img",{key:0,class:"w-[32x] h-[32px] rounded-full",src:o(E)(o(x).icon),alt:""},null,8,xt)):(i(),n("img",ut)),e("span",ft,r(o(x).site_name),1)])):g("",!0),e("div",ht,[e("span",gt,r(o(k).userInfo.username),1),e("span",{onClick:s[0]||(s[0]=t=>V()),class:"text-[14px] cursor-pointer text-[var(--el-color-primary)]"},"退出")])]),e("div",vt,[e("div",yt,[wt,d(h,{type:"primary",class:"w-[90px] !h-[34px]",onClick:D},{default:f(()=>[et("创建站点")]),_:1})]),e("div",kt,[e("div",bt,[d(u,{always:!0},{default:f(()=>[e("span",{class:v(["mr-[12px] cursor-pointer",{"text-[var(--el-color-primary)]":o(m).app==""}]),onClick:s[1]||(s[1]=t=>S(""))},"所有应用",2),(i(!0),n(F,null,j(I.value,(t,_)=>(i(),n("span",{class:v(["mr-[12px] cursor-pointer",{"text-[var(--el-color-primary)]":o(m).app==t.key}]),onClick:L=>S(t.key),key:_},r(t.title),11,Ct))),128))]),_:1})]),d(B,{modelValue:o(m).keywords,"onUpdate:modelValue":s[3]||(s[3]=t=>o(m).keywords=t),class:"!w-[300px] !h-[34px]",placeholder:"请输入要搜索的站点名称",onKeyup:s[4]||(s[4]=T(t=>c(),["enter","native"]))},{suffix:f(()=>[d(z,{onClick:s[2]||(s[2]=st(t=>c(),["stop"])),class:"cursor-pointer"},{default:f(()=>[d(o(ot))]),_:1})]),_:1},8,["modelValue"])]),e("div",St,[q((i(),n("div",It,[(i(!0),n(F,null,j(o(C),(t,_)=>(i(),n("div",{key:_,onClick:L=>$(t),class:v(["home-item w-[285px] box-border mb-[20px] cursor-pointer",{"mr-[20px]":_==0||(_+1)%4!=0}])},[e("div",jt,[t.icon?(i(),n("img",{key:0,class:"w-[48px] h-[48px] mr-[15px] rounded-[50%] overflow-hidden",src:o(E)(t.icon)},null,8,Et)):(i(),n("img",$t)),e("div",Vt,[e("div",Dt,[e("span",zt,r(t.site_name),1),t.app_name?(i(),n("div",Bt,[e("span",Nt,r(t.app_name),1)])):g("",!0)]),e("span",Ut,r(t.create_time?t.create_time.split(" ")[0]:"--")+" 到 "+r(t.expire_time?t.expire_time.split(" ")[0]:"--"),1)])]),e("div",Lt,[e("p",At,"站点编号："+r(t.site_id),1),e("p",Ht,"站点套餐："+r(t.group_name||"--"),1)])],10,Ft))),128)),!o(C).length&&!o(b)?(i(),n("div",Kt,Pt)):g("",!0)])),[[U,o(b)]])]),e("div",Rt,[d(N,{"current-page":a.params.page,"onUpdate:current-page":s[5]||(s[5]=t=>a.params.page=t),"page-size":a.params.limit,"onUpdate:page-size":s[6]||(s[6]=t=>a.params.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:s[7]||(s[7]=t=>c()),onCurrentChange:c,"hide-on-single-page":!0},null,8,["current-page","page-size","total"])])])])}}});const re=ct(Tt,[["__scopeId","data-v-5d6ac4bc"]]);export{re as default};
