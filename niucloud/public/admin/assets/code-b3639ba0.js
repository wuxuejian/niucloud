import{d as K,O as Q,f as Z,r,n as ee,h as w,c as B,a as u,t as p,u as o,e as a,w as i,N as e,i as h,y as ae,I as te,B as R,a7 as k,aC as le,aD as oe,E as ne,ag as se,ah as ie,ai as pe,as as ce,_ as de,W as re,X as ue,Y as me,a9 as _e,$ as fe}from"./index-b19d04dd.js";/* empty css                   *//* empty css                   *//* empty css                */import{_ as ge}from"./index.vue_vue_type_style_index_0_lang-488770a0.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                    */import{g as he,a as ve,b as be,s as we,c as xe}from"./weapp-349e7247.js";import{a as Ve}from"./module-3466fbf7.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                    */const ye={class:"main-container min-h-[300px] p-5"},Te={class:"flex justify-between items-center mb-[20px]"},Ee={class:"text-[20px]"},Be={class:"mt-[50px]"},ke={key:0,class:"text-error"},Ue={key:0,class:""},We={class:"mt-[16px] flex justify-end"},ze={class:"dialog-footer"},De=K({__name:"code",setup(Ne){const F=Q(),x=Z(),I=F.meta.title,V=r(!1),t=ee({page:1,limit:10,total:0,loading:!1,data:[]}),c=r({desc:"",code:"",path:"",content:""}),C=r("");Ve().then(n=>{n.data.data&&n.data.data.auth_code&&(C.value=n.data.data.auth_code,T())}).catch(()=>{});const U=r({app_id:"",app_secret:""});he().then(n=>{U.value=n.data});const y=r("/channel/weapp/code"),P=n=>{x.push({path:y.value})},W=r(null),m=(n=1)=>{t.loading=!0,t.page=n,be({page:t.page,limit:t.limit}).then(l=>{t.loading=!1,t.data=l.data.data,t.total=l.data.total,n==1&&t.data.length&&t.data[0].status==0&&D(t.data[0].task_key)}).catch(()=>{t.loading=!1})};m();const L=()=>{W.value.clearValidate()},_=r(!1),z=()=>{if(!C.value){$();return}if(!U.value.app_id){j();return}_.value||(_.value=!0,v.value="",we(c.value).then(n=>{m(),T(),_.value=!1}).catch(()=>{_.value=!1}))},M=()=>{k.alert(e("localInsertTips"),e("warning"),{confirmButtonText:e("confirm")})},v=r(""),T=()=>{C.value&&ve().then(n=>{n.data&&(v.value=`<img src="${n.data}" class="w-[150px]">`)}).catch()},D=n=>{xe(n).then(l=>{const d=l.data.data??[];if(d[0]&&d[0].length){const f=d[0][d[0].length-1];if(f.code==0){m();return}if(f.code==1&&f.percent==100){m(),T();return}setTimeout(()=>{D(n)},2e3)}})},$=()=>{k.confirm(e("authTips"),e("warning"),{distinguishCancelAndClose:!0,confirmButtonText:e("toBind"),cancelButtonText:e("toNiucloud")}).then(()=>{x.push({path:"/app/authorize"})}).catch(n=>{n==="cancel"&&window.open("https://www.niucloud.com/app")})},j=()=>{k.confirm(e("weappTips"),e("warning"),{confirmButtonText:e("toSetting"),cancelButtonText:e("cancel")}).then(()=>{x.push({path:"/channel/weapp/config"})}).catch(n=>{})};return(n,l)=>{const d=le,f=oe,g=ne,b=se,A=ie,S=pe,O=ce,X=de,N=re,E=ue,Y=ge,q=me,G=_e,H=fe;return w(),B("div",ye,[u("div",Te,[u("span",Ee,p(o(I)),1)]),a(f,{modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=s=>y.value=s),class:"demo-tabs",onTabChange:P},{default:i(()=>[a(d,{label:o(e)("weappAccessFlow"),name:"/channel/weapp"},null,8,["label"]),a(d,{label:o(e)("subscribeMessage"),name:"/channel/weapp/message"},null,8,["label"]),a(d,{label:o(e)("weappRelease"),name:"/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),a(X,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[u("div",Be,[a(g,{type:"primary",onClick:z,loading:_.value,disabled:t.loading},{default:i(()=>[h(p(o(e)("cloudRelease")),1)]),_:1},8,["loading","disabled"]),a(g,{onClick:M,disabled:t.loading},{default:i(()=>[h(p(o(e)("localRelease")),1)]),_:1},8,["disabled"])]),ae((w(),te(S,{class:"mt-[15px]",data:t.data,size:"default"},{empty:i(()=>[u("span",null,p(o(e)("emptyData")),1)]),default:i(()=>[a(b,{prop:"version",label:o(e)("code"),align:"left"},null,8,["label"]),a(b,{prop:"status_name",label:o(e)("status"),align:"left"},{default:i(({row:s})=>[u("div",null,p(s.status_name),1),s.status==-1?(w(),B("div",ke,p(o(e)("failReason"))+p(s.fail_reason),1)):R("",!0)]),_:1},8,["label"]),a(b,{prop:"create_time",label:o(e)("createTime"),align:"center"},null,8,["label"]),a(b,{label:o(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:i(({row:s,$index:J})=>[v.value&&J==0&&s.status==1&&t.page==1?(w(),B("div",Ue,[a(A,{content:v.value,"raw-content":"",effect:"light"},{default:i(()=>[a(g,{type:"primary",link:""},{default:i(()=>[h(p(o(e)("preview")),1)]),_:1})]),_:1},8,["content"])])):R("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[H,t.loading]]),u("div",We,[a(O,{"current-page":t.page,"onUpdate:current-page":l[1]||(l[1]=s=>t.page=s),"page-size":t.limit,"onUpdate:page-size":l[2]||(l[2]=s=>t.limit=s),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:m,onCurrentChange:m},null,8,["current-page","page-size","total"])])]),_:1}),a(G,{modelValue:V.value,"onUpdate:modelValue":l[7]||(l[7]=s=>V.value=s),title:o(e)("codeDownTwoDesc"),width:"30%","before-close":L},{footer:i(()=>[u("span",ze,[a(g,{onClick:l[6]||(l[6]=s=>V.value=!1)},{default:i(()=>[h(p(o(e)("cancel")),1)]),_:1}),a(g,{type:"primary",onClick:z},{default:i(()=>[h(p(o(e)("confirm")),1)]),_:1})])]),default:i(()=>[a(q,{ref_key:"ruleFormRef",ref:W,model:c.value,"label-width":"120px"},{default:i(()=>[a(E,{prop:"code",label:o(e)("code")},{default:i(()=>[a(N,{modelValue:c.value.code,"onUpdate:modelValue":l[3]||(l[3]=s=>c.value.code=s),placeholder:o(e)("codePlaceholder"),onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(E,{prop:"path",label:o(e)("path")},{default:i(()=>[a(Y,{modelValue:c.value.path,"onUpdate:modelValue":l[4]||(l[4]=s=>c.value.path=s),api:"weapp/upload",accept:".zip"},null,8,["modelValue","accept"])]),_:1},8,["label"]),a(E,{label:o(e)("content")},{default:i(()=>[a(N,{type:"textarea",modelValue:c.value.content,"onUpdate:modelValue":l[5]||(l[5]=s=>c.value.content=s),placeholder:o(e)("contentPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});const la=Ce(De,[["__scopeId","data-v-87e04cdb"]]);export{la as default};
