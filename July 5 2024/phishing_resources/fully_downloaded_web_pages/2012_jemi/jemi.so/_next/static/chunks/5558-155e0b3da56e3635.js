(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5558],{39113:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.useStaticProps=t.setWebsiteVisibility=t.processWebsite=t.isWebsiteVisible=t.doesWebsiteExist=t.createSerializableObject=t.TRIAL_WEBSITE=t.PRODUCT_PAGE_REVALIDATION=t.ONE_WEEK_IN_SECONDS=t.NOT_FOUND_PROPS=t.INVALID_CUSTOM_DOMAIN_WEBSITE_PROPS=t.DISABLED_WEBSITE=t.CUSTOM_DOMAIN_REVALIDATION=void 0,r(33948),r(88674),r(26699),r(38862);var n=r(67294),o=i(r(56453)),s=i(r(25632)),l=r(13456),a=i(r(50361)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}i.default=e,r&&r.set(e,i);return i}(r(6521));function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}const d=["config","subpath","expired"],f="trial-website";t.TRIAL_WEBSITE=f;const p="disabled-website";t.DISABLED_WEBSITE=p;t.processWebsite=e=>{v(e),g(e)};const v=e=>{for(const u in e){var t,r,i,n,o,s,l;if("DocumentReference"===(null===(t=e[u])||void 0===t||null===(r=t.constructor)||void 0===r?void 0:r.name))delete e[u];else if((null===(i=e[u])||void 0===i?void 0:i.length)>0||Array.isArray(e[u]))for(const t of e[u]){var a,c;"object"===typeof e[u][t]?v(e[u][t]):"Timestamp"===(null===(a=e[u][t])||void 0===a||null===(c=a.constructor)||void 0===c?void 0:c.name)&&(e[u][t]=e[u][t].toDate().getTime())}else"object"===typeof e[u]&&"Timestamp"!==(null===(n=e[u])||void 0===n||null===(o=n.constructor)||void 0===o?void 0:o.name)?v(e[u]):"Timestamp"===(null===(s=e[u])||void 0===s||null===(l=s.constructor)||void 0===l?void 0:l.name)&&(e[u]=e[u].toDate().getTime())}return e};t.createSerializableObject=v;const b=e=>s.default.pbkdf2Sync(e,"salt",1,16,"sha512"),g=async e=>{var t;const{websitePrivate:r}=e;if("not_found"===(null===(t=e.config)||void 0===t?void 0:t.code))return;if(!c.isWebsiteVisible(r)){console.log("Website is not visible?");for(const t in e)delete e[t];return void(c.isWebsiteTrialPeriod(r)?e.config={code:f}:e.config={code:p})}const i=r.settings.visibility;if("private"===(null===i||void 0===i?void 0:i.type)){for(const t in e)delete e[t];e.config={code:"private_website"}}else if("password"===(null===i||void 0===i?void 0:i.type)&&i.password){const t=b(i.password,i.salt);for(const r in e){if(d.includes(r))continue;const i=new TextEncoder("utf-8").encode(JSON.stringify(e[r])),n=new o.default.ModeOfOperation.ctr(t).encrypt(i),s=o.default.utils.hex.fromBytes(n);e[r]=s}e.config={websiteId:r.websiteId,encrypted:!0}}return e};t.setWebsiteVisibility=g;t.useStaticProps=e=>{var t;const[r,i,s]=(0,l.useCookies)(["".concat(null===(t=e.config)||void 0===t?void 0:t.websiteId,"-password")]);return(0,n.useMemo)((()=>{var t;if(null!==(t=e.config)&&void 0!==t&&t.encrypted){var i;const t=r["".concat(null===(i=e.config)||void 0===i?void 0:i.websiteId,"-password")];if(!t)return e;const s={};for(const r in e){if(d.includes(r)){s[r]="object"===typeof e[r]?(0,a.default)(e[r]):e[r];continue}const i=e[r],l=b(t),c=new o.default.ModeOfOperation.ctr(l),u=o.default.utils.hex.toBytes(i),f=c.decrypt(u),p=new TextDecoder("utf-8").decode(f);try{s[r]=JSON.parse(p)}catch(n){return console.log("Error?",r,p,e[r],n),e}}return s.config=JSON.parse(JSON.stringify(e.config)),s.config.encrypted=!1,s}return e}),[e.subpath])};t.doesWebsiteExist=e=>{if(!e)return!1};t.isWebsiteVisible=e=>{var t,r;const{websitePrivate:i}=e;return"private"!==(null===i||void 0===i||null===(t=i.settings)||void 0===t||null===(r=t.visibility)||void 0===r?void 0:r.type)};t.NOT_FOUND_PROPS={notFound:!0};t.ONE_WEEK_IN_SECONDS=604800;t.CUSTOM_DOMAIN_REVALIDATION=10;t.PRODUCT_PAGE_REVALIDATION=1;const m={props:{config:{code:"private_website"}},revalidate:10};t.INVALID_CUSTOM_DOMAIN_WEBSITE_PROPS=m},9385:function(e,t,r){"use strict";r(33948),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{website:t}=e;if(!t)return null;const r=s(t);return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,n.jsx)("link",{rel:"preload",as:"style",href:r}),(0,n.jsx)("link",{href:r,rel:"stylesheet"})]})},t.getUrl=void 0,r(74916),r(15306);var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=n?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(i,s,l):i[s]=e[s]}i.default=e,r&&r.set(e,i);return i}(r(67294)),n=r(85893);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}const s=e=>{var t,r;const i=(null===e||void 0===e||null===(t=e.style)||void 0===t||null===(r=t.typography)||void 0===r?void 0:r.fonts)||{},{body:n="Inter",header:o="Inter"}=i;let s="https://fonts.googleapis.com/css2?display=swap";return s+="&family="+n.replace(" ","+")+":ital,wght@0,400;0,700;1,400;1,700",s+="&family="+o.replace(" ","+")+":ital,wght@0,400;0,700;1,400;1,700",s};t.getUrl=s},48046:function(e,t,r){"use strict";r(33948);var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.RenderPublicPage=function(e,t){var r,i,v,b,m,y,h;const{0:j,1:O}=(0,o.useState)(!0);return(0,o.useEffect)((()=>{O(!1)}),[t]),"refresh"===(null===(r=t.action)||void 0===r?void 0:r.type)?(0,p.jsx)(u.default,{}):(null===(i=t.config)||void 0===i?void 0:i.code)===f.TRIAL_WEBSITE?(0,p.jsx)(c.default,{reason:"trial",source:null===(w=t.config)||void 0===w?void 0:w.source}):(null===(v=t.config)||void 0===v?void 0:v.code)===f.DISABLED_WEBSITE?(0,p.jsx)(c.default,{}):"not_found"===(null===(b=t.config)||void 0===b?void 0:b.code)?(0,p.jsx)(a.default,{}):"private_website"===(null===(m=t.config)||void 0===m?void 0:m.code)?(0,p.jsx)(d.default,{}):null!==(y=t.config)&&void 0!==y&&y.encrypted?j?l.default.getLoadingScreen():null!==t&&void 0!==t&&null!==(h=t.config)&&void 0!==h&&h.encrypted?(0,p.jsx)(s.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)):e:e;var w};var n=i(r(59499)),o=b(r(67294)),s=i(r(58919)),l=i(r(60334)),a=i(r(21750)),c=i(r(49408)),u=i(r(56539)),d=i(r(34397)),f=b(r(39113)),p=r(85893);function v(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}return i.default=e,r&&r.set(e,i),i}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}},5859:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isUpgraded=void 0;t.isUpgraded=e=>e&&e.id&&"free"!==e.id},31026:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.createWebsiteMetaHeader=t.createProductMetatags=t.createGenericMetaHeader=t.createCustomMetaHeader=void 0;var n=i(r(59499));r(41817),r(33948);var o=d(r(67294)),s=r(9385),l=i(r(9008)),a=d(r(5859)),c=r(85893);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}return i.default=e,r&&r.set(e,i),i}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const v={imageSrc:"https://firebasestorage.googleapis.com/v0/b/jemi-testing.appspot.com/o/public%2Fassets%2Fwebsite-preview.png?alt=media&token=9833e405-df4d-4ca9-8e07-dface6f09943",description:"The modern website builder for creatives, entrepreneurs, and dreamers. Build a beautiful link-in-bio site, portfolio, or landing page in minutes. Monetization, blogging, and more all built-in for free.",title:"",favicon:""},b=e=>"string"===typeof(null===e||void 0===e?void 0:e.text)?e.text:e.children.map(b).join(""),g=e=>(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsx)("meta",{property:"og:description",content:e.description}),(0,c.jsx)("meta",{property:"og:title",content:e.titleContent}),(0,c.jsx)("meta",{property:"og:url",content:e.urlContent}),(0,c.jsx)("meta",{property:"og:image",content:e.imageUrl||"https://firebasestorage.googleapis.com/v0/b/jemi-testing.appspot.com/o/press%2Flogo.png?alt=media&token=4b2140a0-ba58-483e-84bd-229e637e81a2"}),(0,c.jsx)("meta",{name:"description",content:e.description}),(0,c.jsx)("title",{children:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)}),e.favicon?(0,c.jsx)("link",{rel:"shortcut icon",type:"image/jpg",href:e.favicon}):(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,c.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,c.jsx)("link",{rel:"manifest",href:"/manifest.json"})]})]}),m=e=>(0,c.jsxs)(l.default,{children:[e||null,g({titleContent:"Jemi | Beautiful websites in minutes",urlContent:"https://jemi.so/",imageUrl:"https://firebasestorage.googleapis.com/v0/b/jemi-testing.appspot.com/o/public%2Fassets%2Fwebsite-preview.png?alt=media&token=9833e405-df4d-4ca9-8e07-dface6f09943",description:"The modern website builder for creatives, entrepreneurs, and dreamers. Build a beautiful link-in-bio site, portfolio, or landing page in minutes. Monetization, blogging, and more all built-in for free.",title:"Jemi | Beautiful websites in minutes",favicon:""})]});t.createGenericMetaHeader=m;t.createWebsiteMetaHeader=e=>{var t,r,i;if(null!==(t=e.config)&&void 0!==t&&t.encrypted)return null;const{website:n,websitePrivate:o}=e,u=a.isUpgraded(null===o||void 0===o?void 0:o.subscriptionPlan);let d=null;if(n){var f;let e=null===n||void 0===n?void 0:n.name;u||(e+=" | Jemi");const t=u?n.native.metatags:v;d=g({titleContent:null===t||void 0===t?void 0:t.pageTitle,urlContent:"https://jemi.so/"+n.name.toLowerCase(),imageUrl:null===t||void 0===t?void 0:t.imgSrc,description:null===t||void 0===t?void 0:t.description,title:(null===t||void 0===t?void 0:t.pageTitle)||(null===n||void 0===n?void 0:n.title),favicon:(null===t||void 0===t||null===(f=t.favicon)||void 0===f?void 0:f.icoSrc)||"",name:e})}else d=m();const b=(0,s.getUrl)(n),y=[];if(null!==e&&void 0!==e&&null!==(r=e.websiteImmutable)&&void 0!==r&&r.metatags)for(const s of e.websiteImmutable.metatags)y.push((0,c.jsx)("meta",p({},s)));return null!==e&&void 0!==e&&null!==(i=e.websiteImmutable)&&void 0!==i&&i.headerCode&&y.push((0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.websiteImmutable.headerCode}})),(0,c.jsxs)(l.default,{children:[y,(0,c.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,c.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,c.jsx)("link",{rel:"preload",as:"style",href:b}),(0,c.jsx)("link",{href:b,rel:"stylesheet"}),d]})};t.createCustomMetaHeader=e=>{let t=null;return t=Object.entries(e).length>0?g({titleContent:null===e||void 0===e?void 0:e.pageTitle,urlContent:(null===e||void 0===e?void 0:e.url)||"https://jemi.so",imageUrl:(null===e||void 0===e?void 0:e.imgSrc)||"https://firebasestorage.googleapis.com/v0/b/jemi-testing.appspot.com/o/public%2Fassets%2Fwebsite-preview.png?alt=media&token=9833e405-df4d-4ca9-8e07-dface6f09943",description:null===e||void 0===e?void 0:e.description,title:null===e||void 0===e?void 0:e.pageTitle,favicon:(null===e||void 0===e?void 0:e.favicon)||"",name:null===e||void 0===e?void 0:e.name}):m(),(0,c.jsx)(l.default,{children:t})};t.createProductMetatags=e=>{var t;if(null!==(t=e.config)&&void 0!==t&&t.encrypted)return null;const{website:r,websitePrivate:i,block:n}=e,{product:o}=n||{},u=(0,s.getUrl)(r),d=a.isUpgraded(null===i||void 0===i?void 0:i.subscriptionPlan);let f=null;if(r){var p,y,h,j,O,w,x;let e=null===r||void 0===r?void 0:r.name;d||(e+=" | Jemi");const t=null===(p=JSON.parse(o.about.slateDescription))||void 0===p?void 0:p.map(b).join(" ").substring(0,160),n=(null===i||void 0===i||null===(y=i.settings)||void 0===y||null===(h=y.customDomains)||void 0===h?void 0:h.length)>0?"https://".concat(null===i||void 0===i||null===(j=i.settings)||void 0===j?void 0:j.customDomains[0],"/products/").concat(o.sharing.slug):"https://jemi.so/".concat(r.name,"/products/").concat(o.sharing.slug),s=d?{url:n,description:t,favicon:null===(O=r.native)||void 0===O||null===(w=O.metatags)||void 0===w?void 0:w.favicon,name:o.about.title}:v;let l=d?o.about.title:o.about.title+" | Jemi",a="";const c=o.about.primaryMediaId;if(d&&c){a=o.mediaData[c].src}f=g({titleContent:l,urlContent:n,imageUrl:a,description:null===s||void 0===s?void 0:s.description,title:l,favicon:(null===s||void 0===s||null===(x=s.favicon)||void 0===x?void 0:x.icoSrc)||"",name:l})}else f=m();return(0,c.jsxs)(l.default,{children:[(0,c.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,c.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,c.jsx)("link",{rel:"preload",as:"style",href:u}),(0,c.jsx)("link",{href:u,rel:"stylesheet"}),f]})}},68150:function(e,t,r){"use strict";r(33948);var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}i.default=e,r&&r.set(e,i);return i}(r(99194)),o=r(14890),s=r(28500),l=i(r(53117)),a=i(r(13409));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}let u=null;const d={getStore:()=>u?u.getState():null,setStore:e=>{u=e},createStore:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.createReduxEnhancer({});const r=(0,s.composeWithDevTools)({name:"Redux",realtime:!0,trace:!0,traceLimit:25});let i;return i=(0,o.createStore)(a.default,e,r(l.default,t)),i}};var f=d;t.default=f},57813:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.initializeStore=t.createWebsiteInitialStore=void 0,t.useStore=function(e,t){return(0,o.useMemo)((function(){return c(e,t)}),[e])},r(33948);var n=i(r(59499)),o=r(67294),s=i(r(82492));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const c=(e,t)=>{var r;let i=null!==(r=t.getStore())&&void 0!==r?r:t.createStore(e);if(e&&t.getStore()){const r={},n=t.getStore();delete n.FbData,(0,s.default)(r,e,n),i=t.createStore(r)}return t.setStore(i),t.getStore()||t.setStore(i),i};t.initializeStore=c;t.createWebsiteInitialStore=(e,t)=>{var r;const{membership:i,membershipTiers:n,websiteImmutable:o,websitePrivate:s,website:l,pages:c,user:u,boilerplate:d,posts:f,syncedBlocks:p}=e;if(!l)return{SettingReducer:a({renderingType:"ssr"},t)};if(null!==(r=e.config)&&void 0!==r&&r.encrypted)return{};const v={user:u,website:l,websitePrivate:s,websiteImmutable:o,Membership:{membership:i,tiers:n},pages:{},blocks:{},boilerplate:d||{},posts:f||[]};for(const a of c){v.pages[a.page.id]=a.page;for(const e in a.blocks)v.blocks[e]=a.blocks[e]}if(p)for(const a in p)v.blocks[a]=p[a];return{FbData:v,SettingReducer:a({},t)}}},91304:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.checkWebsiteAccess=void 0,r(88674);var n=i(r(60334));t.checkWebsiteAccess=async(e,t)=>{const r=await n.default.Request.post("website","/checkWebsiteAccess",{body:{payload:t,websiteId:e}});return await r.json()}},78790:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(26699),r(32023);var i=r(14416);var n={getWebsite:(e,t)=>{},getWebsitePrivate:(e,t)=>{},getWebsiteImmutable:(e,t)=>{},getWebsiteDashboard:(e,t)=>{},getUser:(e,t)=>{},getMembership:e=>{},useBlock:e=>{var t,r;(0,i.useSelector)((e=>e));const n=(0,i.useSelector)((e=>{let{FbData:t}=e;return t}));return{data:null!==n&&void 0!==n&&n.blocks?null===n||void 0===n?void 0:n.blocks[e.docId]:null,blockLayout:null!==(t=e.layout)&&void 0!==t&&t.docId?null===n||void 0===n?void 0:n.blocks[null===(r=e.layout)||void 0===r?void 0:r.docId]:null}},useMembership:()=>(0,i.useSelector)((e=>{let{FbData:t}=e;return null===t||void 0===t?void 0:t.Membership}))||{},useProductMedia:e=>null===e||void 0===e?void 0:e.src,useBackgroundMedia:e=>null!==e&&void 0!==e&&e.includes("http")?e:"",useBoilerplate:e=>{const t=(0,i.useSelector)((e=>{let{FbData:t}=e;return t}));return null===t||void 0===t?void 0:t.boilerplate[e]}};t.default=n},58919:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(33948),r(88674);var i=c(r(67294)),n=c(r(91304)),o=r(13456),s=r(11163),l=r(85893);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}return i.default=e,r&&r.set(e,i),i}var u=e=>{const{config:t}=e,{websiteId:r}=t,[a,c]=(0,o.useCookies)(),{0:u,1:d}=(0,i.useState)(""),{0:f,1:p}=(0,i.useState)(""),v=(0,s.useRouter)();return(0,l.jsx)("div",{className:"flex-row flex-jc-center flex-ai-center height-fill",children:(0,l.jsxs)("div",{className:"flex-column",children:[(0,l.jsx)("h4",{children:" Enter the password to view this website "}),(0,l.jsxs)("div",{className:"flex-row mt-sm",children:[(0,l.jsx)("input",{value:u,onChange:e=>{d(e.target.value)},type:"text",className:"text-input mr-sm flex-fill"}),(0,l.jsxs)("button",{onClick:async()=>{console.log("Website id on submit: ",r);const e=await n.checkWebsiteAccess(r,{password:u});console.log("Response from check access is ",e),e.hasAccess&&"valid_password"===e.code?(console.log("Set cookie!"),p(""),c("".concat(r,"-password"),u),v.reload()):"invalid_password"===e.code&&p("Invalid password.")},className:"link",children:[" ","Submit"," "]})]}),f?(0,l.jsxs)("div",{className:"red-highlight fs-sm mt-sm block",children:[" ",f||" "," "]}):null]})})};t.default=u},21750:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(r(67294));var n=r(85893);var o=()=>{const e={marginRight:"0.5rem",marginBottom:"0.5rem"};return(0,n.jsxs)("div",{style:{margin:"4rem auto",textAlign:"center"},children:[(0,n.jsx)("h3",{children:"Website not found."}),(0,n.jsxs)("div",{className:"grey",children:[(0,n.jsx)("div",{style:{marginBottom:"1rem"},children:" Take me to Jemi's... "}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)("a",{href:"/",children:(0,n.jsxs)("button",{style:e,className:"button small-button secondary-button no-margin",children:["Home page"," "]})}),(0,n.jsx)("a",{href:"/signup",children:(0,n.jsxs)("button",{style:e,className:"button small-button secondary-button no-margin",children:["Sign up page"," "]})}),(0,n.jsx)("a",{href:"/templates",children:(0,n.jsxs)("button",{style:e,className:"button small-button secondary-button no-margin",children:["Templates page"," "]})}),(0,n.jsx)("a",{href:"https://blog.jemi.so",children:(0,n.jsxs)("button",{style:e,className:"button small-button secondary-button no-margin",children:["Blog"," "]})})]})]})]})};t.default=o},49408:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(r(67294));var n=r(85893);var o=e=>{const{reason:t,source:r}=e;return"trial"===t?"product-page"===r?(0,n.jsxs)("div",{style:{margin:"4rem auto",textAlign:"center"},children:[(0,n.jsx)("h3",{children:"This site is currently on trial."}),(0,n.jsx)("div",{className:"grey",children:(0,n.jsx)("div",{style:{marginBottom:"1rem"},children:"This is a trial store and check out is not possible. Contact the store owner for more details."})})]}):(0,n.jsxs)("div",{style:{margin:"4rem auto",textAlign:"center"},children:[(0,n.jsx)("h3",{children:"This site is currently on trial."}),(0,n.jsx)("div",{className:"grey",children:(0,n.jsx)("div",{style:{marginBottom:"1rem"},children:"If you\u2019re the site owner, upgrade now to make the site go live."})})]}):(0,n.jsxs)("div",{style:{margin:"4rem auto",textAlign:"center"},children:[(0,n.jsx)("h3",{children:"Website has expired."}),(0,n.jsx)("div",{className:"grey",children:(0,n.jsxs)("div",{style:{marginBottom:"1rem"},children:[" ","Contact owner to view website"," "]})})]})};t.default=o},34397:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(r(67294));var n=r(85893);var o=()=>(0,n.jsx)("div",{style:{margin:"4rem auto",textAlign:"center"},children:(0,n.jsx)("h3",{children:"This website is private"})});t.default=o},56539:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(r(67294));var n=r(85893);var o=()=>(0,n.jsxs)("div",{style:{margin:"4rem auto",textAlign:"center"},children:[(0,n.jsx)("h3",{children:"There was an issue with loading the page. "}),(0,n.jsxs)("div",{children:["Try refreshing to load the page. If this issue persists, please contact assistant@jemi.app."," "]})]});t.default=o},13409:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14890),o=i(r(80143)),s=i(r(35977)),l=i(r(62822)),a=i(r(50641)),c=i(r(67337)),u=i(r(74068));var d=(0,n.combineReducers)({SettingReducer:o.default,ModalReducer:s.default,FbData:l.default,FontReducer:a.default,Session:c.default,Cart:u.default});t.default=d},53117:function(e,t,r){"use strict";var i=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14890),o=i(r(59967)),s=i(r(93496)),l=(0,n.applyMiddleware)(o.default,s.default);t.default=l},52361:function(){},94616:function(){}}]);
//# sourceMappingURL=5558-155e0b3da56e3635.js.map