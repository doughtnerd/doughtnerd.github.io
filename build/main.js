function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let e;return c(t,(t=>e=t))(),e}function l(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,e,n,o){if(t){const r=p(t,e,n,o);return t[0](r)}}function p(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e,n,o,r,s,i){const c=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(c){const r=p(e,n,o,i);t.p(r,c)}}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function w(){return g("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let x;function _(t){x=t}function P(){if(!x)throw new Error("Function called outside component initialization");return x}function v(t,e){P().$$.context.set(t,e)}function k(t){return P().$$.context.get(t)}const j=[],O=[],E=[],I=[],S=Promise.resolve();let L=!1;function N(){L||(L=!0,S.then(M))}function T(){return N(),S}function A(t){E.push(t)}let F=!1;const R=new Set;function M(){if(!F){F=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];_(e),C(e.$$)}for(_(null),j.length=0;O.length;)O.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];R.has(e)||(R.add(e),e())}E.length=0}while(j.length);for(;I.length;)I.pop()();L=!1,F=!1,R.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const q=new Set;let B;function U(){B={r:0,c:[],p:B}}function H(){B.r||r(B.c),B=B.p}function K(t,e){t&&t.i&&(q.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),B.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function W(t,e){t.d(1),e.delete(t.key)}function J(t,e){D(t,1,1,(()=>{e.delete(t.key)}))}function z(t,e,n,o,r,s,i,c,a,l,u,p){let f=t.length,d=s.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const $=[],g=new Map,y=new Map;for(h=d;h--;){const t=p(r,s,h),c=n(t);let a=i.get(c);a?o&&a.p(t,e):(a=l(c,t),a.c()),g.set(c,$[h]=a),c in m&&y.set(c,Math.abs(h-m[c]))}const w=new Set,b=new Set;function x(t){K(t,1),t.m(c,u),i.set(t.key,t),u=t.first,d--}for(;f&&d;){const e=$[d-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,d--):g.has(r)?!i.has(o)||w.has(o)?x(e):b.has(r)?f--:y.get(o)>y.get(r)?(b.add(o),x(e)):(w.add(r),f--):(a(n,i),f--)}for(;f--;){const e=t[f];g.has(e.key)||a(e,i)}for(;d;)x($[d-1]);return $}function G(t){t&&t.c()}function Q(t,e,o,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,o),i||A((()=>{const e=a.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(A)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,n,s,i,c,a,l=[-1]){const u=x;_(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let f=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),f&&function(t,e){-1===t.$$.dirty[0]&&(j.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),f=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),Q(e,n.target,n.anchor,n.customElement),M()}_(u)}class X{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Y extends X{constructor(t){super(),Z(this,t,null,null,i,{})}}var tt={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce(((t,[e,n])=>(t[e]=n,t)),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const et=RegExp(/\:([^/()]+)/g);function nt(t,e){if(navigator.userAgent.includes("jsdom"))return!1;e&&ot(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}function ot(t){t&&t.scrollTo&&"scroll-lock"!==t.dataset.routify&&"lock"!==t.dataset["routify-scroll"]&&(t.style["scroll-behavior"]="auto",t.scrollTo({top:0,behavior:"auto"}),t.style["scroll-behavior"]="",ot(t.parentElement))}const rt=t=>{const e=[];let n;for(;n=et.exec(t);)e.push(n[1]);return e};function st(t,e){st._console=st._console||{log:console.log,warn:console.warn};const{_console:n}=st,o=t.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,t.component.shortPath.split("/").pop()).replace(/^./,(t=>t.toUpperCase())).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const t of["log","warn"])console[t]=(...e)=>{r.includes(e[0])||n[t](...e)},e().then((()=>{console[t]=n[t]}))}function it(){let t=window.location.pathname+window.location.search+window.location.hash;const{url:e,options:n}=function(t){const[e,n]=t.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:e,options:o}}(t);return{...ct(e),options:n}}function ct(t){tt.useHash&&(t=t.replace(/.*#(.+)/,"$1"));const e=t.startsWith("/")?window.location.origin:void 0,n=new URL(t,e);return{url:n,fullpath:n.pathname+n.search+n.hash}}function at(t,e,n){const o=tt.useHash?"#":"";let r;return r=function(t,e,n){const o=Object.assign({},n,e),r=function(t,e){if(!tt.queryHandler)return"";const n=rt(t),o={};e&&Object.entries(e).forEach((([t,e])=>{n.includes(t)||(o[t]=e)}));return tt.queryHandler.stringify(o).replace(/\?$/,"")}(t,e);for(const[e,n]of Object.entries(o))t=t.replace(`:${e}`,n);return`${t}${r}`}(t,e,n),r=tt.urlTransform.apply(r),r=o+r,r}function lt(t){let e;const n=t[2].default,o=u(n,t,t[1],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[e]){o&&o.p&&2&e&&f(o,n,t,t[1],e,null,null)},i(t){e||(K(o,t),e=!0)},o(t){D(o,t),e=!1},d(t){o&&o.d(t)}}}function ut(t,e,n){let{$$slots:o={},$$scope:r}=e,{scoped:s={}}=e;return t.$$set=t=>{"scoped"in t&&n(0,s=t.scoped),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class pt extends X{constructor(t){super(),Z(this,t,ut,lt,i,{scoped:0})}}const ft=[];function dt(e,n=t){let o;const r=[];function s(t){if(i(e,t)&&(e=t,o)){const t=!ft.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),ft.push(n,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return r.push(a),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function ht(e,n,o){const i=!Array.isArray(e),a=i?[e]:e,l=n.length<2;return{subscribe:dt(o,(e=>{let o=!1;const u=[];let p=0,f=t;const d=()=>{if(p)return;f();const o=n(i?u[0]:u,e);l?e(o):f=s(o)?o:t},h=a.map(((t,e)=>c(t,(t=>{u[e]=t,p&=~(1<<e),o&&d()}),(()=>{p|=1<<e}))));return o=!0,d(),function(){r(h),f()}})).subscribe}}window.routify=window.routify||{};const mt=dt(null),$t=dt([]);$t.subscribe((t=>window.routify.routes=t));let gt=dt({component:{params:{}}});const yt=dt(null),wt=dt(!0);function bt(t,e=!1){t=tt.urlTransform.remove(t);let{pathname:n,search:o}=ct(t).url;const r=a($t),s=r.find((t=>n===t.meta.name))||r.find((t=>n.match(t.regex)));if(!s)throw new Error(`Route could not be found for "${n}".`);const i=e?Object.create(s):s,{route:c,redirectPath:l,rewritePath:u}=xt(i,r);return u&&(({pathname:n,search:o}=ct(at(u,c.params)).url),l&&(c.redirectTo=at(l,c.params||{}))),tt.queryHandler&&(c.params=Object.assign({},tt.queryHandler.parse(o))),function(t,e){if(t.paramKeys){const n=function(t){const e=[];return t.forEach((t=>{e[t.path.split("/").filter(Boolean).length-1]=t})),e}(t.layouts),o=e.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map((t=>t.match(/\:(.+)/))).map((t=>t&&t[1]))})(t.path).forEach(((e,r)=>{e&&(t.params[e]=o[r],n[r]?n[r].param={[e]:o[r]}:t.param={[e]:o[r]})}))}}(c,n),c.leftover=t.replace(new RegExp(c.regex),""),c}function xt(t,e,n,o){const{redirect:r,rewrite:s}=t.meta;if(r||s){n=r?r.path||r:n,o=s?s.path||s:n;const i=r&&r.params,c=s&&s.params,a=e.find((t=>t.path===o));return a===t&&console.error(`${o} is redirecting to itself`),a||console.error(`${t.path} is redirecting to non-existent path: ${o}`),(i||c)&&(a.params=Object.assign({},a.params,i,c)),xt(a,e,n,o)}return{route:t,redirectPath:n,rewritePath:o}}function _t(t,e,n){const o=t.slice();return o[1]=e[n],o}function Pt(t,e){let n,o;return{key:t,first:null,c(){n=$("iframe"),n.src!==(o=e[1].url)&&b(n,"src",o),b(n,"frameborder","0"),b(n,"title","routify prefetcher"),this.first=n},m(t,e){h(t,n,e)},p(t,r){e=t,1&r&&n.src!==(o=e[1].url)&&b(n,"src",o)},d(t){t&&m(n)}}}function vt(e){let n,o=[],r=new Map,s=e[0];const i=t=>t[1].options.prefetch;for(let t=0;t<s.length;t+=1){let n=_t(e,s,t),c=i(n);r.set(c,o[t]=Pt(c,n))}return{c(){n=$("div");for(let t=0;t<o.length;t+=1)o[t].c();var t,e,r;b(n,"id","__routify_iframes"),t="display",e="none",n.style.setProperty(t,e,r?"important":"")},m(t,e){h(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){1&e&&(s=t[0],o=z(o,e,i,1,t,s,r,n,W,Pt,null,_t))},i:t,o:t,d(t){t&&m(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const kt=dt([]),jt=ht(kt,(t=>t.slice(0,2)));function Ot(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=a(kt).find((t=>t&&t.options.prefetch==e));if(n){const{gracePeriod:t}=n.options,o=new Promise((e=>setTimeout(e,t))),r=new Promise((e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)}));Promise.all([o,r]).then((()=>{kt.update((t=>t.filter((t=>t.options.prefetch!=e))))}))}}function Et(t,e,n){let o;return l(t,jt,(t=>n(0,o=t))),[o]}jt.subscribe((t=>t.forEach((({options:t})=>{setTimeout((()=>Ot(t.prefetch)),t.timeout)})))),addEventListener("message",Ot,!1);class It extends X{constructor(t){super(),Z(this,t,Et,vt,i,{})}}function St(){return k("routify")||gt}const Lt={_hooks:[t=>wt.set(!1)],subscribe:Tt},Nt={_hooks:[],subscribe:Tt};function Tt(t){const e=this._hooks,n=e.length;return t((t=>{e[n]=t})),()=>delete e[n]}const At={subscribe(t){const e=St(),{route:n,routes:o}=a(e);return ht(e,(t=>{return e=t,r=n,s=o,function(t,n={},o){const{component:i}=e,c=Object.assign({},r.params,i.params);let a=t&&t.nodeType&&t;a&&(t=t.getAttribute("href")),t=t?p(t):i.shortPath;const l=s.find((e=>[e.shortPath||"/",e.path].includes(t)));if(l&&"proximity"===l.meta.preload&&window.requestIdleCallback){const t=routify.appLoaded?0:1500;setTimeout((()=>{window.requestIdleCallback((()=>l.api.preload()))}),t)}o&&!1!==o.strict||(t=t.replace(/index$/,""));let u=at(t,n,c);return a?(a.href=u,{update(e){a.href=at(t,e,c)}}):u;function p(t){if(t.match(/^\.\.?\//)){let[,e,n]=t.match(/^([\.\/]+)(.*)/),o=i.path.replace(/\/$/,"");const r=e.match(/\.\.\//g)||[];i.isPage&&r.push(null),r.forEach((()=>o=o.replace(/\/[^\/]+\/?$/,""))),t=(t=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(t.match(/^\//));else{const e=s.find((e=>e.meta.name===t));e&&(t=e.shortPath)}return t}};var e,r,s})).subscribe(t)}};const Ft={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(Ft.getLongest(Ft.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){Ft.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){Ft.writeMeta(`og:${t}`,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=a(mt).path;return n[Object.keys(t[e]).filter((t=>o.includes(t))).sort(((t,e)=>e.length-t.length))[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:s,valueField:i}=Rt.services[r]||Rt.services.plain,c=document.querySelector(`meta[${s}='${t}']`);c&&c.remove();const a=document.createElement("meta");a.setAttribute(s,t),a.setAttribute(i,e),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(t,e){Ft.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=Ft.getOrigin();Ft.templates[t]=Ft.templates[t]||{},Ft.templates[t][n]=e},update(){Object.keys(Ft.props).forEach((t=>{let e=Ft.getLongest(Ft.props,t);Ft.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))}))},batchedUpdate(){Ft._pendingUpdate||(Ft._pendingUpdate=!0,setTimeout((()=>{Ft._pendingUpdate=!1,this.update()})))},_updateQueued:!1,getOrigin(){const t=St();return t&&a(t).path||"/"},_pendingUpdate:!1},Rt=new Proxy(Ft,{set(t,e,n,o){const{props:r,getOrigin:s}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][s()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});function Mt(t,e,n){const o=t.slice();return o[21]=e[n].component,o[22]=e[n].componentFile,o[2]=e[n].decorator,o[1]=e[n].nodes,o}function Ct(t){let e,n,o=[],r=new Map,s=[t[4]];const i=t=>t[6];for(let e=0;e<1;e+=1){let n=Mt(t,s,e),c=i(n);r.set(c,o[e]=Ht(c,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=w()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);h(t,e,r),n=!0},p(t,n){33554557&n&&(s=[t[4]],U(),o=z(o,n,i,1,t,s,r,e.parentNode,J,Ht,e,Mt),H())},i(t){if(!n){for(let t=0;t<1;t+=1)K(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)D(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&m(e)}}}function qt(t){let e,n;return e=new Wt({props:{decorator:t[2],nodes:t[1],scoped:{...t[0],...t[25]}}}),{c(){G(e.$$.fragment)},m(t,o){Q(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.decorator=t[2]),16&n&&(o.nodes=t[1]),33554433&n&&(o.scoped={...t[0],...t[25]}),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Bt(t){let e,n,o=t[21]&&t[1].length&&qt(t);return{c(){o&&o.c(),e=w()},m(t,r){o&&o.m(t,r),h(t,e,r),n=!0},p(t,n){t[21]&&t[1].length?o?(o.p(t,n),16&n&&K(o,1)):(o=qt(t),o.c(),K(o,1),o.m(e.parentNode,e)):o&&(U(),D(o,1,1,(()=>{o=null})),H())},i(t){n||(K(o),n=!0)},o(t){D(o),n=!1},d(t){o&&o.d(t),t&&m(e)}}}function Ut(t){let n,o,r;const s=[{scoped:t[0]},{scopedSync:t[5]},t[3].param||{}];var i=t[22];function c(t){let n={$$slots:{default:[Bt,({scoped:t,decorator:e})=>({25:t,2:e}),({scoped:t,decorator:e})=>(t?33554432:0)|(e?4:0)]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c(t))),{c(){n&&G(n.$$.fragment),o=y()},m(t,e){n&&Q(n,t,e),h(t,o,e),r=!0},p(t,e){const r=41&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[1&e&&{scoped:t[0]},32&e&&{scopedSync:t[5]},8&e&&(a=t[3].param||{},"object"==typeof a&&null!==a?a:{})]):{};var a;if(100663317&e&&(r.$$scope={dirty:e,ctx:t}),i!==(i=t[22])){if(n){U();const t=n;D(t.$$.fragment,1,0,(()=>{V(t,1)})),H()}i?(n=new i(c(t)),G(n.$$.fragment),K(n.$$.fragment,1),Q(n,o.parentNode,o)):n=null}else i&&n.$set(r)},i(t){r||(n&&K(n.$$.fragment,t),r=!0)},o(t){n&&D(n.$$.fragment,t),r=!1},d(t){n&&V(n,t),t&&m(o)}}}function Ht(t,e){let n,o,r,s;var i=e[2];function c(t){return{props:{scoped:t[0],$$slots:{default:[Ut]},$$scope:{ctx:t}}}}return i&&(o=new i(c(e))),{key:t,first:null,c(){n=w(),o&&G(o.$$.fragment),r=w(),this.first=n},m(t,e){h(t,n,e),o&&Q(o,t,e),h(t,r,e),s=!0},p(t,n){e=t;const s={};if(1&n&&(s.scoped=e[0]),67108925&n&&(s.$$scope={dirty:n,ctx:e}),i!==(i=e[2])){if(o){U();const t=o;D(t.$$.fragment,1,0,(()=>{V(t,1)})),H()}i?(o=new i(c(e)),G(o.$$.fragment),K(o.$$.fragment,1),Q(o,r.parentNode,r)):o=null}else i&&o.$set(s)},i(t){s||(o&&K(o.$$.fragment,t),s=!0)},o(t){o&&D(o.$$.fragment,t),s=!1},d(t){t&&m(n),t&&m(r),o&&V(o,t)}}}function Kt(e){let n,o,r,i,c,a=e[4]&&Ct(e);return{c(){a&&a.c(),n=y(),o=$("span")},m(l,u){var p;a&&a.m(l,u),h(l,n,u),h(l,o,u),r=!0,i||(p=e[9].call(null,o),c=p&&s(p.destroy)?p.destroy:t,i=!0)},p(t,[e]){t[4]?a?(a.p(t,e),16&e&&K(a,1)):(a=Ct(t),a.c(),K(a,1),a.m(n.parentNode,n)):a&&(U(),D(a,1,1,(()=>{a=null})),H())},i(t){r||(K(a),r=!0)},o(t){D(a),r=!1},d(t){a&&a.d(t),t&&m(n),t&&m(o),i=!1,c()}}}function Dt(t,e,n){let o,r,s,i,c;l(t,mt,(t=>n(15,i=t))),l(t,$t,(t=>n(16,c=t)));let a,{nodes:u=[]}=e,{scoped:p={}}=e,{decorator:f}=e,d=null,h=null,m={},$=1;const g=dt(null);l(t,g,(t=>n(4,r=t)));const y=k("routify")||gt;l(t,y,(t=>n(14,s=t)));v("routify",g);let w=[];function b(t){n(5,m={...p});const e={...r,nodes:h,decorator:f||pt,layout:d.isLayout?d:s.layout,component:d,route:i,routes:c,componentFile:t,parentNode:a||s.parentNode};g.set(e),function(t,e,n=e){t.set(n)}(y,s.child=d,s),0===h.length&&async function(){await new Promise((t=>setTimeout(t)));const t=r.component.path===i.path;!window.routify.stopAutoReady&&t&&async function({page:t,metatags:e,afterPageLoad:n,parentNode:o}){const r=t.last!==t;setTimeout((()=>nt(o,r)));const{path:s}=t,{options:i}=it(),c=i.prefetch;for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:s,prefetchId:c},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:r.component,metatags:Rt,afterPageLoad:Lt,parentNode:a})}()}return t.$$set=t=>{"nodes"in t&&n(1,u=t.nodes),"scoped"in t&&n(0,p=t.scoped),"decorator"in t&&n(2,f=t.decorator)},t.$$.update=()=>{3074&t.$$.dirty&&w!==u&&(n(11,w=u),n(3,[d,...h]=[...u],d),n(3,d.api.reset=()=>n(10,$++,$),d)),8&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then(b):b(e)}(d),1040&t.$$.dirty&&n(6,o=r&&$&&function({meta:t,path:e,param:n,params:o}){return JSON.stringify({path:e,invalidate:$,param:(t["param-is-page"]||t["slug-is-page"])&&n,queryParams:t["query-params-is-page"]&&o})}(r.component)),16&t.$$.dirty&&r&&st(r,T)},[p,u,f,d,r,m,o,g,y,t=>a=t.parentNode,$,w]}class Wt extends X{constructor(t){super(),Z(this,t,Dt,Kt,i,{nodes:1,scoped:0,decorator:2})}}function Jt(t,e){let n=!1;function o(o,r){const s=bt(o||it().fullpath);s.redirectTo&&(history.replaceStateNative({},null,s.redirectTo),delete s.redirectTo);const i=[...(r&&bt(it().fullpath,t)||s).layouts,s];n&&delete n.last,s.last=n,n=s,o||yt.set(s),mt.set(s),s.api.preload().then((()=>{wt.set(!0),e(i)}))}const r=function(t){["pushState","replaceState"].forEach((t=>{history[t+"Native"]=history[t],history[t]=async function(e={},n,o){if(o===location.pathname+location.search+location.hash)return!1;const{id:r,path:s,params:i}=a(mt);e={id:r,path:s,params:i,...e};const c=new Event(t.toLowerCase());Object.assign(c,{state:e,title:n,url:o});return await Gt(c,o)?(history[t+"Native"].apply(this,[e,n,o]),dispatchEvent(c)):void 0}}));let e=!1;const n={click:zt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Gt(n,it().fullpath)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach((t=>addEventListener(...t)));return()=>{Object.entries(n).forEach((t=>removeEventListener(...t)))}}(o);return{updatePage:o,destroy:r}}function zt(t){const e=t.target.closest("a"),n=e&&e.href;if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented)return;if(!n||e.target||e.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;t.preventDefault(),history.pushState({},"",r)}async function Gt(t,e){const n=bt(e).api;for(const o of Nt._hooks.filter(Boolean)){if(!await o(t,n,{url:e}))return!1}return!0}function Qt(t){let e,n;return e=new Wt({props:{nodes:t[0]}}),{c(){G(e.$$.fragment)},m(t,o){Q(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.nodes=t[0]),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Vt(t){let e,n,o,r=t[0]&&null!==t[1]&&Qt(t);return n=new It({}),{c(){r&&r.c(),e=y(),G(n.$$.fragment)},m(t,s){r&&r.m(t,s),h(t,e,s),Q(n,t,s),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&K(r,1)):(r=Qt(t),r.c(),K(r,1),r.m(e.parentNode,e)):r&&(U(),D(r,1,1,(()=>{r=null})),H())},i(t){o||(K(r),K(n.$$.fragment,t),o=!0)},o(t){D(r),D(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&m(e),V(n,t)}}}function Zt(t,e,n){let o;l(t,mt,(t=>n(1,o=t)));let r,s,{routes:i}=e,{config:c={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(tt,c);v("routifyupdatepage",((...t)=>s&&s.updatePage(...t)));const a=t=>n(0,r=t),u=()=>{s&&(s.destroy(),s=null)};let p=null;var f;return f=u,P().$$.on_destroy.push(f),t.$$set=t=>{"routes"in t&&n(2,i=t.routes),"config"in t&&n(3,c=t.config)},t.$$.update=()=>{4&t.$$.dirty&&i&&(clearTimeout(p),p=setTimeout((()=>{u(),s=Jt(i,a),$t.set(i),s.updatePage()})))},[r,o,i,c]}class Xt extends X{constructor(t){super(),Z(this,t,Zt,Vt,i,{routes:2,config:3})}}function Yt(t){const e=async function(e){return await te(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return ee(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}async function te(t,e){const n=await t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=await Promise.all(o.children.map((async n=>te(t,{state:e.state,scope:ne(e.scope||{}),parent:e.file,file:await n}))));o.children=n.filter(Boolean)}return o}function ee(t,e){const n=t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=o.children.map((n=>ee(t,{state:e.state,scope:ne(e.scope||{}),parent:e.file,file:n})));o.children=n.filter(Boolean)}return o}function ne(t){return JSON.parse(JSON.stringify(t))}const oe=Yt((({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return`^${t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(et,"([^/]+)")+n}`})(t.path,t.isFallback))})),re=Yt((({file:t})=>{t.paramKeys=rt(t.path)})),se=Yt((({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path})),ie=Yt((({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map((t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C")).join(""))(t)})),ce=Yt((({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map((t=>({isMeta:!0,...t,meta:t})))))})),ae=Yt((t=>{const{file:e}=t,{isFallback:n,meta:o}=e,r=e.path.match("/:"),s=e.path.endsWith("/index"),i=o.index||0===o.index,c=!1===o.index;e.isIndexable=i||!n&&!r&&!s&&!c,e.isNonIndexable=!e.isIndexable})),le=Yt((({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>pe(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>pe(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>ue(e)})}));function ue(t,e=[]){return t&&(e.unshift(t),ue(t.parent,e)),e}function pe(t,e){if(!t.root){const n=t.parent.children.filter((t=>t.isIndexable)),o=n.indexOf(t);return n[o+e]}}const fe=Yt((({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})})),de=Yt((({file:t,scope:e})=>{function n(t){const{parent:e}=t,o=e&&e.component&&e,r=o&&o.isReset,s=e&&!r&&n(e)||[];return o&&s.push(o),s}Object.defineProperty(t,"layouts",{get:()=>n(t)})})),he=Yt((({file:t})=>{const e=t.root?function(){}:t.children?(t.isPage,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)}));var me=Object.freeze({__proto__:null,setRegex:oe,setParamKeys:re,setShortPath:se,setRank:ie,addMetaChildren:ce,setIsIndexable:ae,assignRelations:le,assignIndex:fe,assignLayout:de,createFlatList:t=>{Yt((t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)})).sync(t),t.routes.sort(((t,e)=>t.ranking>=e.ranking?-1:1))},setPrototype:he});const $e={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function ge(t){return Object.entries($e).forEach((([e,n])=>{void 0===t[e]&&(t[e]=n)})),t.children&&(t.children=t.children.map(ge)),t}const ye=Yt((({file:t})=>{t.api=new we(t)}));class we{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter((t=>!t.isNonIndexable)).sort(((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})))).map((({api:t})=>t))}get next(){return be(this,1)}get prev(){return be(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file,this.index&&this.index.__file].filter(Boolean).map((t=>t.component()));await Promise.all(t)}get component(){return this.__file.component?this.__file.component():!!this.__file.index&&this.__file.index.component()}get componentWithIndex(){return new Promise((t=>Promise.all([this.component,this.index&&this.index.component]).then((e=>t(e)))))}get index(){const t=this.__file.children&&this.__file.children.find((t=>t.isIndex));return t&&t.api}}function be(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const xe={...me,restoreDefaults:({tree:t})=>ge(t),assignAPI:ye};function _e(e){let n;return{c(){n=$("span"),n.textContent="About"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Pe extends X{constructor(t){super(),Z(this,t,null,_e,i,{})}}function ve(e){let n;return{c(){n=$("span"),n.textContent="Blog"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class ke extends X{constructor(t){super(),Z(this,t,null,ve,i,{})}}function je(e){let n;return{c(){n=$("span"),n.textContent="Home"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Oe extends X{constructor(t){super(),Z(this,t,null,je,i,{})}}function Ee(e){let n;return{c(){n=$("span"),n.textContent="Projects"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Ie extends X{constructor(t){super(),Z(this,t,null,Ee,i,{})}}function Se(t){let e,n,o;const r=t[3].default,s=u(r,t,t[2],null);return{c(){e=$("a"),s&&s.c(),b(e,"class","flex flex-col justify-center h-full p-2 cursor-pointer"),b(e,"href",n=t[1](t[0]))},m(t,n){h(t,e,n),s&&s.m(e,null),o=!0},p(t,[i]){s&&s.p&&4&i&&f(s,r,t,t[2],i,null,null),(!o||3&i&&n!==(n=t[1](t[0])))&&b(e,"href",n)},i(t){o||(K(s,t),o=!0)},o(t){D(s,t),o=!1},d(t){t&&m(e),s&&s.d(t)}}}function Le(t,e,n){let o;l(t,At,(t=>n(1,o=t)));let{$$slots:r={},$$scope:s}=e,{href:i=""}=e;return t.$$set=t=>{"href"in t&&n(0,i=t.href),"$$scope"in t&&n(2,s=t.$$scope)},[i,o,s,r]}class Ne extends X{constructor(t){super(),Z(this,t,Le,Se,i,{href:0})}}function Te(t){let e;return{c(){e=g("Home")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function Ae(t){let e;return{c(){e=g("About")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function Fe(t){let e;return{c(){e=g("Projects")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function Re(t){let e;return{c(){e=g("Blog")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function Me(t){let e,n,o,r,s,i,c,a,l,p;n=new Ne({props:{href:"/",$$slots:{default:[Te]},$$scope:{ctx:t}}}),r=new Ne({props:{href:"/about",$$slots:{default:[Ae]},$$scope:{ctx:t}}}),i=new Ne({props:{href:"/projects",$$slots:{default:[Fe]},$$scope:{ctx:t}}}),a=new Ne({props:{href:"/blog",$$slots:{default:[Re]},$$scope:{ctx:t}}});const g=t[0].default,w=u(g,t,t[1],null);return{c(){e=$("nav"),G(n.$$.fragment),o=y(),G(r.$$.fragment),s=y(),G(i.$$.fragment),c=y(),G(a.$$.fragment),l=y(),w&&w.c(),b(e,"class","h-12 max-h-12 bg-gray-200 flex flex-row justify-end items-center")},m(t,u){h(t,e,u),Q(n,e,null),d(e,o),Q(r,e,null),d(e,s),Q(i,e,null),d(e,c),Q(a,e,null),h(t,l,u),w&&w.m(t,u),p=!0},p(t,[e]){const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s);const c={};2&e&&(c.$$scope={dirty:e,ctx:t}),i.$set(c);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),a.$set(l),w&&w.p&&2&e&&f(w,g,t,t[1],e,null,null)},i(t){p||(K(n.$$.fragment,t),K(r.$$.fragment,t),K(i.$$.fragment,t),K(a.$$.fragment,t),K(w,t),p=!0)},o(t){D(n.$$.fragment,t),D(r.$$.fragment,t),D(i.$$.fragment,t),D(a.$$.fragment,t),D(w,t),p=!1},d(t){t&&m(e),V(n),V(r),V(i),V(a),t&&m(l),w&&w.d(t)}}}function Ce(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(1,r=t.$$scope)},[o,r]}class qe extends X{constructor(t){super(),Z(this,t,Ce,Me,i,{})}}const Be={root:!0,children:[{isPage:!0,path:"/about",id:"_about",component:()=>Pe},{isPage:!0,path:"/blog",id:"_blog",component:()=>ke},{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>Oe},{isPage:!0,path:"/projects",id:"_projects",component:()=>Ie}],isLayout:!0,path:"/",id:"__layout",component:()=>qe},{tree:Ue,routes:He}=function(t){const e=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(xe[t].sync||xe[t])(n)}return n}(Be);function Ke(e){let n,o,r,s,i;return o=new Y({}),s=new Xt({props:{routes:He}}),{c(){n=y(),G(o.$$.fragment),r=y(),G(s.$$.fragment),document.title="doughtnerd.github.io - Welcome"},m(t,e){h(t,n,e),Q(o,t,e),h(t,r,e),Q(s,t,e),i=!0},p:t,i(t){i||(K(o.$$.fragment,t),K(s.$$.fragment,t),i=!0)},o(t){D(o.$$.fragment,t),D(s.$$.fragment,t),i=!1},d(t){t&&m(n),V(o,t),t&&m(r),V(s,t)}}}const De=new class extends X{constructor(t){super(),Z(this,t,null,Ke,i,{})}}({target:document.body});export default De;
