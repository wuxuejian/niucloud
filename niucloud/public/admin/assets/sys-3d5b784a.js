import{b as t}from"./index-6fcaf7b3.js";function u(){return t.get("sys/url")}function r(e){return t.get("sys/role",{params:e})}function a(e){return t.get(`sys/role/${e}`)}function o(e){return t.post("sys/role",e,{showSuccessMessage:!0})}function c(e){return t.put(`sys/role/${e.role_id}`,e,{showSuccessMessage:!0})}function g(e){return t.delete(`sys/role/${e}`,{showSuccessMessage:!0})}function i(){return t.get("sys/role/all")}function f(e){return t.get(`sys/menu/${e}`)}function y(e,s){return t.get(`sys/menu/${e}/info/${s}`)}function h(e){return t.post("sys/menu",e,{showSuccessMessage:!0})}function l(e){return t.put(`sys/menu/${e.app_type}/${e.menu_key}`,e,{showSuccessMessage:!0})}function p(e="system"){return t.get(`sys/menu/dir/${e}`)}function d(){return t.get("site/site/menu")}function m(){return t.get("sys/config/website")}function M(){return t.get("sys/web/website")}function S(e){return t.put("sys/config/website",e,{showSuccessMessage:!0})}function w(){return t.get("sys/config/copyright")}function $(){return t.get("sys/config/service")}function C(e){return t.put("sys/config/copyright",e,{showSuccessMessage:!0})}function L(e){return t.get("sys/attachment/category",{params:e})}function A(e){return t.post("sys/attachment/category",e,{showSuccessMessage:!0})}function _(e){return t.put(`sys/attachment/category/${e.id}`,e,{showSuccessMessage:!0})}function I(e){return t.delete(`sys/attachment/category/${e}`,{showSuccessMessage:!0})}function b(e){return t.get("sys/attachment",{params:e})}function R(e){return t.delete("sys/attachment/del",{data:e,showSuccessMessage:!0})}function x(e){return t.put("sys/attachment/batchmove",e)}function v(){return t.get("auth/site/showmenu")}function T(){return t.get("sys/config/shortcut_menu")}function P(e){return t.put("sys/config/shortcut_menu",e,{showSuccessMessage:!0})}function W(e){return t.get("sys/attachment/icon_category",{params:e})}function k(e){return t.get("sys/attachment/icon",{params:e})}function D(){return t.get("sys/env")}function q(){return t.get("sys/storage")}function B(e){return t.get(`sys/storage/${e}`)}function E(e){return t.put(`sys/storage/${e.storage_type}`,e,{showSuccessMessage:!0})}function U(e){return t.get(`pay/channel/lists/${e}`)}function j(e){return t.post("pay/channel/set/transfer",e)}function z(e){return t.get("sys/schedule/list",{params:e})}function F(){return t.get("sys/schedule/template")}function G(){return t.get("sys/schedule/datetype")}function H(){return t.get("sys/date/week")}function J(e){return t.post("sys/schedule",e,{showSuccessMessage:!0})}function K(e){return t.put(`sys/schedule/${e.id}`,e,{showSuccessMessage:!0})}function N(e){return t.delete(`sys/schedule/${e}`,{showSuccessMessage:!0})}function O(){return t.get("sys/agreement")}function Q(e){return t.get(`sys/agreement/${e}`)}function V(e){return t.put(`sys/agreement/${e.key}`,e,{showSuccessMessage:!0})}function X(){return t.get("sys/channel")}function Y(){return t.get("sys/config/login")}function Z(e){return t.put("sys/config/login",e,{showSuccessMessage:!0})}function ee(){return t.get("pay/channel/lists")}function te(e){return t.post("pay/channel/set/all",e,{showSuccessMessage:!0})}function se(e){return t.post("sys/menu/refresh",{},{showSuccessMessage:!0})}function ne(e){return t.post("sys/schema/clear",{},{showSuccessMessage:!0})}function ue(e){return t.put("sys/config/map",e,{showSuccessMessage:!0})}function re(){return t.get("sys/config/map")}function ae(){return t.get("sys/config/site_index")}function oe(e){return t.put("sys/config/site_index",e,{showSuccessMessage:!0})}function ce(){return t.get("sys/layout")}function ge(e){return t.put("sys/layout",{key:e},{showSuccessMessage:!0})}function ie(e){return t.get("pay/audit",{params:e})}function fe(e){return t.put(`pay/pass/${e}`,{},{showSuccessMessage:!0})}function ye(e){return t.put(`pay/refuse/${e.out_trade_no}`,e,{showSuccessMessage:!0})}function he(e){return t.get(`pay/detail/${e}`)}function le(){return t.get("app/getAddonList")}function pe(e){return t.get("sys/config/wap_index",{params:e})}export{F as $,he as A,T as B,P as C,v as D,$ as E,X as F,Y as G,Z as H,O as I,Q as J,V as K,E as L,B as M,w as N,C as O,z as P,re as Q,ue as R,ee as S,te as T,q as U,m as V,S as W,U as X,j as Y,le as Z,p as _,A as a,G as a0,H as a1,K as a2,J as a3,N as a4,ne as a5,se as a6,D as a7,ae as a8,oe as a9,ce as aa,ge as ab,R as b,W as c,I as d,_ as e,L as f,M as g,k as h,b as i,l as j,h as k,y as l,x as m,d as n,c as o,o as p,a as q,i as r,f as s,r as t,g as u,u as v,pe as w,ie as x,fe as y,ye as z};
