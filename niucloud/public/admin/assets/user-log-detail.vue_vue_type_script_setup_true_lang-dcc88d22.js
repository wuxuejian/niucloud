import{d as V,r as _,h as f,s as b,w as a,a as d,e,i as u,t as s,u as l,q as t,P as k,al as B,am as C,S as L,E as N,a1 as S,U as F}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                             */import{b as I}from"./site-6efacd4c.js";const U={class:"break-all"},q={class:"break-all"},P={class:"dialog-footer"},O=V({__name:"user-log-detail",setup(T,{expose:v}){const i=_(!1),c=_(!1),o=_({username:"",ip:"",url:"",type:"",params:""}),h=async()=>{o.value=await(await I(m)).data,c.value=!1};let m=0;return v({showDialog:i,setFormData:async(p=null)=>{c.value=!0,p&&(m=p.id,h())}}),(p,r)=>{const n=B,D=C,y=L,w=N,x=S,E=F;return f(),b(x,{modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=g=>i.value=g),title:l(t)("detail"),width:"500px","destroy-on-close":!0},{footer:a(()=>[d("span",P,[e(w,{onClick:r[0]||(r[0]=g=>i.value=!1)},{default:a(()=>[u(s(l(t)("cancel")),1)]),_:1})])]),default:a(()=>[k((f(),b(y,{height:"400px"},{default:a(()=>[e(D,{column:1},{default:a(()=>[e(n,{label:l(t)("username"),"label-align":"right"},{default:a(()=>[u(s(o.value.username),1)]),_:1},8,["label"]),e(n,{label:l(t)("ip"),"label-align":"right"},{default:a(()=>[u(s(o.value.ip),1)]),_:1},8,["label"]),e(n,{label:l(t)("url"),"label-align":"right"},{default:a(()=>[d("span",U,s(o.value.url),1)]),_:1},8,["label"]),e(n,{label:l(t)("type"),"label-align":"right"},{default:a(()=>[u(s(o.value.type),1)]),_:1},8,["label"]),e(n,{label:l(t)("params"),"label-align":"right"},{default:a(()=>[d("span",q,s(o.value.params),1)]),_:1},8,["label"])]),_:1})]),_:1})),[[E,c.value]])]),_:1},8,["modelValue","title"])}}});export{O as _};
