"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var index={install:function(e,n){var t=n.pk,r=n.stripeAccount,o=n.apiVersion,i=n.locale;e.prototype.$stripe=window.Stripe(t,{stripeAccount:r,apiVersion:o,locale:i})}},STRIPE_JS_SDK_URL="https://js.stripe.com",SUPPORTED_LANGS=["auto","da","de","en","es","es-419","fi","fr","it","ja","nb","nl","pl","pt","sv","zh"],SUPPORTED_SUBMIT_TYPES=["auto","book","donate","pay"],BILLING_ADDRESS_COLLECTION_TYPES=["required","auto"],DEFAULT_ELEMENT_STYLE={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},loadStripeSdk=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"v3",n=arguments.length>1?arguments[1]:void 0;if(window.Stripe)n();else{var t=document.createElement("script");t.src="".concat(STRIPE_JS_SDK_URL,"/").concat(e),t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t),t.addEventListener("load",n)}},props={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:null},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return SUPPORTED_SUBMIT_TYPES.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return BILLING_ADDRESS_COLLECTION_TYPES.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},locale:{type:String,default:"auto",validator:function(e){return SUPPORTED_LANGS.includes(e)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}}},index$1={props:props,render:function(e){return e("div")},methods:{redirectToCheckout:function(){var e=this;this.$emit("loading",!0),loadStripeSdk("v3",(function(){try{var n=window.Stripe(e.pk);if(e.sessionId)return void n.redirectToCheckout({sessionId:e.sessionId});if(e.lineItems&&e.lineItems.length&&!e.mode)return void console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode");var t={billingAddressCollection:e.billingAddressCollection,cancelUrl:e.cancelUrl,clientReferenceId:e.clientReferenceId,customerEmail:e.customerEmail,items:e.items,lineItems:e.lineItems,locale:e.locale,mode:e.mode,shippingAddressCollection:e.shippingAddressCollection,submitType:e.submitType,successUrl:e.successUrl};n.redirectToCheckout(t)}catch(n){console.error(n),e.$emit("error",n)}finally{e.$emit("loading",!1)}}))}}};function createCommonjsModule(e,n){return e(n={exports:{}},n.exports),n.exports}var runtime_1=createCommonjsModule((function(e){var n=function(e){var n,t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function l(e,n,t,r){var o=n&&n.prototype instanceof f?n:f,i=Object.create(o.prototype),s=new k(r||[]);return i._invoke=function(e,n,t){var r=u;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return O()}for(t.method=o,t.arg=i;;){var s=t.delegate;if(s){var a=w(s,t);if(a){if(a===h)continue;return a}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(r===u)throw r=m,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r=p;var l=c(e,n,t);if("normal"===l.type){if(r=t.done?m:d,l.arg===h)continue;return{value:l.arg,done:t.done}}"throw"===l.type&&(r=m,t.method="throw",t.arg=l.arg)}}}(e,t,s),i}function c(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u="suspendedStart",d="suspendedYield",p="executing",m="completed",h={};function f(){}function y(){}function v(){}var g={};g[i]=function(){return this};var _=Object.getPrototypeOf,E=_&&_(_(T([])));E&&E!==t&&r.call(E,i)&&(g=E);var b=v.prototype=f.prototype=Object.create(g);function A(e){["next","throw","return"].forEach((function(n){e[n]=function(e){return this._invoke(n,e)}}))}function S(e){var n;this._invoke=function(t,o){function i(){return new Promise((function(n,i){!function n(t,o,i,s){var a=c(e[t],e,o);if("throw"!==a.type){var l=a.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):Promise.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(a.arg)}(t,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=c(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function C(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function T(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return s.next=s}}return{next:O}}function O(){return{value:n,done:!0}}return y.prototype=b.constructor=v,v.constructor=y,v[a]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},A(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(n,t,r,o){var i=new S(l(n,t,r,o));return e.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},A(b),b[a]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return a.type="throw",a.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var l=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(s)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),h},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),C(t),h}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;C(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),h}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}})),regenerator=runtime_1;function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var defineProperty=_defineProperty;function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){defineProperty(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ELEMENT_TYPE="card",script={props:{pk:{type:String,required:!0},stripeAccount:{type:String},apiVersion:{type:String},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return DEFAULT_ELEMENT_STYLE}},value:{type:String},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e=this;loadStripeSdk(this.apiVersion,(function(){var n={stripeAccount:e.stripeAccount,apiVersion:e.apiVersion,locale:e.locale},t={classes:e.classes,style:e.elementStyle,value:e.value,hidePostalCode:e.hidePostalCode,iconStyle:e.iconStyle,hideIcon:e.hideIcon,disabled:e.disabled};e.stripe=window.Stripe(e.pk,n),e.elements=e.stripe.elements(e.elementsOptions),e.element=e.elements.create(ELEMENT_TYPE,t),e.element.mount("#stripe-element-mount-point"),e.element.on("change",(function(n){var t=document.getElementById("stripe-element-errors");n.error?t.textContent=n.error.message:t.textContent="",e.onChange(n)})),e.element.on("blur",e.onBlur),e.element.on("click",e.onClick),e.element.on("escape",e.onEscape),e.element.on("focus",e.onFocus),e.element.on("ready",e.onReady),e.form.addEventListener("submit",(function(n){var t,r,o,i;return regenerator.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,e.$emit("loading",!0),n.preventDefault(),t=_objectSpread({},e.element),e.amount&&(t.amount=e.amount),s.next=7,regenerator.awrap(e.stripe.createToken(t));case 7:if(r=s.sent,o=r.token,!(i=r.error)){s.next=15;break}return document.getElementById("stripe-element-errors").textContent=i.message,e.$emit("error",i),s.abrupt("return");case 15:e.$emit("token",o),s.next=22;break;case 18:s.prev=18,s.t0=s.catch(0),console.error(s.t0),e.$emit("error",s.t0);case 22:return s.prev=22,e.$emit("loading",!1),s.finish(22);case 25:case"end":return s.stop()}}),null,null,[[0,18,22,25]])}))}))},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function normalizeComponent(e,n,t,r,o,i,s,a,l,c){"boolean"!=typeof s&&(l=a,a=s,s=!1);const u="function"==typeof t?t.options:t;let d;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):n&&(d=s?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,a(e))}),d)if(u.functional){const e=u.render;u.render=function(n,t){return d.call(t),e(n,t)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,d):[d]}return t}const isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return(e,n)=>addStyle(e,n)}let HEAD;const styles={};function addStyle(e,n){const t=isOldIE?n.media||"default":e,r=styles[t]||(styles[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let t=n.source;if(n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(t),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,n=document.createTextNode(t),o=r.element.childNodes;o[e]&&r.element.removeChild(o[e]),o.length?r.element.insertBefore(n,o[e]):r.element.appendChild(n)}}}const __vue_script__=script;var __vue_render__=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-element-form"}},[n("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[n("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=function(e){e&&e("data-v-57fb6692_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement[data-v-57fb6692] {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n.StripeElement--focus[data-v-57fb6692] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid[data-v-57fb6692] {\n  border-color: #fa755a;\n}\n.StripeElement--webkit-autofill[data-v-57fb6692] {\n  background-color: #fefde5 !important;\n}\n.hide[data-v-57fb6692] {\n  visibility: hidden;\n}\n",map:{version:3,sources:["/home/centipede/Documents/workspace/personal/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqNA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"Card.vue",sourcesContent:["<template>\n  <div>\n    <form id=\"stripe-element-form\">\n      <div id=\"stripe-element-mount-point\"></div>\n      <slot name=\"stripe-element-errors\">\n        <div id=\"stripe-element-errors\" role=\"alert\"></div>\n      </slot>\n      <button ref=\"submitButtonRef\" type=\"submit\" class=\"hide\"></button>\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripeSdk } from '../load-stripe-sdk';\nimport { DEFAULT_ELEMENT_STYLE } from '../constants';\nconst ELEMENT_TYPE = 'card';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    stripeAccount: {\n      type: String,\n    },\n    apiVersion: {\n      type: String,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    elementsOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    // element specific options\n    classes: {\n      type: Object,\n      default: () => ({}),\n    },\n    elementStyle: {\n      type: Object,\n      default: () => (DEFAULT_ELEMENT_STYLE),\n    },\n    value: {\n      type: String,\n    },\n    hidePostalCode: Boolean,\n    iconStyle: {\n      type: String,\n      default: 'default',\n      validator: value => ['solid', 'default'].includes(value),\n    },\n    hideIcon: Boolean,\n    disabled: Boolean,\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      element: null,\n      card: null,\n    };\n  },\n  computed: {\n    form () {\n      return document.getElementById('stripe-element-form');\n    },\n  },\n  mounted () {\n    loadStripeSdk(this.apiVersion, () => {\n      const stripeOptions = {\n        stripeAccount: this.stripeAccount,\n        apiVersion: this.apiVersion,\n        locale: this.locale,\n      };\n      const createOptions = {\n        classes: this.classes,\n        style: this.elementStyle,\n        value: this.value,\n        hidePostalCode: this.hidePostalCode,\n        iconStyle: this.iconStyle,\n        hideIcon: this.hideIcon,\n        disabled: this.disabled,\n      };\n\n      this.stripe = window.Stripe(this.pk, stripeOptions);\n      this.elements = this.stripe.elements(this.elementsOptions);\n      this.element = this.elements.create(ELEMENT_TYPE, createOptions);\n      this.element.mount('#stripe-element-mount-point');\n\n      this.element.on('change', (event) => {\n        var displayError = document.getElementById('stripe-element-errors');\n        if (event.error) {\n          displayError.textContent = event.error.message;\n        } else {\n          displayError.textContent = '';\n        }\n        this.onChange(event);\n      });\n\n      this.element.on('blur', this.onBlur);\n      this.element.on('click', this.onClick);\n      this.element.on('escape', this.onEscape);\n      this.element.on('focus', this.onFocus);\n      this.element.on('ready', this.onReady);\n\n      this.form.addEventListener('submit', async (event) => {\n        try {\n          this.$emit('loading', true);\n          event.preventDefault();\n          const data = {\n            ...this.element,\n          };\n          if (this.amount) data.amount = this.amount;\n          const { token, error } = await this.stripe.createToken(data);\n          if (error) {\n            const errorElement = document.getElementById('stripe-element-errors');\n            errorElement.textContent = error.message;\n            this.$emit('error', error);\n            return;\n          }\n          this.$emit('token', token);\n        } catch (error) {\n          console.error(error);\n          this.$emit('error', error);\n        } finally {\n          this.$emit('loading', false);\n        }\n      });\n    });\n  },\n  methods: {\n    /**\n     * Triggers the submission of the form\n     * @return {void}\n     */\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n    /**\n     * Clears the element\n     * @return {void}\n     */\n    clear () {\n      this.element.clear();\n    },\n    /**\n     * Destroys the element\n     * @return {void}\n     */\n    destroy () {\n      this.element.destroy();\n    },\n    /**\n     * Focuses on the element\n     * @return {void}\n     */\n    focus () {\n      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');\n      this.element.focus();\n    },\n    /**\n     * Unmounts the element\n     * @return {void}\n     */\n    unmount () {\n      this.element.unmount();\n    },\n    /**\n     * Updates the element\n     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.\n     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.\n     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.\n     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.\n     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.\n     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.\n     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.\n     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled\n     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.\n     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.\n     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.\n     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.\n     */\n    update (opts) {\n      this.element.update(opts);\n    },\n    // events\n    onChange (e) {\n      this.$emit('element-change', e);\n    },\n    onReady (e) {\n      this.$emit('element-ready', e);\n    },\n    onFocus (e) {\n      this.$emit('element-focus', e);\n    },\n    onBlur (e) {\n      this.$emit('element-blur', e);\n    },\n    onEscape (e) {\n      this.$emit('element-escape', e);\n    },\n    onClick (e) {\n      this.$emit('element-click', e);\n    },\n  },\n};\n<\/script>\n\n<style scoped>\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.hide {\n  visibility: hidden;\n}\n</style>\n"]},media:void 0})},__vue_scope_id__="data-v-57fb6692",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,!1,void 0,!1,createInjector,void 0,void 0);var index$2={install:function(e,n){var t=n.pk,r=n.stripeAccount,o=n.apiVersion,i=n.locale,s=n.elementsOptions,a=window.Stripe(t,{stripeAccount:r,apiVersion:o,locale:i}).elements(s);e.prototype.$stripeElements=a}};exports.StripeCheckout=index$1,exports.StripeElementCard=__vue_component__,exports.StripeElementsPlugin=index$2,exports.StripePlugin=index;
