import{d as P,r as p,O as z,bz as F,n as W,aK as j,s as J,a3 as h,N as e,h as w,c as S,a as o,y as g,z as y,t as c,u as s,e as l,w as n,i as B,I as T,R as K,B as M,U as X,W as Y,E as A,X as G,V as H,Y as Q}from"./index-30b146d4.js";/* empty css                     *//* empty css                 *//* empty css                        *//* empty css                  *//* empty css                 */import{g as Z}from"./weapp-b0208463.js";import{q as ee}from"./sys-60b0e237.js";import{b as ae}from"./browser-a1ac24ac.js";const te={class:"main-container w-[375px] mx-auto mt-[20px] mb-[40px] relative"},oe={class:"flex full-container"},se=["src"],le={class:"w-[375px] border border-slate-100 bg-body pt-[20px] px-[20px]"},ne={class:"font-bold text-xl mb-[40px]"},pe={class:"mb-[20px] flex flex-col"},re={class:"mb-[10px]"},ce={key:0,class:"w-[400px] absolute bg-body top-[10%] -right-[450px]"},ie={class:"info-wrap mt-[20px]"},ue={class:"px-[20px] pb-[10px] font-bold"},de={class:"px-[20px] pb-[10px] font-bold mt-[40px]"},me={class:"text-gray-400"},qe=P({__name:"preview",setup(_e){const u=p(""),d=p(""),m=p(""),r=p(""),i=p(!1),_=p(!1),D=p(0),k=p(0),v=z();v.query.page=v.query.page||"",F("setLayout")("decorate"),ee().then(a=>{u.value=a.data.wap_url,q()});const O=()=>{if(d.value.trim().length==0){h({type:"warning",message:`${e("wapDomainPlaceholder")}`});return}u.value=d.value+"/wap",q(),X.set({key:"wap_domain",data:u.value}),i.value=!0,_.value=!1},q=()=>{v.query.page&&(r.value=`${u.value}${v.query.page}`,ae.toDataURL(r.value,{errorCorrectionLevel:"L",margin:0,width:100}).then(a=>{m.value=a}),D.value=new Date().getTime(),setTimeout(()=>{k.value==0&&C()},1e3*2))};window.addEventListener("message",a=>{try{const t=JSON.parse(a.data);if(["appOnLaunch","appOnReady"].indexOf(t.type)!=-1){_.value=!1,i.value=!0;const f=new Date().getTime();k.value=f-D.value}}catch(t){C(),console.log("后台接受数据错误",t)}},!1);const C=()=>{_.value=!0,i.value=!1,r.value="",m.value=""},b=W({qr_code:""});Z().then(a=>{if(a.code==1){const t=a.data;b.qr_code=t.qr_code}});const{copy:U,isSupported:R,copied:E}=j(),$=a=>{R.value||h({message:e("notSupportCopy"),type:"warning"}),U(a)};return J(E,()=>{E.value&&h({message:e("copySuccess"),type:"success"})}),(a,t)=>{const f=Y,L=A,x=G,I=H,V=Q;return w(),S("div",te,[o("div",oe,[g(o("iframe",{class:"w-[375px]",src:r.value,frameborder:"0",id:"previewIframe"},null,8,se),[[y,i.value]]),g(o("div",le,[o("div",ne,c(s(e)("developTitle")),1),o("div",pe,[o("text",re,c(s(e)("wapDomain")),1),l(f,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=N=>d.value=N),placeholder:s(e)("wapDomainPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),l(L,{type:"primary",onClick:O},{default:n(()=>[B(c(s(e)("confirm")),1)]),_:1})],512),[[y,_.value]]),i.value?(w(),S("div",ce,[o("div",ie,[o("div",ue,c(s(e)("h5")),1),l(V,{"label-width":"40px",class:"px-[20px]"},{default:n(()=>[g(l(x,{label:s(e)("link")},{default:n(()=>[l(f,{readonly:"",value:r.value},{append:n(()=>[l(L,{onClick:t[1]||(t[1]=N=>$(r.value)),class:"bg-primary copy"},{default:n(()=>[B(c(s(e)("copy")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),[[y,r.value]]),g(l(x,{label:" "},{default:n(()=>[l(I,{src:m.value},null,8,["src"])]),_:1},512),[[y,m.value]])]),_:1}),o("div",de,c(s(e)("weapp")),1),l(V,{"label-width":"40px",class:"px-[20px]"},{default:n(()=>[b.qr_code?(w(),T(x,{key:0,label:" "},{default:n(()=>[l(I,{class:"w-[100px] h-[100px]",src:s(K)(b.qr_code)},null,8,["src"])]),_:1})):(w(),T(x,{key:1,label:" "},{default:n(()=>[o("span",me,c(s(e)("weappNotSet")),1)]),_:1}))]),_:1})])])):M("",!0)])])}}});export{qe as default};
