import{d as ae,O as te,f as le,r as p,n as oe,h as w,c as ne,a as r,t as c,u as n,e as a,w as i,N as e,i as m,y as se,I as B,B as P,aa as R,aO as ie,aP as pe,E as ce,ak as de,al as ue,am as re,a3 as me,ac as fe,Z as _e,_ as ge,$ as he,ad as ve,as as be,a4 as we}from"./index-022827e1.js";/* empty css                   *//* empty css                     *//* empty css                   *//* empty css                     */import{_ as xe}from"./index.vue_vue_type_style_index_0_lang-e2364250.js";/* empty css                 *//* empty css                *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                    */import{g as Ve,a as Ce,b as ye,s as Te,c as ke}from"./weapp-bd416c0f.js";import{a as Ee}from"./module-b035ca26.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                    */const Re={class:"main-container min-h-[300px] p-5 bg-[#fff] rounded-[4px]"},Ue={class:"flex justify-between items-center mb-[20px]"},ze={class:"text-page-title"},De={class:"mt-[50px]"},Fe={class:"mt-[16px] flex justify-end"},Ne={class:"dialog-footer"},We=ae({__name:"code",setup(Ie){const L=te(),x=le(),$=L.meta.title,V=p(!1),s=oe({page:1,limit:10,total:0,loading:!1,data:[]}),d=p({desc:"",code:"",path:"",content:""}),C=p("");Ee().then(l=>{l.data.data&&l.data.data.auth_code&&(C.value=l.data.data.auth_code,T())}).catch(()=>{});const U=p({app_id:"",app_secret:""});Ve().then(l=>{U.value=l.data});const y=p("/channel/weapp/code"),M=l=>{x.push({path:y.value})},z=p(null),f=(l=1)=>{s.loading=!0,s.page=l,ye({page:s.page,limit:s.limit}).then(t=>{s.loading=!1,s.data=t.data.data,s.total=t.data.total,l==1&&s.data.length&&s.data[0].status==0&&F(s.data[0].task_key)}).catch(()=>{s.loading=!1})};f();const S=()=>{z.value.clearValidate()},g=p(!1),D=()=>{if(!C.value){A();return}if(!U.value.app_id){O();return}g.value||(g.value=!0,v.value="",Te(d.value).then(l=>{f(),T(),g.value=!1}).catch(()=>{g.value=!1}))},j=()=>{R.alert(e("localInsertTips"),e("warning"),{confirmButtonText:e("confirm")})},v=p(""),T=()=>{C.value&&Ce().then(l=>{l.data&&(v.value=`<img src="${l.data}" class="w-[150px]">`)}).catch()},F=l=>{ke(l).then(t=>{const u=t.data.data??[];if(u[0]&&u[0].length){const h=u[0][u[0].length-1];if(h.code==0){f();return}if(h.code==1&&h.percent==100){f(),T();return}setTimeout(()=>{F(l)},2e3)}})},A=()=>{R.confirm(e("authTips"),e("warning"),{distinguishCancelAndClose:!0,confirmButtonText:e("toBind"),cancelButtonText:e("toNiucloud")}).then(()=>{x.push({path:"/app/authorize"})}).catch(l=>{l==="cancel"&&window.open("https://www.niucloud.com/app")})},O=()=>{R.confirm(e("weappTips"),e("warning"),{confirmButtonText:e("toSetting"),cancelButtonText:e("cancel")}).then(()=>{x.push({path:"/channel/weapp/config"})}).catch(l=>{})},N=p(""),k=p(!1),Z=l=>{N.value=l.fail_reason,k.value=!0};return(l,t)=>{const u=ie,h=pe,_=ce,b=de,q=ue,G=re,H=me,J=fe,W=_e,E=ge,K=xe,Q=he,I=ve,X=be,Y=we;return w(),ne("div",Re,[r("div",Ue,[r("span",ze,c(n($)),1)]),a(h,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=o=>y.value=o),class:"demo-tabs",onTabChange:M},{default:i(()=>[a(u,{label:n(e)("weappAccessFlow"),name:"/channel/weapp"},null,8,["label"]),a(u,{label:n(e)("subscribeMessage"),name:"/channel/weapp/message"},null,8,["label"]),a(u,{label:n(e)("weappRelease"),name:"/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),a(J,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[r("div",De,[a(_,{type:"primary",onClick:D,loading:g.value,disabled:s.loading},{default:i(()=>[m(c(n(e)("cloudRelease")),1)]),_:1},8,["loading","disabled"]),a(_,{onClick:j,disabled:s.loading},{default:i(()=>[m(c(n(e)("localRelease")),1)]),_:1},8,["disabled"])]),se((w(),B(G,{class:"mt-[15px]",data:s.data,size:"default"},{empty:i(()=>[r("span",null,c(n(e)("emptyData")),1)]),default:i(()=>[a(b,{prop:"version",label:n(e)("code"),align:"left"},null,8,["label"]),a(b,{prop:"status_name",label:n(e)("status"),align:"left"},{default:i(({row:o})=>[r("div",null,c(o.status_name),1)]),_:1},8,["label"]),a(b,{prop:"create_time",label:n(e)("createTime"),align:"center"},null,8,["label"]),a(b,{label:n(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:i(({row:o,$index:ee})=>[v.value&&ee==0&&o.status==1&&s.page==1?(w(),B(q,{key:0,content:v.value,"raw-content":"",effect:"light"},{default:i(()=>[a(_,{type:"primary",link:""},{default:i(()=>[m(c(n(e)("preview")),1)]),_:1})]),_:1},8,["content"])):P("",!0),o.status==-1?(w(),B(_,{key:1,type:"primary",link:"",onClick:Pe=>Z(o)},{default:i(()=>[m(c(n(e)("failReason")),1)]),_:2},1032,["onClick"])):P("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[Y,s.loading]]),r("div",Fe,[a(H,{"current-page":s.page,"onUpdate:current-page":t[1]||(t[1]=o=>s.page=o),"page-size":s.limit,"onUpdate:page-size":t[2]||(t[2]=o=>s.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:s.total,onSizeChange:f,onCurrentChange:f},null,8,["current-page","page-size","total"])])]),_:1}),a(I,{modelValue:V.value,"onUpdate:modelValue":t[7]||(t[7]=o=>V.value=o),title:n(e)("codeDownTwoDesc"),width:"30%","before-close":S},{footer:i(()=>[r("span",Ne,[a(_,{onClick:t[6]||(t[6]=o=>V.value=!1)},{default:i(()=>[m(c(n(e)("cancel")),1)]),_:1}),a(_,{type:"primary",onClick:D},{default:i(()=>[m(c(n(e)("confirm")),1)]),_:1})])]),default:i(()=>[a(Q,{ref_key:"ruleFormRef",ref:z,model:d.value,"label-width":"120px"},{default:i(()=>[a(E,{prop:"code",label:n(e)("code")},{default:i(()=>[a(W,{modelValue:d.value.code,"onUpdate:modelValue":t[3]||(t[3]=o=>d.value.code=o),placeholder:n(e)("codePlaceholder"),onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(E,{prop:"path",label:n(e)("path")},{default:i(()=>[a(K,{modelValue:d.value.path,"onUpdate:modelValue":t[4]||(t[4]=o=>d.value.path=o),api:"weapp/upload",accept:".zip"},null,8,["modelValue","accept"])]),_:1},8,["label"]),a(E,{label:n(e)("content")},{default:i(()=>[a(W,{type:"textarea",modelValue:d.value.content,"onUpdate:modelValue":t[5]||(t[5]=o=>d.value.content=o),placeholder:n(e)("contentPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),a(I,{modelValue:k.value,"onUpdate:modelValue":t[8]||(t[8]=o=>k.value=o),title:n(e)("failReason"),width:"60%"},{default:i(()=>[a(X,{class:"h-[60vh] w-full whitespace-pre p-[20px]"},{default:i(()=>[m(c(N.value),1)]),_:1})]),_:1},8,["modelValue","title"])])}}});const ia=Be(We,[["__scopeId","data-v-fef1a4e9"]]);export{ia as default};
