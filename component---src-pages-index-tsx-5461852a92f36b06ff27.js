(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3884:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},3038:function(t,e,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,e,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},5658:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var l=u[c];t=t.replace(new RegExp(l,"g"),r[l])}return t}(t)}}},3297:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2163:function(t,e,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=r(4159),l=r(5658),s=r(187),f=r(3297),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function m(t,e){return e.decode?l(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function h(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function b(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&m(r,t).includes(t.arrayFormatSeparator);r=a?m(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)})):null===r?r:m(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?m(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var c=a.value;if(""!==c){var l=s(e.decode?c.replace(/\+/g," "):c,"="),f=o(l,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?g:m(g,e),r(m(p,e),g,n)}}}catch(I){u.e(I)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var b=v[x],w=n[b];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=h(w[Z],e)}else n[b]=h(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=b,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(e,t),"[",o,"]"].join("")]:[[g(e,t),"[",g(o,t),"]=",g(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(e,t),"[]"].join("")]:[[g(e,t),"[]=",g(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(e,t),":list="].join("")]:[[g(e,t),":list=",g(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[g(r,t),e,g(o,t)].join("")]:[[n,g(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[g(e,t)]:[[g(e,t),"=",g(n,t)].join("")])}}}}(e),o={},i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];r(c)||(o[c]=t[c])}var l=Object.keys(o);return!1!==e.sort&&l.sort(e.sort),l.map((function(r){var o=t[r];return void 0===o?"":null===o?g(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?g(r,e)+"[]":o.reduce(n(r),[]).join("&"):g(r,e)+"="+g(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=s(t,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:b(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=x(t.url).split("?")[0]||"",a=e.extract(t.url),i=e.parse(a,{sort:!1}),u=Object.assign(i,t.query),c=e.stringify(u,r);c&&(c="?".concat(c));var l=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(l="#".concat(r[p]?g(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(c).concat(l)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=e.parseUrl(t,o),i=a.url,u=a.query,c=a.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:c},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},187:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},4159:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},2136:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return z}});var n=r(7294),o=r(6661),a=r(6125);var i=(0,o.Z)(a.G,{target:"e16sge30"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),u=r(4382),c=function(t){var e=t.profileImage;return(0,u.tZ)(i,{image:e,alt:"Profile Image"})},l=r(5444);var s=(0,o.Z)("div",{target:"evuclkb4"})({name:"1rj2ujn",styles:"width:100%;background-image:linear-gradient(40deg, #29323c 40%, #485563 60%);color:#ffffff"}),f=(0,o.Z)("div",{target:"evuclkb3"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),p=(0,o.Z)("div",{target:"evuclkb2"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),d=(0,o.Z)("div",{target:"evuclkb1"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),g=(0,o.Z)(l.rU,{target:"evuclkb0"})({name:"jftf6t",styles:"display:flex;place-items:center;width:30px;margin-top:20px;& svg{width:100%;}"}),m=r(4715),y=r.n(m),x=function(t){var e=t.profileImage;return(0,u.tZ)(s,null,(0,u.tZ)(f,null,(0,u.tZ)(c,{profileImage:e}),(0,u.tZ)("div",null,(0,u.tZ)(p,null,"Yang, Seungchan"),(0,u.tZ)(d,null,"꾸준히 성장하고자 노력하는 학생 개발자 입니다.")),(0,u.tZ)(g,{to:"https://github.com/Yangseungchan"},(0,u.tZ)(y(),null))))};var v=["active"];var h=(0,o.Z)("div",{target:"e12vp3bm1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),b=(0,o.Z)((function(t){t.active;var e=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,v);return(0,u.tZ)(l.rU,e)}),{target:"e12vp3bm0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),w=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,u.tZ)(h,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,u.tZ)(b,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))},k=r(7462),j=function(t,e){var r=(0,n.useRef)(null),o=(0,n.useRef)(null),a=(0,n.useState)(1),i=a[0],u=a[1],c=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t,e]);return(0,n.useEffect)((function(){o.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(u((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){u(1)}),[t]),(0,n.useEffect)((function(){var t;10*i>=c.length||null===r.current||0===r.current.children.length||null==o.current||o.current.observe(null===(t=r.current)||void 0===t?void 0:t.children[r.current.children.length-1])}),[i,c]),{containerRef:r,postList:c.slice(0,10*i)}};var Z=(0,o.Z)("div",{target:"e1ietdxf0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var I=(0,o.Z)(l.rU,{target:"e11y88hj7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),S=(0,o.Z)(a.G,{target:"e11y88hj6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),O=(0,o.Z)("div",{target:"e11y88hj5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),A=(0,o.Z)("div",{target:"e11y88hj4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),E=(0,o.Z)("div",{target:"e11y88hj3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),F=(0,o.Z)("div",{target:"e11y88hj2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),_=(0,o.Z)("div",{target:"e11y88hj1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),C=(0,o.Z)("div",{target:"e11y88hj0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),U=function(t){var e=t.title,r=t.date,n=t.categories,o=t.summary,a=t.thumbnail.childImageSharp.gatsbyImageData,i=t.link;return(0,u.tZ)(I,{to:i},(0,u.tZ)(S,{image:a,alt:"Post Item Image"}),(0,u.tZ)(O,null,(0,u.tZ)(A,null,e),(0,u.tZ)(E,null,r),(0,u.tZ)(F,null,n.map((function(t){return(0,u.tZ)(_,{key:t},t)}))),(0,u.tZ)(C,null,o)))},M=function(t){var e=t.selectedCategory,r=t.posts,n=j(e,r),o=n.containerRef,a=n.postList;return(0,u.tZ)(Z,{ref:o},a.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,o=e.frontmatter;return(0,u.tZ)(U,(0,k.Z)({},o,{key:r,link:n}))})))},R=r(2163),N=r(9183),z=function(t){var e=t.location.search,r=t.data,o=r.site.siteMetadata,a=o.title,i=o.description,c=o.siteUrl,l=r.allMarkdownRemark.edges,s=r.file,f=s.childImageSharp.gatsbyImageData,p=s.publicURL,d=R.parse(e),g="string"==typeof d.category&&d.category?d.category:"All",m=(0,n.useMemo)((function(){return l.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,u.tZ)(N.Z,{title:a,description:i,url:c,image:p},(0,u.tZ)(x,{profileImage:f}),(0,u.tZ)(w,{selectedCategory:g,categoryList:m}),(0,u.tZ)(M,{posts:l,selectedCategory:g}))}},4715:function(t,e,r){var n=r(7294);function o(t){return n.createElement("svg",t,[n.createElement("title",{key:0},"GitHub"),n.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",fill:"#ecf0f1",key:1})])}o.defaultProps={role:"img",viewBox:"0 0 24 24"},t.exports=o,o.default=o}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5461852a92f36b06ff27.js.map