import{N as t}from"./index-ae2d9b78.js";function u(){return t.get("wechat/config")}function c(){return t.get("wechat/static")}function r(e){return t.put("wechat/config",e,{showSuccessMessage:!0})}function n(){return t.get("wechat/menu")}function a(e){return t.put("wechat/menu",e,{showSuccessMessage:!0})}function o(){return t.get("wechat/template")}function i(e){return t.put("wechat/template/sync",e,{showSuccessMessage:!0})}function w(e){return t.get("wechat/reply/keywords",{params:e})}function g(e){return t.put(`wechat/reply/keywords/${e.id}`,e,{showSuccessMessage:!0})}function h(e){return t.post("wechat/reply/keywords",e,{showSuccessMessage:!0})}function y(e){return t.get(`wechat/reply/keywords/${e}`)}function p(e){return t.delete(`wechat/reply/keywords/${e}`,{showSuccessMessage:!0})}function f(){return t.get("wechat/reply/default")}function l(e){return t.put("wechat/reply/default",e,{showSuccessMessage:!0})}function d(){return t.get("wechat/reply/subscribe")}function M(e){return t.put("wechat/reply/subscribe",e,{showSuccessMessage:!0})}function S(e){return t.get("wechat/media",{params:e})}function b(){return t.get("wechat/sync/news")}export{S as a,c as b,y as c,g as d,r as e,h as f,u as g,n as h,a as i,f as j,d as k,p as l,w as m,M as n,l as o,o as p,i as q,b as s};
