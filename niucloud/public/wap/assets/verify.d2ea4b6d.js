import{bD as e}from"./index-f0b22e55.js";function r(r){return e.get("verify_records",{params:r})}function s(){return e.get("check_verifier")}function t(r){return e.get(`get_verify_by_code/${r}`)}function n(r){return e.post(`verify/${r}`,{},{showSuccessMessage:!0,showErrorMessage:!0})}function o(r){return e.get(`verify_detail/${r}`,{},{showErrorMessage:!0})}export{t as a,o as b,r as c,s as g,n as v};
