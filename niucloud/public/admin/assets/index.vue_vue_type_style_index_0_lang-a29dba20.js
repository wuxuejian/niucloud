import{d as _,q as f,a4 as d,N as u,aS as g,U as y,h as x,I as V,w as n,b as v,e as S,u as o,aH as h,i as k,t as w,aQ as E,W as I,aW as N}from"./index-9d601459.js";/* empty css                    *//* empty css                 */const B=_({__name:"index",props:{modelValue:{type:String,default:""},api:{type:String,default:"sys/document/document"}},emits:["update:modelValue"],setup(p,{emit:r}){const l=p,a=f({get(){return l.modelValue},set(e){r("update:modelValue",e)}}),t={action:`/adminapi//${l.api}`,showFileList:!1,headers:{},accept:".doc,.docx,.xml,.txt,.pem,.zip,.rar,.7z,.crt,.key",onSuccess:(e,s)=>{if(e.code!=null&&e.code!=1){d({message:e.msg,type:"error"});return}a.value=e.data.url,d({message:u("upload.success"),type:"success"})}};return t.headers.token=g(),t.headers["site-id"]=y.get("siteId")||0,(e,s)=>{const i=I,c=N;return x(),V(c,E(t,{class:"w-full upload-file"}),{default:n(()=>[v(e.$slots,"default",{},()=>[S(i,{modelValue:o(a),"onUpdate:modelValue":s[0]||(s[0]=m=>h(a)?a.value=m:null),class:"w-full",readonly:!0,title:o(a)},{append:n(()=>[k(w(o(u)("upload.root")),1)]),_:1},8,["modelValue","title"])])]),_:3},16)}}});export{B as _};
