import{U as N,f as Y,m as w}from"./event-ff03ec12.js";import{al as R,am as J,an as ve,ao as be,ap as me,aq as fe,ar as he,t as Q,a as A,c as G,o as F,f as ke,v as T,x as K,I as X,u as P,_ as O,b as pe,d as ge,w as xe,q as Z}from"./base-962c0c23.js";import{j as M,D as I,c as p,w as _,A as j,K as ee,r as z,B as E,k as Ce,af as q,d as L,G as ae,b as C,m as ne,p as le,f as H,n as x,u,L as $,e as y,i as V,g as U,F as ye,v as te,x as oe,C as D,U as se,h as Se,E as Le,Y as Be}from"./runtime-core.esm-bundler-dc7a07d7.js";import{i as Ee}from"./isEqual-c7d5e6d9.js";import{i as Ie,a as we}from"./_Uint8Array-6ff3cafa.js";import{f as $e}from"./flatten-d5d1dc97.js";function Ve(e){return e}function Ne(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}var Ge=800,Fe=16,ze=Date.now;function De(e){var a=0,l=0;return function(){var n=ze(),s=Fe-(n-l);if(l=n,s>0){if(++a>=Ge)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function Te(e){return function(){return e}}var Pe=R?function(e,a){return R(e,"toString",{configurable:!0,enumerable:!1,value:Te(a),writable:!0})}:Ve;const Oe=Pe;var Ue=De(Oe);const Re=Ue;var W=Math.max;function Ae(e,a,l){return a=W(a===void 0?e.length-1:a,0),function(){for(var n=arguments,s=-1,d=W(n.length-a,0),c=Array(d);++s<d;)c[s]=n[a+s];s=-1;for(var t=Array(a+1);++s<a;)t[s]=n[s];return t[a]=l(c),Ne(e,this,t)}}function Ke(e){return Re(Ae(e,void 0,$e),e+"")}function Me(e,a){return e!=null&&a in Object(e)}function qe(e,a,l){a=J(a,e);for(var n=-1,s=a.length,d=!1;++n<s;){var c=ve(a[n]);if(!(d=e!=null&&l(e,c)))break;e=e[c]}return d||++n!=s?d:(s=e==null?0:e.length,!!s&&Ie(s)&&be(c,s)&&(me(e)||we(e)))}function He(e,a){return e!=null&&qe(e,a,Me)}function We(e,a,l){for(var n=-1,s=a.length,d={};++n<s;){var c=a[n],t=fe(e,c);l(t,c)&&he(d,J(c,e),t)}return d}function Ye(e,a){return We(e,a,function(l,n){return He(e,n)})}var Je=Ke(function(e,a){return e==null?{}:Ye(e,a)});const Qe=Je,B=Symbol("checkboxGroupContextKey"),ue={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Q,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ie={[N]:e=>M(e)||A(e)||G(e),change:e=>M(e)||A(e)||G(e)},Xe=({model:e,isChecked:a})=>{const l=I(B,void 0),n=p(()=>{var d,c;const t=(d=l==null?void 0:l.max)==null?void 0:d.value,m=(c=l==null?void 0:l.min)==null?void 0:c.value;return!F(t)&&e.value.length>=t&&!a.value||!F(m)&&e.value.length<=m&&a.value});return{isDisabled:ke(p(()=>(l==null?void 0:l.disabled.value)||n.value)),isLimitDisabled:n}},Ze=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:s,isLabeledByFormItem:d})=>{const c=I(B,void 0),{formItem:t}=T(),{emit:m}=ee();function o(r){var v,b;return r===e.trueLabel||r===!0?(v=e.trueLabel)!=null?v:!0:(b=e.falseLabel)!=null?b:!1}function f(r,v){m("change",o(r),v)}function k(r){if(l.value)return;const v=r.target;m("change",o(v.checked),r)}async function S(r){l.value||!n.value&&!s.value&&d.value&&(r.composedPath().some(h=>h.tagName==="LABEL")||(a.value=o([!1,e.falseLabel].includes(a.value)),await j(),f(a.value,r)))}const i=p(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return _(()=>e.modelValue,()=>{i.value&&(t==null||t.validate("change").catch(r=>Y()))}),{handleChange:k,onClickRoot:S}},_e=e=>{const a=z(!1),{emit:l}=ee(),n=I(B,void 0),s=p(()=>F(n)===!1),d=z(!1);return{model:p({get(){var t,m;return s.value?(t=n==null?void 0:n.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:a.value},set(t){var m,o;s.value&&E(t)?(d.value=((m=n==null?void 0:n.max)==null?void 0:m.value)!==void 0&&t.length>(n==null?void 0:n.max.value),d.value===!1&&((o=n==null?void 0:n.changeEvent)==null||o.call(n,t))):(l(N,t),a.value=t)}}),isGroup:s,isLimitExceeded:d}},je=(e,a,{model:l})=>{const n=I(B,void 0),s=z(!1),d=p(()=>{const o=l.value;return G(o)?o:E(o)?Ce(e.label)?o.map(q).some(f=>Ee(f,e.label)):o.map(q).includes(e.label):o!=null?o===e.trueLabel:!!o}),c=K(p(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value}),{prop:!0}),t=K(p(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value})),m=p(()=>!!(a.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:s,checkboxSize:t,hasOwnLabel:m}},ea=(e,{model:a})=>{function l(){E(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&l()},re=(e,a)=>{const{formItem:l}=T(),{model:n,isGroup:s,isLimitExceeded:d}=_e(e),{isFocused:c,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=je(e,a,{model:n}),{isDisabled:k}=Xe({model:n,isChecked:t}),{inputId:S,isLabeledByFormItem:i}=X(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:s}),{handleChange:r,onClickRoot:v}=Ze(e,{model:n,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:i});return ea(e,{model:n}),{inputId:S,isLabeledByFormItem:i,isChecked:t,isDisabled:k,isFocused:c,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:n,handleChange:r,onClickRoot:v}},aa=["tabindex","role","aria-checked"],na=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],la=["id","aria-hidden","disabled","value","name","tabindex"],ta=L({name:"ElCheckbox"}),oa=L({...ta,props:ue,emits:ie,setup(e){const a=e,l=ae(),{inputId:n,isLabeledByFormItem:s,isChecked:d,isDisabled:c,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:k,onClickRoot:S}=re(a,l),i=P("checkbox"),r=p(()=>[i.b(),i.m(m.value),i.is("disabled",c.value),i.is("bordered",a.border),i.is("checked",d.value)]),v=p(()=>[i.e("input"),i.is("disabled",c.value),i.is("checked",d.value),i.is("indeterminate",a.indeterminate),i.is("focus",t.value)]);return(b,h)=>(C(),ne(se(!u(o)&&u(s)?"span":"label"),{class:x(u(r)),"aria-controls":b.indeterminate?b.controls:null,onClick:u(S)},{default:le(()=>[H("span",{class:x(u(v)),tabindex:b.indeterminate?0:void 0,role:b.indeterminate?"checkbox":void 0,"aria-checked":b.indeterminate?"mixed":void 0},[b.trueLabel||b.falseLabel?$((C(),y("input",{key:0,id:u(n),"onUpdate:modelValue":h[0]||(h[0]=g=>V(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox","aria-hidden":b.indeterminate?"true":"false",name:b.name,tabindex:b.tabindex,disabled:u(c),"true-value":b.trueLabel,"false-value":b.falseLabel,onChange:h[1]||(h[1]=(...g)=>u(k)&&u(k)(...g)),onFocus:h[2]||(h[2]=g=>t.value=!0),onBlur:h[3]||(h[3]=g=>t.value=!1)},null,42,na)),[[w,u(f)]]):$((C(),y("input",{key:1,id:u(n),"onUpdate:modelValue":h[4]||(h[4]=g=>V(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox","aria-hidden":b.indeterminate?"true":"false",disabled:u(c),value:b.label,name:b.name,tabindex:b.tabindex,onChange:h[5]||(h[5]=(...g)=>u(k)&&u(k)(...g)),onFocus:h[6]||(h[6]=g=>t.value=!0),onBlur:h[7]||(h[7]=g=>t.value=!1)},null,42,la)),[[w,u(f)]]),H("span",{class:x(u(i).e("inner"))},null,2)],10,aa),u(o)?(C(),y("span",{key:0,class:x(u(i).e("label"))},[U(b.$slots,"default"),b.$slots.default?D("v-if",!0):(C(),y(ye,{key:0},[te(oe(b.label),1)],64))],2)):D("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var sa=O(oa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ua=["name","tabindex","disabled","true-value","false-value"],ia=["name","tabindex","disabled","value"],ra=L({name:"ElCheckboxButton"}),da=L({...ra,props:ue,emits:ie,setup(e){const a=e,l=ae(),{isFocused:n,isChecked:s,isDisabled:d,checkboxButtonSize:c,model:t,handleChange:m}=re(a,l),o=I(B,void 0),f=P("checkbox"),k=p(()=>{var i,r,v,b;const h=(r=(i=o==null?void 0:o.fill)==null?void 0:i.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(b=(v=o==null?void 0:o.textColor)==null?void 0:v.value)!=null?b:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}}),S=p(()=>[f.b("button"),f.bm("button",c.value),f.is("disabled",d.value),f.is("checked",s.value),f.is("focus",n.value)]);return(i,r)=>(C(),y("label",{class:x(u(S))},[i.trueLabel||i.falseLabel?$((C(),y("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=v=>V(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),"true-value":i.trueLabel,"false-value":i.falseLabel,onChange:r[1]||(r[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:r[2]||(r[2]=v=>n.value=!0),onBlur:r[3]||(r[3]=v=>n.value=!1)},null,42,ua)),[[w,u(t)]]):$((C(),y("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=v=>V(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),value:i.label,onChange:r[5]||(r[5]=(...v)=>u(m)&&u(m)(...v)),onFocus:r[6]||(r[6]=v=>n.value=!0),onBlur:r[7]||(r[7]=v=>n.value=!1)},null,42,ia)),[[w,u(t)]]),i.$slots.default||i.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:Se(u(s)?u(k):void 0)},[U(i.$slots,"default",{},()=>[te(oe(i.label),1)])],6)):D("v-if",!0)],2))}});var de=O(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const ca=pe({modelValue:{type:ge(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Q,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),va={[N]:e=>E(e),change:e=>E(e)},ba=L({name:"ElCheckboxGroup"}),ma=L({...ba,props:ca,emits:va,setup(e,{emit:a}){const l=e,n=P("checkbox"),{formItem:s}=T(),{inputId:d,isLabeledByFormItem:c}=X(l,{formItemContext:s}),t=async o=>{a(N,o),await j(),a("change",o)},m=p({get(){return l.modelValue},set(o){t(o)}});return Le(B,{...Qe(Be(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),_(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(o=>Y()))}),(o,f)=>{var k;return C(),ne(se(o.tag),{id:u(d),class:x(u(n).b("group")),role:"group","aria-label":u(c)?void 0:o.label||"checkbox-group","aria-labelledby":u(c)?(k=u(s))==null?void 0:k.labelId:void 0},{default:le(()=>[U(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ce=O(ma,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Ca=xe(sa,{CheckboxButton:de,CheckboxGroup:ce}),ya=Z(de),Sa=Z(ce);export{Ca as E,Sa as a,ya as b,He as h,Ve as i,Ae as o,Qe as p,Re as s};
