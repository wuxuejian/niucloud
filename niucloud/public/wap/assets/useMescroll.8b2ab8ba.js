import{aW as o,s as t,y as e,i as n,j as s,E as i,p as l,m as r,Y as p,aB as c,ai as a,ar as h,aK as d,af as u,aX as w,aH as g,w as f,k as m,H as y,I as S,G as D,l as T,v as x,x as U}from"./index-1dfccf80.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";function v(o,t){let e=this;e.version="1.3.7",e.options=o||{},e.isScrollBody=t||!1,e.isDownScrolling=!1,e.isUpScrolling=!1;let n=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout((function(){(e.optDown.use||e.optDown.native)&&e.optDown.auto&&n&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.isUpAutoLoad||setTimeout((function(){e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()}),100)}),30)}v.prototype.extendDownScroll=function(o){v.extend(o,{use:!0,auto:!0,native:!1,autoShowLoading:!1,isLock:!1,offset:80,startTop:100,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",textSuccess:"加载成功",textErr:"加载失败",beforeEndDelay:0,bgColor:"transparent",textColor:"gray",inited:null,inOffset:null,outOffset:null,onMoving:null,beforeLoading:null,showLoading:null,afterLoading:null,beforeEndDownScroll:null,endDownScroll:null,afterEndDownScroll:null,callback:function(o){o.resetUpScroll()}})},v.prototype.extendUpScroll=function(o){v.extend(o,{use:!0,auto:!0,isLock:!1,isBoth:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:150,textLoading:"加载中 ...",textNoMore:"",bgColor:"transparent",textColor:"gray",inited:null,showLoading:null,showNoMore:null,hideUpScroll:null,errDistance:60,toTop:{src:null,offset:1e3,duration:300,btnClick:null,onShow:null,zIndex:9990,left:null,right:20,bottom:120,safearea:!1,width:72,radius:"50%"},empty:{use:!0,icon:null,tip:"~ 暂无相关数据 ~",btnText:"",btnClick:null,onShow:null,fixed:!1,top:"100rpx",zIndex:99},onScroll:!1})},v.extend=function(o,t){if(!o)return t;for(let e in t)if(null==o[e]){let n=t[e];o[e]=null!=n&&"object"==typeof n?v.extend({},n):n}else"object"==typeof o[e]&&v.extend(o[e],t[e]);return o},v.prototype.hasColor=function(o){if(!o)return!1;let t=o.toLowerCase();return"#fff"!=t&&"#ffffff"!=t&&"transparent"!=t&&"white"!=t},v.prototype.initDownScroll=function(){let o=this;o.optDown=o.options.down||{},!o.optDown.textColor&&o.hasColor(o.optDown.bgColor)&&(o.optDown.textColor="#fff"),o.extendDownScroll(o.optDown),o.isScrollBody&&o.optDown.native?o.optDown.use=!1:o.optDown.native=!1,o.downHight=0,o.optDown.use&&o.optDown.inited&&setTimeout((function(){o.optDown.inited(o)}),0)},v.prototype.touchstartEvent=function(o){this.optDown.use&&(this.startPoint=this.getPoint(o),this.startTop=this.getScrollTop(),this.startAngle=0,this.lastPoint=this.startPoint,this.maxTouchmoveY=this.getBodyHeight()-this.optDown.bottomOffset,this.inTouchend=!1)},v.prototype.touchmoveEvent=function(o){if(!this.optDown.use)return;let t=this,e=t.getScrollTop(),n=t.getPoint(o);if(n.y-t.startPoint.y>0&&(t.isScrollBody&&e<=0||!t.isScrollBody&&(e<=0||e<=t.optDown.startTop&&e===t.startTop))&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth)){if(t.startAngle||(t.startAngle=t.getAngle(t.lastPoint,n)),t.startAngle<t.optDown.minAngle)return;if(t.maxTouchmoveY>0&&n.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();t.preventDefault(o);let e=n.y-t.lastPoint.y;t.downHight<t.optDown.offset?(1!==t.movetype&&(t.movetype=1,t.isDownEndSuccess=null,t.optDown.inOffset&&t.optDown.inOffset(t),t.isMoveDown=!0),t.downHight+=e*t.optDown.inOffsetRate):(2!==t.movetype&&(t.movetype=2,t.optDown.outOffset&&t.optDown.outOffset(t),t.isMoveDown=!0),t.downHight+=e>0?e*t.optDown.outOffsetRate:e),t.downHight=Math.round(t.downHight);let s=t.downHight/t.optDown.offset;t.optDown.onMoving&&t.optDown.onMoving(t,s,t.downHight)}t.lastPoint=n},v.prototype.touchendEvent=function(o){if(this.optDown.use)if(this.isMoveDown)this.downHight>=this.optDown.offset?this.triggerDownScroll():(this.downHight=0,this.endDownScrollCall(this)),this.movetype=0,this.isMoveDown=!1;else if(!this.isScrollBody&&this.getScrollTop()===this.startTop){if(this.getPoint(o).y-this.startPoint.y<0){this.getAngle(this.getPoint(o),this.startPoint)>80&&this.triggerUpScroll(!0)}}},v.prototype.getPoint=function(o){return o?o.touches&&o.touches[0]?{x:o.touches[0].pageX,y:o.touches[0].pageY}:o.changedTouches&&o.changedTouches[0]?{x:o.changedTouches[0].pageX,y:o.changedTouches[0].pageY}:{x:o.clientX,y:o.clientY}:{x:0,y:0}},v.prototype.getAngle=function(o,t){let e=Math.abs(o.x-t.x),n=Math.abs(o.y-t.y),s=Math.sqrt(e*e+n*n),i=0;return 0!==s&&(i=Math.asin(n/s)/Math.PI*180),i},v.prototype.triggerDownScroll=function(){this.optDown.beforeLoading&&this.optDown.beforeLoading(this)||(this.showDownScroll(),!this.optDown.native&&this.optDown.callback&&this.optDown.callback(this))},v.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.native?(o(),this.showDownLoadingCall(0)):(this.downHight=this.optDown.offset,this.showDownLoadingCall(this.downHight))},v.prototype.showDownLoadingCall=function(o){this.optDown.showLoading&&this.optDown.showLoading(this,o),this.optDown.afterLoading&&this.optDown.afterLoading(this,o)},v.prototype.onPullDownRefresh=function(){this.isDownScrolling=!0,this.showDownLoadingCall(0),this.optDown.callback&&this.optDown.callback(this)},v.prototype.endDownScroll=function(){if(this.optDown.native)return this.isDownScrolling=!1,this.endDownScrollCall(this),void t();let o=this,e=function(){o.downHight=0,o.isDownScrolling=!1,o.endDownScrollCall(o),o.isScrollBody||(o.setScrollHeight(0),o.scrollTo(0,0))},n=0;o.optDown.beforeEndDownScroll&&(n=o.optDown.beforeEndDownScroll(o),null==o.isDownEndSuccess&&(n=0)),"number"==typeof n&&n>0?setTimeout(e,n):e()},v.prototype.endDownScrollCall=function(){this.optDown.endDownScroll&&this.optDown.endDownScroll(this),this.optDown.afterEndDownScroll&&this.optDown.afterEndDownScroll(this)},v.prototype.lockDownScroll=function(o){null==o&&(o=!0),this.optDown.isLock=o},v.prototype.lockUpScroll=function(o){null==o&&(o=!0),this.optUp.isLock=o},v.prototype.initUpScroll=function(){let o=this;o.optUp=o.options.up||{use:!1},!o.optUp.textColor&&o.hasColor(o.optUp.bgColor)&&(o.optUp.textColor="#fff"),o.extendUpScroll(o.optUp),!1!==o.optUp.use&&(o.optUp.hasNext=!0,o.startNum=o.optUp.page.num+1,o.optUp.inited&&setTimeout((function(){o.optUp.inited(o)}),0))},v.prototype.onReachBottom=function(){this.isScrollBody&&!this.isUpScrolling&&!this.optUp.isLock&&this.optUp.hasNext&&this.triggerUpScroll()},v.prototype.onPageScroll=function(o){this.isScrollBody&&(this.setScrollTop(o.scrollTop),o.scrollTop>=this.optUp.toTop.offset?this.showTopBtn():this.hideTopBtn())},v.prototype.scroll=function(o,t){this.setScrollTop(o.scrollTop),this.setScrollHeight(o.scrollHeight),null==this.preScrollY&&(this.preScrollY=0),this.isScrollUp=o.scrollTop-this.preScrollY>0,this.preScrollY=o.scrollTop,this.isScrollUp&&this.triggerUpScroll(!0),o.scrollTop>=this.optUp.toTop.offset?this.showTopBtn():this.hideTopBtn(),this.optUp.onScroll&&t&&t()},v.prototype.triggerUpScroll=function(o){if(!this.isUpScrolling&&this.optUp.use&&this.optUp.callback){if(!0===o){let o=!1;if(!this.optUp.hasNext||this.optUp.isLock||this.isDownScrolling||this.getScrollBottom()<=this.optUp.offset&&(o=!0),!1===o)return}this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.num=this.optUp.page.num,this.size=this.optUp.page.size,this.time=this.optUp.page.time,this.optUp.callback(this)}},v.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.optUp.showLoading&&this.optUp.showLoading(this)},v.prototype.showNoMore=function(){this.optUp.hasNext=!1,this.optUp.showNoMore&&this.optUp.showNoMore(this)},v.prototype.hideUpScroll=function(){this.optUp.hideUpScroll&&this.optUp.hideUpScroll(this)},v.prototype.endUpScroll=function(o){null!=o&&(o?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},v.prototype.resetUpScroll=function(o){if(this.optUp&&this.optUp.use){let t=this.optUp.page;this.prePageNum=t.num,this.prePageTime=t.time,t.num=this.startNum,t.time=null,this.isDownScrolling||!1===o||(null==o?(this.removeEmpty(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.num=t.num,this.size=t.size,this.time=t.time,this.optUp.callback&&this.optUp.callback(this)}},v.prototype.setPageNum=function(o){this.optUp.page.num=o-1},v.prototype.setPageSize=function(o){this.optUp.page.size=o},v.prototype.endByPage=function(o,t,e){let n;this.optUp.use&&null!=t&&(n=this.optUp.page.num<t),this.endSuccess(o,n,e)},v.prototype.endBySize=function(o,t,e){let n;if(this.optUp.use&&null!=t){n=(this.optUp.page.num-1)*this.optUp.page.size+o<t}this.endSuccess(o,n,e)},v.prototype.endSuccess=function(o,t,e){let n=this;if(n.isDownScrolling&&(n.isDownEndSuccess=!0,n.endDownScroll()),n.optUp.use){let s;if(null!=o){let i=n.optUp.page.num,l=n.optUp.page.size;if(1===i&&e&&(n.optUp.page.time=e),o<l||!1===t)if(n.optUp.hasNext=!1,0===o&&1===i)s=!1,n.showEmpty();else{s=!((i-1)*l+o<n.optUp.noMoreSize),n.removeEmpty()}else s=!1,n.optUp.hasNext=!0,n.removeEmpty()}n.endUpScroll(s)}},v.prototype.endErr=function(o){if(this.isDownScrolling){this.isDownEndSuccess=!1;let o=this.optUp.page;o&&this.prePageNum&&(o.num=this.prePageNum,o.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1),this.isScrollBody&&0!==o&&(o||(o=this.optUp.errDistance),this.scrollTo(this.getScrollTop()-o,0)))},v.prototype.showEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!0)},v.prototype.removeEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!1)},v.prototype.showTopBtn=function(){this.topBtnShow||(this.topBtnShow=!0,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!0))},v.prototype.hideTopBtn=function(){this.topBtnShow&&(this.topBtnShow=!1,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!1))},v.prototype.getScrollTop=function(){return this.scrollTop||0},v.prototype.setScrollTop=function(o){this.scrollTop=o},v.prototype.scrollTo=function(o,t){this.myScrollTo&&this.myScrollTo(o,t)},v.prototype.resetScrollTo=function(o){this.myScrollTo=o},v.prototype.getScrollBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},v.prototype.getStep=function(o,t,e,n,s){let i=t-o;if(0===n||0===i)return void(e&&e(t));let l=(n=n||300)/(s=s||30),r=i/l,p=0,c=setInterval((function(){p<l-1?(o+=r,e&&e(o,c),p++):(e&&e(t,c),clearInterval(c))}),s)},v.prototype.getClientHeight=function(o){let t=this.clientHeight||0;return 0===t&&!0!==o&&(t=this.getBodyHeight()),t},v.prototype.setClientHeight=function(o){this.clientHeight=o},v.prototype.getScrollHeight=function(){return this.scrollHeight||0},v.prototype.setScrollHeight=function(o){this.scrollHeight=o},v.prototype.getBodyHeight=function(){return this.bodyHeight||0},v.prototype.setBodyHeight=function(o){this.bodyHeight=o},v.prototype.preventDefault=function(o){o&&o.cancelable&&!o.defaultPrevented&&o.preventDefault()};const L={down:{offset:80,native:!1},up:{offset:150,toTop:{src:"https://www.mescroll.com/img/mescroll-totop.png",offset:1e3,right:20,bottom:120,width:72},empty:{use:!0,icon:e("static/resource/images/system/empty.png")}},i18n:{zh:{down:{textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",textSuccess:"加载成功",textErr:"加载失败"},up:{textLoading:"加载中 ...",textNoMore:"",empty:{tip:"暂无相关数据"}}},en:{down:{textInOffset:"drop down refresh",textOutOffset:"release updates",textLoading:"loading ...",textSuccess:"loaded successfully",textErr:"loading failed"},up:{textLoading:"loading ...",textNoMore:"",empty:{tip:"~ absolutely empty ~"}}}}},B={def:"zh",getType(){return uni.getStorageSync("mescroll-i18n")||this.def},setType(o){uni.setStorageSync("mescroll-i18n",o)}};const H=b({props:{option:Object,value:!1},computed:{mOption(){return this.option||{}},left(){return this.mOption.left?this.addUnit(this.mOption.left):"auto"},right(){return this.mOption.left?"auto":this.addUnit(this.mOption.right)}},methods:{addUnit:o=>o?"number"==typeof o?o+"rpx":o:0,toTopClick(){this.$emit("input",!1),this.$emit("click")}}},[["render",function(o,t,e,c,a,h){const d=p;return h.mOption.src?(n(),s(d,{key:0,class:i(["mescroll-totop",[e.value?"mescroll-totop-in":"mescroll-totop-out",{"mescroll-totop-safearea":h.mOption.safearea}]]),style:l({"z-index":h.mOption.zIndex,left:h.left,right:h.right,bottom:h.addUnit(h.mOption.bottom),width:h.addUnit(h.mOption.width),"border-radius":h.addUnit(h.mOption.radius)}),src:h.mOption.src,mode:"widthFix",onClick:h.toTopClick},null,8,["class","style","src","onClick"])):r("v-if",!0)}],["__scopeId","data-v-8d559268"]]),P={data:()=>({wxsProp:{optDown:{},scrollTop:0,bodyHeight:0,isDownScrolling:!1,isUpScrolling:!1,isScrollBody:!0,isUpBoth:!0,t:0},callProp:{callType:"",t:0}}),methods:{wxsCall(o){"setWxsProp"===o.type?this.wxsProp={optDown:this.mescroll.optDown,scrollTop:this.mescroll.getScrollTop(),bodyHeight:this.mescroll.getBodyHeight(),isDownScrolling:this.mescroll.isDownScrolling,isUpScrolling:this.mescroll.isUpScrolling,isUpBoth:this.mescroll.optUp.isBoth,isScrollBody:this.mescroll.isScrollBody,t:Date.now()}:"setLoadType"===o.type?(this.downLoadType=o.downLoadType,this.$set(this.mescroll,"downLoadType",this.downLoadType),this.$set(this.mescroll,"isDownEndSuccess",null)):"triggerDownScroll"===o.type?this.mescroll.triggerDownScroll():"endDownScroll"===o.type?this.mescroll.endDownScroll():"triggerUpScroll"===o.type&&this.mescroll.triggerUpScroll(!0)}},mounted(){this.mescroll.optDown.afterLoading=()=>{this.callProp={callType:"showLoading",t:Date.now()}},this.mescroll.optDown.afterEndDownScroll=()=>{this.callProp={callType:"endDownScroll",t:Date.now()};let o=300+(this.mescroll.optDown.beforeEndDelay||0);setTimeout((()=>{4!==this.downLoadType&&0!==this.downLoadType||(this.callProp={callType:"clearTransform",t:Date.now()}),this.$set(this.mescroll,"downLoadType",this.downLoadType)}),o)},this.wxsCall({type:"setWxsProp"})}};var O={};function k(o,t){if(O.isMoveDown)O.downHight>=O.optDown.offset?(O.downHight=O.optDown.offset,O.callMethod(t,{type:"triggerDownScroll"})):(O.downHight=0,O.callMethod(t,{type:"endDownScroll"})),O.movetype=0,O.isMoveDown=!1;else if(!O.isScrollBody&&O.getScrollTop()===O.startTop){if(O.getPoint(o).y-O.startPoint.y<0)O.getAngle(O.getPoint(o),O.startPoint)>80&&O.callMethod(t,{type:"triggerUpScroll"})}O.callMethod(t,{type:"setWxsProp"})}O.onMoving=function(o,t,e){o.requestAnimationFrame((function(){o.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"transform",transform:"translateY("+e+"px)",transition:""});var n=o.selectComponent(".mescroll-wxs-progress");n&&n.setStyle({transform:"rotate("+360*t+"deg)"})}))},O.showLoading=function(o){O.downHight=O.optDown.offset,o.requestAnimationFrame((function(){o.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"auto",transform:"translateY("+O.downHight+"px)",transition:"transform 300ms"})}))},O.endDownScroll=function(o){O.downHight=0,O.isDownScrolling=!1,o.requestAnimationFrame((function(){o.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"auto",transform:"translateY(0)",transition:"transform 300ms"})}))},O.clearTransform=function(o){o.requestAnimationFrame((function(){o.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"",transform:"",transition:""})}))},O.disabled=function(){return!O.optDown||!O.optDown.use||O.optDown.native},O.getPoint=function(o){return o?o.touches&&o.touches[0]?{x:o.touches[0].pageX,y:o.touches[0].pageY}:o.changedTouches&&o.changedTouches[0]?{x:o.changedTouches[0].pageX,y:o.changedTouches[0].pageY}:{x:o.clientX,y:o.clientY}:{x:0,y:0}},O.getAngle=function(o,t){var e=Math.abs(o.x-t.x),n=Math.abs(o.y-t.y),s=Math.sqrt(e*e+n*n),i=0;return 0!==s&&(i=Math.asin(n/s)/Math.PI*180),i},O.getScrollTop=function(){return O.scrollTop||0},O.getBodyHeight=function(){return O.bodyHeight||0},O.callMethod=function(o,t){o&&o.callMethod("wxsCall",t)};const C={propObserver:function(o){O.optDown=o.optDown,O.scrollTop=o.scrollTop,O.bodyHeight=o.bodyHeight,O.isDownScrolling=o.isDownScrolling,O.isUpScrolling=o.isUpScrolling,O.isUpBoth=o.isUpBoth,O.isScrollBody=o.isScrollBody,O.startTop=o.scrollTop},callObserver:function(o,t,e){O.disabled()||o.callType&&("showLoading"===o.callType?O.showLoading(e):"endDownScroll"===o.callType?O.endDownScroll(e):"clearTransform"===o.callType&&O.clearTransform(e))},touchstartEvent:function(o,t){O.downHight=0,O.startPoint=O.getPoint(o),O.startTop=O.getScrollTop(),O.startAngle=0,O.lastPoint=O.startPoint,O.maxTouchmoveY=O.getBodyHeight()-O.optDown.bottomOffset,O.inTouchend=!1,O.callMethod(t,{type:"setWxsProp"})},touchmoveEvent:function(o,t){var e=!0;if(O.disabled())return e;var n=O.getScrollTop(),s=O.getPoint(o);if(s.y-O.startPoint.y>0&&(O.isScrollBody&&n<=0||!O.isScrollBody&&(n<=0||n<=O.optDown.startTop&&n===O.startTop))&&!O.inTouchend&&!O.isDownScrolling&&!O.optDown.isLock&&(!O.isUpScrolling||O.isUpScrolling&&O.isUpBoth)){if(O.startAngle||(O.startAngle=O.getAngle(O.lastPoint,s)),O.startAngle<O.optDown.minAngle)return e;if(O.maxTouchmoveY>0&&s.y>=O.maxTouchmoveY)return O.inTouchend=!0,k(o,t),e;e=!1;var i=s.y-O.lastPoint.y;O.downHight<O.optDown.offset?(1!==O.movetype&&(O.movetype=1,O.callMethod(t,{type:"setLoadType",downLoadType:1}),O.isMoveDown=!0),O.downHight+=i*O.optDown.inOffsetRate):(2!==O.movetype&&(O.movetype=2,O.callMethod(t,{type:"setLoadType",downLoadType:2}),O.isMoveDown=!0),O.downHight+=i>0?i*O.optDown.outOffsetRate:i),O.downHight=Math.round(O.downHight);var l=O.downHight/O.optDown.offset;O.onMoving(t,l,O.downHight)}return O.lastPoint=s,e},touchendEvent:k},M=o=>{o.$wxs||(o.$wxs=[]),o.$wxs.push("wxsBiz"),o.mixins||(o.mixins=[]),o.mixins.push({beforeCreate(){this.wxsBiz=C}})};var E={};function N(o){E.optDown=o.optDown,E.scrollTop=o.scrollTop,E.isDownScrolling=o.isDownScrolling,E.isUpScrolling=o.isUpScrolling,E.isUpBoth=o.isUpBoth}window&&!window.$mescrollRenderInit&&(window.$mescrollRenderInit=!0,window.addEventListener("touchstart",(function(o){E.disabled()||(E.startPoint=E.getPoint(o))}),{passive:!0}),window.addEventListener("touchmove",(function(o){if(!E.disabled()&&(!(E.getScrollTop()>0)&&E.getPoint(o).y-E.startPoint.y>0&&!E.isDownScrolling&&!E.optDown.isLock&&(!E.isUpScrolling||E.isUpScrolling&&E.isUpBoth))){for(var t=o.target,e=!1;t&&t.tagName&&"UNI-PAGE-BODY"!==t.tagName&&"BODY"!=t.tagName;){var n=t.classList;if(n&&n.contains("mescroll-render-touch")){e=!0;break}t=t.parentNode}e&&o.cancelable&&!o.defaultPrevented&&o.preventDefault()}}),{passive:!1})),E.getScrollTop=function(){return E.scrollTop||0},E.disabled=function(){return!E.optDown||!E.optDown.use||E.optDown.native},E.getPoint=function(o){return o?o.touches&&o.touches[0]?{x:o.touches[0].pageX,y:o.touches[0].pageY}:o.changedTouches&&o.changedTouches[0]?{x:o.changedTouches[0].pageX,y:o.changedTouches[0].pageY}:{x:o.clientX,y:o.clientY}:{x:0,y:0}};const z={mixins:[{data:()=>({propObserver:N})}]},Y=o=>{o.$renderjs||(o.$renderjs=[]),o.$renderjs.push("renderBiz"),o.mixins||(o.mixins=[]),o.mixins.push({beforeCreate(){this.renderBiz=this},mounted(){this.$ownerInstance=this.$gcd(this,!0)}}),o.mixins.push(z)},A={name:"mescroll-body",mixins:[P],components:{MescrollTop:H},props:{down:Object,up:Object,i18n:Object,top:[String,Number],topbar:[Boolean,String],bottom:[String,Number],safearea:Boolean,height:[String,Number],bottombar:{type:Boolean,default:!0},sticky:Boolean},data:()=>({mescroll:{optDown:{},optUp:{}},downHight:0,downRate:0,downLoadType:0,upLoadType:0,isShowEmpty:!1,isShowToTop:!1,windowHeight:0,windowBottom:0,statusBarHeight:0}),computed:{minHeight(){return this.toPx(this.height||"100%")+"px"},numTop(){return this.toPx(this.top)},padTop(){return this.numTop+"px"},numBottom(){return this.toPx(this.bottom)},padBottom(){return this.numBottom+"px"},isDownReset(){return 3===this.downLoadType||4===this.downLoadType},transition(){return this.isDownReset?"transform 300ms":""},translateY(){return this.downHight>0?"translateY("+this.downHight+"px)":""},isDownLoading(){return 3===this.downLoadType},downRotate(){return"rotate("+360*this.downRate+"deg)"},downText(){if(!this.mescroll)return"";switch(this.downLoadType){case 1:default:return this.mescroll.optDown.textInOffset;case 2:return this.mescroll.optDown.textOutOffset;case 3:return this.mescroll.optDown.textLoading;case 4:return this.mescroll.isDownEndSuccess?this.mescroll.optDown.textSuccess:0==this.mescroll.isDownEndSuccess?this.mescroll.optDown.textErr:this.mescroll.optDown.textInOffset}}},methods:{toPx(o){if("string"==typeof o)if(-1!==o.indexOf("px"))if(-1!==o.indexOf("rpx"))o=o.replace("rpx","");else{if(-1===o.indexOf("upx"))return Number(o.replace("px",""));o=o.replace("upx","")}else if(-1!==o.indexOf("%")){let t=Number(o.replace("%",""))/100;return this.windowHeight*t}return o?c(Number(o)):0},emptyClick(){this.$emit("emptyclick",this.mescroll)},toTopClick(){this.mescroll.scrollTo(0,this.mescroll.optUp.toTop.duration),this.$emit("topclick",this.mescroll)}},created(){let o=this,t={down:{inOffset(){o.downLoadType=1},outOffset(){o.downLoadType=2},onMoving(t,e,n){o.downHight=n,o.downRate=e},showLoading(t,e){o.downLoadType=3,o.downHight=e},beforeEndDownScroll:t=>(o.downLoadType=4,t.optDown.beforeEndDelay),endDownScroll(){o.downLoadType=4,o.downHight=0,o.downResetTimer&&(clearTimeout(o.downResetTimer),o.downResetTimer=null),o.downResetTimer=setTimeout((()=>{4===o.downLoadType&&(o.downLoadType=0)}),300)},callback:function(t){o.$emit("down",t)}},up:{showLoading(){o.upLoadType=1},showNoMore(){o.upLoadType=2},hideUpScroll(t){o.upLoadType=t.optUp.hasNext?0:3},empty:{onShow(t){o.isShowEmpty=t}},toTop:{onShow(t){o.isShowToTop=t}},callback:function(t){o.$emit("up",t)}}},e=B.getType(),n={type:e};v.extend(n,o.i18n),v.extend(n,L.i18n),v.extend(t,n[e]),v.extend(t,{down:L.down,up:L.up});let s=JSON.parse(JSON.stringify({down:o.down,up:o.up}));v.extend(s,t),o.mescroll=new v(s,!0),o.mescroll.i18n=n,o.$emit("init",o.mescroll);const i=a();i.windowHeight&&(o.windowHeight=i.windowHeight),i.windowBottom&&(o.windowBottom=i.windowBottom),i.statusBarHeight&&(o.statusBarHeight=i.statusBarHeight),o.mescroll.setBodyHeight(i.windowHeight),o.mescroll.resetScrollTo(((t,e)=>{"string"==typeof t?setTimeout((()=>{let n;-1==t.indexOf("#")&&-1==t.indexOf(".")?n="#"+t:(n=t,-1!=t.indexOf(">>>")&&(n=t.split(">>>")[1].trim())),h().select(n).boundingClientRect((function(t){if(t){let n=t.top;n+=o.mescroll.getScrollTop(),d({scrollTop:n,duration:e})}else console.error(n+" does not exist")})).exec()}),30):d({scrollTop:t,duration:e})})),o.up&&o.up.toTop&&null!=o.up.toTop.safearea||(o.mescroll.optUp.toTop.safearea=o.safearea),u("setMescrollGlobalOption",(t=>{if(!t)return;let e=t.i18n?t.i18n.type:null;if(e&&o.mescroll.i18n.type!=e&&(o.mescroll.i18n.type=e,B.setType(e),v.extend(t,o.mescroll.i18n[e])),t.down){let e=v.extend({},t.down);o.mescroll.optDown=v.extend(e,o.mescroll.optDown)}if(t.up){let e=v.extend({},t.up);o.mescroll.optUp=v.extend(e,o.mescroll.optUp)}}))},destroyed(){w("setMescrollGlobalOption")}};M(A),Y(A);const R=b(A,[["render",function(o,t,e,p,c,a){const h=U,d=g("mescroll-empty"),u=g("mescroll-top");return n(),s(h,{class:i(["mescroll-body mescroll-render-touch",{"mescorll-sticky":e.sticky}]),style:l({minHeight:a.minHeight,"padding-top":a.padTop,"padding-bottom":a.padBottom}),onTouchstart:o.wxsBiz.touchstartEvent,onTouchmove:o.wxsBiz.touchmoveEvent,onTouchend:o.wxsBiz.touchendEvent,onTouchcancel:o.wxsBiz.touchendEvent,"change:prop":o.wxsBiz.propObserver,prop:o.wxsProp},{default:f((()=>[r(" 状态栏 "),e.topbar&&c.statusBarHeight?(n(),s(h,{key:0,class:"mescroll-topbar",style:l({height:c.statusBarHeight+"px",background:e.topbar})},null,8,["style"])):r("v-if",!0),m(h,{class:"mescroll-body-content mescroll-wxs-content",style:l({transform:a.translateY,transition:a.transition}),"change:prop":o.wxsBiz.callObserver,prop:o.callProp},{default:f((()=>[r(" 下拉加载区域 (支付宝小程序子组件传参给子子组件仍报单项数据流的异常,暂时不通过mescroll-down组件实现)"),r(' <mescroll-down :option="mescroll.optDown" :type="downLoadType" :rate="downRate"></mescroll-down> '),c.mescroll.optDown.use?(n(),s(h,{key:0,class:"mescroll-downwarp",style:l({background:c.mescroll.optDown.bgColor,color:c.mescroll.optDown.textColor})},{default:f((()=>[m(h,{class:"downwarp-content"},{default:f((()=>[m(h,{class:i(["downwarp-progress mescroll-wxs-progress",{"mescroll-rotate":a.isDownLoading}]),style:l({"border-color":c.mescroll.optDown.textColor,transform:a.downRotate})},null,8,["class","style"]),m(h,{class:"downwarp-tip"},{default:f((()=>[y(S(a.downText),1)])),_:1})])),_:1})])),_:1},8,["style"])):r("v-if",!0),r(" 列表内容 "),D(o.$slots,"default",{},void 0,!0),r(" 空布局 "),c.isShowEmpty?(n(),s(d,{key:1,option:c.mescroll.optUp.empty,onEmptyclick:a.emptyClick},null,8,["option","onEmptyclick"])):r("v-if",!0),r(" 上拉加载区域 (下拉刷新时不显示, 支付宝小程序子组件传参给子子组件仍报单项数据流的异常,暂时不通过mescroll-up组件实现)"),r(' <mescroll-up v-if="mescroll.optUp.use && !isDownLoading && upLoadType!==3" :option="mescroll.optUp" :type="upLoadType"></mescroll-up> '),c.mescroll.optUp.use&&!a.isDownLoading&&3!==c.upLoadType?(n(),s(h,{key:2,class:"mescroll-upwarp",style:l({background:c.mescroll.optUp.bgColor,color:c.mescroll.optUp.textColor})},{default:f((()=>[r(" 加载中 (此处不能用v-if,否则android小程序快速上拉可能会不断触发上拉回调) "),T(m(h,null,{default:f((()=>[m(h,{class:"upwarp-progress mescroll-rotate",style:l({"border-color":c.mescroll.optUp.textColor})},null,8,["style"]),m(h,{class:"upwarp-tip"},{default:f((()=>[y(S(c.mescroll.optUp.textLoading),1)])),_:1})])),_:1},512),[[x,1===c.upLoadType]]),r(" 无数据 "),2===c.upLoadType?(n(),s(h,{key:0,class:"upwarp-nodata"},{default:f((()=>[y(S(c.mescroll.optUp.textNoMore),1)])),_:1})):r("v-if",!0)])),_:1},8,["style"])):r("v-if",!0)])),_:3},8,["style","change:prop","prop"]),r(" 底部是否偏移TabBar的高度(默认仅在H5端的tab页生效) "),e.bottombar&&c.windowBottom>0?(n(),s(h,{key:1,class:"mescroll-bottombar",style:l({height:c.windowBottom+"px"})},null,8,["style"])):r("v-if",!0),r(" 适配iPhoneX "),e.safearea?(n(),s(h,{key:2,class:"mescroll-safearea"})):r("v-if",!0),r(" 回到顶部按钮 (fixed元素需写在transform外面,防止降级为absolute)"),m(u,{modelValue:c.isShowToTop,"onUpdate:modelValue":t[0]||(t[0]=o=>c.isShowToTop=o),option:c.mescroll.optUp.toTop,onClick:a.toTopClick},null,8,["modelValue","option","onClick"]),r(" renderjs的数据载体,不可写在mescroll-downwarp内部,避免use为false时,载体丢失,无法更新数据 "),m(h,{"change:prop":o.renderBiz.propObserver,prop:o.wxsProp},null,8,["change:prop","prop"])])),_:3},8,["class","style","onTouchstart","onTouchmove","onTouchend","onTouchcancel","change:prop","prop"])}],["__scopeId","data-v-4108da15"]]);function $(o,t,e){let n=null;return e&&e((()=>{n&&n.onPullDownRefresh()})),o&&o((o=>{n&&n.onPageScroll(o)})),t&&t((()=>{n&&n.onReachBottom()})),{getMescroll:()=>n,mescrollInit:o=>{n=o},downCallback:()=>{n.optUp.use?n.resetUpScroll():setTimeout((()=>{n.endSuccess()}),500)},upCallback:()=>{setTimeout((()=>{n.endErr()}),500)}}}export{L as G,R as M,B as m,$ as u};
