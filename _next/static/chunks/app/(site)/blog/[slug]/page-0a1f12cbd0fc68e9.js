(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3946],{39880:function(n,e,t){Promise.resolve().then(t.bind(t,76844)),Promise.resolve().then(t.bind(t,86633)),Promise.resolve().then(t.bind(t,29751))},38031:function(n,e,t){"use strict";t.d(e,{L:function(){return r}});let r=(0,t(83738).eI)({projectId:"agrhq0bu",dataset:"production",apiVersion:"2023-12-01",useCdn:!0,perspective:"published",stega:{enabled:!1,studioUrl:"/studio"}})},78858:function(n,e,t){"use strict";t.d(e,{C8:function(){return C},JR:function(){return w},Ke:function(){return Z},Nv:function(){return N},Zk:function(){return j},kj:function(){return k},nw:function(){return v},oE:function(){return x},tv:function(){return _}});var r=t(48646),i=t(88947),a=t(38031);function l(){let n=(0,r._)(["*[_type == 'project'","] | order(publishedAt desc) [0...","] {\n    _id,\n    size,\n    center,\n    categoryToggle,\n    name,\n    badge,\n    slug,\n    mainImage,\n    tagline,\n    'topics': topic[]-> {\n      title\n    },\n    externalLink,\n  }"]);return l=function(){return n},n}function s(){let n=(0,r._)(["",""]);return s=function(){return n},n}function o(){let n=(0,r._)(['*[_type == "blogTopic"]{\n    title,\n    description\n  }']);return o=function(){return n},n}function u(){let n=(0,r._)(["\n    *[_type == \"blog\" && slug.current == $slug][0] {\n      title,\n      mainImage,\n      mainImage {\n        asset-> {\n          url\n        },\n      },\n      body,\n      publishedAt,    \n      author->{name, 'image': image.asset->},\n      metadata-> {\n        title,\n        description,\n        ogImage {\n          asset-> {\n            url\n          },\n          crop {\n            top,\n            bottom,\n            left,\n            right\n          }\n        }\n      }\n    }\n  "]);return u=function(){return n},n}function c(){let n=(0,r._)(['*[_type == "blog" && defined(slug.current)][]{\n    "params": { "slug": slug.current }\n  }']);return c=function(){return n},n}function d(){let n=(0,r._)(['*[_type == "teamMember"] [0...',"] {\n  name,\n  'image': image.asset->,\n  title,\n  socialLinks,\n  slug\n}"]);return d=function(){return n},n}function g(){let n=(0,r._)(['*[_type == "teamMember" && defined(slug.current)][]{\n    "params": { "slug": slug.current }\n  }']);return g=function(){return n},n}function m(){let n=(0,r._)(["*[_type == \"teamMember\" && slug.current == $slug][0]{\n    name,\n    'image': image.asset->,\n    title,\n    bio,\n    socialLinks,\n    slug,\n    'qa': qa-> {\n      list[] {\n        a,\n        q\n      }\n    },\n    metadata-> {\n      title,\n      description,\n      ogImage {\n        asset-> {\n          url\n        },\n        crop {\n          top,\n          bottom,\n          left,\n          right\n        }\n      }\n    }\n  }"]);return m=function(){return n},n}function p(){let n=(0,r._)(["*[_type == \"page\" && slug.current == $slug][0]{\n    title,\n    genericBlogStyleContent,\n    metadata-> {\n      title,\n      description,\n      ogImage {\n        asset-> {\n          url\n        },\n        crop {\n          top,\n          bottom,\n          left,\n          right\n        }\n      }\n    },\n    blockContent[]{\n      _type == 'reference' => @->,\n      _type != 'reference' => {\n        ...,\n        _type == 'headshotCardContainer' => {\n          grid,\n          centered,\n          size,\n          'teamMembers': headshots[]->{\n            name,\n            'image': image.asset->,\n            title,\n            socialLinks,\n            slug\n          }\n        },\n        _type == 'articleCardContainer' => {\n          'articles': articles[]->{\n            title,\n            slug,\n            mainImage\n          }\n        },\n        _type == 'assetCardContainer' => {\n          'assets': assets[]->{\n            image,\n            name,\n            'document': document.asset->url,\n            'originalFilename': document.asset->originalFilename,\n            body\n          }\n        },\n        _type == 'projectCardContainer' => {\n          size,\n          center,\n          mainImage,\n          categoryToggle,\n          'projects': projects[]->{\n            name,\n            badge,\n            slug,\n            mainImage,\n            tagline,\n            'topics': topic[]-> {\n              title\n            },\n            externalLink,\n          }\n        },        \n        _type == 'imageLinkCardContainer' => {\n          'cards': cards[]->{\n            image,\n            alt,\n            title,\n            subhead,\n            linkUrl,\n            linkText\n          }\n        },\n        _type == 'lgLinkCardContainer' => {\n          'cards': cards[]->{\n            description,\n            linkUrl,\n            linkText\n          }\n        },\n        _type == 'logoCardContainer' => {\n          'logos': logos[]->{\n            image,\n            alt,\n            size\n          }\n        },\n        _type == 'statCardContainer' => {\n          'stats': stats[]->{\n            stat,\n            unit,\n            unitPlacement,\n            text,\n            subtext\n          },\n        },\n        _type == 'socialCarousel' => {\n          'cards': cards[]->{\n            image,\n            linkUrl,\n            channelName,\n            shortBlurb\n          }\n        },\n        _type == 'sideBySide' => {\n          'left': left[]{\n            ...,\n            _type == 'videoBlock' => {\n              'videoUrl': video.asset->url \n            },\n            'button': button->{\n              text,\n              link\n            }\n          },\n          'right': right[]{\n            ...,\n            _type == 'videoBlock' => {\n              'videoUrl': video.asset->url \n            },\n            'button': button->{\n              text,\n              link\n            }\n          },\n          reverse\n        },\n        _type == 'textCardContainer' => {\n          'cards': cards[]->{\n            headline,\n            copy,\n            headingLevel\n          }\n        },\n        _type == 'stickyScrollCards' => {\n          'headline': headline,\n          'cards': cards[]->{\n            headline,\n            copy\n          }\n        },\n        _type == 'fullScreenHero' => {\n          ...,\n          'image': image.asset->,\n          'video': video.asset->url,\n          'button': button->{\n            text,\n            link\n          }\n        },\n        _type == 'linkCardContainer' => {\n          'links': links[]->{\n            headline,\n            copy,\n            linkUrl,\n            linkText\n          }\n        },\n        _type == 'logoCarousel' => {\n          'logos': logos[]->{\n            'image':image.asset->,\n            alt,\n            size\n          }\n        },\n        _type == 'infoCardContainer' => {\n          'cards': cards[]->{\n            headline,\n            copy,\n            badge\n          }\n        },\n        _type == 'hero' => {\n          'buttons': buttons[]->{\n            text,\n            link\n          }\n        },\n        _type == 'copyBlock' => {\n          'buttons': buttons[]->{\n            text,\n            link\n          }\n        },\n        _type == 'productCardContainer' => {\n          'cards': cards[]->{\n            'headline': headline,\n            'paragraph': paragraph,\n            'image': image.asset->url,\n            'alt': image.alt,\n            'buttons': buttons[]->{\n              'text': text,\n              'link': link\n            }\n          }\n        },  \n        _type == 'roadmap' => {\n          title,\n          months[]{\n            month,\n            categories[]{\n              title,\n              icon,\n              width,\n              features[]{\n                title,\n                description,\n                topics[]-> {\n                  title\n                }\n              }\n            }\n          }\n        },\n      },\n    }\n  }"]);return p=function(){return n},n}function f(){let n=(0,r._)(['*[_type == "page" && defined(slug.current)][]{\n    "params": { "slug": slug.current }\n  }']);return f=function(){return n},n}function h(){let n=(0,r._)(['*[_type == "projectTopic"]{\n    title,\n    description\n  }']);return h=function(){return n},n}function b(){let n=(0,r._)(['*[_type == "pressRelease" && slug.current == $slug][0]{\n    title, mainImage, body\n  }']);return b=function(){return n},n}function y(){let n=(0,r._)(['*[_type == "pressRelease" && defined(slug.current)][]{\n    "params": { "slug": slug.current }\n  }']);return y=function(){return n},n}async function v(n,e){let t=(0,i.Z)(l(),e.length>0?' && "'.concat(e.join('" in topic[]->title || "'),'" in topic[]->title'):"",n);return a.L.fetch(t)}async function _(){return a.L.fetch('\n    *[_type == "roadmap"] {\n      title,\n      months[]{\n        month,\n        categories[]{\n          title,\n          icon,\n          width,\n          features[]{\n            title,\n            description,\n            topics[]-> {\n              title\n            }\n          }\n        }\n      }\n    }\n  ')}async function x(n,e){try{let t=e&&e.length>0?' && (("'.concat(e.join('" in topics[]->title || "'),'" in topics[]->title) || featured == true)'):"",r='*[_type == "blog" && defined(slug.current)'.concat(t,"] | order(publishedAt desc)").concat(n?" [0...".concat(n,"]"):""," {\n      _id, \n      title, \n      slug, \n      mainImage,\n      publishedAt, \n      author->{name, 'image': image.asset->},\n      featured,\n      body,\n      topics[]-> {\n        title\n      }\n    }");return await a.L.fetch((0,i.Z)(s(),r),{selectedTopics:e})}catch(n){throw console.error("Error fetching blogs:",n),Error("Unable to fetch blogs. Please try again later.")}}async function k(){return a.L.fetch((0,i.Z)(o()))}let j=(0,i.Z)(u());(0,i.Z)(c());let C=n=>(0,i.Z)(d(),n);(0,i.Z)(g()),(0,i.Z)(m());let w=(0,i.Z)(p());async function N(){let n=(0,i.Z)(h());return a.L.fetch(n)}(0,i.Z)(f());let Z=(0,i.Z)(b());(0,i.Z)(y())},86633:function(n,e,t){"use strict";t.d(e,{default:function(){return f}});var r=t(57437);t(2265);var i=t(1828),a=t(66648),l=t(36103),s=t.n(l),o=t(92535),u=t(38031),c=t(68419),d=t(47625),g=t(36791);let m=s()(u.L),p={types:{image:g.Z}};function f(n){var e,t,l;let{blog:s}=n;return(0,r.jsxs)(i.Z,{className:"md:width-wrapper mx-auto prose prose-invert prose-lg p-4",noPattern:!0,children:[(0,r.jsx)("h1",{className:"text-left w-full font-Space-Grotesk text-2xl leading-[2.6rem] ",children:null==s?void 0:s.title}),(null==s?void 0:s.mainImage)?(0,r.jsx)("div",{className:"mb-4 w-full h-auto overflow-hidden",children:(0,r.jsx)(a.default,{className:"w-full rounded-lg",src:m.image(s.mainImage).url(),width:660,height:374,quality:100,priority:!0,alt:(null==s?void 0:null===(e=s.mainImage)||void 0===e?void 0:e.alt)?s.mainImage.alt:s.title?s.title:"No alt text provided"})}):null,(0,r.jsxs)("div",{className:"flex w-full justify-between mt-2 border-b-base-light border-b-[1px] pb-2 not-prose",children:[(null==s?void 0:null===(t=s.author)||void 0===t?void 0:t.name)&&(0,r.jsx)("div",{className:"flex flex-col gap-2",children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(null==s?void 0:null===(l=s.author)||void 0===l?void 0:l.image)&&(0,r.jsx)("div",{className:"bg-lt-gradient w-10 h-10 rounded-full overflow-hidden",children:(0,r.jsx)(a.default,{src:m.image(s.author.image).url(),className:"w-full h-full object-cover",alt:s.author.name,width:100,height:100})}),(0,r.jsx)("p",{className:"text-left my-0 text-xs font-bold",children:s.author.name})]})}),(null==s?void 0:s.publishedAt)&&(0,r.jsx)("p",{className:"self-end mb-[0.25rem] text-sm",children:(0,d.p)(s.publishedAt)})]}),(null==s?void 0:s.body)?(0,r.jsx)("div",{className:"prose prose-invert",children:(0,r.jsx)(o.YI,{value:s.body,components:p})}):null,(0,r.jsx)(c.Z,{size:"xl"})]})}},29751:function(n,e,t){"use strict";t.d(e,{default:function(){return s}});var r=t(57437),i=t(57365),a=t(78858),l=t(86633);function s(n){let{initial:e,params:t}=n,s=(0,i.aM)(a.Zk,{slug:t},{initial:e});return(0,r.jsx)(l.default,{blog:s.data})}},36791:function(n,e,t){"use strict";var r=t(57437),i=t(66648),a=t(36103),l=t.n(a),s=t(38031);e.Z=n=>{let{value:e}=n,t=l()(s.L);return(0,r.jsx)("div",{className:"w-full relative",children:(0,r.jsx)(i.default,{className:"my-4 w-full rounded-lg",src:t.image(e).url(),width:664,height:664,priority:!1,alt:(null==e?void 0:e.alt)?e.alt:"No alt text provided"})})}},1828:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(57437),i=t(68419);function a(n){let{children:e,noPattern:t=!1,className:a,spacer:l}=n;return(0,r.jsxs)("div",{className:"relative py-8 flex-grow w-full",children:[(0,r.jsx)("main",{className:a,children:e&&e}),!t&&(0,r.jsx)("div",{className:"absolute inset-0 bg-arrow-mobile sm:bg-arrow h-full bg-cover"}),l&&(0,r.jsx)(i.Z,{size:"xl"})]})}},68419:function(n,e,t){"use strict";var r=t(57437);t(2265);var i=t(2926);e.Z=n=>{let{size:e="md"}=n,t=(0,i.B)(e);return(0,r.jsx)("div",{"data-sanity-edit-target":!0,className:"w-full ".concat({xsm:"h-8",sm:"h-14",md:"h-[5.5rem]",lg:"h-[7.5rem]",xl:"h-[11.5rem]"}[t])})}},47625:function(n,e,t){"use strict";t.d(e,{p:function(){return r}});let r=n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},function(n){n.O(0,[4181,7144,6103,2169,5429,2971,7023,1744],function(){return n(n.s=39880)}),_N_E=n.O()}]);