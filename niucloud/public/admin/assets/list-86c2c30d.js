import{d as se,f as pe,O as de,n as C,q as F,N as a,r as y,h as _,c as T,e as t,w as r,a as b,t as d,u as o,i as m,F as N,G as S,I as h,y as J,B as Y,z as ue,a8 as me,E as ce,W as fe,X as ge,as as _e,aF as ye,Y as ve,$ as be,ah as he,aj as we,at as Ve,aa as Pe,aD as ke,aE as xe,a0 as De}from"./index-4dcc0234.js";/* empty css                   */import{_ as Ce}from"./index-742b412a.js";/* empty css                    *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{f as Te,h as Ee,j as $e,k as Ue}from"./diy-aa30030c.js";import{p as Fe}from"./sys-8ead7f22.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-5c6c00d9.js";import"./attachment-c69dd9fd.js";/* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                         *//* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-9285296e.js";/* empty css                */const Ne={class:"main-container"},Se={class:"flex justify-between items-center"},Re={class:"text-[20px]"},Be={class:"mt-[16px] flex justify-end"},ze={class:"dialog-footer"},Ie={class:"dialog-footer"},hl=se({__name:"list",setup(je){const E=pe(),A=de().meta.title,k=C({}),s=C({title:"",type:"",template:""}),M=F(()=>({title:[{required:!0,message:a("titlePlaceholder"),trigger:"blur"}],type:[{required:!0,message:a("pageTypePlaceholder"),trigger:"blur"}]})),R=F(()=>{let n="";return s.template="",s.type&&(n=k[s.type].template),n}),B=y(),w=y(!1),W=async n=>{n&&await n.validate(async e=>{if(e){w.value=!1;let p=`/decorate/edit?type=${s.type}&title=${s.title}`;s.template&&(p+=`&template=${s.template}`),E.push(p)}})},X=y("");(async()=>{X.value=(await Fe()).data.wap_url})(),Te({mode:""}).then(n=>{for(const e in n.data)k[e]=n.data[e]});const i=C({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",type:"",mode:""}}),z=y(),v=(n=1)=>{i.loading=!0,i.page=n,Ee({page:i.page,limit:i.limit,...i.searchParam}).then(e=>{i.loading=!1,i.data=e.data.data,i.total=e.data.total}).catch(()=>{i.loading=!1})};v();const H=n=>{const e=E.resolve({path:"/decorate/edit",query:{id:n.id}});window.open(e.href)},K=n=>{me.confirm(a("diyPageDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{$e(n).then(()=>{v()}).catch(()=>{})})},Q=n=>{const e=E.resolve({path:"/preview/wap",query:{page:n.type_page+"?id="+n.id}});window.open(e.href)},c=y("wechat"),I=y(""),j=y(0),f=C({wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}}),V=y(!1),Z=F(()=>({})),q=y(),ee=async n=>{j.value=n.id,I.value=n.title;const e=n.share?JSON.parse(n.share):{wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}};e&&(f.wechat=e.wechat,f.weapp=e.weapp),V.value=!0},le=async n=>{n&&await n.validate(async e=>{e&&Ue({id:j.value,share:JSON.stringify(f)}).then(()=>{v(),V.value=!1}).catch(()=>{})})},te=n=>{n&&(n.resetFields(),v())};return(n,e)=>{const p=ce,x=fe,g=ge,P=_e,$=ye,U=ve,L=be,D=he,ae=we,oe=Ve,O=Pe,G=ke,re=xe,ne=Ce,ie=De;return _(),T("div",Ne,[t(L,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[b("div",Se,[b("span",Re,d(o(A)),1),t(p,{type:"primary",class:"w-[100px]",onClick:e[0]||(e[0]=l=>w.value=!0)},{default:r(()=>[m(d(o(a)("addDiyPage")),1)]),_:1})]),t(L,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[t(U,{inline:!0,model:i.searchParam,ref_key:"searchFormDiyPageRef",ref:z},{default:r(()=>[t(g,{label:o(a)("title"),prop:"title"},{default:r(()=>[t(x,{modelValue:i.searchParam.title,"onUpdate:modelValue":e[1]||(e[1]=l=>i.searchParam.title=l),placeholder:o(a)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,{label:o(a)("typeName"),prop:"type"},{default:r(()=>[t($,{modelValue:i.searchParam.type,"onUpdate:modelValue":e[2]||(e[2]=l=>i.searchParam.type=l),placeholder:o(a)("pageTypePlaceholder")},{default:r(()=>[t(P,{label:o(a)("all"),value:""},null,8,["label"]),(_(!0),T(N,null,S(k,(l,u)=>(_(),h(P,{label:l.title,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,null,{default:r(()=>[t(p,{type:"primary",onClick:e[3]||(e[3]=l=>v())},{default:r(()=>[m(d(o(a)("search")),1)]),_:1}),t(p,{onClick:e[4]||(e[4]=l=>te(z.value))},{default:r(()=>[m(d(o(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),J((_(),h(ae,{data:i.data,size:"large"},{empty:r(()=>[b("span",null,d(i.loading?"":o(a)("emptyData")),1)]),default:r(()=>[t(D,{prop:"title",label:o(a)("title"),"min-width":"120"},null,8,["label"]),t(D,{prop:"type_name",label:o(a)("typeName"),"min-width":"80"},null,8,["label"]),t(D,{prop:"update_time",label:o(a)("updateTime"),"min-width":"120"},null,8,["label"]),t(D,{label:o(a)("operation"),fixed:"right",align:"right","min-width":"160"},{default:r(({row:l})=>[t(p,{type:"primary",link:"",onClick:u=>Q(l)},{default:r(()=>[m(d(o(a)("promote")),1)]),_:2},1032,["onClick"]),l.type=="DIY_PAGE"?(_(),h(p,{key:0,type:"primary",link:"",onClick:u=>ee(l)},{default:r(()=>[m(d(o(a)("shareSet")),1)]),_:2},1032,["onClick"])):Y("",!0),t(p,{type:"primary",link:"",onClick:u=>H(l)},{default:r(()=>[m(d(o(a)("edit")),1)]),_:2},1032,["onClick"]),t(p,{type:"primary",link:"",onClick:u=>K(l.id)},{default:r(()=>[m(d(o(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[ie,i.loading]]),b("div",Be,[t(oe,{"current-page":i.page,"onUpdate:current-page":e[5]||(e[5]=l=>i.page=l),"page-size":i.limit,"onUpdate:page-size":e[6]||(e[6]=l=>i.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:e[7]||(e[7]=l=>v()),onCurrentChange:v},null,8,["current-page","page-size","total"])])]),_:1}),t(O,{modelValue:w.value,"onUpdate:modelValue":e[13]||(e[13]=l=>w.value=l),title:o(a)("addPageTips"),width:"25%"},{footer:r(()=>[b("span",ze,[t(p,{onClick:e[11]||(e[11]=l=>w.value=!1)},{default:r(()=>[m(d(o(a)("cancel")),1)]),_:1}),t(p,{type:"primary",onClick:e[12]||(e[12]=l=>W(B.value))},{default:r(()=>[m(d(o(a)("confirm")),1)]),_:1})])]),default:r(()=>[t(U,{model:s,"label-width":"90px",ref_key:"formRef",ref:B,rules:o(M)},{default:r(()=>[t(g,{label:o(a)("title"),prop:"title"},{default:r(()=>[t(x,{modelValue:s.title,"onUpdate:modelValue":e[8]||(e[8]=l=>s.title=l),placeholder:o(a)("titlePlaceholder"),clearable:"",maxlength:"12","show-word-limit":"",class:"w-full"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,{label:o(a)("addType"),prop:"type"},{default:r(()=>[t($,{modelValue:s.type,"onUpdate:modelValue":e[9]||(e[9]=l=>s.type=l),placeholder:o(a)("pageTypePlaceholder"),class:"w-full"},{default:r(()=>[(_(!0),T(N,null,S(k,(l,u)=>(_(),h(P,{label:l.title,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),J(t(g,{label:o(a)("templateName"),prop:"template"},{default:r(()=>[t($,{modelValue:s.template,"onUpdate:modelValue":e[10]||(e[10]=l=>s.template=l),class:"w-full"},{default:r(()=>[t(P,{label:o(a)("emptyTemplate"),value:""},null,8,["label"]),(_(!0),T(N,null,S(o(R),(l,u)=>(_(),h(P,{label:l.title,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[ue,o(R)]])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),t(O,{modelValue:V.value,"onUpdate:modelValue":e[20]||(e[20]=l=>V.value=l),title:o(a)("shareSet"),width:"30%"},{footer:r(()=>[b("span",Ie,[t(p,{onClick:e[18]||(e[18]=l=>V.value=!1)},{default:r(()=>[m(d(o(a)("cancel")),1)]),_:1}),t(p,{type:"primary",onClick:e[19]||(e[19]=l=>le(q.value))},{default:r(()=>[m(d(o(a)("confirm")),1)]),_:1})])]),default:r(()=>[t(re,{modelValue:c.value,"onUpdate:modelValue":e[14]||(e[14]=l=>c.value=l)},{default:r(()=>[t(G,{label:o(a)("wechat"),name:"wechat"},null,8,["label"]),t(G,{label:o(a)("weapp"),name:"weapp"},null,8,["label"])]),_:1},8,["modelValue"]),t(U,{model:f[c.value],"label-width":"90px",ref_key:"shareFormRef",ref:q,rules:o(Z)},{default:r(()=>[t(g,{label:o(a)("sharePage")},{default:r(()=>[b("span",null,d(I.value),1)]),_:1},8,["label"]),t(g,{label:o(a)("shareTitle"),prop:"title"},{default:r(()=>[t(x,{modelValue:f[c.value].title,"onUpdate:modelValue":e[15]||(e[15]=l=>f[c.value].title=l),placeholder:o(a)("shareTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),c.value=="wechat"?(_(),h(g,{key:0,label:o(a)("shareDesc"),prop:"desc"},{default:r(()=>[t(x,{modelValue:f[c.value].desc,"onUpdate:modelValue":e[16]||(e[16]=l=>f[c.value].desc=l),placeholder:o(a)("shareDescPlaceholder"),type:"textarea",rows:"4",clearable:"",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):Y("",!0),t(g,{label:o(a)("shareImageUrl"),prop:"url"},{default:r(()=>[t(ne,{modelValue:f[c.value].url,"onUpdate:modelValue":e[17]||(e[17]=l=>f[c.value].url=l),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{hl as default};
