import{d as F,r as f,n as B,q as C,N as a,h as g,I as w,w as i,a as I,e as n,i as V,t as h,u as r,y as O,di as P,Z as U,_ as R,$ as T,E as $,ad as j,a4 as k}from"./index-022827e1.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 */import{u as q,s as S,t as K}from"./member-394fe4e5.js";const Z={class:"dialog-footer"},ee=F({__name:"edit-label",emits:["complete"],setup(z,{expose:y,emit:x}){const d=f(!1),s=f(!1);let p="";const c={label_id:"",label_name:"",memo:"",sort:0},t=B({...c}),b=f(),D=C(()=>({label_name:[{required:!0,message:a("labelNamePlaceholder"),trigger:"blur"}],sort:[{validator:E,trigger:"blur"}]})),E=(m,e,l)=>{e<0?l(new Error(a("sortVerifyOne"))):e.toString().indexOf(".")!=-1?l(new Error(a("sortVerifyTwo"))):l()},M=async m=>{if(s.value||!m)return;const e=t.label_id?q:S;await m.validate(async l=>{l&&(s.value=!0,e(t).then(_=>{s.value=!1,d.value=!1,x("complete")}).catch(()=>{s.value=!1}))})};return y({showDialog:d,setFormData:async(m=null)=>{if(s.value=!0,Object.assign(t,c),p=a("addMemberLabel"),m){p=a("updateMemberLabel");const e=await(await K(m.label_id)).data;e&&Object.keys(t).forEach(l=>{e[l]!=null&&(t[l]=e[l])})}s.value=!1}}),(m,e)=>{const l=U,u=R,_=T,v=$,N=j,L=k;return g(),w(N,{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=o=>d.value=o),title:r(p),width:"500px","destroy-on-close":!0},{footer:i(()=>[I("span",Z,[n(v,{onClick:e[4]||(e[4]=o=>d.value=!1)},{default:i(()=>[V(h(r(a)("cancel")),1)]),_:1}),n(v,{type:"primary",loading:s.value,onClick:e[5]||(e[5]=o=>M(b.value))},{default:i(()=>[V(h(r(a)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[O((g(),w(_,{model:t,"label-width":"90px",ref_key:"formRef",ref:b,rules:r(D),class:"page-form"},{default:i(()=>[n(u,{label:r(a)("labelName"),prop:"label_name"},{default:i(()=>[n(l,{modelValue:t.label_name,"onUpdate:modelValue":e[0]||(e[0]=o=>t.label_name=o),modelModifiers:{trim:!0},clearable:"",placeholder:r(a)("labelNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(u,{label:r(a)("memo")},{default:i(()=>[n(l,{modelValue:t.memo,"onUpdate:modelValue":e[1]||(e[1]=o=>t.memo=o),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",placeholder:r(a)("memoPlaceholder"),class:"input-width",maxlength:"200","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(u,{label:r(a)("sort"),prop:"sort"},{default:i(()=>[n(l,{modelValue:t.sort,"onUpdate:modelValue":e[2]||(e[2]=o=>t.sort=o),modelModifiers:{trim:!0},clearable:"",maxlength:"6","show-word-limit":"",placeholder:r(a)("sortPlaceholder"),class:"input-width",onKeyup:e[3]||(e[3]=o=>r(P)(o))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[L,s.value]])]),_:1},8,["modelValue","title"])}}});export{ee as _};
