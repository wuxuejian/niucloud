import"./base-962c0c23.js";/* empty css                   */import{E as G}from"./el-overlay-60700377.js";/* empty css                     */import"./index-f1b9f75f.js";/* empty css                *//* empty css                    *//* empty css                  */import{E as H,b as z}from"./el-radio-bfd4b1ad.js";/* empty css                 */import{t}from"./index-e8f72538.js";import{l as J,n as Q,o as W,p as X}from"./sys-93dce9bb.js";import{h as Y}from"./storage-abe718b1.js";import{E as Z}from"./index-93f2c618.js";import{a as ee,E as le}from"./index-61c777fa.js";import{E as oe}from"./index-df51d91a.js";import{E as te}from"./index-bba9e58c.js";import{E as ae}from"./index-1b76fba5.js";import{E as se}from"./index-7a123a20.js";import{v as re}from"./directive-c0c3e9a3.js";import{d as ne,r as m,w as ue,af as ie,M as ce,c as de,b as D,m as N,p as u,f as w,q as s,v as h,x as b,u as r,L as me}from"./runtime-core.esm-bundler-dc7a07d7.js";const fe={class:"flex items-center justify-between w-11/12"},pe={class:"dialog-footer"},Te=ne({__name:"edit-role",emits:["complete"],setup(_e,{expose:O,emit:U}){const _=m(!1),d=m(!1),g=m(!0);let k="";const p=m([]);J().then(l=>{p.value=l.data});const v=m(!1),E=m(!1),f=m(null);ue(v,()=>{v.value?f.value.setCheckedNodes(ie(p.value)):f.value.setCheckedNodes([])});const F=Y(l=>{a.rules=f.value.getCheckedKeys()}),S=()=>{g.value?(y(p.value),g.value=!1):(B(p.value),g.value=!0)},B=l=>{Object.keys(l).forEach(e=>{f.value.store.nodesMap[l[e].menu_key].expanded=!0,l[e].children&&l[e].children.length>0&&y(l[e].children)})},y=l=>{Object.keys(l).forEach(e=>{f.value.store.nodesMap[l[e].menu_key].expanded=!1,l[e].children&&l[e].children.length>0&&y(l[e].children)})},x={role_id:0,role_name:"",status:1,rules:[]},a=ce({...x}),C=m(),M=de(()=>({role_name:[{required:!0,message:t("roleNamePlaceholder"),trigger:"blur"}],rules:[{validator:(l,e,o)=>{e.length?o():o(new Error(t("rulesPlaceholder")))},trigger:"blur"}]})),T=async l=>{if(d.value||!l)return;const e=a.role_id?Q:W;await l.validate(async o=>{if(o){d.value=!0;const i=Object.assign({},a);i.rules=i.rules.concat(f.value.getHalfCheckedKeys()),e(i).then(n=>{d.value=!1,_.value=!1,U("complete")}).catch(()=>{d.value=!1})}})},A=async(l=null)=>{if(d.value=!0,v.value=!1,Object.assign(a,x),k=t("addRole"),l){k=t("updateRole");const e=await(await X(l.role_id)).data;Object.keys(a).forEach(o=>{if(e[o]!=null)if(o=="rules"){e.rules;var i=[];Object.keys(e.rules).forEach(n=>{R(e.rules[n],p.value,i)}),a[o]=i}else a[o]=e[o]})}d.value=!1};function R(l,e,o){Object.keys(e).forEach(i=>{let n=e[i];n.menu_key==l?(!n.children||n.children.length==0)&&o.push(n.menu_key):n.children&&n.children.length>0&&R(l,n.children,o)})}return O({showDialog:_,setFormData:A}),(l,e)=>{const o=Z,i=ee,n=H,I=z,j=oe,V=te,P=ae,$=se,q=le,K=G,L=re;return D(),N(K,{modelValue:_.value,"onUpdate:modelValue":e[7]||(e[7]=c=>_.value=c),title:r(k),width:"500px","destroy-on-close":!0},{footer:u(()=>[w("span",pe,[s(V,{onClick:e[5]||(e[5]=c=>_.value=!1)},{default:u(()=>[h(b(r(t)("cancel")),1)]),_:1}),s(V,{type:"primary",loading:d.value,onClick:e[6]||(e[6]=c=>T(C.value))},{default:u(()=>[h(b(r(t)("confirm")),1)]),_:1},8,["loading"])])]),default:u(()=>[me((D(),N(q,{model:a,"label-width":"90px",ref_key:"formRef",ref:C,rules:r(M),class:"page-form"},{default:u(()=>[s(i,{label:r(t)("roleName"),prop:"role_name"},{default:u(()=>[s(o,{modelValue:a.role_name,"onUpdate:modelValue":e[0]||(e[0]=c=>a.role_name=c),placeholder:r(t)("roleNamePlaceholder"),clearable:"",disabled:a.uid,class:"input-width",maxlength:"10","show-word-limit":!0},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),s(i,{label:r(t)("status")},{default:u(()=>[s(I,{modelValue:a.status,"onUpdate:modelValue":e[1]||(e[1]=c=>a.status=c)},{default:u(()=>[s(n,{label:1},{default:u(()=>[h(b(r(t)("startUsing")),1)]),_:1}),s(n,{label:0},{default:u(()=>[h(b(r(t)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(i,{label:r(t)("permission"),prop:"rules"},{default:u(()=>[w("div",fe,[w("div",null,[s(j,{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=c=>v.value=c),label:r(t)("selectAll")},null,8,["modelValue","label"]),s(j,{modelValue:E.value,"onUpdate:modelValue":e[3]||(e[3]=c=>E.value=c),label:r(t)("checkStrictly")},null,8,["modelValue","label"])]),s(V,{link:"",type:"primary",onClick:e[4]||(e[4]=c=>S())},{default:u(()=>[h(b(r(t)("foldText")),1)]),_:1})]),s($,{height:"35vh",class:"w-full"},{default:u(()=>[s(P,{data:p.value,props:{label:"menu_name"},"default-checked-keys":a.rules,"check-strictly":E.value,"show-checkbox":"","default-expand-all":"",onCheckChange:r(F),"node-key":"menu_key",ref_key:"treeRef",ref:f},null,8,["data","default-checked-keys","check-strictly","onCheckChange"])]),_:1})]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[L,d.value]])]),_:1},8,["modelValue","title"])}}});export{Te as _};
