import{d as J,r as _,n as V,f as K,aK as W,s as X,a3 as h,N as l,h as E,c as T,a as s,t as i,y as w,z as x,u as o,e as p,w as r,i as g,R as H,B as N,A as Q,U as G,W as Z,E as ee,X as te,Y as ae,V as se}from"./index-efa627c5.js";/* empty css                 *//* empty css                        *//* empty css                     */import{_ as le}from"./index.vue_vue_type_style_index_0_lang-be73f389.js";/* empty css                  *//* empty css                 */import{d as oe,f as ne}from"./diy-09270582.js";import{b as ie}from"./browser-a1ac24ac.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                   *//* empty css                     *//* empty css                */const re={key:0,class:"flex flex-wrap mt-[20px] min-w-[1200px]"},de={class:"page-item relative bg-no-repeat ml-[20px] mr-[40px] bg-[#f7f7f7] w-[340px] pt-[90px] pb-[20px]"},ue={class:"absolute top-[54px] left-[50%] translate-x-[-50%] text-[14px] truncate w-[130px] text-center"},me={class:"w-[320px] h-[550px] mx-auto"},ce=["id","src"],_e={class:"w-[320px] h-[550px] mx-auto bg-body pt-[20px] px-[20px]"},fe={class:"font-bold text-xl mb-[40px]"},ve={class:"mb-[20px] flex flex-col"},we={class:"mb-[10px]"},xe={class:"flex"},ge={class:"overflow-hidden w-[320px] h-[550px] mx-auto"},ye=["src"],he={class:"w-[700px]"},be={class:"flex flex-wrap"},De={class:"info-wrap"},Ie={class:"mt-[20px] bg-[#F7F8FA] p-[20px] flex items-center justify-between"},ke={class:"font-bold"},Ce={class:"text-[#999] text-base"},Pe={class:"text-center"},Ue=J({__name:"index",setup(Ve){const f=_("DIY_INDEX"),e=V({}),b=K(),v=_(""),D=_(""),n=_({name:""}),u=V({type:"",name:"",parent:"",page:"",title:"",action:""}),I=()=>{oe({type:f.value}).then(a=>{for(const t in a.data)e[t]=a.data[t];n.value.name=e.use_template.name,n.value.title=e.use_template.title,n.value.url=e.use_template.page,n.value.action=e.use_template.action,n.value.parent=e.use_template.parent,e.use_template.url&&(e.loadingIframe=!1,e.loadingDev=!1,e.isDisabledPop=!1,e.difference=0,v.value=e.domain_url.wap_domain,e.wapUrl=e.domain_url.wap_url,P())})};I();const k=_(!1);window.addEventListener("message",a=>{try{let t={type:""};if(typeof a.data=="string"?t=JSON.parse(a.data):typeof a.data=="object"&&(t=a.data),t.type&&["appOnLaunch","appOnReady"].indexOf(t.type)!=-1){e.loadingDev=!1,e.loadingIframe=!0;let c=new Date().getTime();e.difference=c-e.timeIframe,e.isDisabledPop=!1,k.value=!0}}catch(t){C(),console.log("diy index 后台接受数据错误",t)}},!1);const S=()=>{const a=JSON.stringify({type:"appOnReady",message:"加载完成"});window["previewIframe_"+f.value]&&window["previewIframe_"+f.value].contentWindow.postMessage(a,"*")},C=()=>{e.loadingDev=!0,e.isDisabledPop=!0,e.loadingIframe=!1},L=()=>{if(v.value.trim().length==0){h({type:"warning",message:`${l("wapDomainPlaceholder")}`});return}const a=v.value+"/wap";G.set({key:"wap_domain",data:a}),e.use_template.url&&(e.wapUrl=a,P()),setTimeout(()=>{e.use_template.url&&(e.loadingIframe=!0,e.loadingDev=!1,e.isDisabledPop=!1)},100*3)},R=()=>{window.open("https://www.kancloud.cn/niucloud/niucloud-admin-develop/3213393")},P=()=>{e.use_template.wapPreview=e.wapUrl+e.use_template.url,e.shareUrl=e.wapUrl+"/",ie.toDataURL(e.shareUrl,{errorCorrectionLevel:"L",margin:0,width:100}).then(m=>{D.value=m});const a=()=>{e.timeIframe=new Date().getTime(),S()};a();let t=0,c=setInterval(()=>{if(k.value||t>=50){clearInterval(c);return}a(),t++},200);setTimeout(()=>{e.difference==0&&C()},1e3*10)},O=()=>{const a={back:"/site/diy/index"};e.use_template.id?a.id=e.use_template.id:e.use_template.type?a.name=e.use_template.type:e.use_template.url&&(a.url=e.use_template.url);const t=b.resolve({path:"/decorate/edit",query:a});window.open(t.href)},$=()=>{let a=e.use_template.page;e.use_template.url?a=e.use_template.url:e.use_template.id&&(a+="?id="+e.use_template.id);const t=b.resolve({path:"/preview/wap",query:{page:a}});window.open(t.href)},y=_(!1),B=()=>{u.type=f.value,u.name=n.value.name,u.page=n.value.url,u.title=n.value.title,u.action=n.value.action,u.parent=n.value.parent,!y.value&&(y.value=!0,ne({...u}).then(a=>{y.value=!1,I()}))},{copy:F,isSupported:A,copied:U}=W(),M=a=>{A.value||h({message:l("notSupportCopy"),type:"warning"}),F(a)};return X(U,()=>{U.value&&h({message:l("copySuccess"),type:"success"})}),(a,t)=>{const c=Z,m=ee,Y=le,j=te,q=ae,z=se;return e.use_template?(E(),T("div",re,[s("div",de,[s("p",ue,i(e.use_template.title),1),w(s("div",me,[w(s("iframe",{id:"previewIframe_"+f.value,class:"w-[320px] h-[550px] mx-auto",src:e.use_template.wapPreview,frameborder:"0"},null,8,ce),[[x,e.loadingIframe]]),w(s("div",_e,[s("div",fe,i(o(l)("developTitle")),1),s("div",ve,[s("text",we,i(o(l)("wapDomain")),1),p(c,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=d=>v.value=d),placeholder:o(l)("wapDomainPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),s("div",xe,[p(m,{type:"primary",onClick:t[1]||(t[1]=d=>L())},{default:r(()=>[g(i(o(l)("confirm")),1)]),_:1}),p(m,{type:"primary",onClick:t[2]||(t[2]=d=>R()),plain:""},{default:r(()=>[g(i(o(l)("settingTips")),1)]),_:1})])],512),[[x,e.loadingDev]])],512),[[x,e.use_template.url]]),w(s("div",ge,[e.use_template.cover?(E(),T("img",{key:0,class:"max-w-full",src:o(H)(e.use_template.cover)},null,8,ye)):N("",!0)],512),[[x,!e.use_template.wapPreview]]),s("div",{class:Q(["popup-wrap absolute inset-x-0 inset-y-0 select-none",{disabled:e.isDisabledPop}])},null,2)]),s("div",he,[s("div",be,[p(Y,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=d=>n.value=d),ignore:["DIY_LINK"],onSuccess:B},{default:r(()=>[p(m,{type:"primary"},{default:r(()=>[g(i(o(l)("changePage")),1)]),_:1})]),_:1},8,["modelValue"]),w(p(m,{type:"primary",onClick:t[4]||(t[4]=d=>O()),class:"ml-[12px]"},{default:r(()=>[g(i(o(l)("decorate")),1)]),_:1},512),[[x,e.use_template.action=="decorate"]])]),s("div",De,[s("div",Ie,[s("div",null,[s("div",ke,i(o(l)("H5")),1),p(q,{"label-width":"40px",class:"mt-[5px]"},{default:r(()=>[p(j,{label:o(l)("link"),class:"mb-[5px]"},{default:r(()=>[p(c,{readonly:"",value:e.shareUrl,class:"!w-[390px]"},{append:r(()=>[p(m,{onClick:t[5]||(t[5]=d=>M(e.shareUrl)),class:"bg-primary copy"},{default:r(()=>[g(i(o(l)("copy")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"])]),_:1}),s("div",Ce,i(o(l)("scanQRCodeOnRight")),1)]),s("div",Pe,[p(z,{class:"w-[100px] h-[100px] mb-[5px]",src:D.value},null,8,["src"]),s("div",{onClick:t[6]||(t[6]=d=>$()),class:"text-primary text-base cursor-pointer"},i(o(l)("preview")),1)])])])])])):N("",!0)}}});const je=pe(Ue,[["__scopeId","data-v-401927a8"]]);export{je as default};
