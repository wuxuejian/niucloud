import{d as P,f as F,r as y,n as M,h as B,c as A,a as p,t as r,u as s,N as o,e as t,w as i,i as d,y as R,z as C,I as G,aa as I,aO as O,aP as q,c_ as H,aL as J,E as Q,ak as W,am as X,a3 as Y,a4 as Z}from"./index-022827e1.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                       *//* empty css                    */import{j as ee,k as te,l as ae,m as le,n as oe,o as ne}from"./wechat-c3dec9f6.js";import z from"./reply-form-2fa8042a.js";/* empty css                     */import"./index.vue_vue_type_style_index_0_lang-3fadc3ae.js";/* empty css                   */import"./attachment-b3c743b5.js";/* empty css                        *//* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                         *//* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-f0968e2c.js";/* empty css                */import"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-3b291a1c.js";import"./index-edd24909.js";import"./upload-media.vue_vue_type_script_setup_true_lang-c0594dc9.js";import"./select-wechat-media.vue_vue_type_script_setup_true_lang-a529bc6c.js";import"./news-card.vue_vue_type_script_setup_true_lang-c8bb0481.js";const ie={class:"w-full p-5 bg-body"},se={class:"flex justify-between items-center mb-[20px]"},pe={class:"text-page-title"},re={class:"py-[20px]"},de={class:"flex justify-between items-center"},ue={class:"mt-[10px]"},me={class:"mt-[16px] flex justify-end"},ce={class:"mt-[20px]"},ye={class:"mt-[20px]"},Ze=P({__name:"reply",setup(_e){const k=F(),x=y("/channel/wechat/reply"),m=y("keyword"),D=()=>{k.push("/channel/wechat/keyword_reply_edit")},K=l=>{k.push("/channel/wechat/keyword_reply_edit?id="+l.id)},U=l=>{I.confirm(o("replyDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{ae(l.id).then(()=>{h()}).catch(()=>{})})},j=l=>{k.push({path:x.value})},g=y({}),v=y({});ee().then(({data:l})=>{l.length!=0&&(g.value=l.content)}).catch(),te().then(({data:l})=>{l.length!=0&&(v.value=l.content)}).catch();const V=y(null),T=y(null),E=async()=>{var w,c;let l=!0,e,u={};switch(m.value){case"default":await((w=V.value)==null?void 0:w.verify().then(_=>{l=_})),e=ne,u=g.value;break;case"subscribe":await((c=T.value)==null?void 0:c.verify().then(_=>{l=_})),e=oe,u=v.value;break}l&&e({content:u}).then(()=>{}).catch()},n=M({page:1,limit:10,total:0,loading:!0,data:[]}),h=(l=1)=>{n.loading=!0,n.page=l,le({page:n.page,limit:n.limit}).then(e=>{n.loading=!1,n.data=e.data.data,n.total=e.data.total}).catch(()=>{n.loading=!1})};return h(),(l,e)=>{const u=O,w=q,c=H,_=J,f=Q,b=W,N=X,S=Y,$=Z;return B(),A("div",ie,[p("div",se,[p("span",pe,r(s(o)("title")),1)]),t(w,{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=a=>x.value=a),class:"demo-tabs",onTabChange:j},{default:i(()=>[t(u,{label:s(o)("wechatAccessFlow"),name:"/channel/wechat"},null,8,["label"]),t(u,{label:s(o)("customMenu"),name:"/channel/wechat/menu"},null,8,["label"]),t(u,{label:s(o)("wechatTemplate"),name:"/channel/wechat/message"},null,8,["label"]),t(u,{label:s(o)("reply"),name:"/channel/wechat/reply"},null,8,["label"])]),_:1},8,["modelValue"]),p("div",re,[t(_,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=a=>m.value=a),style:{"margin-bottom":"30px"}},{default:i(()=>[t(c,{label:"keyword"},{default:i(()=>[d(r(s(o)("keywordReply")),1)]),_:1}),t(c,{label:"default"},{default:i(()=>[d(r(s(o)("defaultReply")),1)]),_:1}),t(c,{label:"subscribe"},{default:i(()=>[d(r(s(o)("subscribeReply")),1)]),_:1})]),_:1},8,["modelValue"]),R(p("div",null,[p("div",de,[t(f,{type:"primary",onClick:D},{default:i(()=>[d("新建回复")]),_:1})]),p("div",ue,[R((B(),G(N,{data:n.data,size:"large"},{empty:i(()=>[p("span",null,r(n.loading?"":s(o)("emptyData")),1)]),default:i(()=>[t(b,{prop:"name",label:"规则名称","min-width":"120"}),t(b,{prop:"keyword",label:"关键字","min-width":"120"}),t(b,{label:"匹配规则","min-width":"150",align:"center"},{default:i(({row:a})=>[d(r(a.matching_type=="full"?"全匹配":"模糊匹配"),1)]),_:1}),t(b,{label:"回复方式","min-width":"150",align:"center"},{default:i(({row:a})=>[d(r(a.reply_method=="all"?"全部回复":"随机回复一条"),1)]),_:1}),t(b,{label:s(o)("operation"),align:"right",fixed:"right",width:"180"},{default:i(({row:a})=>[t(f,{type:"primary",link:"",onClick:L=>K(a)},{default:i(()=>[d(r(s(o)("edit")),1)]),_:2},1032,["onClick"]),t(f,{type:"primary",link:"",onClick:L=>U(a)},{default:i(()=>[d(r(s(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[$,n.loading]]),p("div",me,[t(S,{"current-page":n.page,"onUpdate:current-page":e[2]||(e[2]=a=>n.page=a),"page-size":n.limit,"onUpdate:page-size":e[3]||(e[3]=a=>n.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:e[4]||(e[4]=a=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])])],512),[[C,m.value=="keyword"]]),R(p("div",null,[t(z,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=a=>g.value=a),ref_key:"defaultReplyRef",ref:V},null,8,["modelValue"]),p("div",ce,[t(f,{type:"primary",loading:l.loading,onClick:e[6]||(e[6]=a=>E())},{default:i(()=>[d(r(s(o)("save")),1)]),_:1},8,["loading"])])],512),[[C,m.value=="default"]]),R(p("div",null,[t(z,{modelValue:v.value,"onUpdate:modelValue":e[7]||(e[7]=a=>v.value=a),ref_key:"subscribeReplyRef",ref:T},null,8,["modelValue"]),p("div",ye,[t(f,{type:"primary",loading:l.loading,onClick:e[8]||(e[8]=a=>E())},{default:i(()=>[d(r(s(o)("save")),1)]),_:1},8,["loading"])])],512),[[C,m.value=="subscribe"]])])])}}});export{Ze as default};
