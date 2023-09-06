import{y as e,z as i,A as a,p as t,q as o,h as r,i as d,w as s,j as n,n as l,m as h,C as u,a1 as g,t as m}from"./index-15eacd31.js";import{_ as p}from"./u-icon.f5369555.js";import{_ as c}from"./u-transition.a952a64b.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const w={props:{src:{type:String,default:e.image.src},mode:{type:String,default:e.image.mode},width:{type:[String,Number],default:e.image.width},height:{type:[String,Number],default:e.image.height},shape:{type:String,default:e.image.shape},radius:{type:[String,Number],default:e.image.radius},lazyLoad:{type:Boolean,default:e.image.lazyLoad},showMenuByLongpress:{type:Boolean,default:e.image.showMenuByLongpress},loadingIcon:{type:String,default:e.image.loadingIcon},errorIcon:{type:String,default:e.image.errorIcon},showLoading:{type:Boolean,default:e.image.showLoading},showError:{type:Boolean,default:e.image.showError},fade:{type:Boolean,default:e.image.fade},webp:{type:Boolean,default:e.image.webp},duration:{type:[String,Number],default:e.image.duration},bgColor:{type:String,default:e.image.bgColor}}};const f=y({name:"u-image",mixins:[i,a,w],data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler(e){e?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle(){let e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"10000px":uni.$u.addUnit(this.radius),e.overflow=this.radius>0?"hidden":"visible",uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted(){this.show=!0},emits:["click","error","load"],methods:{onClick(){this.$emit("click")},onErrorHandler(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler(e){this.loading=!1,this.isError=!1,this.$emit("load",e),this.removeBgColor()},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}},[["render",function(e,i,a,y,w,f){const b=g,$=t(o("u-icon"),p),_=m,S=t(o("u-transition"),c);return r(),d(S,{mode:"fade",show:w.show,duration:e.fade?1e3:0},{default:s((()=>[n(_,{class:"u-image",onClick:f.onClick,style:l([f.wrapStyle,w.backgroundStyle])},{default:s((()=>[w.isError?h("",!0):(r(),d(b,{key:0,src:e.src,mode:e.mode,onError:f.onErrorHandler,onLoad:f.onLoadHandler,"show-menu-by-longpress":e.showMenuByLongpress,"lazy-load":e.lazyLoad,class:"u-image__image",style:l({borderRadius:"circle"==e.shape?"10000px":e.$u.addUnit(e.radius),width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},null,8,["src","mode","onError","onLoad","show-menu-by-longpress","lazy-load","style"])),e.showLoading&&w.loading?(r(),d(_,{key:1,class:"u-image__loading",style:l({borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.radius),backgroundColor:this.bgColor,width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},{default:s((()=>[u(e.$slots,"loading",{},(()=>[n($,{name:e.loadingIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):h("",!0),e.showError&&w.isError&&!w.loading?(r(),d(_,{key:2,class:"u-image__error",style:l({borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.radius),width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},{default:s((()=>[u(e.$slots,"error",{},(()=>[n($,{name:e.errorIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):h("",!0)])),_:3},8,["onClick","style"])])),_:3},8,["show","duration"])}],["__scopeId","data-v-466b6710"]]);export{f as _,w as p};
