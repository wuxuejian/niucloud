import{a2 as t}from"./index-efa627c5.js";function o(n){return t.get("addon/local",n,{showSuccessMessage:!0})}function a(n){return t.post(`addon/install/${n.addon}`,n)}function s(n){return t.post(`addon/cloudinstall/${n.addon}`,n,{timeout:60*1e3})}function l(n){return t.post(`addon/uninstall/${n.addon}`,n,{showSuccessMessage:!0})}function d(n){return t.get(`addon/install/check/${n}`,{timeout:30*1e3})}function u(){return t.get("addon/installtask")}function c(n){return t.get(`addon/cloudinstall/${n}`)}function i(n){return t.get(`addon/uninstall/check/${n}`,{timeout:30*1e3})}function r(n){return t.put(`addon/install/cancel/${n}`,{},{showErrorMessage:!1})}function g(){return t.get("addon/list/install")}export{o as a,u as b,s as c,c as d,i as e,r as f,g,a as i,d as p,l as u};
