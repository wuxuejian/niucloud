import{d as C,r as v,n as j,q as L,h as f,I as y,w as a,a as m,e as s,i as p,t as i,u as l,N as n,y as U,c as k,F as $,G,ay as I,az as O,X as S,Y as q,E as z,aa as K,$ as T}from"./index-30b146d4.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 */import{a as X}from"./notice-736f6aad.js";const Y={class:"input-width"},A={class:"input-width"},H={class:"input-width"},J={class:"input-width"},M={class:"dialog-footer"},se=C({__name:"notice-wechat",emits:["complete"],setup(P,{expose:D,emit:V}){const u=v(!1),r=v(!0),h={is_wechat:0,key:"",name:"",title:"",type:"",content:[],temp_key:"",keyword_name_list:""},t=j({...h}),w=v(),E=L(()=>({})),F=async o=>{r.value||!o||await o.validate(async e=>{if(e){r.value=!0;const d=t;d.status=d.is_wechat,X(d).then(b=>{r.value=!1,u.value=!1,V("complete")}).catch(()=>{r.value=!1})}})};return D({showDialog:u,setFormData:async(o=null)=>{r.value=!0,Object.assign(t,h),o&&Object.keys(t).forEach(e=>{o[e]!=null&&(t[e]=o[e]),o.wechat&&o.wechat[e]!=null&&(t[e]=o.wechat[e])}),r.value=!1}}),(o,e)=>{const d=I,b=O,_=S,x=q,g=z,N=K,B=T;return f(),y(N,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=c=>u.value=c),title:l(n)("noticeSetting"),width:"550px","destroy-on-close":!0},{footer:a(()=>[m("span",M,[s(g,{onClick:e[1]||(e[1]=c=>u.value=!1)},{default:a(()=>[p(i(l(n)("cancel")),1)]),_:1}),s(g,{type:"primary",loading:r.value,onClick:e[2]||(e[2]=c=>F(w.value))},{default:a(()=>[p(i(l(n)("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[U((f(),y(x,{model:t,"label-width":"110px",ref_key:"formRef",ref:w,rules:l(E),class:"page-form"},{default:a(()=>[s(_,{label:l(n)("status")},{default:a(()=>[s(b,{modelValue:t.is_wechat,"onUpdate:modelValue":e[0]||(e[0]=c=>t.is_wechat=c)},{default:a(()=>[s(d,{label:1},{default:a(()=>[p(i(l(n)("startUsing")),1)]),_:1}),s(d,{label:0},{default:a(()=>[p(i(l(n)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(_,{label:l(n)("name")},{default:a(()=>[m("div",Y,i(t.name),1)]),_:1},8,["label"]),s(_,{label:l(n)("tempKey")},{default:a(()=>[m("div",A,i(t.temp_key),1)]),_:1},8,["label"]),s(_,{label:l(n)("keywordNameList")},{default:a(()=>[m("div",H,i(t.keyword_name_list?t.keyword_name_list.join("，"):""),1)]),_:1},8,["label"]),s(_,{label:l(n)("content")},{default:a(()=>[m("div",J,[(f(!0),k($,null,G(t.content,(c,R)=>(f(),k("div",{key:R},i(c[0])+"："+i(c[1]),1))),128))])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[B,r.value]])]),_:1},8,["modelValue","title"])}}});export{se as _};
