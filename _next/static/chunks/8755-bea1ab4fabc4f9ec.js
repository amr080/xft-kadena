"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8755],{12098:function(e,t,a){var n=a(57437);a(2265);var r=a(87138),l=a(99564);t.Z=e=>{let{link:t,text:a,onClick:s,type:i,download:o,fake:c,className:d,secondary:m,center:u,fullWidth:f,twitter:g}=e,x="".concat(d&&d," leading-[135%] transition-all duration-300 gap-2 whitespace-nowrap inline-flex rounded-[0.5rem] cursor-pointer text-center items-center justify-center font-bold py-[0.625rem] px-[1.5rem] hover:border-base-light focus-visible:border-base-light text-base-light focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-k-Green-default focus-visible:ring-opacity-50 transition duration-300 ease-in-out z-30\n  ").concat(f?"w-full":"w-fit","\n  ").concat(m?"bg-dark-opaque bg-k-Blue-default hover:bg-none hover:bg-k-Blue-800 active:bg-k-Blue-900":"bg-k-Green-default hover:bg-k-Green-800 active:bg-k-Green-900 hover:-translate-y-1");return(0,n.jsx)("div",{className:"rounded-lg \n      ".concat(f?"w-full":"w-fit","\n      ").concat(m&&"bg-green-linear-2 p-[1px] hover:bg-none active:bg-none transition-all duration-300 hover:-translate-y-1"," \n      ").concat(u&&"mx-auto"),children:t?"/"!==t[0]?(0,n.jsxs)("a",{href:t,className:x,target:"_blank",rel:"noopener noreferrer",children:[a,g&&l.Z.twitter,o&&l.Z.download]}):(0,n.jsxs)(r.default,{href:t,className:x,children:[a,o&&l.Z.download]}):c?(0,n.jsxs)("div",{className:x,children:[a,o&&l.Z.download]}):(0,n.jsxs)("button",{onClick:s,type:i,className:x,children:[a,o&&l.Z.download]})})}},15964:function(e,t,a){var n=a(57437);a(2265);var r=a(87138),l=a(99564);t.Z=e=>{let{text:t,href:a,fake:s,underline:i,small:o,moreGap:c,noTriangle:d,center:m,className:u}=e,f="flex items-center whitespace-nowrap gap-2 font-normal leading-5 [&>img]:w-4 [&>img]:h-4\n  ".concat(i&&"underline underline-offset-2","\n  ").concat(o&&"text-sm","\n  ").concat(c?"gap-4":"gap-2","\n  ").concat(m&&"justify-center","\n  ").concat(u);return s?(0,n.jsxs)("div",{className:f,children:[t,!d&&l.Z.triangle]}):a&&(0,n.jsx)("div",{className:"flex gap-2 items-center",children:"/"===a[0]||"#"===a[0]?(0,n.jsxs)(r.default,{href:a,className:f,children:[t,!d&&l.Z.triangle]}):(0,n.jsxs)("a",{href:a,className:f,target:"_blank",rel:"noreferrer",children:[t,l.Z.externalLink]})})}},31276:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(57437),r=a(87138),l=a(66648),s=a(94728),i=a(15964),o=a(36103),c=a.n(o),d=a(38031),m=a(13473),u=e=>{let{image:t,alt:a,title:o,description:u,tags:f,url:g,view:x="grid",noImageBuilder:h=!1,notBlog:w=!1,linkText:p}=e,v=c()(d.L),{ref:j,inView:b}=(0,m.YD)({triggerOnce:!0,threshold:0});return(0,n.jsxs)(r.default,{ref:j,href:w?g:"blog/".concat(g),className:"group flex flex-col w-full justify-between transition-all duration-500\n      ".concat("grid"===x?" max-w-none sm:max-w-[27.5rem]":"list"===x&&"max-w-[56.25rem]","\n      ").concat(b?"opacity-100 translate-y-0":"opacity-0 -translate-y-8"),children:[(0,n.jsxs)("div",{className:"flex flex-col w-full z-30",children:[t&&"list"!==x&&(0,n.jsx)("div",{className:"aspect-[664/344] w-full mb-4 rounded-[0.5rem] overflow-hidden",children:h?(0,n.jsx)(l.default,{src:t,alt:a||o||"No alt text provided",width:433,height:224,className:"object-cover w-full h-full  sm:max-w-[27.0625rem] sm:group-hover:scale-110 transition-all duration-300",quality:100}):t.asset&&(0,n.jsx)(l.default,{src:v.image(t).url(),alt:a||o||"No alt text provided",width:433,height:224,className:"object-cover w-full h-full  sm:max-w-[27.0625rem] sm:group-hover:scale-110 transition-all duration-300",quality:100})}),o&&(0,n.jsx)("div",{className:"sm:text-xl font-bold font-Space-Grotesk capitalize sm:group-hover:-translate-y-1 transition-all duration-300",children:o}),u&&(0,n.jsx)("p",{className:"sm:flex hidden text-sm",children:u}),f&&(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)(s.Z,{tags:f})})]}),(0,n.jsxs)("div",{className:"mt-6 w-fit",children:[(0,n.jsx)(i.Z,{text:p||"Read the Story",fake:!0}),(0,n.jsx)("div",{className:"mt-1 rounded-lg bg-gradient-to-r from-transparent via-[#6EA694] to-[#C4E7DC] h-1 w-[.1rem] opacity-0 transition-opacity, transition-width ease-in-out duration-500 sm:group-hover:w-full sm:group-hover:opacity-100"})]})]})},f=e=>{let{articles:t,view:a,center:r,noImageBuilder:l=!1,notBlog:s=!1,linkText:i}=e,{ref:o,inView:c}=(0,m.YD)({triggerOnce:!0,threshold:0});return t?(0,n.jsx)("div",{ref:o,className:"w-full width-wrapper",children:(0,n.jsx)("ul",{className:"max-w-[83rem] w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[3rem] transition-all duration-300\n          ".concat(r&&"justify-center","\n          ").concat(!c&&"opacity-0"),children:t.map((e,t)=>{var r;return(0,n.jsx)("li",{className:"flex transition-all duration-300 \n            ".concat(c&&"sm:staggered","\n            ").concat("list"===a&&"sm:hover:mt-4 sm:hover:first:mt-0 sm:hover:pb-8 sm:hover:last:pb-0"),style:{"--animation-order":t+1},children:(0,n.jsx)(u,{image:e.mainImage?e.mainImage:e.image&&e.image,alt:e.alt?e.alt:"No alternative text",title:e.title,description:e.description,tags:e.tags,url:(null==e?void 0:null===(r=e.slug)||void 0===r?void 0:r.current)?e.slug.current:e.url,view:a,noImageBuilder:l,notBlog:s,linkText:i},e.title)},t)})})}):(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("p",{children:"No articles found."})})}},34386:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(57437),r=a(2265),l=a(12098);function s(e){let{buttons:t,fake:a=!1}=e;return t.length>1?(0,n.jsx)("div",{className:"flex gap-2 w-full flex-wrap",children:t.map((e,t)=>(0,r.createElement)(l.Z,{...e,key:t,secondary:t>0,"data-sanity-edit-target":!0}))}):(0,n.jsx)(l.Z,{text:t[0].text,link:t[0].link,fake:a})}},16756:function(e,t,a){var n=a(57437),r=a(2265),l=a(2926),s=a(34386);let i=e=>{let{leftAligned:t}=e,a=(0,r.useRef)(null),l=(0,r.useRef)(null),s=(0,r.useRef)(null),i=(0,r.useRef)(null),o=(0,r.useId)().replace(/:/g,""),c=0;return(0,r.useEffect)(()=>{let e=a.current.querySelectorAll(".kadena-arrow-anim polygon");if(l.current.setAttribute("id","kadena-arrow-anim-gradient-".concat(o)),s.current.setAttribute("id","kadena-arrow-anim-mask-".concat(o)),i.current.setAttribute("fill","url(#kadena-arrow-anim-gradient-".concat(o,")")),i.current.setAttribute("mask","url(#kadena-arrow-anim-mask-".concat(o,")")),a){let t=()=>{let e=a.current;if(!e)return;let t=window.innerHeight,r=e.getBoundingClientRect().top,l=e.getBoundingClientRect().bottom;l<t&&!e.classList.contains("animated")?(n(),e.classList.add("animated")):(r>=t||l<0)&&e.classList.contains("animated")},n=()=>{if(0!=c&&clearInterval(c),a.current.classList.contains("animated"))return;let e=null,t=n=>{null===e&&(e=n);let l=n-e,s=Math.min(l/1500,1);r(1-(1-s)*(1-s)),l<1500&&(null==a?void 0:a.current.classList.contains("animated"))&&window.requestAnimationFrame(t)};window.requestAnimationFrame(t)},r=t=>{e.forEach((e,a)=>{let n=111*t*(a+1),r=-111+n;e.setAttribute("points","".concat(r,",0 ").concat(n,",64 ").concat(r,",128"))})};return window.addEventListener("scroll",t),window.addEventListener("resize",t),"complete"!==document.readyState&&window.addEventListener("DOMContentLoaded",t),t(),c=window.setInterval(t,250),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("DOMContentLoaded",t)}}},[]),(0,n.jsx)("div",{className:"mt-4 z-30 kadena-arrow-anim block relative lg:absolute lg:-translate-y-1/3\n      ".concat(t?"-right-6 sm:-right-16 xl:right-0 rotate-180":"-left-6 sm:-left-16 xl:left-0","\n      w-screen lg:w-[50vw]"),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 555 128",className:"w-full h-auto",ref:a,children:[(0,n.jsxs)("defs",{children:[(0,n.jsxs)("linearGradient",{id:"kadena-arrow-anim-gradient",ref:l,children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#A90A48"}),(0,n.jsx)("stop",{offset:"0.2",stopColor:"rgba(228, 25, 104, 0.80)"}),(0,n.jsx)("stop",{offset:"0.9",stopColor:"rgba(255, 86, 152, 0.10)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"rgba(255, 86, 152, 0)"})]}),(0,n.jsxs)("mask",{id:"kadena-arrow-anim-mask",ref:s,children:[(0,n.jsx)("polygon",{points:"-111,0 0,64 -111,128",fill:"#fff"}),(0,n.jsx)("polygon",{points:"-111,0 0,64 -111,128",fill:"#fff"}),(0,n.jsx)("polygon",{points:"-111,0 0,64 -111,128",fill:"#fff"}),(0,n.jsx)("polygon",{points:"-111,0 0,64 -111,128",fill:"#fff"}),(0,n.jsx)("polygon",{points:"-111,0 0,64 -111,128",fill:"#fff"})]})]}),(0,n.jsx)("rect",{fill:"url(#kadena-arrow-anim-gradient)",mask:"url(#kadena-arrow-anim-mask)",width:"555",height:"128",ref:i})]})})};t.default=e=>{let{size:t="lg",leftAligned:a,headline:o,level:c="h2",children:d,arrows:m,buttons:u}=e;t&&(t=(0,l.B)(t)),c&&(c=(0,l.B)(c));let f={md:"text-2xl sm:text-3xl",lg:"text-3xl sm:text-6xl"}[t];return(0,n.jsxs)("div",{className:"width-wrapper flex flex-col sm:items-start sm:justify-end lg:gap-0 gap-8\n      ".concat(a?"lg:flex-row-reverse":"lg:flex-row","\n      ").concat(d&&("md"===t?"sm:min-h-[15.5rem]":"sm:min-h-[20rem]")),children:[m&&"lg"===t&&(0,n.jsx)(i,{leftAligned:a}),(0,n.jsxs)("div",{"data-sanity-edit-target":!0,className:"lg:max-w-[41.25rem] w-full h-full flex flex-col\n      ".concat("lg"===t?"gap-8":"gap-6"),children:[o&&(0,n.jsx)("div",{className:"mb-2 uppercase leading-none font-bold font-Space-Grotesk ".concat(f),"data-sanity-edit-target":!0,children:r.createElement(c,null,o)}),d&&(0,n.jsx)("div",{className:"leading-[135%]","data-sanity-edit-target":!0,children:d}),u&&(0,n.jsx)(s.Z,{buttons:u,"data-sanity-edit-target":!0})]})]})}},99564:function(e,t,a){var n=a(57437),r=a(58177),l=a(54018),s=a(61379),i=a(14063),o=a(62024),c=a(65125),d=a(22034),m=a(45614);let u={triangle:(0,n.jsx)(r.KcE,{className:"rotate-90 icon"}),externalLink:(0,n.jsx)(o._Hk,{}),hamburger:(0,n.jsx)(o.Bbf,{}),close:(0,n.jsx)(c.FU5,{}),caret:(0,n.jsx)(o.jX5,{}),arrowRight:(0,n.jsx)(m.lzl,{}),arrowLeft:(0,n.jsx)(m.lzl,{className:"rotate-180"}),download:(0,n.jsx)(c.qm7,{}),twitter:(0,n.jsx)(l.LCd,{}),telegram:(0,n.jsx)(l.Ww5,{}),discord:(0,n.jsx)(l.j2d,{}),linkedin:(0,n.jsx)(l.ltd,{}),reddit:(0,n.jsx)(l.hrS,{}),github:(0,n.jsx)(l.hJX,{}),medium:(0,n.jsx)(s.zx6,{}),youtube:(0,n.jsx)(i.V2E,{}),facebook:(0,n.jsx)(d.$Zi,{}),instagram:(0,n.jsx)(d.Adh,{})};t.Z=u}}]);