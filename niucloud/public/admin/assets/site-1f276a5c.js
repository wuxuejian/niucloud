import{a2 as e}from"./index-efa627c5.js";function u(t){return e.get("site/site",{params:t})}function n(t){return e.get(`site/site/${t}`)}function i(t){return e.post("site/site",t,{showSuccessMessage:!0})}function r(t){return e.put(`site/site/${t.site_id}`,t,{showSuccessMessage:!0})}function o(t){return e.delete(`site/site/${t}`)}function c(t){return e.put(`site/closesite/${t.site_id}`,t,{showSuccessMessage:!0})}function g(t){return e.put(`site/opensite/${t.site_id}`,t,{showSuccessMessage:!0})}function a(){return e.get("site/statuslist")}function f(t){return e.get("site/group",{params:t})}function p(t){return e.get(`site/group/${t}`)}function S(t){return e.post("site/group",t,{showSuccessMessage:!0})}function d(t){return e.put(`site/group/${t.group_id}`,t,{showSuccessMessage:!0})}function l(t){return e.delete(`site/group/${t}`,{showSuccessMessage:!0})}function $(t={}){return e.get("site/group/all")}function h(t){return e.get("site/user",{params:t})}function w(t){return e.get(`site/user/${t}`)}function M(t){return e.post("site/user",t,{showSuccessMessage:!0})}function L(t){return e.put(`site/user/${t.uid}`,t,{showSuccessMessage:!0})}function G(t){return e.put(`site/user/lock/${t}`)}function U(t){return e.put(`site/user/unlock/${t}`)}function k(t){return e.get("site/log",{params:t})}function A(t){return e.get(`site/log/${t}`)}function I(t){return e.get("site/account",{params:t})}function _(){return e.get("site/account/stat")}function y(){return e.get("site/account/type")}function q(){return e.get("site/addons")}export{k as a,A as b,M as c,I as d,L as e,y as f,q as g,_ as h,$ as i,n as j,r as k,G as l,i as m,f as n,l as o,p,d as q,S as r,a as s,u as t,U as u,c as v,g as w,o as x,h as y,w as z};
