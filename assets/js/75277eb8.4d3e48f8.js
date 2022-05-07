"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[2335],{4635:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7711);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(5086),a=n(9126),o=(n(7711),n(4635)),i=["components"],l={title:"Garfish.setExternal",slug:"/api/setExternal",order:6},c=void 0,p={unversionedId:"api/setExternal",id:"api/setExternal",isDocsHomePage:!1,title:"Garfish.setExternal",description:"\u7528\u4e8e\u5b9e\u73b0\u4e3b\u3001\u5b50\u5e94\u7528\u95f4\u4f9d\u8d56\u5171\u4eab\u3002",source:"@site/docs/api/setExternal.md",sourceDirName:"api",slug:"/api/setExternal",permalink:"/api/setExternal",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/api/setExternal.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651928914,formattedLastUpdatedAt:"2022/5/7",frontMatter:{title:"Garfish.setExternal",slug:"/api/setExternal",order:6},sidebar:"api",previous:{title:"Garfish.setOptions",permalink:"/api/setOptions"},next:{title:"Garfish.getGlobalObject",permalink:"/api/getGlobalObject"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528",children:[],level:3},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528",children:[],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7528\u4e8e\u5b9e\u73b0\u4e3b\u3001\u5b50\u5e94\u7528\u95f4\u4f9d\u8d56\u5171\u4eab\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u4e3b\u3001\u5b50\u5e94\u7528\u82e5\u5f00\u542f\u8fdb\u884c\u4f9d\u8d56\u5171\u4eab\u80fd\u529b\uff0c\u9700\u8981\u6784\u5efa\u6210 'umd' \u89c4\u8303\u4e14\u4fdd\u8bc1 ",(0,o.kt)("inlineCode",{parentName:"li"},"jsonpFunction")," \u552f\u4e00\uff1b",(0,o.kt)("a",{parentName:"li",href:"/guide/build-config"},"\u53c2\u8003"),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u82e5\u5b50\u5e94\u7528\u901a\u8fc7\u4f9d\u8d56\u5171\u4eab\u4e3b\u5e94\u7528\u6838\u5fc3\u5305\uff0c\u5219\u5b50\u5e94\u7528\u5c06\u4e0d\u80fd\u72ec\u7acb\u8fd0\u884c\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u4e3b\u5e94\u7528\u7684\u82e5\u5347\u7ea7\u7248\u672c\u4f1a\u53ef\u80fd\u4f1a\u5bf9\u5b50\u5e94\u7528\u4ea7\u751f\u5f71\u54cd\uff1b"),(0,o.kt)("li",{parentName:"ol"},"external \u7684\u5185\u5bb9\u4f1a\u9003\u9038 vm \u6c99\u7bb1\uff1b")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0cGarfish.setExternal \u662f garfish \u63d0\u4f9b\u7684\u7528\u4e8e\u5b9e\u73b0\u5e94\u7528\u95f4\u7684\u4f9d\u8d56\u5171\u4eab\u7684 API\uff0c\u901a\u8fc7\u8be5 API \u53ef\u5c06\u4f9d\u8d56\u8fdb\u884c\u6ce8\u518c\u5e76\u5728\u6ce8\u518c\u5b8c\u6210\u540e\u53ef\u5b9e\u73b0\u4e3b\u5b50\u5e94\u7528\u7684\u4f9d\u8d56\u5171\u4eab\u3002\u4f46\u53ef\u80fd\u4f1a\u7531\u4e8e\u5171\u4eab\u5e26\u6765\u67d0\u4e9b\u4f9d\u8d56\u7684\u5f71\u54cd\uff0c\u82e5\u51fa\u73b0\u95ee\u9898\u6211\u4eec\u5efa\u8bae\u5173\u95ed\u5171\u4eab\u673a\u5236\u3002")),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"setExternal(nameOrExtObj: string | Record<string, any>, value?: any): Garfish;\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u4e3b\u5e94\u7528"},"\u4e3b\u5e94\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u5e94\u7528 webpack \u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e3b\u5e94\u7528 webpack.config.js\nmodule.exports = {\n  output: {\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u8bf7\u6c42\u786e\u4fdd\u8be5\u503c\u4e0e\u5b50\u5e94\u7528\u7684\u503c\u4e0d\u76f8\u540c\u907f\u514d\u4e0e\u5b50\u5e94\u7528\u53d1\u751f\u5f71\u54cd\n    jsonpFunction: 'main-app-jsonpFunction'\n  },\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e external")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4e3b\u5e94\u7528 index.ts\nimport React from 'react';\nimport * as ReactDom from 'react-dom';\nimport * as mobxReact from 'mobx-react';\nimport * as ReactRouterDom from 'react-router-dom';\nimport Garfish from 'garfish';\n\nGarfish.setExternal({\n  react: React,\n  'react-dom': ReactDom,\n  'react-router-dom': ReactRouterDom,\n  'mobx-react': mobxReact,\n});\n")),(0,o.kt)("h3",{id:"\u5b50\u5e94\u7528"},"\u5b50\u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b50\u5e94\u7528 webpack.config.js\nmodule.exports = {\n  output: {\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u4fee\u6539\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u907f\u514d\u9003\u9038\u6c99\u7bb1\n    globalObject: 'window',\n    // \u8bf7\u6c42\u786e\u4fdd\u6bcf\u4e2a\u5b50\u5e94\u7528\u8be5\u503c\u90fd\u4e0d\u76f8\u540c\uff0c\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\n    jsonpFunction: 'vue-app-jsonpFunction',\n    // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u8def\u5f84\u53d8\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u907f\u514d\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5728\u53d8\u4e3a\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\uff0c\u56e0\u4e3a\u5b50\u5e94\u7528\u548c\u4e3b\u5e94\u7528\u5728\u540c\u4e00\u4e2a\u6587\u6863\u6d41\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684\n    publicPath: 'http://localhost:8000'\n  },\n  externals: {\n    react: 'react',\n    'react-dom': 'react-dom',\n    'react-router-dom': 'react-router-dom',\n    'mobx-react': 'mobx-react'\n  }\n};\n")))}m.isMDXComponent=!0}}]);