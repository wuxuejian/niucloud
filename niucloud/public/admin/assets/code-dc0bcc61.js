import{d as pe,x as ue,f as de,r as u,n as re,h as v,c as P,e as l,w as n,a as g,t as p,u as o,q as e,i as r,B as x,R as ce,s as C,a4 as T,G as A,m as me,aw as fe,ax as ge,E as _e,ab as ve,aU as he,ac as be,W as we,a6 as Ve,K as ye,L as ke,M as xe,X as Ce,V as Te,Y as Ee}from"./index-34979a7f.js";/* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                     */import{_ as Ue}from"./index.vue_vue_type_style_index_0_lang-65645d39.js";/* empty css                 *//* empty css                *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                    */import{g as Be,a as Re,b as ze,s as Le,c as We}from"./weapp-d2859b61.js";import{a as De}from"./module-610833c0.js";import{s as Fe}from"./wxoplatform-ce4e21d6.js";/* empty css                    */const Me={class:"main-container"},Ne={class:"flex justify-between items-center"},Se={class:"text-page-title"},$e={key:0,class:"mt-[20px]"},Pe={class:"mt-[16px] flex justify-end"},Ae={class:"dialog-footer"},Ie=["innerHTML"],je={class:"flex justify-end"},ga=pe({__name:"code",setup(Ke){const I=ue(),E=de(),j=I.meta.title,U=u(!1),w=u(!0),i=re({page:1,limit:10,total:0,loading:!1,data:[]}),m=u({desc:"",code:"",path:"",content:""}),h=u(!1),B=u("");De().then(s=>{s.data.data&&s.data.data.auth_code&&(B.value=s.data.data.auth_code,y()),w.value=!1}).catch(()=>{w.value=!1});const R=u({app_id:"",app_secret:"",is_authorization:0});Be().then(s=>{R.value=s.data});const z=u("/channel/weapp/code"),K=s=>{E.push({path:z.value})},F=u(null),_=(s=1)=>{i.loading=!0,i.page=s,ze({page:i.page,limit:i.limit}).then(t=>{i.loading=!1,i.data=t.data.data,i.total=t.data.total,s==1&&i.data.length&&i.data[0].status==0&&N(i.data[0].task_key)}).catch(()=>{i.loading=!1})};_();const H=()=>{F.value.clearValidate()},d=u(!1),M=()=>{if(!B.value){G();return}if(!R.value.app_id){X();return}d.value||(d.value=!0,V.value="",Le(m.value).then(s=>{_(),y(),d.value=!1}).catch(()=>{d.value=!1}))},q=()=>{T.alert(e("localInsertTips"),e("warning"),{confirmButtonText:e("confirm")})},V=u(""),y=()=>{B.value&&Re().then(s=>{s.data&&(V.value=`<img src="${s.data}" class="w-[150px]">`)}).catch()},N=s=>{We(s).then(t=>{const f=t.data.data??[];if(f[0]&&f[0].length){const b=f[0][f[0].length-1];if(b.code==0){_();return}if(b.code==1&&b.percent==100){_(),y(),!A.get("weappUploadTipsLock")&&(h.value=!0);return}setTimeout(()=>{N(s)},2e3)}})},G=()=>{me()=="admin"?T.confirm(e("authTips"),e("warning"),{distinguishCancelAndClose:!0,confirmButtonText:e("toBind"),cancelButtonText:e("toNiucloud")}).then(()=>{E.push({path:"/app/authorize"})}).catch(s=>{s==="cancel"&&window.open("https://www.niucloud.com/app")}):T.alert(e("siteAuthTips"),e("warning"))},X=()=>{T.confirm(e("weappTips"),e("warning"),{confirmButtonText:e("toSetting"),cancelButtonText:e("cancel")}).then(()=>{E.push({path:"/channel/weapp/config"})}).catch(s=>{})},S=u(""),L=u(!1),Y=s=>{S.value=s.fail_reason,L.value=!0},J=()=>{A.set({key:"weappUploadTipsLock",data:!0}),h.value=!1},O=()=>{d.value||(d.value=!0,Fe().then(()=>{_(),y(),d.value=!1}).catch(()=>{d.value=!1}))};return(s,t)=>{const f=fe,b=ge,c=_e,k=ve,Q=he,Z=be,ee=we,ae=Ve,$=ye,W=ke,te=Ue,le=xe,D=Ce,oe=Te,ne=Ee;return v(),P("div",Me,[l(ae,{class:"card !border-none",shadow:"never"},{default:n(()=>[g("div",Ne,[g("span",Se,p(o(j)),1)]),l(b,{modelValue:z.value,"onUpdate:modelValue":t[0]||(t[0]=a=>z.value=a),class:"my-[20px]",onTabChange:K},{default:n(()=>[l(f,{label:o(e)("weappAccessFlow"),name:"/channel/weapp"},null,8,["label"]),l(f,{label:o(e)("subscribeMessage"),name:"/channel/weapp/message"},null,8,["label"]),l(f,{label:o(e)("weappRelease"),name:"/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),R.value.is_authorization?x("",!0):(v(),P("div",$e,[l(c,{type:"primary",onClick:M,loading:d.value,disabled:w.value},{default:n(()=>[r(p(o(e)("cloudRelease")),1)]),_:1},8,["loading","disabled"]),l(c,{onClick:q,disabled:w.value},{default:n(()=>[r(p(o(e)("localRelease")),1)]),_:1},8,["disabled"])])),ce((v(),C(Z,{class:"mt-[15px]",data:i.data,size:"default"},{empty:n(()=>[g("span",null,p(o(e)("emptyData")),1)]),default:n(()=>[l(k,{prop:"version",label:o(e)("code"),align:"left"},null,8,["label"]),l(k,{prop:"status_name",label:o(e)("status"),align:"left"},{default:n(({row:a})=>[g("div",null,p(a.status_name),1)]),_:1},8,["label"]),l(k,{prop:"create_time",label:o(e)("createTime"),align:"center"},null,8,["label"]),l(k,{label:o(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:a,$index:se})=>[V.value&&se==0&&(a.status==1||a.status==2)&&i.page==1?(v(),C(Q,{key:0,content:V.value,"raw-content":"",effect:"light"},{default:n(()=>[l(c,{type:"primary",link:""},{default:n(()=>[r(p(o(e)("preview")),1)]),_:1})]),_:1},8,["content"])):x("",!0),a.status==-1||a.status==-2?(v(),C(c,{key:1,type:"primary",link:"",onClick:ie=>Y(a)},{default:n(()=>[r(p(o(e)("failReason")),1)]),_:2},1032,["onClick"])):x("",!0),a.status==-2?(v(),C(c,{key:2,type:"primary",link:"",onClick:ie=>O(a),loading:d.value},{default:n(()=>[r(p(o(e)("againUpload")),1)]),_:2},1032,["onClick","loading"])):x("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[ne,i.loading]]),g("div",Pe,[l(ee,{"current-page":i.page,"onUpdate:current-page":t[1]||(t[1]=a=>i.page=a),"page-size":i.limit,"onUpdate:page-size":t[2]||(t[2]=a=>i.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:t[3]||(t[3]=a=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])]),_:1}),l(D,{modelValue:U.value,"onUpdate:modelValue":t[8]||(t[8]=a=>U.value=a),title:o(e)("codeDownTwoDesc"),width:"30%","before-close":H},{footer:n(()=>[g("span",Ae,[l(c,{onClick:t[7]||(t[7]=a=>U.value=!1)},{default:n(()=>[r(p(o(e)("cancel")),1)]),_:1}),l(c,{type:"primary",onClick:M},{default:n(()=>[r(p(o(e)("confirm")),1)]),_:1})])]),default:n(()=>[l(le,{ref_key:"ruleFormRef",ref:F,model:m.value,"label-width":"120px"},{default:n(()=>[l(W,{prop:"code",label:o(e)("code")},{default:n(()=>[l($,{modelValue:m.value.code,"onUpdate:modelValue":t[4]||(t[4]=a=>m.value.code=a),placeholder:o(e)("codePlaceholder"),onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(W,{prop:"path",label:o(e)("path")},{default:n(()=>[l(te,{modelValue:m.value.path,"onUpdate:modelValue":t[5]||(t[5]=a=>m.value.path=a),api:"weapp/upload",accept:".zip"},null,8,["modelValue","accept"])]),_:1},8,["label"]),l(W,{label:o(e)("content")},{default:n(()=>[l($,{type:"textarea",modelValue:m.value.content,"onUpdate:modelValue":t[6]||(t[6]=a=>m.value.content=a),placeholder:o(e)("contentPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(D,{modelValue:L.value,"onUpdate:modelValue":t[9]||(t[9]=a=>L.value=a),title:o(e)("failReason"),width:"60%"},{default:n(()=>[l(oe,{class:"h-[60vh] w-full whitespace-pre p-[20px]"},{default:n(()=>[r(p(S.value),1)]),_:1})]),_:1},8,["modelValue","title"]),l(D,{modelValue:h.value,"onUpdate:modelValue":t[11]||(t[11]=a=>h.value=a),title:o(e)("warning"),width:"500px",draggable:""},{footer:n(()=>[g("div",je,[l(c,{onClick:J,type:"primary"},{default:n(()=>[r(p(o(e)("knownToKnow")),1)]),_:1}),l(c,{onClick:t[10]||(t[10]=a=>h.value=!1),type:"primary",plain:""},{default:n(()=>[r(p(o(e)("confirm")),1)]),_:1})])]),default:n(()=>[g("span",{innerHTML:o(e)("uploadSuccessTips")},null,8,Ie)]),_:1},8,["modelValue","title"])])}}});export{ga as default};
