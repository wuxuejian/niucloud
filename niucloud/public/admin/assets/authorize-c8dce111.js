import{d as te,r,l as oe,n as P,q as c,Y as U,P as se,h as n,c as k,s as x,w as o,a as e,u as i,i as d,e as s,t as _,B as I,F as ae,Q as le,Z as ne,_ as ie,E as re,X as ce,$ as pe,J as de,K as ue,a0 as _e,L as me,a1 as xe,a2 as fe,a3 as he,U as ve,p as ge,g as ye}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  */import{g as we,a as ke,s as Ce}from"./module-4257120f.js";import be from"./index-041a0bd2.js";import Ve from"./index-a2492aae.js";import{_ as Fe}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-web-terminal-6de9e244.js";/* empty css               *//* empty css                     *//* empty css                 */const g=C=>(ge("data-v-49eb9654"),C=C(),ye(),C),Be={class:"main main-container min-w-[1000px] min-h-[650px]"},Ee={class:"flex"},Ie={class:"bg-[#F3F6FF] mr-[14px] w-[402px] pt-[30px] pl-[32px] pr-[20px] pb-[60px] timeline-log-wrap"},Te={class:"flex items-center justify-between"},Ae=g(()=>e("span",{class:"text-page-title"},"版本信息",-1)),Le={class:"flex-1 w-0 flex justify-end"},Se={class:"mt-[30px] flex items-center text-[14px] text-[#797979]"},ze=g(()=>e("span",null,"当前版本",-1)),De={class:"text-[26px] ml-[15px] mr-[10px] text-[#656668]"},Re={key:0,class:"text-[12px]"},Me={key:1,class:"text-[12px] text-[red]"},Ne={class:"flex-1 flex justify-between items-center bg-[#F3F6FF] pt-[34px] pl-[30px] pr-[60px] pb-[62px] timeline-log-wrap"},Pe={class:"flex flex-col"},Ue={class:"flex flex-wrap items-center"},je=g(()=>e("p",{class:"text-page-title mr-[20px]"},"授权信息",-1)),He={class:"text-[14px] text-[#666]"},$e={class:"mt-[46px] ml-[40px] flex flex-wrap"},qe={class:"text-[14px] mr-[84px]"},Je={class:"ml-[12px] text-[12px]"},Oe={class:"text-[14px] flex items-center"},Ke=g(()=>e("span",null,"授权码",-1)),Qe={class:"ml-[12px] mr-[10px] text-[12px]"},Xe={class:"flex flex-1 flex-wrap justify-end relative"},Ye={class:"px-[18px] py-[8px]"},Ze=g(()=>e("p",{class:"leading-[32px] text-[14px]"},"您在官方应用市场购买任意一款应用，即可获得授权码。输入正确授权码认证通过后，即可支持在线升级和其它相关服务 ",-1)),Ge={class:"flex justify-end mt-[36px]"},We={class:"mt-[20px]"},et={class:"text-sm mt-[10px] text-info"},tt={class:"mt-[20px]"},ot={class:"mt-[10px] text-right"},st=g(()=>e("div",{class:"text-page-title mb-[20px]"},"历史版本",-1)),at={key:0,class:"mt-[10px] p-[20px] bg-overlay rounded-md timeline-log-wrap whitespace-pre"},lt=["innerHTML"],nt=te({__name:"authorize",setup(C){const T=r(null),b=r(null),A=r(null),f=r(!1),h=r(!1),V=r([]),L=()=>{we().then(({data:a})=>{V.value=a})};L();const m=oe(()=>V.value.length?V.value[0]:null),j=a=>{const t=JSON.parse(JSON.stringify(a));return t.slice(0,t.length/2)+t.slice(t.length/2,t.length-1).replace(/./g,"*")},B=()=>{f.value=!0},u=r({company_name:"",site_address:"",auth_code:""}),y=r(!0),w=r(!1),S=()=>{ke().then(a=>{y.value=!1,a.data.data&&a.data.data.length!=0&&(u.value=a.data.data,f.value=!1)}).catch(()=>{y.value=!1,f.value=!1})};S();const v=P({auth_code:"",auth_secret:""}),z=r(),H=P({auth_code:[{required:!0,message:c("authCodePlaceholder"),trigger:"blur"}],auth_secret:[{required:!0,message:c("authSecretPlaceholder"),trigger:"blur"}]}),$=async a=>{w.value||!a||await a.validate(async t=>{t&&(w.value=!0,Ce(v).then(()=>{w.value=!1,S()}).catch(()=>{w.value=!1,f.value=!1}))})},D=()=>{window.open("https://www.niucloud.com/app")},F=r("");(()=>{ne().then(a=>{F.value=a.data.version.version})})();const q=()=>{var a;if(!u.value){B();return}(a=T.value)==null||a.open()},J=()=>{var a;if(!u.value){B();return}if(b.value.cloudBuildTask){(a=b.value)==null||a.open();return}ie.confirm(c("cloudBuildTips"),c("warning"),{confirmButtonText:c("confirm"),cancelButtonText:c("cancel"),type:"warning"}).then(()=>{var t;(t=b.value)==null||t.open()})};return(a,t)=>{const p=re,O=U("View"),R=ce,K=U("Hide"),Q=pe,M=de,N=ue,E=_e,X=me,Y=xe,Z=fe,G=he,W=ve;return se((n(),k("div",Be,[y.value?I("",!0):(n(),x(E,{key:0,class:"box-card !border-none",shadow:"never"},{default:o(()=>[e("div",Ee,[e("div",Ie,[e("div",Te,[Ae,e("div",Le,[!i(m)||i(m)&&i(m).version_no==F.value?(n(),x(p,{key:0,class:"text-[#4C4C4C] w-[78px] h-[32px] !bg-transparent",onClick:L},{default:o(()=>[d("检测更新")]),_:1})):(n(),x(p,{key:1,class:"text-[#4C4C4C] w-[78px] h-[32px]",type:"primary",onClick:q},{default:o(()=>[d("一键升级")]),_:1})),s(p,{class:"text-[#4C4C4C] w-[78px] h-[32px]",type:"primary",onClick:J},{default:o(()=>[d("云编译")]),_:1})])]),e("div",Se,[ze,e("span",De,_(F.value),1),!i(m)||i(m)&&i(m).version_no==F.value?(n(),k("em",Re,"(当前已是最新版本)")):(n(),k("em",Me,"(最新版本"+_(i(m).version_no)+")",1))])]),e("div",Ne,[e("div",Pe,[e("div",Ue,[je,e("span",He,_(u.value.company_name||"--"),1)]),e("div",$e,[e("span",qe,[d("授权域名"),e("em",Je,_(u.value.site_address||"--"),1)]),e("span",Oe,[Ke,e("em",Qe,_(u.value.auth_code?h.value?u.value.auth_code:j(u.value.auth_code):"--"),1),h.value?(n(),x(R,{key:1,onClick:t[1]||(t[1]=l=>h.value=!h.value),class:"text-[12px] cursor-pointer"},{default:o(()=>[s(K)]),_:1})):(n(),x(R,{key:0,onClick:t[0]||(t[0]=l=>h.value=!h.value),class:"text-[12px] cursor-pointer"},{default:o(()=>[s(O)]),_:1}))])])]),e("div",Xe,[s(p,{class:"w-[154px] !h-[48px] mt-[8px]",type:"primary",onClick:B},{default:o(()=>[d("授权码认证")]),_:1}),s(Q,{ref_key:"getAuthCodeDialog",ref:A,placement:"bottom-start",width:478,trigger:"click",class:"mt-[8px]"},{reference:o(()=>[s(p,{class:"w-[154px] !h-[48px] mt-[8px] !text-[var(--el-color-primary)] hover:!text-[var(--el-color-primary)] !bg-transparent",plain:"",type:"primary"},{default:o(()=>[d("如何获取授权码?")]),_:1})]),default:o(()=>[e("div",Ye,[Ze,e("div",Ge,[s(p,{class:"w-[182px] !h-[48px]",plain:"",onClick:D},{default:o(()=>[d("去应用市场逛逛")]),_:1}),s(p,{class:"w-[100px] !h-[48px]",plain:"",onClick:t[2]||(t[2]=l=>A.value.hide())},{default:o(()=>[d("关闭")]),_:1})])])]),_:1},512)]),s(Y,{modelValue:f.value,"onUpdate:modelValue":t[6]||(t[6]=l=>f.value=l),title:"授权码认证",width:"400px"},{default:o(()=>[s(X,{model:v,"label-width":"0",ref_key:"formRef",ref:z,rules:H,class:"page-form"},{default:o(()=>[s(E,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[s(N,{prop:"auth_code"},{default:o(()=>[s(M,{modelValue:v.auth_code,"onUpdate:modelValue":t[3]||(t[3]=l=>v.auth_code=l),modelModifiers:{trim:!0},placeholder:i(c)("authCodePlaceholder"),class:"input-width",clearable:"",size:"large"},null,8,["modelValue","placeholder"])]),_:1}),e("div",We,[s(N,{prop:"auth_secret"},{default:o(()=>[s(M,{modelValue:v.auth_secret,"onUpdate:modelValue":t[4]||(t[4]=l=>v.auth_secret=l),modelModifiers:{trim:!0},clearable:"",placeholder:i(c)("authSecretPlaceholder"),class:"input-width",size:"large"},null,8,["modelValue","placeholder"])]),_:1})]),e("div",et,_(i(c)("authInfoTips")),1),e("div",tt,[s(p,{type:"primary",class:"w-full",size:"large",loading:w.value,onClick:t[5]||(t[5]=l=>$(z.value))},{default:o(()=>[d(_(i(c)("confirm")),1)]),_:1},8,["loading"])]),e("div",ot,[s(p,{type:"primary",link:"",onClick:D},{default:o(()=>[d(_(i(c)("notHaveAuth")),1)]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])])]),_:1})),y.value?I("",!0):(n(),x(E,{key:1,class:"box-card !border-none",shadow:"never"},{default:o(()=>[st,s(G,null,{default:o(()=>[(n(!0),k(ae,null,le(V.value,(l,ee)=>(n(),x(Z,{timestamp:l.release_time+" 版本："+l.version_no,type:"primary",hollow:!0,placement:"top",key:ee},{default:o(()=>[l.upgrade_log?(n(),k("div",at,[e("div",{innerHTML:l.upgrade_log},null,8,lt)])):I("",!0)]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1})),s(be,{ref_key:"upgradeRef",ref:T},null,512),s(Ve,{ref_key:"cloudBuildRef",ref:b},null,512)])),[[W,y.value]])}}});const Et=Fe(nt,[["__scopeId","data-v-49eb9654"]]);export{Et as default};
