import{d as Q,x as X,r as w,n as Z,f as ee,h as p,c as h,e as l,w as i,a as d,t as r,u as o,i as m,q as t,F as S,T as C,s as v,R as ae,A as te,B as le,b9 as U,j as B,U as oe,a4 as se,E as ie,K as ne,L as re,aa as pe,aB as de,bG as ue,M as me,a6 as ce,ab as _e,aj as fe,bi as ge,ac as he,W as ve,Y as be}from"./index-34979a7f.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                    *//* empty css                        *//* empty css                *//* empty css                     *//* empty css                       */import{_ as xe}from"./site_logo-5ed68b79.js";import{k as ye,v as we,w as ke,x as Pe,y as Se,z as Ce}from"./site-ef31b576.js";import{_ as Ve}from"./edit-site.vue_vue_type_script_setup_true_lang-8d78a616.js";import{g as De}from"./addon-37fd48cc.js";/* empty css                  *//* empty css                   *//* empty css                  */import"./member_head-a897263d.js";import"./user-6b2d33a6.js";const Ee={class:"main-container"},Ie={class:"flex justify-between items-center"},Te={class:"text-page-title"},Le={class:"mt-[20px]"},$e={class:"flex items-center"},Fe=["src"],Ue={key:1,class:"w-[50px] h-[50px] mr-[10px]",src:xe,alt:""},Be={class:"flex flex flex-col"},Ye={class:"flex items-center"},Ne={class:"flex flex flex-col"},je={key:0},ze={key:1},Me=d("span",{class:"el-dropdown-link ml-[12px] h-[20px] leading-[24px] text-[var(--el-color-primary)]"}," 更多 ",-1),Re={class:"flex flex-col py-[5px] px-[10px]"},Ge={class:"mt-[16px] flex justify-end"},xa=Q({__name:"list",setup(He){const V=X(),Y=V.meta.title,b=w({all:[]}),D=w([]),s=Z({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{keywords:"",group_id:"",app:"all",status:"",site_domain:"",create_time:[],expire_time:[]}});s.searchParam.status=V.query.id||"",(async()=>{const n=await(await ye({})).data;b.value.all=n,n.forEach((a,u)=>{b.value[a.app]||(b.value[a.app]=[]),b.value[a.app].push(a)})})(),(async()=>{D.value=await(await we()).data})();const E=w(),N=n=>{n&&(n.resetFields(),_())},j=()=>{s.searchParam.group_id=""},I=w([]);De().then(({data:n})=>{I.value=n}).catch();const _=(n=1)=>{s.loading=!0,s.page=n,s.searchParam.app=s.searchParam.app=="all"?"":s.searchParam.app,ke({page:s.page,limit:s.limit,...s.searchParam}).then(a=>{s.loading=!1,s.data=a.data.data,s.total=a.data.total}).catch(()=>{s.loading=!1})};_();const z=ee(),y=w(null),M=n=>{y.value.setFormData(),y.value.showDialog=!0},R=n=>{z.push({path:"/admin/site/info",query:{id:n.site_id}})},G=n=>{y.value.setFormData(n),y.value.showDialog=!0},T=(n=0)=>{if(window.localStorage.setItem("site.token",U()),window.localStorage.setItem("site.comparisonTokenStorage",U()),window.localStorage.setItem("site.userinfo",JSON.stringify(B().userInfo)),n){const a=B().userInfo;if(a.is_super_admin!=null&&!a.is_super_admin&&(a.site_ids||[]).indexOf(n)==-1){oe({message:t("noPermission"),type:"warning"});return}window.localStorage.setItem("site.siteId",n),window.localStorage.setItem("site.comparisonSiteIdStorage",n),window.open(`${location.origin}/site/`)}else window.open(`${location.origin}/home/index`)},H=(n,a)=>{n==1&&Pe({site_id:a}).then(u=>{_()}),n==3&&Se({site_id:a}).then(u=>{_()})},O=n=>{se.confirm(t("siteDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{Ce(n.site_id).then(a=>{_()}).catch(()=>{})})};return(n,a)=>{const u=ie,L=ne,g=re,x=pe,k=de,$=ue,q=me,F=ce,f=_e,P=fe,A=ge,J=he,K=ve,W=be;return p(),h("div",Ee,[l(F,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[d("div",Ie,[d("span",Te,r(o(Y)),1),d("div",null,[l(u,{type:"primary",class:"w-[100px]",onClick:M},{default:i(()=>[m(r(o(t)("addSite")),1)]),_:1}),l(u,{type:"default",class:"w-[100px]",onClick:a[0]||(a[0]=e=>T())},{default:i(()=>[m(r(o(t)("toSite")),1)]),_:1})])]),l(F,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[l(q,{inline:!0,model:s.searchParam,ref_key:"searchFormRef",ref:E},{default:i(()=>[l(g,{label:o(t)("siteName"),prop:"keywords"},{default:i(()=>[l(L,{modelValue:s.searchParam.keywords,"onUpdate:modelValue":a[1]||(a[1]=e=>s.searchParam.keywords=e),placeholder:o(t)("siteNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:o(t)("siteDomain"),prop:"site_domain"},{default:i(()=>[l(L,{modelValue:s.searchParam.site_domain,"onUpdate:modelValue":a[2]||(a[2]=e=>s.searchParam.site_domain=e),placeholder:o(t)("siteDomainPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:o(t)("app"),prop:"app_id"},{default:i(()=>[l(k,{modelValue:s.searchParam.app,"onUpdate:modelValue":a[3]||(a[3]=e=>s.searchParam.app=e),clearable:"",onChange:j,placeholder:o(t)("appIdPlaceholder"),class:"input-width"},{default:i(()=>[l(x,{label:o(t)("selectPlaceholder"),value:"all"},null,8,["label"]),(p(!0),h(S,null,C(Object.values(I.value),(e,c)=>(p(),v(x,{label:e.title,value:e.key,key:c},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:o(t)("groupId"),prop:"group_id"},{default:i(()=>[l(k,{modelValue:s.searchParam.group_id,"onUpdate:modelValue":a[4]||(a[4]=e=>s.searchParam.group_id=e),clearable:"",placeholder:o(t)("groupIdPlaceholder"),class:"input-width"},{default:i(()=>[l(x,{label:o(t)("selectPlaceholder"),value:""},null,8,["label"]),(p(!0),h(S,null,C(b.value.all,(e,c)=>(p(),v(x,{label:e.group_name,value:e.group_id,key:c},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:o(t)("status"),prop:"status"},{default:i(()=>[l(k,{modelValue:s.searchParam.status,"onUpdate:modelValue":a[5]||(a[5]=e=>s.searchParam.status=e),clearable:"",placeholder:o(t)("groupIdPlaceholder"),class:"input-width"},{default:i(()=>[l(x,{label:o(t)("selectPlaceholder"),value:""},null,8,["label"]),(p(!0),h(S,null,C(D.value,(e,c)=>(p(),v(x,{label:e,value:c,key:c},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:o(t)("createTime"),prop:"create_time"},{default:i(()=>[l($,{modelValue:s.searchParam.create_time,"onUpdate:modelValue":a[6]||(a[6]=e=>s.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(t)("startDate"),"end-placeholder":o(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(g,{label:o(t)("expireTime"),prop:"expire_time"},{default:i(()=>[l($,{modelValue:s.searchParam.expire_time,"onUpdate:modelValue":a[7]||(a[7]=e=>s.searchParam.expire_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(t)("startDate"),"end-placeholder":o(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(g,null,{default:i(()=>[l(u,{type:"primary",onClick:a[8]||(a[8]=e=>_())},{default:i(()=>[m(r(o(t)("search")),1)]),_:1}),l(u,{onClick:a[9]||(a[9]=e=>N(E.value))},{default:i(()=>[m(r(o(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",Le,[ae((p(),v(J,{data:s.data,size:"large"},{empty:i(()=>[d("span",null,r(s.loading?"":o(t)("emptyData")),1)]),default:i(()=>[l(f,{prop:"site_id",label:o(t)("siteId"),width:"100","show-overflow-tooltip":!0},null,8,["label"]),l(f,{label:o(t)("siteInfo"),width:"300",align:"left"},{default:i(({row:e})=>[d("div",$e,[e.logo?(p(),h("img",{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:o(te)(e.logo),alt:""},null,8,Fe)):(p(),h("img",Ue)),d("div",Be,[d("span",null,r(e.site_name||""),1)])])]),_:1},8,["label"]),l(f,{label:o(t)("manager"),width:"150",align:"left"},{default:i(({row:e})=>[d("div",Ye,[d("div",Ne,[d("span",null,r(e.admin.username||""),1)])])]),_:1},8,["label"]),l(f,{prop:"group_name",label:o(t)("groupId"),width:"150","show-overflow-tooltip":!0},null,8,["label"]),l(f,{prop:"site_domain",label:o(t)("siteDomain"),width:"150","show-overflow-tooltip":!0},null,8,["label"]),l(f,{prop:"create_time",label:o(t)("createTime"),width:"250","show-overflow-tooltip":!0},null,8,["label"]),l(f,{prop:"expire_time",label:o(t)("expireTime"),width:"250","show-overflow-tooltip":!0},{default:i(({row:e})=>[e.expire_time==0?(p(),h("div",je,"永久")):(p(),h("div",ze,r(e.expire_time),1))]),_:1},8,["label"]),l(f,{label:o(t)("status"),width:"100",align:"center"},{default:i(({row:e})=>[e.status==1?(p(),v(P,{key:0,class:"ml-2",type:"success"},{default:i(()=>[m(r(e.status_name),1)]),_:2},1024)):e.status==3?(p(),v(P,{key:1,class:"ml-2",type:"error"},{default:i(()=>[m(r(e.status_name),1)]),_:2},1024)):(p(),v(P,{key:2,class:"ml-2",type:"error"},{default:i(()=>[m(r(e.status_name),1)]),_:2},1024))]),_:1},8,["label"]),l(f,{label:o(t)("operation"),"min-width":"210",align:"right",fixed:"right"},{default:i(({row:e})=>[e.status==1||e.status==3?(p(),v(u,{key:0,type:"primary",link:"",onClick:c=>H(e.status,e.site_id)},{default:i(()=>[m(r(e.status==1?o(t)("closeTxt"):o(t)("openTxt")),1)]),_:2},1032,["onClick"])):le("",!0),l(u,{type:"primary",link:"",onClick:c=>T(e.site_id)},{default:i(()=>[m(r(o(t)("toSite")),1)]),_:2},1032,["onClick"]),l(A,null,{dropdown:i(()=>[d("div",Re,[l(u,{type:"primary",link:"",onClick:c=>G(e)},{default:i(()=>[m(r(o(t)("edit")),1)]),_:2},1032,["onClick"]),l(u,{type:"primary",class:"mt-[5px] !ml-[0]",link:"",onClick:c=>O(e)},{default:i(()=>[m(r(o(t)("delete")),1)]),_:2},1032,["onClick"]),l(u,{type:"primary",class:"mt-[5px] !ml-[0]",link:"",onClick:c=>R(e)},{default:i(()=>[m(r(o(t)("info")),1)]),_:2},1032,["onClick"])])]),default:i(()=>[Me]),_:2},1024)]),_:1},8,["label"])]),_:1},8,["data"])),[[W,s.loading]]),d("div",Ge,[l(K,{"current-page":s.page,"onUpdate:current-page":a[10]||(a[10]=e=>s.page=e),"page-size":s.limit,"onUpdate:page-size":a[11]||(a[11]=e=>s.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:s.total,onSizeChange:a[12]||(a[12]=e=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])])]),_:1}),l(Ve,{ref_key:"addSiteDialog",ref:y,onComplete:a[13]||(a[13]=e=>_())},null,512)])}}});export{xa as default};
