(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9361).Z,i=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,u=void 0!==l&&l,h=e.priority,m=void 0!==h&&h,w=e.loading,_=e.lazyRoot,C=void 0===_?null:_,E=e.lazyBoundary,L=e.className,k=e.quality,R=e.width,M=e.height,I=e.style,O=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,N=e.placeholder,B=void 0===N?"empty":N,T=e.blurDataURL,Z=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=s.useContext(g.ImageConfigContext),D=s.useMemo((function(){var e=v||U||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[U]),W=Z,H=n?"responsive":"intrinsic";"layout"in W&&(W.layout&&(H=W.layout),delete W.layout);var V=j;if("loader"in W){if(W.loader){var F=W.loader;V=function(e){e.config;var t=c(e,["config"]);return F(t)}}delete W.loader}var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var K=S(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(T=T||K.blurDataURL,G=K.src,(!H||"fill"!==H)&&(M=M||K.height,R=R||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var J=!m&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,J=!1);y.has(t)&&(J=!1);D.unoptimized&&(u=!0);var Q,X=i(s.useState(!1),2),Y=X[0],$=X[1],ee=i(p.useIntersection({rootRef:C,rootMargin:E||"200px",disabled:!J}),3),te=ee[0],ne=ee[1],oe=ee[2],ie=!J||ne,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:P},ce=z(R),se=z(M),de=z(k);0;var fe=Object.assign({},I,ue),pe="blur"!==B||Y?{}:{backgroundSize:O||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(T,'")')};if("fill"===H)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof se){var ge=se/ce,he=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===H?(re.display="block",re.position="relative",le=!0,ae.paddingTop=he):"intrinsic"===H?(re.display="inline-block",re.position="relative",re.maxWidth="100%",le=!0,ae.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(se,"%27/%3e")):"fixed"===H&&(re.display="inline-block",re.position="relative",re.width=ce,re.height=se)}else 0;var me={src:b,srcSet:void 0,sizes:void 0};ie&&(me=x({config:D,src:t,unoptimized:u,layout:H,width:ce,quality:de,sizes:n,loader:V}));var ve=t;0;var ye,be="imagesrcset",we="imagesizes";be="imageSrcSet",we="imageSizes";var Se=(o(ye={},be,me.srcSet),o(ye,we,me.sizes),o(ye,"crossOrigin",W.crossOrigin),ye),xe=s.default.useLayoutEffect,ze=s.useRef(q),je=s.useRef(t);s.useEffect((function(){ze.current=q}),[q]),xe((function(){je.current!==t&&(oe(),je.current=t)}),[oe,t]);var _e=a({isLazy:J,imgAttributes:me,heightInt:se,widthInt:ce,qualityInt:de,layout:H,className:L,imgStyle:fe,blurStyle:pe,loading:w,config:D,unoptimized:u,placeholder:B,loader:V,srcString:ve,onLoadingCompleteRef:ze,setBlurComplete:$,setIntersection:te,isVisible:ie,noscriptSizes:n},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:re},le?s.default.createElement("span",{style:ae},Q?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,s.default.createElement(A,Object.assign({},_e))),m?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},Se))):null)};var a=n(6495).Z,l=n(2648).Z,u=n(1598).Z,c=n(7273).Z,s=u(n(7294)),d=l(n(5443)),f=n(9309),p=n(7190),g=n(9977),h=(n(3794),n(2392));function m(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/public/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality,r=new URL("".concat(t.path).concat(m(n))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||o.toString()),i&&a.set("q",i.toString()),r.href}],["cloudinary",function(e){var t=e.config,n=e.src,o=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(m(n))}],["akamai",function(e){var t=e.config,n=e.src,o=e.width;return"".concat(t.path).concat(m(n),"?imwidth=").concat(o)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,o=e.unoptimized,i=e.layout,a=e.width,l=e.quality,u=e.sizes,c=e.loader;if(o)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,o){var i=e.deviceSizes,a=e.allSizes;if(o&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(o);l)c.push(parseInt(l[2]));if(c.length){var s,d=.01*(s=Math).min.apply(s,r(c));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,u),d=s.widths,f=s.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,o){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:o+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",o=w.get(n);if(o)return o(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function _(e,t,n,o,i,r){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===o&&r(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),o=e.qualityInt,i=e.layout,r=e.className,l=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,g=e.srcString,h=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,z=e.onError,j=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":i,className:r,style:a({},l,u),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&_(e,g,0,f,y,b)}),[w,g,i,f,y,b]),onLoad:function(e){_(e.currentTarget,g,0,f,y,b),S&&S(e)},onError:function(e){"blur"===f&&b(!0),z&&z(e)}})),(d||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},A,x({config:h,src:g,unoptimized:m,layout:i,width:n,quality:o,sizes:j,loader:v}),{decoding:"async","data-nimg":i,style:l,className:r,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,r=n(7273).Z,a=i(n(7294)),l=n(6273),u=n(2725),c=n(3462),s=n(1018),d=n(7190),f=n(1210),p=n(8684),g={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var i=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;g[t+"%"+n+(i?"%"+i:"")]=!0}}var m=a.default.forwardRef((function(e,t){var n,i=e.href,m=e.as,v=e.children,y=e.prefetch,b=e.passHref,w=e.replace,S=e.shallow,x=e.scroll,z=e.locale,j=e.onClick,_=e.onMouseEnter,A=e.onTouchStart,C=e.legacyBehavior,E=void 0===C?!0!==Boolean(!1):C,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!E||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var k=!1!==y,R=a.default.useContext(c.RouterContext),M=a.default.useContext(s.AppRouterContext);M&&(R=M);var I,O=a.default.useMemo((function(){var e=o(l.resolveHref(R,i,!0),2),t=e[0],n=e[1];return{href:t,as:m?l.resolveHref(R,m):n||t}}),[R,i,m]),P=O.href,q=O.as,N=a.default.useRef(P),B=a.default.useRef(q);E&&(I=a.default.Children.only(n));var T=E?I&&"object"===typeof I&&I.ref:t,Z=o(d.useIntersection({rootMargin:"200px"}),3),U=Z[0],D=Z[1],W=Z[2],H=a.default.useCallback((function(e){B.current===q&&N.current===P||(W(),B.current=q,N.current=P),U(e),T&&("function"===typeof T?T(e):"object"===typeof T&&(T.current=e))}),[q,T,P,W,U]);a.default.useEffect((function(){var e=D&&k&&l.isLocalURL(P),t="undefined"!==typeof z?z:R&&R.locale,n=g[P+"%"+q+(t?"%"+t:"")];e&&!n&&h(R,P,q,{locale:t})}),[q,P,D,z,k,R]);var V={ref:H,onClick:function(e){E||"function"!==typeof j||j(e),E&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,o,i,r,u,c,s,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[i?"replace":"push"](n,o,{shallow:r,locale:c,scroll:u}):t[i?"replace":"push"](n,{forceOptimisticNavigation:!d})};s?a.default.startTransition(f):f()}}(e,R,P,q,w,S,x,z,Boolean(M),k)},onMouseEnter:function(e){E||"function"!==typeof _||_(e),E&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!k&&M||l.isLocalURL(P)&&h(R,P,q,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof A||A(e),E&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!k&&M||l.isLocalURL(P)&&h(R,P,q,{priority:!0})}};if(!E||b||"a"===I.type&&!("href"in I.props)){var F="undefined"!==typeof z?z:R&&R.locale,G=R&&R.isLocaleDomain&&f.getDomainLocale(q,F,R.locales,R.domainLocales);V.href=G||p.addBasePath(u.addLocale(q,F,R&&R.defaultLocale))}return E?a.default.cloneElement(I,V):a.default.createElement("a",Object.assign({},L,V),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=o(i.useState(!1),2),d=s[0],f=s[1],p=o(i.useState(null),2),g=p[0],h=p[1];i.useEffect((function(){if(a){if(c||d)return;if(g&&g.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:r,elements:i},u.push(n),l.set(n,t),t}(n),i=o.id,r=o.observer,a=o.elements;return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),l.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(g,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var o=r.requestIdleCallback((function(){return f(!0)}));return function(){return r.cancelIdleCallback(o)}}}),[g,c,n,t,d]);var m=i.useCallback((function(){f(!1)}),[]);return[h,d,m]};var i=n(7294),r=n(9311),a="function"===typeof IntersectionObserver,l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),i=o.default.createContext(null);t.AppRouterContext=i;var r=o.default.createContext(null);t.LayoutRouterContext=r;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=o.default.createContext(null);t.TemplateContext=l},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}}]);