"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8610],{78665:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(63366),r=a(67294),n=a(86010),s=a(10059),o=a(33692),c="sidebar_q+wC",i="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",p=a(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var E=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,l.Z)(e,E),i=t&&t.items.length>0;return r.createElement(s.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},i&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var l=a(67294),r=a(33692),n=a(78665),s=a(41916),o=a(95999),c=a(53810);function i(e){var t,a=e.metadata,i=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,p=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(g),tagName:d});return l.createElement(n.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:m},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,h),l.createElement(r.Z,{href:u},l.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),i.map((function(e){var t=e.content;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))}},82593:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(67294),r=a(46616),n=a(87385),s=a(53597),o=a(37332),c=a(38168),i=a(44276),m=a(75341),u=a(70431),d="shareButtons_1MQy",g=function(e){var t=e.shareUrl,a=(e.disabled,e.title),g=e.hashtags,p=e.style,h=null!=t?t:window.location.href;return l.createElement("div",{className:d,style:p},l.createElement(r.Z,{url:h,title:a,hashtags:g},l.createElement(n.Z,{round:!0,size:32})),l.createElement(s.Z,{url:h,title:a},l.createElement(o.Z,{round:!0,size:32})),l.createElement(c.Z,{url:h,title:a},l.createElement(i.Z,{round:!0,size:32})),l.createElement(m.Z,{url:h,title:a},l.createElement(u.Z,{round:!0,size:32})))}},41916:function(e,t,a){a.d(t,{Z:function(){return N}});var l=a(67294),r=a(86010),n=a(3905),s=a(95999),o=a(33692),c=a(44996),i=a(53810),m=a(73491),u=a(86753),d="blogPostTitle_RC3s",g="blogPostData_A2Le",p="blogPostDetailsFull_2lop",h=a(20062),E="image_9q7L";var b=function(e){var t=e.author,a=t.name,r=t.title,n=t.url,s=t.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:n},l.createElement("img",{className:E,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(o.Z,{href:n,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},f="authorCol_8c0z";function v(e){var t=e.authors,a=e.assets;return 0===t.length?null:l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return l.createElement("div",{className:(0,r.Z)("col col--6",f),key:t},l.createElement(b,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var Z=a(91262),k=a(82593);var N=function(e){var t,a,E,b,f=(E=(0,i.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,c.C)().withBaseUrl,y=e.children,_=e.frontMatter,P=e.assets,T=e.metadata,w=e.truncated,B=e.isBlogPostPage,C=void 0!==B&&B,L=T.date,I=T.formattedDate,M=T.permalink,U=T.tags,A=T.readingTime,S=T.title,x=T.editUrl,z=T.authors,R=null!=(t=P.image)?t:_.image,O=!C&&w,D=U.length>0;return l.createElement("article",{className:C?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(b=C?"h1":"h2",l.createElement("header",null,l.createElement(Z.Z,null,(function(){return C?l.createElement(k.Z,{title:S+" | OSSInsight"}):void 0})),l.createElement(b,{className:d,itemProp:"headline"},C?S:l.createElement(o.Z,{itemProp:"url",to:M},S)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:L,itemProp:"datePublished"},I),void 0!==A&&l.createElement(l.Fragment,null," \xb7 ",f(A))),l.createElement(v,{authors:z,assets:P}))),R&&l.createElement("meta",{itemProp:"image",content:N(R,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(n.Zo,{components:m.Z},y)),l.createElement(Z.Z,null,(function(){return C?l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement(k.Z,{title:S+" | OSSInsight"})):void 0})),(D||w)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=C,a))},D&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":O})},l.createElement(h.Z,{tags:U})),C&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:x})),O&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":D})},l.createElement(o.Z,{to:T.permalink,"aria-label":"Read more about "+S},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},20819:function(e,t,a){a.d(t,{Z:function(){return E}});var l=a(87462),r=a(67294),n=a(86010),s=a(23746),o=a(95999),c=a(53810),i=a(83229),m="codeBlockContainer_EiTO",u="codeBlockContent_X2I6",d="codeBlockTitle_PQMO",g="codeBlock_UxnK",p="copyButton_V-PD",h="codeBlockLines_W6UD";function E(e){var t,a=e.children,E=e.className,b=e.metastring,f=e.title,v=(0,c.LU)().prism,Z=(0,r.useState)(!1),k=Z[0],N=Z[1],y=(0,r.useState)(!1),_=y[0],P=y[1];(0,r.useEffect)((function(){P(!0)}),[]);var T=(0,c.bc)(b)||f,w=(0,i.Z)(),B=Array.isArray(a)?a.join(""):a,C=null!=(t=(0,c.Vo)(E))?t:v.defaultLanguage,L=(0,c.nZ)(B,b,C),I=L.highlightLines,M=L.code,U=function(){navigator.clipboard.writeText(M).then((function(){N(!0)})).catch((function(e){console.error("failed to copy",e)})).finally((function(){setTimeout((function(){return N(!1)}),2e3)}))};return r.createElement(s.ZP,(0,l.Z)({},s.lG,{key:String(_),theme:w,code:M,language:C}),(function(e){var t=e.className,a=e.style,s=e.tokens,i=e.getLineProps,b=e.getTokenProps;return r.createElement("div",{className:(0,n.Z)(m,E,c.kM.common.codeBlock)},T&&r.createElement("div",{style:a,className:d},T),r.createElement("div",{className:(0,n.Z)(u,C)},r.createElement("pre",{tabIndex:0,className:(0,n.Z)(t,g,"thin-scrollbar"),style:a},r.createElement("code",{className:h},s.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var a=i({line:e,key:t});return I.includes(t)&&(a.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,l.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,l.Z)({key:t},b({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),disabled:!B,className:(0,n.Z)(p,"clean-btn"),onClick:U},k?r.createElement(o.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(o.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);