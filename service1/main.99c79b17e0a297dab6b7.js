(()=>{var e,r,t,n,o,a,i,u,f,l,s,d={352:(e,r,t)=>{Promise.all([t.e(271),t.e(128)]).then(t.bind(t,128))}},c={};function p(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={exports:{}};return d[e](t,t.exports,p),t.exports}p.m=d,p.c=c,p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>e+"."+{128:"9e1ac6bde823fd0100d2",223:"5af24032d947ae71c91d",271:"3eb5305a2d3405bb2534",294:"b9bd7f510e19151b3771",935:"27303ed13dac819b89e7"}[e]+".js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="service1:",p.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{p.S={};var e={},r={};p.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];p.o(p.S,t)||(p.S[t]={});var a=p.S[t],i="service1",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},f=[];return"default"===t&&(u("react-dom","17.0.2",(()=>Promise.all([p.e(935),p.e(271)]).then((()=>()=>p(935))))),u("react-router-dom","5.3.4",(()=>Promise.all([p.e(223),p.e(271)]).then((()=>()=>p(223))))),u("react","17.0.2",(()=>p.e(294).then((()=>()=>p(294)))))),e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),p.p="/mfe-react-project/service1/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,f=!0;;u++,i++){var l,s,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(s=(typeof(l=r[i]))[0]))return!f||("u"==d?u>n&&!a:""==d!=a);if("u"==s){if(!f||"u"!=d)return!1}else if(f)if(d==s)if(u<=n){if(l!=e[u])return!1}else{if(a?l>e[u]:l<e[u])return!1;l!=e[u]&&(f=!1)}else if("s"!=d&&"n"!=d){if(a||u<=n)return!1;f=!1,u--}else{if(u<=n||s<d!=a)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},a=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},i=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,o){var a=p.I(r);return a&&a.then?a.then(e.bind(e,r,p.S[r],t,n,o)):e(0,p.S[r],t,n,o)})(((e,r,t,n,o)=>{var u=r&&p.o(r,t)&&a(r,t,n);return u?i(u):o()})),f={},l={271:()=>u("default","react",[1,17,0,1],(()=>p.e(294).then((()=>()=>p(294))))),334:()=>u("default","react-router-dom",[1,5,2,0],(()=>p.e(223).then((()=>()=>p(223))))),650:()=>u("default","react-dom",[1,17,0,1],(()=>p.e(935).then((()=>()=>p(935)))))},s={128:[334,650],271:[271]},p.f.consumes=(e,r)=>{p.o(s,e)&&s[e].forEach((e=>{if(p.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,p.m[e]=t=>{delete p.c[e],t.exports=r()}},n=r=>{delete f[e],p.m[e]=t=>{throw delete p.c[e],r}};try{var o=l[e]();o.then?r.push(f[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={179:0};p.f.j=(r,t)=>{var n=p.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(271!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=p.p+p.u(r),i=new Error;p.l(a,(t=>{if(p.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,u]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);u&&u(p)}for(r&&r(t);f<a.length;f++)o=a[f],p.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkservice1=self.webpackChunkservice1||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),p(352)})();