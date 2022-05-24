"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[4303],{4635:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7711);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,v=c["".concat(p,".").concat(d)]||c[d]||l[d]||o;return t?r.createElement(v,u(u({ref:n},s),{},{components:t})):r.createElement(v,u({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var m=2;m<o;m++)u[m]=t[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9739:function(e,n,t){t.d(n,{ZP:function(){return p}});var r=t(5086),a=t(9126),o=(t(7711),t(4635)),u=["components"],i={toc:[]};function p(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nconst webpack = require('webpack');\nconst isDevelopment = process.env.NODE_ENV !== 'production';\n\nmodule.exports = {\n  output: {\n    // \u5f00\u53d1\u73af\u5883\u8bbe\u7f6e true \u5c06\u4f1a\u5bfc\u81f4\u70ed\u66f4\u65b0\u5931\u6548\n    clean: isDevelopment ? false : true,\n    filename: '[name].[contenthash].js',\n    chunkFilename: '[name].[contenthash].js',\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u4fee\u6539\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u907f\u514d\u9003\u9038\u6c99\u7bb1\n    globalObject: 'window',\n    // webpack5 \u4f7f\u7528 chunkLoadingGlobal \u4ee3\u66ff\uff0c\u6216\u4e0d\u586b\u4fdd\u8bc1 package.json name \u552f\u4e00\u5373\u53ef\n    jsonpFunction: 'garfish-demo-react17',\n    // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u8def\u5f84\u53d8\u4e3a\u7edd\u5bf9\u8def\u5f84\n    publicPath: 'http://localhost:8080',\n  },\n  plugin: [\n    // \u4fdd\u8bc1\u9519\u8bef\u5806\u6808\u4fe1\u606f\u53ca sourcemap \u884c\u5217\u4fe1\u606f\u6b63\u786e\n    new webpack.BannerPlugin({\n      banner: 'Micro front-end',\n    }),\n  ],\n  devServer: {\n    // \u4fdd\u8bc1\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5e94\u7528\u7aef\u53e3\u4e0d\u4e00\u6837\n    port: '8000',\n    headers: {\n      // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\uff0c\u5728\u4e0a\u7ebf\u540e\u9700\u8981\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08**\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898**\uff09\n      'Access-Control-Allow-Origin': '*',\n    },\n  },\n};\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u3010\u91cd\u8981\u3011\u6ce8\u610f\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"libraryTarget \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\uff1b"),(0,o.kt)("li",{parentName:"ol"},"globalObject \u9700\u8981\u8bbe\u7f6e\u4e3a 'window'\uff0c\u4ee5\u907f\u514d\u7531\u4e8e\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\u5bfc\u81f4\u7684\u9003\u9038\u6c99\u7bb1\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684 webpack \u4e3a v4 \u7248\u672c\uff0c\u9700\u8981\u8bbe\u7f6e jsonpFunction \u5e76\u4fdd\u8bc1\u8be5\u503c\u552f\u4e00\uff08\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\uff09\u3002\u82e5\u4e3a webpack5 \u5c06\u4f1a\u76f4\u63a5\u4f7f\u7528 package.json name \u4f5c\u4e3a\u552f\u4e00\u503c\uff0c\u8bf7\u786e\u4fdd\u5e94\u7528\u95f4\u7684 name \u5404\u4e0d\u76f8\u540c\uff1b"),(0,o.kt)("li",{parentName:"ol"},"publicPath \u8bbe\u7f6e\u4e3a\u5b50\u5e94\u7528\u8d44\u6e90\u7684\u7edd\u5bf9\u5730\u5740\uff0c\u907f\u514d\u7531\u4e8e\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5bfc\u81f4\u8d44\u6e90\u53d8\u4e3a\u4e86\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\u3002\u8fd9\u662f\u56e0\u4e3a\u4e3b\u3001\u5b50\u5e94\u7528\u5904\u4e8e\u540c\u4e00\u4e2a\u6587\u6863\u6d41\u4e2d\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684"),(0,o.kt)("li",{parentName:"ol"},"'Access-Control-Allow-Origin': '","*","' \u5141\u8bb8\u5f00\u53d1\u73af\u5883\u8de8\u57df\uff0c\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\u3002\u53e6\u5916\u4e5f\u9700\u8981\u4fdd\u8bc1\u5728\u4e0a\u7ebf\u540e\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08",(0,o.kt)("strong",{parentName:"li"},"\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898"),"\uff09\uff1b\n:::")))))}p.isMDXComponent=!0},2469:function(e,n,t){var r=t(7711);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9910:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(5086),a=t(7711),o=t(461),u=t(530);var i=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(9766),m=t(1506),s="tabItem_sfP4";function l(e){var n,t,r,o=e.lazy,u=e.block,l=e.defaultValue,c=e.values,d=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,p.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===l?l:null!=(n=null!=l?l:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(g),T=w[0],A=w[1],x=[],E=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=y[d];null!=j&&j!==T&&b.some((function(e){return e.value===j}))&&A(j)}var O=function(e){var n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==T&&(E(n),A(r),null!=d&&N(d,r))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":u},v)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,className:(0,m.Z)("tabs__item",s,{"tabs__item--active":T===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:R,onFocus:O,onClick:O},null!=t?t:n)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,o.Z)();return a.createElement(l,(0,r.Z)({key:String(n)},e))}},530:function(e,n,t){var r=(0,t(7711).createContext)(void 0);n.Z=r},4259:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=t(5086),a=t(9126),o=(t(7711),t(4635)),u=t(9910),i=t(2469),p=t(9739),m=["components"],s={title:"vue \u5b50\u5e94\u7528",slug:"/guide/demo/vue",order:3},l=void 0,c={unversionedId:"guide/demo/vue",id:"guide/demo/vue",isDocsHomePage:!1,title:"vue \u5b50\u5e94\u7528",description:"\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd vue \u6846\u67b6\u7684\u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u63a5\u5165\u6b65\u9aa4\u3002",source:"@site/docs/guide/demo/vue.md",sourceDirName:"guide/demo",slug:"/guide/demo/vue",permalink:"/guide/demo/vue",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/guide/demo/vue.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651928914,formattedLastUpdatedAt:"2022/5/7",frontMatter:{title:"vue \u5b50\u5e94\u7528",slug:"/guide/demo/vue",order:3},sidebar:"guide",previous:{title:"react \u5b50\u5e94\u7528",permalink:"/guide/demo/react"},next:{title:"vite \u5b50\u5e94\u7528",permalink:"/guide/demo/vite"}},d=[{value:"vue \u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4",id:"vue-\u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4",children:[{value:"1. @garfish/bridge \u4f9d\u8d56\u5b89\u88c5",id:"1-garfishbridge-\u4f9d\u8d56\u5b89\u88c5",children:[],level:3},{value:"2. \u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa provider \u51fd\u6570",id:"2-\u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa-provider-\u51fd\u6570",children:[],level:3},{value:"vue2 \u5bfc\u51fa",id:"vue2-\u5bfc\u51fa",children:[],level:3},{value:"vue3 \u5bfc\u51fa",id:"vue3-\u5bfc\u51fa",children:[],level:3},{value:"3. \u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684 basename",id:"3-\u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684-basename",children:[],level:3},{value:"4. \u66f4\u6539 webpack \u914d\u7f6e",id:"4-\u66f4\u6539-webpack-\u914d\u7f6e",children:[],level:3},{value:"5. \u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91",id:"5-\u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91",children:[],level:3}],level:2}],v={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd vue \u6846\u67b6\u7684\u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u63a5\u5165\u6b65\u9aa4\u3002"),(0,o.kt)("h2",{id:"vue-\u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4"},"vue \u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4"),(0,o.kt)("h3",{id:"1-garfishbridge-\u4f9d\u8d56\u5b89\u88c5"},"1. ",(0,o.kt)("a",{parentName:"h3",href:"../../guide/bridge"},"@garfish/bridge")," \u4f9d\u8d56\u5b89\u88c5"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u8bf7\u6ce8\u610f\uff0c\u6865\u63a5\u51fd\u6570 @garfish/bridge \u4f9d\u8d56\u5b89\u88c5\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5bfc\u51fa\u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u63d0\u4f9b\u6865\u63a5\u51fd\u6570 @garfish/bridge \u662f\u4e3a\u4e86\u8fdb\u4e00\u6b65\u964d\u4f4e\u7528\u6237\u63a5\u5165\u6210\u672c\u5e76\u964d\u4f4e\u7528\u6237\u51fa\u9519\u6982\u7387\uff0c\u6211\u4eec\u5c06\u4e00\u4e9b\u9ed8\u8ba4\u884c\u4e3a\u5185\u7f6e\u5728\u6865\u63a5\u51fd\u6570\u4e2d\u8fdb\u884c\u4e86\u8fdb\u4e00\u6b65\u5c01\u88c5\uff0c\u907f\u514d\u7531\u4e8e\u63a5\u5165\u4e0d\u89c4\u8303\u5bfc\u81f4\u7684\u9519\u8bef\uff0c\u6240\u4ee5\u8fd9\u4e5f\u662f\u6211\u4eec\u63a8\u8350\u7684\u63a5\u5165\u65b9\u5f0f\u3002")))),(0,o.kt)(u.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @garfish/bridge --save\n"))),(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @garfish/bridge\n")))),(0,o.kt)("h3",{id:"2-\u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa-provider-\u51fd\u6570"},"2. \u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa provider \u51fd\u6570"),(0,o.kt)("h3",{id:"vue2-\u5bfc\u51fa"},"vue2 \u5bfc\u51fa"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"bridge_provider_vue2",label:"\u4f7f\u7528 @garfish/bridge \u5bfc\u51fa",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport store from './store';\nimport App from './App.vue';\nimport Home from './components/Home.vue';\nimport { vueBridge } from '@garfish/bridge';\n\nVue.use(VueRouter);\nVue.config.productionTip = false;\n\nfunction newRouter(basename) {\n  const router = new VueRouter({\n    mode: 'history',\n    base: basename,\n    routes: [\n      { path: '/home', component: Home },\n    ],\n  });\n  return router;\n}\n\nexport const provider = vueBridge({\n  Vue,\n  // \u6839\u7ec4\u4ef6\n  rootComponent: App,\n  // \u8fd4\u56de\u4e00\u4e2a promise, \u53ef\u5728 mounting \u524d\u6267\u884c\u5f02\u6b65\u64cd\u4f5c\n  loadRootComponent: ({ basename, dom, appName, props }) => {\n    return Promise.resolve(App);\n  },\n  // received vueInstance, do something\n  handleInstance: (vueInstance, { basename, dom, appName, props }) => {\n    console.log(vueInstance, basename, dom, appName, props);\n  },\n  appOptions: ({ basename, dom, appName, props }) => {\n    return {\n      el: '#app',\n      router: newRouter(basename),\n      store,\n    };\n  },\n});\n"))),(0,o.kt)(i.Z,{value:"customer_provider_vue2",label:"\u81ea\u5b9a\u4e49\u5bfc\u51fa",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  import Vue from 'vue';\n  import App from './App.vue';\n  import store from './store';\n  import VueRouter from 'vue-router';\n  import HelloWorld from './components/HelloWorld.vue';\n\n  Vue.use(VueRouter);\n  Vue.config.productionTip = false;\n\n  const render = ({ dom, basename = '/' }) => {\n    const router = new VueRouter({\n      mode: 'history',\n      base: basename,\n      router,\n      routes: [\n        { path: '/', component: HelloWorld },\n      ],\n    });\n\n    const vm = new Vue({\n      store,\n      render: (h) => h(App, { props: { basename } }),\n    }).$mount();\n    (dom || document).querySelector('#app').appendChild(vm.$el);\n  };\n")))),(0,o.kt)("h3",{id:"vue3-\u5bfc\u51fa"},"vue3 \u5bfc\u51fa"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"bridge_provider_vue3",label:"\u4f7f\u7528 @garfish/bridge \u5bfc\u51fa",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  import { h, createApp } from 'vue';\n  import { createRouter, createWebHistory } from 'vue-router';\n  import { stateSymbol, createState } from './store.js';\n  import App from './App.vue';\n  import Home from './components/Home.vue';\n  import { vueBridge } from '@garfish/bridge';\n\n  const routes = [\n    { path: '/home', component: Home },\n  ];\n\n  function newRouter(basename) {\n    const router = createRouter({\n      history: createWebHistory(basename),\n      routes,\n    });\n    return router;\n  }\n\n  export const provider = vueBridge({\n    createApp,\n    rootComponent: App,\n    loadRootComponent: ({ basename, dom, appName, props }) => {\n      return Promise.resolve(App);\n    },\n    appOptions: ({ basename, dom, appName, props }) => {\n      return {\n        el: '#app',\n        render: () => h(App)\n      };\n    },\n    handleInstance: (vueInstance, { basename, dom, appName, props }) => {\n      vueInstance.use(newRouter(basename));\n      vueInstance.provide(stateSymbol, createState());\n    },\n  });\n"))),(0,o.kt)(i.Z,{value:"customer_provider_vue3",label:"\u81ea\u5b9a\u4e49\u5bfc\u51fa",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  import { h, createApp } from 'vue';\n  import { createRouter, createWebHistory } from 'vue-router';\n  import { stateSymbol, createState } from './store.js';\n  import App from './App.vue';\n  import HelloGarfish from './components/HelloGarfish.vue';\n\n  export function provider({ dom, basename }) {\n    let app = null;\n    return {\n      render() {\n        app = createApp(App);\n        app.provide(stateSymbol, createState());\n        const router = createRouter({\n          history: createWebHistory(basename),\n          base: basename,\n          routes: [{ path: '/home', component: HelloGarfish }]\n        });\n        app.use(router);\n        app.mount(\n          dom ? dom.querySelector('#app') : document.querySelector('#app'),\n        );\n      },\n      destroy() {\n        if (app) {\n          app.unmount(\n            dom ? dom.querySelector('#app') : document.querySelector('#app'),\n          );\n        }\n      },\n    };\n  }\n")))),(0,o.kt)("h3",{id:"3-\u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684-basename"},"3. \u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684 basename"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u8bbe\u7f6e basename\uff1f\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/issues#%E5%AD%90%E5%BA%94%E7%94%A8%E6%8B%BF%E5%88%B0-basename-%E7%9A%84%E4%BD%9C%E7%94%A8"},"issue")),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u4ece\u4e3b\u5e94\u7528\u4f20\u9012\u8fc7\u6765\u7684 basename \u4f5c\u4e3a\u5b50\u5e94\u7528\u7684 basename\uff0c\u800c\u975e\u4e3b\u3001\u5b50\u5e94\u7528\u7ea6\u5b9a\u5f0f\uff0c\u907f\u514d basename \u540e\u671f\u53d8\u66f4\u672a\u540c\u6b65\u5e26\u6765\u7684\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u76ee\u524d\u4e3b\u5e94\u7528\u4ec5\u652f\u6301 history \u6a21\u5f0f\u7684\u5b50\u5e94\u7528\u8def\u7531\uff0c",(0,o.kt)("a",{parentName:"li",href:"/issues#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%BB%E5%BA%94%E7%94%A8%E4%BB%85%E6%94%AF%E6%8C%81-history-%E6%A8%A1%E5%BC%8F"},"why"))))),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"bridge_provider_vue3",label:"vue2",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport store from './store';\nimport App from './App.vue';\nimport Home from './components/Home.vue';\nimport { vueBridge } from '@garfish/bridge';\n\nVue.use(VueRouter);\nVue.config.productionTip = false;\n\nfunction newRouter(basename) {\n  const router = new VueRouter({\n    mode: 'history',\n    base: basename,\n    routes: [\n      { path: '/home', component: Home },\n    ],\n  });\n  return router;\n}\n"))),(0,o.kt)(i.Z,{value:"customer_provider_vue3",label:"vue3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { h, createApp } from 'vue';\nimport { createRouter, createWebHistory } from 'vue-router';\nimport { stateSymbol, createState } from './store.js';\nimport App from './App.vue';\nimport Home from './components/Home.vue';\nimport { vueBridge } from '@garfish/bridge';\n\nconst routes = [\n  { path: '/home', component: Home },\n];\n\nfunction newRouter(basename) {\n  const router = createRouter({\n    history: createWebHistory(basename),\n    base: basename,\n    routes,\n  });\n  return router;\n}\n")))),(0,o.kt)("h3",{id:"4-\u66f4\u6539-webpack-\u914d\u7f6e"},"4. \u66f4\u6539 webpack \u914d\u7f6e"),(0,o.kt)(p.ZP,{mdxType:"WebpackConfig"}),(0,o.kt)("h3",{id:"5-\u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91"},"5. \u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"last but not least, \u522b\u5fd8\u4e86\u6dfb\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u903b\u8f91\uff0c\u8fd9\u80fd\u591f\u8ba9\u4f60\u7684\u5b50\u5e94\u7528\u8131\u79bb\u4e3b\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\uff0c\u4fbf\u4e8e\u540e\u7eed\u5f00\u53d1\u548c\u90e8\u7f72\u3002"))),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"vue2",label:"vue2",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/main.js\nimport Vue from 'vue';\nimport VueRouter from 'vue-router';\n\n// \u8fd9\u80fd\u591f\u8ba9\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u8d77\u6765\uff0c\u4ee5\u4fdd\u8bc1\u540e\u7eed\u5b50\u5e94\u7528\u80fd\u8131\u79bb\u4e3b\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\uff0c\u65b9\u4fbf\u8c03\u8bd5\u3001\u5f00\u53d1\nif (!window.__GARFISH__) {\n    const router = new VueRouter({\n      mode: 'history',\n      base: '/',\n      routes: [\n        { path: '/home', component: Home },\n      ],\n    });\n    new Vue({\n      store,\n      router,\n      render: (h) => h(App),\n    }).$mount('#app');\n}\n"))),(0,o.kt)(i.Z,{value:"vue3",label:"vue3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/main.js\nimport { h, createApp } from 'vue';\nimport VueRouter from 'vue-router';\n\n// \u8fd9\u80fd\u591f\u8ba9\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u8d77\u6765\uff0c\u4ee5\u4fdd\u8bc1\u540e\u7eed\u5b50\u5e94\u7528\u80fd\u8131\u79bb\u4e3b\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\uff0c\u65b9\u4fbf\u8c03\u8bd5\u3001\u5f00\u53d1\nif (!window.__GARFISH__) {\n  const router = new VueRouter({\n    mode: 'history',\n    base: '/',\n    routes: [\n      { path: '/home', component: Home },\n    ],\n  });\n  const app = createApp(App);\n  app.provide(stateSymbol, createState());\n  app.use(router);\n  app.mount('#app');\n}\n")))))}f.isMDXComponent=!0}}]);