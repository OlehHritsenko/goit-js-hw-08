function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function F(e){return c=e,a=setTimeout(j,t),l?y(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function j(){var e=p();if(S(e))return T(e);a=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function T(e){return a=void 0,g&&o?y(e):(o=r=void 0,u)}function h(){var e=p(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return F(f);if(s)return a=setTimeout(j,t),y(f)}return void 0===a&&(a=setTimeout(j,t)),u}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},h.flush=function(){return void 0===a?u:T(p())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};let y={};const F={inputFormFeedback:document.querySelector(".feedback-form"),inputFormEmail:document.querySelector('[type="email"]'),inputFormMessage:document.querySelector('[name="message"]'),inputFormSubmitBtn:document.querySelector('[type="submit"]')};!function(){const e=localStorage.getItem("feedback-form-state");e&&(y=JSON.parse(e),F.inputFormEmail.value=y.email||"",F.inputFormMessage.value=y.message||"")}(),F.inputFormFeedback.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),F.inputFormFeedback.addEventListener("submit",(function(e){console.log(y),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y={}}));
//# sourceMappingURL=03-feedback.90af969b.js.map