import{d as I,r as s,q as S,N as a,h as u,I as f,w as d,a as O,e as t,i as C,t as q,u as n,c as _,F as b,G as h,ax as z,cz as E,as as W,aF as X,X as Y,W as j,Y as H,E as J,aa as Q}from"./index-4dcc0234.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import{g as Z,l as ee,m as le}from"./tools-123d2a10.js";const ae={class:"dialog-footer"},ye=I({__name:"edit-associated",props:{table_name:{type:String,required:!0}},emits:["complete"],setup(x,{expose:K,emit:N}){const U=x,m=s(!1),M=s(""),V={type:"has_one",name:"",addon:"system",model:"",local_key:"",foreign_key:""},o=s({...V}),g=s(),T=S(()=>({type:[{required:!0,message:a("associatedTypePlaceholder"),trigger:"change"}],name:[{required:!0,message:a("associatedNamePlaceholder"),trigger:"blur"}],addon:[{required:!0,message:a("addonsPlaceholder"),trigger:"change"}],model:[{required:!0,message:a("associatedModelPlaceholder"),trigger:"change"}],local_key:[{required:!0,message:a("localKeyPlaceholder"),trigger:"change"}],foreign_key:[{required:!0,message:a("foreignKeyPlaceholder"),trigger:"blur"}]})),k=s([]),w=r=>{ee(r).then(e=>{k.value=e.data})},F=s([]),A=r=>{le({table_name:r}).then(e=>{F.value=e.data})},v=s([]);(async()=>{const{data:r}=await Z({});v.value=[{title:"系统",key:"system"}],v.value.push(...r),w({addon:"system"})})();const B=r=>{o.value.model="",w({addon:r})},G=r=>{var e;(e=g.value)==null||e.clearValidate(),r()},L=async r=>{r&&await r.validate(async e=>{e&&(N("complete",z(o.value)),m.value=!1)})};return K({showDialog:m,setFormData:async(r=null)=>{A(U.table_name),r?o.value=E(r):o.value=E(V),m.value=!0}}),(r,e)=>{const p=W,c=X,i=Y,P=j,R=H,D=J,$=Q;return u(),f($,{modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=l=>m.value=l),title:M.value,width:"500px","before-close":G,"destroy-on-close":!0},{footer:d(()=>[O("span",ae,[t(D,{onClick:e[6]||(e[6]=l=>m.value=!1)},{default:d(()=>[C(q(n(a)("cancel")),1)]),_:1}),t(D,{type:"primary",onClick:e[7]||(e[7]=l=>L(g.value))},{default:d(()=>[C(q(n(a)("confirm")),1)]),_:1})])]),default:d(()=>[t(R,{model:o.value,"label-width":"120px",ref_key:"formRef",ref:g,rules:n(T),class:"page-form"},{default:d(()=>[t(i,{label:n(a)("associatedType"),prop:"type"},{default:d(()=>[t(c,{placeholder:n(a)("associatedTypePlaceholder"),modelValue:o.value.type,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.type=l),class:"input-width"},{default:d(()=>[t(p,{label:n(a)("hasOne"),value:"has_one"},null,8,["label"]),t(p,{label:n(a)("hasMany"),value:"has_many"},null,8,["label"])]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),t(i,{label:n(a)("associatedName"),prop:"name"},{default:d(()=>[t(P,{modelValue:o.value.name,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.name=l),placeholder:n(a)("associatedNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:n(a)("addons"),prop:"addon"},{default:d(()=>[t(c,{modelValue:o.value.addon,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.addon=l),placeholder:n(a)("addonsPlaceholder"),class:"input-width",onChange:B},{default:d(()=>[(u(!0),_(b,null,h(v.value,(l,y)=>(u(),f(p,{label:l.title,value:l.key,key:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:n(a)("associatedModel"),prop:"model"},{default:d(()=>[t(c,{placeholder:n(a)("associatedModelPlaceholder"),modelValue:o.value.model,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.model=l),class:"input-width",filterable:""},{default:d(()=>[(u(!0),_(b,null,h(k.value,l=>(u(),f(p,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),t(i,{prop:"local_key",label:n(a)("localKey")},{default:d(()=>[t(c,{class:"input-width",placeholder:n(a)("localKeyPlaceholder"),modelValue:o.value.local_key,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.local_key=l)},{default:d(()=>[(u(!0),_(b,null,h(F.value,(l,y)=>(u(),f(p,{label:`${l.name}:${l.comment}`,value:l.name,key:y},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),t(i,{label:n(a)("foreignKey"),prop:"foreign_key"},{default:d(()=>[t(P,{modelValue:o.value.foreign_key,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.foreign_key=l),placeholder:n(a)("foreignKeyPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{ye as _};
