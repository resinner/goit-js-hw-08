var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=f||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return u.Date.now()};function v(e,t,n){var o,r,i,f,a,u,c=0,v=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),v?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-c>=i}function h(){var e=d();if(O(e))return S(e);a=setTimeout(h,function(e){var n=t-(e-u);return b?s(n,i-(e-c)):n}(e))}function S(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function T(){var e=d(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(b)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=p(t)||0,m(n)&&(v=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:S(d())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=m(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=o.test(e);return a||r.test(e)?i(e.slice(2),a?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form");let g={};b.addEventListener("input",(e=>{g[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(g)),console.log(g)})),b.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(g=t,email.value=g.email||"",textarea.value=g.message||"",console.log(g))}();
//# sourceMappingURL=03-feedback.68ae603c.js.map
