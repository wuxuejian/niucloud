import{d as ue,O as me,f as fe,r as _,n as he,v as ve,a1 as S,h as u,c as L,e as l,w as t,a as s,t as c,u as e,N as a,i as m,F as xe,G as ge,I as k,y as K,B as be,a8 as q,a4 as ye,R as ke,E as we,al as Ce,am as Ee,aJ as Te,aC as Fe,aD as Ve,X as De,W as Ne,Y as Se,$ as Be,ah as Pe,aj as Ae,as as $e,aK as Le,a2 as Ie,aB as Ge,ap as ze,aa as Oe,a0 as Re,p as Ue,g as Me,_ as Ke}from"./index-9d601459.js";/* empty css                   *//* empty css                   *//* empty css                     *//* empty css                *//* empty css                    *//* empty css                *//* empty css                    *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                  */import{r as qe,d as Je,s as We,p as Xe,q as Ye,t as He}from"./tools-42b28411.js";import{_ as Qe}from"./add-table.vue_vue_type_script_setup_true_lang-208500aa.js";const f=E=>(Ue("data-v-bd3522bc"),E=E(),Me(),E),Ze={class:"main-container"},je={class:"flex justify-between items-center mb-[10px]"},et={class:"text-[20px]"},tt=f(()=>s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 1",-1)),at={class:"text-[14px] text-[#303133] font-[700]"},lt={class:"text-[#999]"},nt={class:"mt-[20px] mb-[40px] h-[32px]"},ot=f(()=>s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 2",-1)),st={class:"text-[14px] text-[#303133] font-[700]"},it={class:"text-[#999]"},dt=f(()=>s("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1)),ct=f(()=>s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 3",-1)),rt={class:"text-[14px] text-[#303133] font-[700]"},pt={class:"text-[#999]"},_t=f(()=>s("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1)),ut=f(()=>s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 4",-1)),mt={class:"text-[14px] text-[#303133] font-[700]"},ft={class:"text-[#999]"},ht=f(()=>s("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1)),vt=f(()=>s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"}," 5",-1)),xt={class:"text-[14px] text-[#303133] font-[700]"},gt={class:"text-[#999]"},bt=f(()=>s("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1)),yt={class:"mt-[16px] flex justify-end"},kt={class:"flex h-[50vh]"},wt={class:"flex items-center"},Ct={class:"pl-[5px]"},Et={class:"ml-[20px]",style:{width:"calc(100% - 285px)"}},Tt=ue({__name:"index",setup(E){const J=me().meta.title,W=fe(),B=_("codeGeneration");let i=he({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{table_name:"",table_content:"",addon_name:""}});const I=_(),X=d=>{d&&(d.resetFields(),g())};ve(()=>{window.codeActiveName&&(B.value=window.codeActiveName+"",window.codeActiveName=null),g()});const g=(d=1)=>{i.loading=!0,i.page=d,qe({page:i.page,limit:i.limit,...i.searchParam}).then(n=>{i.loading=!1,i.data=n.data.data,i.total=n.data.total}).catch(()=>{i.loading=!1})},G=_([]),Y=d=>{Je({search:d}).then(n=>{G.value=n.data})},P=_(null),H=()=>{P.value.setFormData(),P.value.showDialog=!0},Q=d=>{q.confirm(a("codeDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{We(d).then(()=>{g()}).catch(()=>{})})},Z=d=>{W.push("/tools/code/edit?id="+d.id)},j=d=>{Xe({id:d}).then(n=>{i.loading=!1,q.confirm(n.msg!="2"?a("saveAndSyncText"):a("saveAndSyncText1"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel")}).then(()=>{z(d,3)}).catch(()=>{})}).catch(()=>{i.loading=!1})},z=(d,n)=>{i.loading=!0,Ye({id:d,generate_type:n}).then(r=>{ye({type:"success",message:"操作成功"}),n!=3?(i.loading=!1,window.open(ke(r.data.file),"_blank")):g()}).catch(()=>{i.loading=!1})},A=_([]),$=_(!1),T=_([]),F=_(!1),V=_(""),D=_(""),ee=d=>{$.value=!0,F.value=!0,V.value="",T.value=[],D.value="",He(d).then(n=>{A.value=n.data,T.value=ae(n.data.map(r=>r.file_dir+r.name)),V.value=A.value[0].content,F.value=!1}).catch(()=>{F.value=!1})},te=d=>{A.value.forEach(n=>{d.path===n.file_dir+n.name&&(V.value=n.content)})},ae=d=>{var n=[];if(Array.isArray(d))for(var r=0;r<d.length;++r)for(var h=d[r].split("/"),w=n,b=0;b<h.length;++b){for(var v=h[b],p=null,x=0;x<w.length;++x){var N=w[x];if(N.name===v){p=N;break}}p||(p={name:v,path:v.indexOf(".")<0?"":d[r],key:"k"+r+b+x},v.indexOf(".")<0&&(p.children=[]),p.path===d[0]&&(D.value=p.key),w.push(p)),p.children&&(w=p.children)}return n};return(d,n)=>{const r=we,h=Ce,w=Ee,b=Te,v=Fe,p=Ve,x=De,N=Ne,le=Se,O=Be,C=Pe,ne=Ae,oe=$e,se=Le,ie=S("Folder"),de=S("FolderOpened"),R=Ie,ce=S("Document"),re=Ge,U=ze,pe=S("highlightjs"),_e=Oe,M=Re;return u(),L("div",Ze,[l(O,{class:"box-card !border-none",shadow:"never"},{default:t(()=>[s("div",je,[s("span",et,c(e(J)),1)]),l(se,{modelValue:B.value,"onUpdate:modelValue":n[7]||(n[7]=o=>B.value=o),class:"demo-tabs"},{default:t(()=>[l(b,{label:e(a)("codeGeneration"),name:"codeGeneration"},{default:t(()=>[l(w,{direction:"vertical"},{default:t(()=>[l(h,null,{icon:t(()=>[tt]),title:t(()=>[s("p",at,c(e(a)("step1")),1)]),description:t(()=>[s("span",lt,c(e(a)("describe1")),1),s("div",nt,[l(r,{type:"primary",class:"w-[100px]",onClick:H},{default:t(()=>[m(c(e(a)("btn1")),1)]),_:1})])]),_:1}),l(h,null,{icon:t(()=>[ot]),title:t(()=>[s("p",st,c(e(a)("step2")),1)]),description:t(()=>[s("span",it,c(e(a)("describe2")),1),dt]),_:1}),l(h,null,{icon:t(()=>[ct]),title:t(()=>[s("p",rt,c(e(a)("step3")),1)]),description:t(()=>[s("span",pt,c(e(a)("describe3")),1),_t]),_:1}),l(h,null,{icon:t(()=>[ut]),title:t(()=>[s("p",mt,c(e(a)("step4")),1)]),description:t(()=>[s("span",ft,c(e(a)("describe4")),1),ht]),_:1}),l(h,null,{icon:t(()=>[vt]),title:t(()=>[s("p",xt,c(e(a)("step5")),1)]),description:t(()=>[s("span",gt,c(e(a)("describe5")),1),bt]),_:1})]),_:1})]),_:1},8,["label"]),l(b,{label:e(a)("codeList"),name:"codeList"},{default:t(()=>[l(O,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:t(()=>[l(le,{inline:!0,model:e(i).searchParam,ref_key:"searchFormRef",ref:I},{default:t(()=>[l(x,{label:e(a)("addonName"),prop:"addon_name"},{default:t(()=>[l(p,{modelValue:e(i).searchParam.addon_name,"onUpdate:modelValue":n[0]||(n[0]=o=>e(i).searchParam.addon_name=o),placeholder:"Select",filterable:"",remote:"",clearable:"","remote-method":Y},{default:t(()=>[l(v,{label:"全部",value:""}),l(v,{label:"系统",value:"2"}),(u(!0),L(xe,null,ge(G.value,o=>(u(),k(v,{label:o.title,value:o.key,key:o.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(x,{label:e(a)("tableName"),prop:"table_name"},{default:t(()=>[l(N,{modelValue:e(i).searchParam.table_name,"onUpdate:modelValue":n[1]||(n[1]=o=>e(i).searchParam.table_name=o),placeholder:e(a)("tableNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(x,null,{default:t(()=>[l(r,{type:"primary",onClick:n[2]||(n[2]=o=>g())},{default:t(()=>[m(c(e(a)("search")),1)]),_:1}),l(r,{onClick:n[3]||(n[3]=o=>X(I.value))},{default:t(()=>[m(c(e(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",null,[K((u(),k(ne,{data:e(i).data,size:"large"},{empty:t(()=>[s("span",null,c(e(i).loading?"":e(a)("emptyData")),1)]),default:t(()=>[l(C,{prop:"table_name","show-overflow-tooltip":!0,label:e(a)("tableName"),"min-width":"120"},null,8,["label"]),l(C,{prop:"title","show-overflow-tooltip":!0,label:e(a)("addonName"),"min-width":"120"},null,8,["label"]),l(C,{prop:"table_content","show-overflow-tooltip":!0,label:e(a)("tableContent"),"min-width":"120"},null,8,["label"]),l(C,{prop:"edit_type",label:e(a)("editType"),"min-width":"150",align:"center"},{default:t(({row:o})=>[m(c(o.edit_type==1?e(a)("popup"):e(a)("page")),1)]),_:1},8,["label"]),l(C,{label:e(a)("createTime"),"min-width":"180",align:"center"},{default:t(({row:o})=>[m(c(o.create_time||""),1)]),_:1},8,["label"]),l(C,{label:e(a)("operation"),fixed:"right",align:"right",width:"330"},{default:t(({row:o})=>[l(r,{type:"primary",link:"",onClick:y=>Z(o)},{default:t(()=>[m(c(e(a)("edit")),1)]),_:2},1032,["onClick"]),l(r,{type:"primary",link:"",onClick:y=>ee(o.id)},{default:t(()=>[m(c(e(a)("preview")),1)]),_:2},1032,["onClick"]),l(r,{type:"primary",link:"",onClick:y=>j(o.id)},{default:t(()=>[m(c(e(a)("saveAndSync")),1)]),_:2},1032,["onClick"]),l(r,{type:"primary",link:"",onClick:y=>z(o.id,2)},{default:t(()=>[m(c(e(a)("download")),1)]),_:2},1032,["onClick"]),l(r,{type:"primary",link:"",onClick:y=>Q(o.id)},{default:t(()=>[m(c(e(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[M,e(i).loading]]),s("div",yt,[l(oe,{"current-page":e(i).page,"onUpdate:current-page":n[4]||(n[4]=o=>e(i).page=o),"page-size":e(i).limit,"onUpdate:page-size":n[5]||(n[5]=o=>e(i).limit=o),layout:"total, sizes, prev, pager, next, jumper",total:e(i).total,onSizeChange:n[6]||(n[6]=o=>g()),onCurrentChange:g},null,8,["current-page","page-size","total"])])])]),_:1},8,["label"])]),_:1},8,["modelValue"]),l(Qe,{ref_key:"addCodeDialog",ref:P},null,512),l(_e,{modelValue:$.value,"onUpdate:modelValue":n[8]||(n[8]=o=>$.value=o),class:"dialog-visible",width:"70%",title:"代码预览"},{default:t(()=>[K((u(),L("div",kt,[l(U,{class:"h-[100%] w-[270px]"},{default:t(()=>[T.value.length&&D.value!=""?(u(),k(re,{key:0,data:T.value,props:{label:"name",value:"key"},"node-key":"key","current-node-key":D.value,"expand-on-click-node":!1,"highlight-current":"","default-expand-all":"",ref:"treeRef",onNodeClick:te},{default:t(({node:o,data:y})=>[s("div",wt,[y.children?(u(),k(R,{key:0},{default:t(()=>[o.expanded?(u(),k(de,{key:1})):(u(),k(ie,{key:0}))]),_:2},1024)):(u(),k(R,{key:1},{default:t(()=>[l(ce)]),_:1})),s("span",Ct,c(y.name),1)])]),_:1},8,["data","current-node-key"])):be("",!0)]),_:1}),s("div",Et,[l(U,{class:"h-[100%] w-[100%]"},{default:t(()=>[l(pe,{autodetect:"",class:"h-[100%]",code:V.value},null,8,["code"])]),_:1})])])),[[M,F.value]])]),_:1},8,["modelValue"])]),_:1})])}}});const Qt=Ke(Tt,[["__scopeId","data-v-bd3522bc"]]);export{Qt as default};
