import{O as T,d as pe,r as h,Q as ce,a2 as P,h as i,c as p,e,w as a,R as S,a as n,i as v,t as o,B as C,F as M,T as D,u,q as s,a0 as L,s as Q,U as $,b2 as de,ag as X,a3 as _e,G as z,a4 as fe,aV as ge,V as ve,E as me,aL as he,aM as xe,a1 as ye,b3 as ke,X as we,p as Ce,g as Te}from"./index-39857e33.js";/* empty css                  *//* empty css                   */import{T as be,_ as Be,C as Ve}from"./index-b7557d6d.js";/* empty css               *//* empty css                  *//* empty css                     *//* empty css                 */import{g as Ee}from"./module-48d8d822.js";import{_ as Ue}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                   */function Ie(c=""){return T.get(c?`upgrade/${c}`:"upgrade")}function Se(){return T.get("upgrade/task")}function Me(c=""){return T.post(c?`upgrade/${c}`:"upgrade")}function Le(){return T.post("upgrade/execute",{})}function $e(c=""){return T.get(c?`upgrade/check/${c}`:"upgrade/check")}function Fe(){return T.post("upgrade/clear")}const Ne=c=>(Ce("data-v-5a590df4"),c=c(),Te(),c),Re={key:0,class:"h-[60vh] flex flex-col"},De={class:"text-lg"},He={class:"font-bold"},je={class:"font-bold"},qe={key:0,class:"mt-[10px]"},Ae=Ne(()=>n("a",{class:"text-primary",href:"https://www.niucloud.com",target:"_blank"},"niucloud-admin官网",-1)),Ge={class:"font-bold text-lg"},Ke={key:0,class:"mt-[5px]"},Oe=["innerHTML"],Pe={class:"flex justify-end"},Qe={key:0,class:"h-[60vh] flex flex-col"},Xe={key:0,class:"bg-[#fff] my-3"},ze={class:"pt-[20px] pl-[20px]"},Je={class:"px-[20px] pt-[10px] text-[14px] el-table"},We={key:0},Ye={key:1},Ze={key:0},et={key:1},tt={class:"h-[60vh]"},lt={class:"h-[60vh] flex flex-col"},at={class:"flex-1 h-0"},st={class:"flex justify-end"},nt=["innerHTML"],ot={class:"flex justify-end"},rt=pe({__name:"index",emits:["complete"],setup(c,{expose:J,emit:W}){const d=h(!1),_=h(null),f=h(null),y=h("content"),b=h(null),w=h(!1),B=h(null),H=h(null),V=h(!1);let F=[];const U=()=>{Se().then(({data:t})=>{if(t){if(!d.value){Z();return}if(f.value||(B.value.execute("clear"),B.value.execute("开始升级")),t.log.forEach(l=>{F.includes(l)||(B.value.pushMessage({content:`正在执行：${l}`}),F.push(l))}),t.error){f.value=t,$({message:"升级失败",type:"error"}),B.value.pushMessage({content:t.error,class:"error"});return}if(t.step=="upgradeComplete"){y.value="complete",E&&E.close(),W("complete");return}f.value=t,Y()}}).catch()};U();const Y=()=>{Le().then(()=>{U()}).catch()};let E=null;const Z=()=>{E=de.success({title:s("warning"),dangerouslyUseHTMLString:!0,message:X("div",{},[s("upgrade.upgradingTips"),X("span",{class:"text-primary cursor-pointer",onClick:ee},[s("upgrade.clickView")])]),duration:0,showClose:!1})},ee=()=>{d.value=!0,y.value="upgrade",U(),E&&E.close()},j=h("");(()=>{_e().then(t=>{j.value=t.data.version.version})})();const te=async()=>{var l,m;if(w.value)return;w.value=!0;const t=((l=_.value)==null?void 0:l.app.app_key)!="niucloud-admin"?(m=_.value)==null?void 0:m.app.app_key:"";await $e(t).then(async({data:x})=>{x.is_pass?await Me(t).then(()=>{U()}).catch(()=>{w.value=!1}):b.value=x}).catch(),w.value&&(y.value="upgrade")},le=(t="")=>{f.value?($({message:"已有正在执行中的升级任务",type:"error"}),d.value=!0):Ee().then(({data:l})=>{const m=l.length?l[0]:null;if(t&&m&&m.version_no!==j.value){$({message:"存在新版本框架，请先升级框架",type:"error"});return}else Ie(t).then(({data:x})=>{if(_.value=x,!x.version_list.length){$({message:"已经是最新版本了",type:"error"});return}z.get("upgradeTipsLock")?d.value=!0:V.value=!0}).catch()})};let N=null;const q=new be,ae=(t,l,m,x,k)=>{if(l=="开始升级"){m(q);const g=se(["/","——","\\","|"]);N=setInterval(()=>{q.flush("> "+g.next().value)},150)}},se=t=>{var l=0;return{next(){return l+1==t.length&&(l=0),{value:t[l++]}}}},ne=t=>{y.value=="upgrade"&&f.value&&!f.value.error?fe.confirm(s("upgrade.showDialogCloseTips"),s("warning"),{confirmButtonText:s("confirm"),cancelButtonText:s("cancel"),type:"warning"}).then(()=>{t()}).catch(()=>{}):t()};ce(()=>d.value,()=>{d.value||oe()});const oe=()=>{y.value="content",w.value=!1,f.value=null,F=[],N&&clearInterval(N),Fe().then(()=>{}).catch()},re=()=>{var t;d.value=!1,(t=H.value)==null||t.open()},A=(t=!1)=>{t&&z.set({key:"upgradeTipsLock",data:t}),V.value=!1,!t&&(d.value=!0)};return J({open:le}),(t,l)=>{const m=ge,x=ve,k=me,g=he,R=xe,G=P("Select"),I=ye,K=P("CloseBold"),ue=ke,O=we;return i(),p(M,null,[e(O,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=r=>d.value=r),title:u(s)("upgrade.title"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":ne},{default:a(()=>[S(n("div",null,[_.value?(i(),p("div",Re,[n("div",De,[v(" 本次升级将从"),n("span",He,o(_.value.version),1),v("升级到"),n("span",je,o(_.value.upgrade_version),1),v("版本 ")]),_.value.upgrade_version!=_.value.last_version?(i(),p("div",qe,[e(m,{type:"info","show-icon":""},{title:a(()=>[v(" 当前最新版本为"+o(_.value.last_version)+"，您的服务已于"+o(_.value.expire_time)+"到期。如需升级到最新版可在",1),Ae,v("购买相关服务后再进行升级 ")]),_:1})])):C("",!0),e(x,{class:"flex-1 h-0 mt-[20px]"},{default:a(()=>[(i(!0),p(M,null,D(_.value.version_list,(r,ie)=>(i(),p("div",{class:"mt-[20px]",key:ie},[n("div",Ge,o(r.version_no),1),r.release_time?(i(),p("div",Ke,o(r.release_time),1)):C("",!0),r.upgrade_log?(i(),p("div",{key:1,class:"mt-[10px] p-[10px] rounded bg-[#f4f4f5] whitespace-pre",innerHTML:r.upgrade_log},null,8,Oe)):C("",!0)]))),128))]),_:1})])):C("",!0),n("div",Pe,[e(k,{type:"primary",onClick:te,loading:w.value},{default:a(()=>[v(o(u(s)("upgrade.upgradeButton")),1)]),_:1},8,["loading"])])],512),[[L,y.value=="content"]]),S(n("div",null,[b.value&&!f.value?(i(),p("div",Qe,[e(x,null,{default:a(()=>[b.value.dir?(i(),p("div",Xe,[n("p",ze,o(u(s)("upgrade.dirPermission")),1),n("div",Je,[e(R,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:a(()=>[e(g,{span:12},{default:a(()=>[n("span",null,o(u(s)("upgrade.path")),1)]),_:1}),e(g,{span:6},{default:a(()=>[n("span",null,o(u(s)("upgrade.demand")),1)]),_:1}),e(g,{span:6},{default:a(()=>[n("span",null,o(u(s)("status")),1)]),_:1})]),_:1}),(i(!0),p(M,null,D(b.value.dir.is_readable,r=>(i(),Q(R,{class:"pb-[10px] items pl-[15px]"},{default:a(()=>[e(g,{span:12},{default:a(()=>[n("span",null,o(r.dir),1)]),_:2},1024),e(g,{span:6},{default:a(()=>[n("span",null,o(u(s)("upgrade.readable")),1)]),_:1}),e(g,{span:6},{default:a(()=>[r.status?(i(),p("span",We,[e(I,{color:"green"},{default:a(()=>[e(G)]),_:1})])):(i(),p("span",Ye,[e(I,{color:"red"},{default:a(()=>[e(K)]),_:1})]))]),_:2},1024)]),_:2},1024))),256)),(i(!0),p(M,null,D(b.value.dir.is_write,r=>(i(),Q(R,{class:"pb-[10px] items pl-[15px]"},{default:a(()=>[e(g,{span:12},{default:a(()=>[n("span",null,o(r.dir),1)]),_:2},1024),e(g,{span:6},{default:a(()=>[n("span",null,o(u(s)("upgrade.write")),1)]),_:1}),e(g,{span:6},{default:a(()=>[r.status?(i(),p("span",Ze,[e(I,{color:"green"},{default:a(()=>[e(G)]),_:1})])):(i(),p("span",et,[e(I,{color:"red"},{default:a(()=>[e(K)]),_:1})]))]),_:2},1024)]),_:2},1024))),256))])])):C("",!0)]),_:1})])):C("",!0),S(n("div",tt,[e(u(Be),{ref_key:"terminalRef",ref:B,context:f.value?f.value.upgrade.app_key:"","init-log":null,"show-header":!1,"show-log-time":!0,onExecCmd:ae},null,8,["context"])],512),[[L,f.value]])],512),[[L,y.value=="upgrade"]]),S(n("div",null,[n("div",lt,[n("div",at,[e(ue,{icon:"success",title:u(s)("upgrade.upgradeSuccess")},null,8,["title"]),e(m,{title:u(s)("upgrade.upgradeCompleteTips"),type:"error",closable:!1},null,8,["title"])]),n("div",st,[e(k,{type:"default",onClick:l[0]||(l[0]=r=>d.value=!1)},{default:a(()=>[v(o(u(s)("upgrade.localBuild")),1)]),_:1}),e(k,{type:"primary",onClick:re},{default:a(()=>[v(o(u(s)("upgrade.cloudBuild")),1)]),_:1})])])],512),[[L,y.value=="complete"]])]),_:1},8,["modelValue","title"]),e(O,{modelValue:V.value,"onUpdate:modelValue":l[5]||(l[5]=r=>V.value=r),title:u(s)("warning"),width:"500px",draggable:""},{footer:a(()=>[n("div",ot,[e(k,{onClick:l[2]||(l[2]=r=>A(!0)),type:"primary"},{default:a(()=>[v(o(u(s)("upgrade.knownToKnow")),1)]),_:1}),e(k,{onClick:l[3]||(l[3]=r=>A()),type:"primary",plain:""},{default:a(()=>[v(o(u(s)("upgrade.upgradeButton")),1)]),_:1}),e(k,{onClick:l[4]||(l[4]=r=>V.value=!1)},{default:a(()=>[v(o(u(s)("cancel")),1)]),_:1})])]),default:a(()=>[n("span",{innerHTML:u(s)("upgrade.upgradeTips")},null,8,nt)]),_:1},8,["modelValue","title"]),e(Ve,{ref_key:"cloudBuildRef",ref:H},null,512)],64)}}});const yt=Ue(rt,[["__scopeId","data-v-5a590df4"]]);export{yt as default};
