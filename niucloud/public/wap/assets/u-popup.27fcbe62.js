import{_ as t}from"./u-transition.44bb65c7.js";import{U as e,V as o,W as s,p as a,q as i,h as n,i as r,w as l,S as u,n as d,t as p,l as c,j as y,I as m,H as f}from"./index-e4516e00.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as v}from"./u-icon.800a0d37.js";import{_ as g}from"./u-safe-bottom.e98411e2.js";const b=h({name:"u-overlay",mixins:[o,s,{props:{show:{type:Boolean,default:e.overlay.show},zIndex:{type:[String,Number],default:e.overlay.zIndex},duration:{type:[String,Number],default:e.overlay.duration},opacity:{type:[String,Number],default:e.overlay.opacity}}}],computed:{overlayStyle(){const t={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{clickHandler(){this.$emit("click")}}},[["render",function(e,o,s,d,p,c){const y=a(i("u-transition"),t);return n(),r(y,{show:e.show,"custom-class":"u-overlay",duration:e.duration,"custom-style":c.overlayStyle,onClick:c.clickHandler},{default:l((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick"])}],["__scopeId","data-v-1ce16a4a"]]);const _=h({name:"u-status-bar",mixins:[o,s,{props:{bgColor:{type:String,default:e.statusBar.bgColor}}}],data:()=>({}),computed:{style(){const t={};return t.height=uni.$u.addUnit(uni.$u.sys().statusBarHeight,"px"),t.backgroundColor=this.bgColor,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}},[["render",function(t,e,o,s,a,i){const c=p;return n(),r(c,{style:d([i.style]),class:"u-status-bar"},{default:l((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-df170e56"]]);const S=h({name:"u-popup",mixins:[o,s,{props:{show:{type:Boolean,default:e.popup.show},overlay:{type:Boolean,default:e.popup.overlay},mode:{type:String,default:e.popup.mode},duration:{type:[String,Number],default:e.popup.duration},closeable:{type:Boolean,default:e.popup.closeable},overlayStyle:{type:[Object,String],default:e.popup.overlayStyle},closeOnClickOverlay:{type:Boolean,default:e.popup.closeOnClickOverlay},zIndex:{type:[String,Number],default:e.popup.zIndex},safeAreaInsetBottom:{type:Boolean,default:e.popup.safeAreaInsetBottom},safeAreaInsetTop:{type:Boolean,default:e.popup.safeAreaInsetTop},closeIconPos:{type:String,default:e.popup.closeIconPos},round:{type:[Boolean,String,Number],default:e.popup.round},zoom:{type:Boolean,default:e.popup.zoom},bgColor:{type:String,default:e.popup.bgColor},overlayOpacity:{type:[Number,String],default:e.popup.overlayOpacity}}}],data(){return{overlayDuration:this.duration+50}},watch:{show(t,e){}},computed:{transitionStyle(){const t={zIndex:this.zIndex,position:"fixed",display:"flex"};return t[this.mode]=0,"left"===this.mode||"right"===this.mode?uni.$u.deepMerge(t,{bottom:0,top:0}):"top"===this.mode||"bottom"===this.mode?uni.$u.deepMerge(t,{left:0,right:0}):"center"===this.mode?uni.$u.deepMerge(t,{alignItems:"center","justify-content":"center",top:0,left:0,right:0,bottom:0}):void 0},contentStyle(){const t={};if(uni.$u.sys(),"center"!==this.mode&&(t.flex=1),this.bgColor&&(t.backgroundColor=this.bgColor),this.round){const e=uni.$u.addUnit(this.round);"top"===this.mode?(t.borderBottomLeftRadius=e,t.borderBottomRightRadius=e):"bottom"===this.mode?(t.borderTopLeftRadius=e,t.borderTopRightRadius=e):"center"===this.mode&&(t.borderRadius=e)}return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))},position(){return"center"===this.mode?this.zoom?"fade-zoom":"fade":"left"===this.mode?"slide-left":"right"===this.mode?"slide-right":"bottom"===this.mode?"slide-up":"top"===this.mode?"slide-down":void 0}},methods:{overlayClick(){this.closeOnClickOverlay&&this.$emit("close")},close(t){this.$emit("close")},afterEnter(){this.$emit("open")},clickHandler(){"center"===this.mode&&this.overlayClick(),this.$emit("click")}}},[["render",function(e,o,s,h,S,k){const C=a(i("u-overlay"),b),I=a(i("u-status-bar"),_),$=a(i("u-icon"),v),x=p,w=a(i("u-safe-bottom"),g),B=a(i("u-transition"),t);return n(),r(x,{class:"u-popup"},{default:l((()=>[e.overlay?(n(),r(C,{key:0,show:e.show,onClick:k.overlayClick,duration:S.overlayDuration,customStyle:e.overlayStyle,opacity:e.overlayOpacity},null,8,["show","onClick","duration","customStyle","opacity"])):c("v-if",!0),y(B,{show:e.show,customStyle:k.transitionStyle,mode:k.position,duration:e.duration,onAfterEnter:k.afterEnter,onClick:k.clickHandler},{default:l((()=>[y(x,{class:"u-popup__content",style:d([k.contentStyle]),onClick:m(e.noop,["stop"])},{default:l((()=>[e.safeAreaInsetTop?(n(),r(I,{key:0})):c("v-if",!0),u(e.$slots,"default",{},void 0,!0),e.closeable?(n(),r(x,{key:1,onClick:m(k.close,["stop"]),class:f(["u-popup__content__close",["u-popup__content__close--"+e.closeIconPos]]),"hover-class":"u-popup__content__close--hover","hover-stay-time":"150"},{default:l((()=>[y($,{name:"close",color:"#909399",size:"18",bold:""})])),_:1},8,["onClick","class"])):c("v-if",!0),e.safeAreaInsetBottom?(n(),r(w,{key:2})):c("v-if",!0)])),_:3},8,["style","onClick"])])),_:3},8,["show","customStyle","mode","duration","onAfterEnter","onClick"])])),_:3})}],["__scopeId","data-v-ca966c1e"]]);export{S as _};
