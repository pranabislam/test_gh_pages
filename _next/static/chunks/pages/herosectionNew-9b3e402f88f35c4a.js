(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{1865:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/herosectionNew",function(){return n(4778)}])},3730:function(e,t,n){"use strict";var r=n(6042),i=n(9396),o=n(5893),s=(n(7294),n(5135));n(9180);t.Z=function(e){var t=e.img_list,n=t||[],l={indicators:!0,scale:1,transitionDuration:200,infinite:!1,prevArrow:(0,o.jsx)("div",{style:{width:"30px",marginRight:"-30px",cursor:"pointer"},children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#2e2e2e",children:(0,o.jsx)("path",{d:"M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"})})}),nextArrow:(0,o.jsx)("div",{style:{width:"30px",marginLeft:"-30px",cursor:"pointer"},children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#2e2e2e",children:(0,o.jsx)("path",{d:"M512 256L270 42.6v138.2H0v150.6h270v138z"})})})};return(0,o.jsxs)("div",{className:"m-10",children:[(0,o.jsxs)("h1",{className:"text-center text-6xl font-bold pb-10 ",children:["Contract_1 ",(0,o.jsx)("span",{className:"text-indigo-600",children:"Filler here"})]}),(0,o.jsx)(s.LG,(0,i.Z)((0,r.Z)({},l),{children:n.map((function(e,t){return(0,o.jsx)("div",{className:"flex justify-center w-full h-full",children:(0,o.jsx)("img",{className:"w-3/4 object-cover rounded-lg shadow-xl",src:e})},t)}))}))]})}},4778:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=n(7294);n(3730);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=n(4924);function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}var u=n(6042),f=n(9396);function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e){return d(e)}function h(e,t){return!t||"object"!==((n=t)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!==typeof t?o(e):t;var n}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}var x=n(5135),g=(n(9180),function(e){a(d,e);var t,n,i,c=w(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),t=c.call(this,e),(0,l.Z)(o(t),"state",{open:!0}),(0,l.Z)(o(t),"toggleImage",(function(){t.setState((function(e){return{open:!e.open}}))})),(0,l.Z)(o(t),"getImageArray",(function(){return t.state.open?t.unlabeledImages:t.labeledImages})),t.unlabeledImages=e.unlabeledImages,t.labeledImages=e.labeledImages,t.zoomInProperties={indicators:!0,scale:1,transitionDuration:200,infinite:!1,prevArrow:(0,r.jsx)("div",{style:{width:"30px",marginRight:"-30px",cursor:"pointer"},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#2e2e2e",children:(0,r.jsx)("path",{d:"M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"})})}),nextArrow:(0,r.jsx)("div",{style:{width:"30px",marginLeft:"-30px",cursor:"pointer"},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#2e2e2e",children:(0,r.jsx)("path",{d:"M512 256L270 42.6v138.2H0v150.6h270v138z"})})})},t}return t=d,(n=[{key:"render",value:function(){var e=this;return(0,r.jsxs)("div",{className:"m-10",children:[(0,r.jsxs)("h1",{className:"text-center text-6xl font-bold pb-10 ",children:["Contract_1 ",(0,r.jsx)("span",{className:"text-indigo-600",children:"Filler here"})]}),(0,r.jsx)(x.LG,(0,f.Z)((0,u.Z)({},this.zoomInProperties),{children:this.unlabeledImages.map((function(t,n){return(0,r.jsx)("div",{className:"flex justify-center w-full h-full",children:(0,r.jsx)("img",{className:"w-3/4 object-cover rounded-lg shadow-xl",src:e.getImageArray()[n].length>0?e.getImageArray()[n]:t,onClick:e.toggleImage})},n)}))}))]})}}])&&s(t.prototype,n),i&&s(t,i),d}(i.Component));var v=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(g,{unlabeledImages:["https://upload.wikimedia.org/wikipedia/commons/b/bd/Color_icon_blue.svg","https://www.iconsdb.com/icons/preview/blue/triangle-xxl.png","https://www.iconsdb.com/icons/preview/blue/circle-xxl.png"],labeledImages:["https://upload.wikimedia.org/wikipedia/commons/2/27/Red_square.svg","","https://upload.wikimedia.org/wikipedia/commons/0/05/Red_circle.svg"]})})}}},function(e){e.O(0,[112,774,888,179],(function(){return t=1865,e(e.s=t);var t}));var t=e.O();_N_E=t}]);