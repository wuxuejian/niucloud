import{l as e,m as t,p as a,q as l,t as o,x as i,y as s,z as r,g as n,h as c,o as d,c as h,w as u,b as p,A as b,B as m,n as f,C as k,D as g,E as C,i as x,F as y,d as S,G as _,H as v,r as D,I as z,J as B,K as j,u as w,f as G,L as V,M as A,a as P,N as I,O as H}from"./index-000ef0fb.js";import{_ as L}from"./u-input.0aaedf0a.js";import{_ as N,a as T}from"./u-form.e2126636.js";import{_ as $}from"./sms-code.vue_vue_type_script_setup_true_lang.d860bf12.js";import{_ as E}from"./u-icon.f8309613.js";import{_ as O}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as R}from"./u-button.cdb9d635.js";import"./u-line.ede52530.js";import"./u-modal.be1fb468.js";import"./u-loading-icon.d02ed416.js";import"./u-popup.bdec7df3.js";import"./u-transition.3ad24640.js";import"./u-safe-bottom.9eba99f8.js";const q=O({name:"u-checkbox",mixins:[t,a,{props:{name:{type:[String,Number,Boolean],default:()=>e.checkbox.name},shape:{type:String,default:()=>e.checkbox.shape},size:{type:[String,Number],default:()=>e.checkbox.size},checked:{type:Boolean,default:()=>e.checkbox.checked},disabled:{type:[String,Boolean],default:()=>e.checkbox.disabled},activeColor:{type:String,default:()=>e.checkbox.activeColor},inactiveColor:{type:String,default:()=>e.checkbox.inactiveColor},iconSize:{type:[String,Number],default:()=>e.checkbox.iconSize},iconColor:{type:String,default:()=>e.checkbox.iconColor},label:{type:[String,Number],default:()=>e.checkbox.label},labelSize:{type:[String,Number],default:()=>e.checkbox.labelSize},labelColor:{type:String,default:()=>e.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:()=>e.checkbox.labelDisabled},usedAlone:{type:[Boolean],default:()=>!1}}}],data:()=>({isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,modelValue:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}),computed:{elDisabled(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize(){return l(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor(){const e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses(){let e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle(){const e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=l(this.elSize),e.height=l(this.elSize),this.usedAlone||"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle(){const e={};return this.usedAlone||(this.parentData.borderBottom&&this.parentData.placement,this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px")),o(e,i(this.customStyle))}},mounted(){this.init()},emits:["change"],methods:{init(){this.usedAlone||(this.updateParentData(),this.parent);const e=this.parentData.modelValue;this.checked?this.isChecked=!0:!this.usedAlone&&s.array(e)&&(this.isChecked=e.some((e=>e===this.name)))},updateParentData(){this.getParentData("u-checkbox-group")},wrapperClickHandler(e){(this.usedAlone||"right"===this.parentData.iconPlacement)&&this.iconClickHandler(e)},iconClickHandler(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent(){this.$emit("change",this.isChecked),this.$nextTick((()=>{r(this,"change")}))},setRadioCheckedStatus(){this.isChecked=!this.isChecked,this.emitEvent(),this.usedAlone||"function"==typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked(){this.isChecked=this.checked}}},[["render",function(e,t,a,l,o,i){const s=n(c("u-icon"),E),r=x,S=y;return d(),h(r,{class:b(["u-checkbox cursor-pointer",[`u-checkbox-label--${o.parentData.iconPlacement}`,o.parentData.borderBottom&&"column"===o.parentData.placement&&"u-border-bottom"]]),style:f([i.checkboxStyle]),onClick:m(i.wrapperClickHandler,["stop"])},{default:u((()=>[p(r,{class:b(["u-checkbox__icon-wrap cursor-pointer",i.iconClasses]),onClick:m(i.iconClickHandler,["stop"]),style:f([i.iconWrapStyle])},{default:u((()=>[k(e.$slots,"icon",{},(()=>[p(s,{class:"u-checkbox__icon-wrap__icon",name:"checkbox-mark",size:i.elIconSize,color:i.elIconColor},null,8,["size","color"])]),!0)])),_:3},8,["onClick","class","style"]),p(S,{onClick:m(i.labelClickHandler,["stop"]),style:f({color:i.elDisabled?i.elInactiveColor:i.elLabelColor,fontSize:i.elLabelSize,lineHeight:i.elLabelSize})},{default:u((()=>[g(C(e.label),1)])),_:1},8,["onClick","style"])])),_:3},8,["style","onClick","class"])}],["__scopeId","data-v-92081527"]]);const M=O({name:"u-checkbox-group",mixins:[t,a,{props:{name:{type:String,default:()=>e.checkboxGroup.name},modelValue:{type:Array,default:()=>e.checkboxGroup.value},shape:{type:String,default:()=>e.checkboxGroup.shape},disabled:{type:Boolean,default:()=>e.checkboxGroup.disabled},activeColor:{type:String,default:()=>e.checkboxGroup.activeColor},inactiveColor:{type:String,default:()=>e.checkboxGroup.inactiveColor},size:{type:[String,Number],default:()=>e.checkboxGroup.size},placement:{type:String,default:()=>e.checkboxGroup.placement},labelSize:{type:[String,Number],default:()=>e.checkboxGroup.labelSize},labelColor:{type:[String],default:()=>e.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:()=>e.checkboxGroup.labelDisabled},iconColor:{type:String,default:()=>e.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:()=>e.checkboxGroup.iconSize},iconPlacement:{type:String,default:()=>e.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:()=>e.checkboxGroup.borderBottom}}}],computed:{parentData(){return[this.modelValue,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:{handler(){this.children.length&&this.children.map((e=>{"function"==typeof e.init&&e.init()}))},deep:!0}},data:()=>({}),created(){this.children=[]},emits:["update:modelValue","change"],methods:{unCheckedOther(e){const t=[];this.children.map((e=>{e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("update:modelValue",t)}}},[["render",function(e,t,a,l,o,i){const s=x;return d(),h(s,{class:b(["u-checkbox-group",i.bemClass])},{default:u((()=>[k(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-4665ee80"]]),U=O(S({__name:"bind",setup(e){const t=_(),a=v((()=>t.info)),l=v((()=>H().login)),o=D(!1),i=D(!1),s=z({mobile:"",mobile_code:"",mobile_key:""});let r=D(!0);B((()=>{setTimeout((()=>{r.value=!1}),800)})),uni.getStorageSync("openid")&&Object.assign(s,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(s,{pid:uni.getStorageSync("pid")}),uni.getStorageSync("unionid")&&Object.assign(s,{unionid:uni.getStorageSync("unionid")});const b={mobile:[{type:"string",required:!0,message:j("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,t,a){/^1[3-9]\d{9}$/.test(t)?a():a(new Error("请输入正确的手机号"))},message:j("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:j("codePlaceholder"),trigger:["blur","change"]}},m=()=>{i.value=!i.value},k=D(null),S=()=>{k.value.validate().then((()=>{if(o.value)return;o.value=!0;(a.value?V:A)(s).then((e=>{a.value?(t.getMemberInfo(),P({url:"/app/pages/member/personal",mode:"redirectTo"})):(t.setToken(e.data.token),I().handleLoginBack())})).catch((()=>{o.value=!1}))}))};return(e,t)=>{const _=x,v=n(c("u-input"),L),D=n(c("u-form-item"),N),z=n(c("sms-code"),$),B=n(c("u-checkbox"),q),V=n(c("u-checkbox-group"),M),A=y,I=n(c("u-button"),R),H=n(c("u-form"),T);return d(),h(_,{class:"w-screen h-screen flex flex-col",style:f(e.themeColor())},{default:u((()=>[p(_,{class:"flex-1"},{default:u((()=>[p(_,{class:"h-[100rpx]"}),p(_,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:u((()=>[p(_,{class:"font-bold text-lg"},{default:u((()=>[g(C(w(j)("bindMobile")),1)])),_:1})])),_:1}),p(_,{class:"px-[60rpx]"},{default:u((()=>[p(H,{labelPosition:"left",model:s,errorType:"toast",rules:b,ref_key:"formRef",ref:k},{default:u((()=>[p(D,{label:"",prop:"mobile","border-bottom":!0},{default:u((()=>[p(v,{modelValue:s.mobile,"onUpdate:modelValue":t[0]||(t[0]=e=>s.mobile=e),border:"none",clearable:"",placeholder:w(j)("mobilePlaceholder"),class:"!bg-transparent",disabled:w(r)},null,8,["modelValue","placeholder","disabled"])])),_:1}),p(_,{class:"mt-[40rpx]"},{default:u((()=>[p(D,{label:"",prop:"mobile_code","border-bottom":!0},{default:u((()=>[p(v,{modelValue:s.mobile_code,"onUpdate:modelValue":t[2]||(t[2]=e=>s.mobile_code=e),border:"none",clearable:"",placeholder:w(j)("codePlaceholder"),class:"!bg-transparent",disabled:w(r)},{suffix:u((()=>[p(z,{mobile:s.mobile,type:"bind_mobile",modelValue:s.mobile_key,"onUpdate:modelValue":t[1]||(t[1]=e=>s.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),!w(a)&&w(l).agreement_show?(d(),h(_,{key:0,class:"flex items-start mt-[30rpx]"},{default:u((()=>[p(V,null,{default:u((()=>[p(B,{activeColor:"var(--primary-color)",checked:i.value,shape:"shape",size:"14",onChange:m,customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),p(_,{class:"text-xs text-gray-400 flex flex-wrap"},{default:u((()=>[g(C(w(j)("agreeTips"))+" ",1),p(_,{onClick:t[3]||(t[3]=e=>w(P)({url:"/app/pages/auth/agreement?key=service"}))},{default:u((()=>[p(A,{class:"text-primary"},{default:u((()=>[g("《"+C(w(j)("userAgreement"))+"》",1)])),_:1})])),_:1}),p(_,{onClick:t[4]||(t[4]=e=>w(P)({url:"/app/pages/auth/agreement?key=privacy"}))},{default:u((()=>[p(A,{class:"text-primary"},{default:u((()=>[g("《"+C(w(j)("privacyAgreement"))+"》",1)])),_:1})])),_:1})])),_:1})])),_:1})):G("v-if",!0),p(_,{class:"mt-[60rpx]"},{default:u((()=>[p(I,{type:"primary",text:w(j)("bind"),loading:o.value,loadingText:w(j)("binding"),onClick:S},null,8,["text","loading","loadingText"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-92a02775"]]);export{U as default};
