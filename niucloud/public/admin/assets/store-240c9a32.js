import{d as Ze,f as et,r as p,K as tt,s as lt,n as we,N as l,a1 as J,y as Z,h as u,c as r,a,t as d,u as o,e,w as t,S as at,A as ee,I as w,i as v,a5 as st,B as A,F as P,G as z,z as re,ae as Ce,U as Ee,af as nt,ag as Ie,a8 as Ve,a2 as ot,W as it,V as dt,ah as ut,ai as ct,E as pt,aj as rt,ad as _t,ak as ft,a9 as vt,X as mt,$ as ht,Y as xt,aa as gt,al as yt,am as bt,an as kt,ao as wt,ap as Ct,aq as Et,ar as It,a0 as Vt,p as At,g as St,_ as Tt}from"./index-4dcc0234.js";/* empty css                   *//* empty css                 */import{_ as Ft,a as te}from"./vue-web-terminal-6f196033.js";/* empty css                     *//* empty css               *//* empty css                *//* empty css                   *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                 *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                 *//* empty css                */import{_ as Lt}from"./icon-addon-339e16d0.js";import{_ as Se}from"./apply_empty-cdca3e85.js";import{a as Bt,p as Rt,b as Dt,i as $t,c as Mt,d as Ut,e as jt,u as Nt,f as Pt}from"./addon-8fbd8692.js";import{a as Ae,d as zt,s as Ot}from"./module-874b1348.js";const O=q=>(At("data-v-dcab20b2"),q=q(),St(),q),qt={class:"pt-[64px] px-[90px] app-store"},Kt={key:0},Ht={class:"flex justify-between items-center h-[32px] mb-4"},Qt={class:"text-[26px] text-[#222] font-600"},Gt={class:"w-[247px]"},Wt={class:"flex mt-[24px]"},Xt={class:"mt-[32px]"},Yt=["onClick"],Jt=O(()=>a("img",{class:"w-[54px] h-[54px]",src:Lt,alt:""},null,-1)),Zt={class:"flex flex-col justify-center h-[54px] pl-[20px] text-[#222] font-500 text-[13px]"},el={class:"w-[236px] truncate leading-[18px]"},tl={class:"w-[236px] truncate leading-[18px] mt-[6px]"},ll={class:"flex items-center"},al={class:"text-[#222] font-500 text-[13px] mr-[5px]"},sl={class:"text-[#222] font-500 text-[13px]"},nl={class:"text-[#222] font-500 text-[13px] multi-hidden"},ol={class:"text-[#222] font-500 text-[13px]"},il={class:"text-[#222] font-500 text-[13px]"},dl=O(()=>a("div",{class:"w-[230px] mx-auto"},[a("img",{src:Se,class:"max-w-full",alt:""})],-1)),ul={class:"flex items-center"},cl=O(()=>a("div",{class:"w-[230px] mx-auto"},[a("img",{src:Se,class:"max-w-full",alt:""})],-1)),pl={class:"flex items-center"},rl={key:3,class:"mx-auto overview-empty flex flex-col items-center pt-14 pb-6"},_l=O(()=>a("div",{class:"mb-[20px] text-sm text-[#888]"},"检测到当前账号尚未绑定授权，请先绑定授权！",-1)),fl={class:"flex flex-1 flex-wrap justify-center relative"},vl={class:"px-[18px] py-[8px]"},ml=O(()=>a("p",{class:"leading-[32px] text-[14px]"}," 您在官方应用市场购买任意一款应用，即可获得授权码。输入正确授权码认证通过后，即可支持在线升级和其它相关服务",-1)),hl={class:"flex justify-end mt-[36px]"},xl={class:"mt-[20px]"},gl={class:"text-sm mt-[10px] text-info"},yl={class:"mt-[20px]"},bl={class:"mt-[10px] text-right"},kl={class:"input-width"},wl={class:"input-width"},Cl={class:"input-width"},El={class:"input-width"},Il={class:"dialog-footer"},Vl={class:"min-h-[150px]"},Al={key:0,class:"bg-[#fff] my-3"},Sl={class:"pt-[20px] pl-[20px]"},Tl={class:"px-[20px] pt-[10px] text-[14px]"},Fl={key:0},Ll={key:1},Bl={key:0},Rl={key:1},Dl={class:"flex justify-end"},$l={class:"h-[50vh] mt-[20px]"},Ml={class:"h-[50vh] mt-[20px] flex flex-col"},Ul={class:"min-h-[150px]"},jl={key:0,class:"bg-[#fff] my-3"},Nl={class:"pt-[20px] pl-[20px]"},Pl={class:"px-[20px] pt-[10px] text-[14px]"},zl={key:0},Ol={key:1},ql={key:0},Kl={key:1},Hl=Ze({__name:"store",setup(q){const _e=et(),g=p("installed"),y=p(!0),S=p(""),le=p([]),I=tt(),Te=n=>{S.value||(S.value=n.key,zt({addon:n.key,version:n.version}).then(()=>{ve(n.key),U(),S.value=""}).catch(()=>{S.value=""}))},fe=p("");Ae().then(n=>{n.data.data&&n.data.data.auth_code&&(fe.value=n.data.data.auth_code)}).catch(()=>{});const V=p(""),C=p({installed:[],uninstalled:[],all:[]}),ae=()=>{if(V.value==""||V.value==null)return C.value.installed=f.value.installed,C.value.uninstalled=f.value.uninstalled,C.value.all=f.value.all,!1;C.value.installed=f.value.installed.filter(n=>n.title.indexOf(V.value)!=-1),C.value.uninstalled=f.value.uninstalled.filter(n=>n.title.indexOf(V.value)!=-1),C.value.all=f.value.all.filter(n=>n.title.indexOf(V.value)!=-1)},f=p({installed:[],uninstalled:[],all:[],error:""}),U=()=>{y.value=!0,Bt({}).then(n=>{var m;const i=n.data.list;f.value.error=n.data.error,f.value.installed=[],f.value.uninstalled=[],f.value.all=[];for(const c in i)i[c].is_local==!1&&f.value.all.push(i[c]),i[c].install_info&&((m=Object.keys(i[c].install_info))!=null&&m.length)?f.value.installed.push(i[c]):i[c].is_download==!0&&f.value.uninstalled.push(i[c]);ae(),I.routers.forEach((c,G)=>{c.children&&c.children.length?(c.name=Ce(c.children),se.value[c.meta.app]=Ce(c.children)):se.value[c.meta.app]=c.name}),y.value=!1}).catch(()=>{y.value=!1})};U();const se=p({}),Fe=n=>{if(n.type=="app"&&Object.keys(n.install_info).length){Ee.set({key:"menuAppStorage",data:n.key}),Ee.set({key:"plugMenuTypeStorage",data:""});const i=I.appMenuList;i.push(n.key),I.setAppMenuList(i);const m=se.value[n.key];_e.push({name:m})}},E=p(""),T=p(!1),b=p(1),k=p({}),ve=n=>{E.value=n,Rt(n).then(i=>{b.value=1,T.value=!0,le.value=[],k.value=i.data,I.clearRouters()}).catch(()=>{})};let j=null;const ne=(n=!0)=>{Dt().then(i=>{if(i.data){if(n&&(oe=[],E.value=i.data.addon,T.value||(j=nt.success({title:l("warning"),dangerouslyUseHTMLString:!0,message:Ie("div",{},[l("installingTips"),Ie("span",{class:"text-primary cursor-pointer",onClick:Le},[l("installPercent")])]),duration:0,showClose:!1}))),i.data.error)return;i.data.mode=="cloud"&&$e(),setTimeout(()=>{ne(!1)},2e3)}else n||(b.value=3,U(),I.clearRouters(),j.close())})};ne();const Le=()=>{T.value=!0,b.value=2},F=p(!1),Be=()=>{!k.value.is_pass||F.value||(F.value=!0,$t({addon:E.value}).then(n=>{b.value=3,U(),I.getAppList(),F.value=!1,n.data.length&&(le.value=n.data)}).catch(n=>{F.value=!1}))},L=p(!1),Re=()=>{if(!fe.value){De();return}!k.value.is_pass||L.value||(L.value=!0,Mt({addon:E.value}).then(n=>{b.value=2,te.execute("my-terminal","clear"),te.pushMessage("my-terminal",{content:"开始安装插件",class:"info"}),ne(),L.value=!1}).catch(n=>{L.value=!1}))},De=()=>{Ve.confirm(l("authTips"),l("warning"),{distinguishCancelAndClose:!0,confirmButtonText:l("toBind"),cancelButtonText:l("toNiucloud")}).then(()=>{_e.push({path:"/app/authorize"})}).catch(n=>{n==="cancel"&&window.open("https://www.niucloud.com/app")})};let oe=[];const $e=()=>{Ut(E.value).then(n=>{const i=n.data.data??[];i[0]&&i[0].length&&T.value==!0&&i[0].forEach(m=>{oe.includes(m.action)||(te.pushMessage("my-terminal",{content:`正在执行：${m.action}`}),oe.push(m.action),m.code==0&&te.pushMessage("my-terminal",{content:m.msg,class:"error"}))})}).catch(()=>{j==null||j.close()})};lt(E,n=>{k.value={}});const ie=p(!1),K=p({}),Me=n=>{jt(n).then(({data:i})=>{i.is_pass?Nt({addon:n}).then(m=>{U(),I.clearRouters(),y.value=!1}).catch(()=>{y.value=!1}):(K.value=i,ie.value=!0)})},me=()=>{window.open("https://www.niucloud.com/app")},Ue=n=>{b.value==2?Ve.confirm(l("installShowDialogCloseTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{Pt(E.value),n()}).catch(()=>{}):n()},H=p(!1),B=p({}),je=n=>{H.value=!0,B.value=n},Q=p(!1),he=p(""),xe=p(null),N=p(!1);(()=>{Ae().then(n=>{n.data.data&&n.data.data.length!=0&&(he.value=n.data.data)}).catch(()=>{Q.value=!1})})();const Ne=()=>{Q.value=!0},R=we({auth_code:"",auth_secret:""}),de=p(),Pe=we({auth_code:[{required:!0,message:l("authCodePlaceholder"),trigger:"blur"}],auth_secret:[{required:!0,message:l("authSecretPlaceholder"),trigger:"blur"}]}),ze=async n=>{N.value||!n||await n.validate(async i=>{i&&(N.value=!0,Ot(R).then(()=>{N.value=!1,setTimeout(()=>{location.reload()},1e3)}).catch(()=>{N.value=!1}))})},Oe=()=>{window.open("https://www.niucloud.com/app")};return(n,i)=>{const m=J("search"),c=ot,G=it,qe=dt,D=ut,Ke=J("QuestionFilled"),ue=ct,h=pt,He=rt,ge=_t,Qe=ft,Ge=vt,$=mt,We=ht,ye=xt,W=gt,ce=yt,Xe=bt,_=kt,M=wt,X=J("Select"),Y=J("CloseBold"),be=Ct,Ye=Et,Je=It,ke=Vt;return Z((u(),r("div",qt,[C.value[g.value]&&!y.value?(u(),r("div",Kt,[a("div",Ht,[a("span",Qt,d(o(l)("localAppText")),1),a("div",Gt,[e(G,{placeholder:o(l)("search"),modelValue:V.value,"onUpdate:modelValue":i[0]||(i[0]=s=>V.value=s),onKeyup:at(ae,["enter"])},{suffix:t(()=>[e(c,{class:"el-input__icon cursor-pointer",size:"14px",onClick:ae},{default:t(()=>[e(m)]),_:1})]),_:1},8,["placeholder","modelValue","onKeyup"])])]),a("div",Wt,[a("div",{class:ee([{"!bg-[#000] !border-0 !text-[#fff]":g.value==="installed"},"w-[78px] h-[30rpx] text-[14px] text-[#242424] text-center rounded-[15px] leading-[30px] bg-[#F0F0F0] border-solid border-1 border-[#E0E0E0] cursor-pointer mr-[24px]"]),onClick:i[1]||(i[1]=s=>g.value="installed")},d(o(l)("installLabel")),3),a("div",{class:ee([{"!bg-[#000] !border-0 !text-[#fff]":g.value==="uninstalled"},"w-[78px] h-[30rpx] text-[14px] text-[#242424] text-center rounded-[15px] leading-[30px] bg-[#F0F0F0] border-solid border-1 border-[#E0E0E0] cursor-pointer mr-[24px]"]),onClick:i[2]||(i[2]=s=>g.value="uninstalled")},d(o(l)("uninstalledLabel")),3),a("div",{class:ee([{"!bg-[#000] !border-0 !text-[#fff]":g.value==="all"},"w-[78px] h-[30rpx] text-[14px] text-[#242424] text-center rounded-[15px] leading-[30px] bg-[#F0F0F0] border-solid border-1 border-[#E0E0E0] cursor-pointer mr-[24px]"]),onClick:i[3]||(i[3]=s=>g.value="all")},d(o(l)("buyLabel")),3)]),a("div",Xt,[f.value[g.value].length?(u(),w(He,{key:0,data:C.value[g.value],size:"large",class:"pt-[5px]"},{default:t(()=>[e(D,{label:o(l)("appName"),align:"left",width:"320"},{default:t(({row:s})=>[a("div",{class:ee(["flex items-center",{"cursor-pointer":s.type=="app"&&Object.keys(s.install_info).length}]),onClick:x=>Fe(s)},[e(qe,{class:"w-[54px] h-[54px]",src:s.icon,fit:"contain"},{error:t(()=>[Jt]),_:2},1032,["src"]),a("div",Zt,[a("div",el,d(s.title),1),a("div",tl,d(s.version),1)])],10,Yt)]),_:1},8,["label"]),e(D,{align:"left","min-width":"120"},{header:t(()=>[a("div",ll,[a("span",al,d(o(l)("appIdentification")),1),e(ue,{class:"box-item",effect:"light",content:o(l)("tipText"),placement:"bottom"},{default:t(()=>[e(c,{class:"cursor-pointer text-[16px] text-[#a9a9a9]"},{default:t(()=>[e(Ke)]),_:1})]),_:1},8,["content"])])]),default:t(({row:s})=>[a("span",sl,d(s.key),1)]),_:1}),e(D,{prop:"",label:o(l)("introduction"),align:"left","min-width":"200"},{default:t(({row:s})=>[a("span",nl,d(s.desc),1)]),_:1},8,["label"]),e(D,{label:o(l)("type"),align:"left","min-width":"100"},{default:t(({row:s})=>[a("span",ol,d(s.type==="app"?o(l)("app"):o(l)("addon")),1)]),_:1},8,["label"]),e(D,{prop:"",label:o(l)("author"),align:"left","min-width":"100"},{default:t(({row:s})=>[a("span",il,d(s.author),1)]),_:1},8,["label"]),e(D,{label:o(l)("operation"),fixed:"right",align:"right",width:"150"},{default:t(({row:s})=>{var x;return[e(h,{class:"!text-[13px]",type:"primary",link:"",onClick:pe=>je(s)},{default:t(()=>[v(d(o(l)("detail")),1)]),_:2},1032,["onClick"]),s.install_info&&((x=Object.keys(s.install_info))!=null&&x.length)?(u(),w(h,{key:0,class:"!text-[13px]",type:"primary",link:"",onClick:pe=>Me(s.key)},{default:t(()=>[v(d(o(l)("unload")),1)]),_:2},1032,["onClick"])):s.is_download&&s.install_info<=0?(u(),w(h,{key:1,class:"!text-[13px]",type:"primary",link:"",onClick:pe=>ve(s.key)},{default:t(()=>[v(d(o(l)("install")),1)]),_:2},1032,["onClick"])):(u(),w(h,{key:2,class:"!text-[13px]",loading:S.value==s.key,disabled:S.value!="",type:"primary",link:"",onClick:st(pe=>Te(s),["stop"])},{default:t(()=>[v(d(o(l)("down")),1)]),_:2},1032,["loading","disabled","onClick"]))]}),_:1},8,["label"])]),_:1},8,["data"])):A("",!0),!f.value.installed.length&&!y.value&&g.value=="installed"?(u(),w(ge,{key:1,class:"mx-auto overview-empty"},{image:t(()=>[dl]),description:t(()=>[a("p",ul,d(o(l)("installed-empty")),1)]),_:1})):A("",!0),!f.value.uninstalled.length&&!y.value&&g.value=="uninstalled"?(u(),w(ge,{key:2,class:"mx-auto overview-empty"},{image:t(()=>[cl]),description:t(()=>[a("p",pl,[a("span",null,d(o(l)("descriptionLeft")),1),e(Qe,{type:"primary",onClick:Oe,class:"mx-[5px]"},{default:t(()=>[v(d(o(l)("link")),1)]),_:1}),a("span",null,d(o(l)("descriptionRight")),1)])]),_:1})):A("",!0),!f.value.all.length&&!y.value&&!he.value&&g.value=="all"?(u(),r("div",rl,[_l,a("div",fl,[e(h,{class:"w-[154px] !h-[48px] mt-[8px]",type:"primary",onClick:Ne},{default:t(()=>[v("授权码认证")]),_:1}),e(Ge,{ref_key:"getAuthCodeDialog",ref:xe,placement:"bottom",width:478,trigger:"click",class:"mt-[8px]"},{reference:t(()=>[e(h,{class:"w-[154px] !h-[48px] mt-[8px] !text-[var(--el-color-primary)] hover:!text-[var(--el-color-primary)] !bg-transparent",plain:"",type:"primary"},{default:t(()=>[v("如何获取授权码?")]),_:1})]),default:t(()=>[a("div",vl,[ml,a("div",hl,[e(h,{class:"w-[182px] !h-[48px]",plain:"",onClick:me},{default:t(()=>[v("去应用市场逛逛")]),_:1}),e(h,{class:"w-[100px] !h-[48px]",plain:"",onClick:i[4]||(i[4]=s=>xe.value.hide())},{default:t(()=>[v("关闭")]),_:1})])])]),_:1},512)])])):A("",!0)]),e(W,{modelValue:Q.value,"onUpdate:modelValue":i[8]||(i[8]=s=>Q.value=s),title:"授权码认证",width:"400px"},{default:t(()=>[e(ye,{model:R,"label-width":"0",ref_key:"formRef",ref:de,rules:Pe,class:"page-form"},{default:t(()=>[e(We,{class:"box-card !border-none",shadow:"never"},{default:t(()=>[e($,{prop:"auth_code"},{default:t(()=>[e(G,{modelValue:R.auth_code,"onUpdate:modelValue":i[5]||(i[5]=s=>R.auth_code=s),placeholder:o(l)("authCodePlaceholder"),class:"input-width",clearable:"",size:"large"},null,8,["modelValue","placeholder"])]),_:1}),a("div",xl,[e($,{prop:"auth_secret"},{default:t(()=>[e(G,{modelValue:R.auth_secret,"onUpdate:modelValue":i[6]||(i[6]=s=>R.auth_secret=s),clearable:"",placeholder:o(l)("authSecretPlaceholder"),class:"input-width",size:"large"},null,8,["modelValue","placeholder"])]),_:1})]),a("div",gl,d(o(l)("authInfoTips")),1),a("div",yl,[e(h,{type:"primary",class:"w-full",size:"large",loading:N.value,onClick:i[7]||(i[7]=s=>ze(de.value))},{default:t(()=>[v(d(o(l)("confirm")),1)]),_:1},8,["loading"])]),a("div",bl,[e(h,{type:"primary",link:"",onClick:me},{default:t(()=>[v(d(o(l)("notHaveAuth")),1)]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),e(W,{modelValue:H.value,"onUpdate:modelValue":i[10]||(i[10]=s=>H.value=s),title:o(l)("plugDetail"),width:"500px","destroy-on-close":!0},{footer:t(()=>[a("span",Il,[e(h,{type:"primary",onClick:i[9]||(i[9]=s=>H.value=!1)},{default:t(()=>[v(d(o(l)("confirm")),1)]),_:1})])]),default:t(()=>[e(ye,{model:B.value,"label-width":"120px",ref_key:"formRef",ref:de,class:"page-form"},{default:t(()=>[e($,{label:o(l)("title")},{default:t(()=>[a("div",kl,d(B.value.title),1)]),_:1},8,["label"]),e($,{label:o(l)("desc")},{default:t(()=>[a("div",wl,d(B.value.desc),1)]),_:1},8,["label"]),e($,{label:o(l)("author")},{default:t(()=>[a("div",Cl,d(B.value.author),1)]),_:1},8,["label"]),e($,{label:o(l)("version")},{default:t(()=>[a("div",El,d(B.value.version),1)]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),e(W,{modelValue:T.value,"onUpdate:modelValue":i[11]||(i[11]=s=>T.value=s),title:o(l)("addonInstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":Ue},{default:t(()=>[e(Xe,{space:200,active:b.value,"finish-status":"success","align-center":""},{default:t(()=>[e(ce,{title:o(l)("envCheck"),class:"flex-1"},null,8,["title"]),e(ce,{title:o(l)("installProgress"),class:"flex-1"},null,8,["title"]),e(ce,{title:o(l)("installComplete"),class:"flex-1"},null,8,["title"])]),_:1},8,["active"]),Z((u(),r("div",null,[e(be,{"max-height":"50vh"},{default:t(()=>[a("div",Vl,[k.value.dir?(u(),r("div",Al,[a("p",Sl,d(o(l)("dirPermission")),1),a("div",Tl,[e(M,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:t(()=>[e(_,{span:12},{default:t(()=>[a("span",null,d(o(l)("path")),1)]),_:1}),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("demand")),1)]),_:1}),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("status")),1)]),_:1})]),_:1}),(u(!0),r(P,null,z(k.value.dir.is_readable,(s,x)=>(u(),w(M,{class:"pb-[10px] items pl-[15px]",key:x},{default:t(()=>[e(_,{span:12},{default:t(()=>[a("span",null,d(s.dir),1)]),_:2},1024),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("readable")),1)]),_:1}),e(_,{span:6},{default:t(()=>[s.status?(u(),r("span",Fl,[e(c,{color:"green"},{default:t(()=>[e(X)]),_:1})])):(u(),r("span",Ll,[e(c,{color:"red"},{default:t(()=>[e(Y)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(u(!0),r(P,null,z(k.value.dir.is_write,(s,x)=>(u(),w(M,{class:"pb-[10px] items pl-[15px]",key:x},{default:t(()=>[e(_,{span:12},{default:t(()=>[a("span",null,d(s.dir),1)]),_:2},1024),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("write")),1)]),_:1}),e(_,{span:6},{default:t(()=>[s.status?(u(),r("span",Bl,[e(c,{color:"green"},{default:t(()=>[e(X)]),_:1})])):(u(),r("span",Rl,[e(c,{color:"red"},{default:t(()=>[e(Y)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):A("",!0)])]),_:1}),a("div",Dl,[e(ue,{effect:"dark",content:o(l)("installTips"),placement:"top"},{default:t(()=>[e(h,{type:"default",disabled:!k.value.is_pass||L.value,loading:F.value,onClick:Be},{default:t(()=>[v(d(o(l)("localInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"]),e(ue,{effect:"dark",content:o(l)("cloudInstallTips"),placement:"top"},{default:t(()=>[e(h,{type:"primary",disabled:!k.value.is_pass||F.value,loading:L.value,onClick:Re},{default:t(()=>[v(d(o(l)("cloudInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"])])])),[[re,b.value==1],[ke,!k.value.dir]]),Z(a("div",$l,[e(o(Ft),{name:"my-terminal",context:E.value,"init-log":null,"show-header":!1,"show-log-time":!0},null,8,["context"])],512),[[re,b.value==2]]),Z(a("div",Ml,[e(Ye,{icon:"success",title:o(l)("addonInstallSuccess")},null,8,["title"]),(u(!0),r(P,null,z(le.value,(s,x)=>(u(),r("div",{class:"mb-[10px]",key:x},[e(Je,{title:s,type:"error",closable:!1},null,8,["title"])]))),128))],512),[[re,b.value==3]])]),_:1},8,["modelValue","title"]),e(W,{modelValue:ie.value,"onUpdate:modelValue":i[12]||(i[12]=s=>ie.value=s),title:o(l)("addonUninstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1},{default:t(()=>[e(be,{"max-height":"50vh"},{default:t(()=>[a("div",Ul,[K.value.dir?(u(),r("div",jl,[a("p",Nl,d(o(l)("dirPermission")),1),a("div",Pl,[e(M,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:t(()=>[e(_,{span:12},{default:t(()=>[a("span",null,d(o(l)("path")),1)]),_:1}),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("demand")),1)]),_:1}),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("status")),1)]),_:1})]),_:1}),(u(!0),r(P,null,z(K.value.dir.is_readable,(s,x)=>(u(),w(M,{class:"pb-[10px] items pl-[15px]",key:x},{default:t(()=>[e(_,{span:12},{default:t(()=>[a("span",null,d(s.dir),1)]),_:2},1024),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("readable")),1)]),_:1}),e(_,{span:6},{default:t(()=>[s.status?(u(),r("span",zl,[e(c,{color:"green"},{default:t(()=>[e(X)]),_:1})])):(u(),r("span",Ol,[e(c,{color:"red"},{default:t(()=>[e(Y)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(u(!0),r(P,null,z(K.value.dir.is_write,(s,x)=>(u(),w(M,{class:"pb-[10px] items pl-[15px]",key:x},{default:t(()=>[e(_,{span:12},{default:t(()=>[a("span",null,d(s.dir),1)]),_:2},1024),e(_,{span:6},{default:t(()=>[a("span",null,d(o(l)("write")),1)]),_:1}),e(_,{span:6},{default:t(()=>[s.status?(u(),r("span",ql,[e(c,{color:"green"},{default:t(()=>[e(X)]),_:1})])):(u(),r("span",Kl,[e(c,{color:"red"},{default:t(()=>[e(Y)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):A("",!0)])]),_:1})]),_:1},8,["modelValue","title"])])):A("",!0)])),[[ke,y.value]])}}});const ka=Tt(Hl,[["__scopeId","data-v-dcab20b2"]]);export{ka as default};
