!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,o,u,a,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function F(e){return l=e,f=setTimeout(O,t),d?g(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=b();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?v(n,u-(e-l)):n}(e))}function T(e){return f=void 0,m&&r?g(e):(r=o=void 0,a)}function h(){var e=b(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return F(c);if(s)return f=setTimeout(O,t),g(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},h.flush=function(){return void 0===f?a:T(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var F,j="feedback-form-state",O={},T={inputFormFeedback:document.querySelector(".feedback-form"),inputFormEmail:document.querySelector('[type="email"]'),inputFormMessage:document.querySelector('[name="message"]'),inputFormSubmitBtn:document.querySelector('[type="submit"]')};(F=localStorage.getItem(j))&&(O=JSON.parse(F),T.inputFormEmail.value=O.email||"",T.inputFormMessage.value=O.message||""),T.inputFormFeedback.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(O))}),500)),T.inputFormFeedback.addEventListener("submit",(function(e){console.log(O),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(j),O={}}))}();
//# sourceMappingURL=03-feedback.b8fd06c3.js.map