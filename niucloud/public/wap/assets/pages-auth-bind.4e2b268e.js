import{q as e,t,x as a,k as l,l as o,e as i,f as r,w as s,h as n,D as c,E as u,n as h,z as d,A as p,B as b,m,F as f,d as k,R as C,c as g,r as x,a as _,T as y,G as S,j as D,C as v,U as z,V as B,P as w,W as V,X as $}from"./index-5ccb7aca.js";import{_ as G}from"./u-input.7a3c5066.js";import{_ as j,a as P}from"./u-form.71c81480.js";import{_ as I}from"./sms-code.vue_vue_type_script_setup_true_lang.3cbf0063.js";import{_ as T}from"./u-icon.b7c42932.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as L}from"./app-link.vue_vue_type_script_setup_true_lang.f7d1a8fa.js";import{_ as N}from"./u-button.092119b5.js";import"./u-line.6a74bc71.js";import"./u-modal.276d8a5f.js";import"./u-loading-icon.5a04567d.js";import"./u-popup.bc41148f.js";import"./u-transition.d4c1e034.js";import"./u-safe-bottom.1d02e76a.js";const U=H({name:"u-checkbox",mixins:[t,a,{props:{name:{type:[String,Number,Boolean],default:e.checkbox.name},shape:{type:String,default:e.checkbox.shape},size:{type:[String,Number],default:e.checkbox.size},checked:{type:Boolean,default:e.checkbox.checked},disabled:{type:[String,Boolean],default:e.checkbox.disabled},activeColor:{type:String,default:e.checkbox.activeColor},inactiveColor:{type:String,default:e.checkbox.inactiveColor},iconSize:{type:[String,Number],default:e.checkbox.iconSize},iconColor:{type:String,default:e.checkbox.iconColor},label:{type:[String,Number],default:e.checkbox.label},labelSize:{type:[String,Number],default:e.checkbox.labelSize},labelColor:{type:String,default:e.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:e.checkbox.labelDisabled}}}],data:()=>({isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,modelValue:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}),computed:{elDisabled(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize(){return uni.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor(){const e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses(){let e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle(){const e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=uni.$u.addUnit(this.elSize),e.height=uni.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle(){const e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&uni.$u.error("检测到您将borderBottom设置为true，需要同时将u-checkbox-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted(){this.init()},methods:{init(){this.updateParentData(),this.parent||uni.$u.error("u-checkbox必须搭配u-checkbox-group组件使用");const e=this.parentData.modelValue;this.checked?this.isChecked=!0:uni.$u.test.array(e)&&(this.isChecked=e.some((e=>e===this.name)))},updateParentData(){this.getParentData("u-checkbox-group")},wrapperClickHandler(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},iconClickHandler(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent(){this.$emit("change",this.isChecked),this.$nextTick((()=>{uni.$u.formValidate(this,"change")}))},setRadioCheckedStatus(){this.isChecked=!this.isChecked,this.emitEvent(),"function"==typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked(){this.isChecked=this.checked}}},[["render",function(e,t,a,k,C,g){const x=l(o("u-icon"),T),_=m,y=f;return i(),r(_,{class:c(["u-checkbox",[`u-checkbox-label--${C.parentData.iconPlacement}`,C.parentData.borderBottom&&"column"===C.parentData.placement&&"u-border-bottom"]]),style:h([g.checkboxStyle]),onClick:u(g.wrapperClickHandler,["stop"])},{default:s((()=>[n(_,{class:c(["u-checkbox__icon-wrap",g.iconClasses]),onClick:u(g.iconClickHandler,["stop"]),style:h([g.iconWrapStyle])},{default:s((()=>[d(e.$slots,"icon",{},(()=>[n(x,{class:"u-checkbox__icon-wrap__icon",name:"checkbox-mark",size:g.elIconSize,color:g.elIconColor},null,8,["size","color"])]),!0)])),_:3},8,["onClick","class","style"]),n(y,{onClick:u(g.labelClickHandler,["stop"]),style:h({color:g.elDisabled?g.elInactiveColor:g.elLabelColor,fontSize:g.elLabelSize,lineHeight:g.elLabelSize})},{default:s((()=>[p(b(e.label),1)])),_:1},8,["onClick","style"])])),_:3},8,["style","onClick","class"])}],["__scopeId","data-v-fb07f37a"]]);const A=H({name:"u-checkbox-group",mixins:[t,a,{props:{name:{type:String,default:e.checkboxGroup.name},modelValue:{type:Array,default:e.checkboxGroup.value},shape:{type:String,default:e.checkboxGroup.shape},disabled:{type:Boolean,default:e.checkboxGroup.disabled},activeColor:{type:String,default:e.checkboxGroup.activeColor},inactiveColor:{type:String,default:e.checkboxGroup.inactiveColor},size:{type:[String,Number],default:e.checkboxGroup.size},placement:{type:String,default:e.checkboxGroup.placement},labelSize:{type:[String,Number],default:e.checkboxGroup.labelSize},labelColor:{type:[String],default:e.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:e.checkboxGroup.labelDisabled},iconColor:{type:String,default:e.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:e.checkboxGroup.iconSize},iconPlacement:{type:String,default:e.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:e.checkboxGroup.borderBottom}}}],computed:{parentData(){return[this.modelValue,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:{handler(){this.children.length&&this.children.map((e=>{"function"==typeof e.init&&e.init()}))},deep:!0}},data:()=>({}),created(){this.children=[]},emits:["update:modelValue","change"],methods:{unCheckedOther(e){const t=[];this.children.map((e=>{e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("update:modelValue",t)}}},[["render",function(e,t,a,l,o,n){const u=m;return i(),r(u,{class:c(["u-checkbox-group",n.bemClass])},{default:s((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-f5bb36e2"]]),R=k({__name:"bind",setup(e){const t=C(),a=g((()=>t.info)),c=g((()=>$().login)),u=x(!1),h=x(!1),d=_({mobile:"",mobile_code:"",mobile_key:"",openid:y("openid")}),k={mobile:[{type:"string",required:!0,message:S("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,t)=>uni.$u.test.mobile(t),message:S("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:S("codePlaceholder"),trigger:["blur","change"]}},T=()=>{h.value=!h.value},H=x(null),R=()=>{H.value.validate().then((()=>{if(u.value)return;u.value=!0;(a.value?z:B)(d).then((e=>{a.value?(t.getMemberInfo(),w({url:"/pages/member/personal",mode:"redirectTo"})):(t.setToken(e.data.token),V().handleLoginBack())})).catch((()=>{u.value=!1}))}))};return(e,t)=>{const C=m,g=l(o("u-input"),G),x=l(o("u-form-item"),j),_=l(o("sms-code"),I),y=l(o("u-checkbox"),U),z=l(o("u-checkbox-group"),A),B=f,w=l(o("app-link"),L),V=l(o("u-button"),N),$=l(o("u-form"),P);return i(),r(C,{class:"w-screen h-screen flex flex-col"},{default:s((()=>[n(C,{class:"flex-1"},{default:s((()=>[n(C,{class:"h-[100rpx]"}),n(C,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:s((()=>[n(C,{class:"font-bold text-lg"},{default:s((()=>[p(b(D(S)("bindMobile")),1)])),_:1})])),_:1}),n(C,{class:"px-[60rpx]"},{default:s((()=>[n($,{labelPosition:"left",model:d,errorType:"toast",rules:k,ref_key:"formRef",ref:H},{default:s((()=>[n(x,{label:"",prop:"mobile","border-bottom":!0},{default:s((()=>[n(g,{modelValue:d.mobile,"onUpdate:modelValue":t[0]||(t[0]=e=>d.mobile=e),border:"none",clearable:"",placeholder:D(S)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),n(C,{class:"mt-[40rpx]"},{default:s((()=>[n(x,{label:"",prop:"mobile_code","border-bottom":!0},{default:s((()=>[n(g,{modelValue:d.mobile_code,"onUpdate:modelValue":t[2]||(t[2]=e=>d.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:D(S)("codePlaceholder")},{suffix:s((()=>[n(_,{mobile:d.mobile,type:"bind_mobile",modelValue:d.mobile_key,"onUpdate:modelValue":t[1]||(t[1]=e=>d.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1}),!D(a)&&D(c).agreement_show?(i(),r(C,{key:0,class:"flex items-start mt-[30rpx]"},{default:s((()=>[n(z,null,{default:s((()=>[n(y,{checked:h.value,shape:"shape",size:"14",onChange:T,customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),n(C,{class:"text-xs text-gray-400 flex flex-wrap"},{default:s((()=>[p(b(D(S)("agreeTips"))+" ",1),n(w,{url:"/pages/auth/agreement?key=service"},{default:s((()=>[n(B,{class:"text-primary"},{default:s((()=>[p("《"+b(D(S)("userAgreement"))+"》",1)])),_:1})])),_:1}),n(w,{url:"/pages/auth/agreement?key=privacy"},{default:s((()=>[n(B,{class:"text-primary"},{default:s((()=>[p("《"+b(D(S)("privacyAgreement"))+"》",1)])),_:1})])),_:1})])),_:1})])),_:1})):v("",!0),n(C,{class:"mt-[60rpx]"},{default:s((()=>[n(V,{type:"primary",loading:u.value,loadingText:D(S)("logining"),onClick:R},{default:s((()=>[p(b(D(S)("bind")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})}}});export{R as default};
