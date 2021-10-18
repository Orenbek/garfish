"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[911],{4635:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return s}});var r=t(7711);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),s=a,f=m["".concat(p,".").concat(s)]||m[s]||c[s]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8788:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(8538),a=t(7765),o=(t(7711),t(4635)),i=["components"],l={title:"\u4ece\u96f6\u5f00\u59cb\u642d\u5efa",slug:"/guide/develop/from-zero",order:1},p=void 0,u={unversionedId:"guide/develop/fromZero",id:"guide/develop/fromZero",isDocsHomePage:!1,title:"\u4ece\u96f6\u5f00\u59cb\u642d\u5efa",description:"\u4e3b\u5e94\u7528",source:"@site/docs/guide/develop/fromZero.md",sourceDirName:"guide/develop",slug:"/guide/develop/from-zero",permalink:"/guide/develop/from-zero",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/develop/fromZero.md",tags:[],version:"current",lastUpdatedBy:"Arthur",lastUpdatedAt:1634549822,formattedLastUpdatedAt:"2021/10/18",frontMatter:{title:"\u4ece\u96f6\u5f00\u59cb\u642d\u5efa",slug:"/guide/develop/from-zero",order:1},sidebar:"guide",previous:{title:"Garfish \u4ecb\u7ecd",permalink:"/guide"},next:{title:"\u624b\u52a8\u52a0\u8f7d",permalink:"/guide/advance/loadApp"}},d=[{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528",children:[{value:"1. \u5b89\u88c5 Garfish",id:"1-\u5b89\u88c5-garfish",children:[]},{value:"2. \u5728\u4e3b\u5e94\u7528\u4e0a\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8 Garfish",id:"2-\u5728\u4e3b\u5e94\u7528\u4e0a\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8-garfish",children:[]}]},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528",children:[{value:"1. \u63d0\u4f9b\u5173\u952e\u7684\u6e32\u67d3\u548c\u9500\u6bc1\u94a9\u5b50",id:"1-\u63d0\u4f9b\u5173\u952e\u7684\u6e32\u67d3\u548c\u9500\u6bc1\u94a9\u5b50",children:[]},{value:"2. \u8c03\u6574\u5b50\u5e94\u7528\u76f8\u5173\u6784\u5efa\u914d\u7f6e",id:"2-\u8c03\u6574\u5b50\u5e94\u7528\u76f8\u5173\u6784\u5efa\u914d\u7f6e",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e3b\u5e94\u7528"},"\u4e3b\u5e94\u7528"),(0,o.kt)("h3",{id:"1-\u5b89\u88c5-garfish"},"1. \u5b89\u88c5 Garfish"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add garfish # or npm i garfish -S\n")),(0,o.kt)("h3",{id:"2-\u5728\u4e3b\u5e94\u7528\u4e0a\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8-garfish"},"2. \u5728\u4e3b\u5e94\u7528\u4e0a\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8 Garfish"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\n\nGarfish.run({\n  // \u4e3b\u5e94\u7528\u7684\u57fa\u7840\u8def\u5f84\uff0c\u8be5\u503c\u9700\u8981\u4fdd\u8bc1\u4e0e\u4e3b\u5e94\u7528\u7684\u57fa\u7840\u8def\u5f84\u4e00\u81f4\n  basename: '/',\n  // \u6ce8\u610f\u5728\u6267\u884c run \u65f6\u8bf7\u786e\u4fdd #subApp \u8282\u70b9\u5df2\u5728\u9875\u9762\u4e2d\u5b58\u5728\uff0c\u53ef\u4e3a\u51fd\u6570\uff08\u4e3a\u51fd\u6570\u65f6\u5c06\u4f7f\u7528\u51fd\u6570\u8fd4\u56de\u65f6\u4f5c\u4e3a\u6302\u8f7d\u70b9\uff09\n  domGetter: '#subApp',\n  apps: [\n    {\n      // \u6bcf\u4e2a\u5e94\u7528\u7684 name \u9700\u8981\u4fdd\u6301\u552f\u4e00\n      name: 'react',\n      // \u53ef\u4e3a\u51fd\u6570\uff0c\u5f53\u51fd\u6570\u8fd4\u56de\u503c\u4e3a true \u65f6\uff0c\u6807\u8bc6\u6ee1\u8db3\u6fc0\u6d3b\u6761\u4ef6\uff0c\u8be5\u5e94\u7528\u5c06\u4f1a\u81ea\u52a8\u6302\u8f7d\u81f3\u9875\u9762\u4e2d\uff0c\u624b\u52a8\u6302\u8f7d\u65f6\u53ef\u4e0d\u586b\u5199\u8be5\u53c2\u6570\n      activeWhen: '/react',\n      // \u5b50\u5e94\u7528\u7684\u5165\u53e3\u5730\u5740\uff0c\u53ef\u4ee5\u4e3a HTML \u5730\u5740\u548c JS \u5730\u5740\uff08\u4e3a\u4e0d\u540c\u6a21\u5f0f\u65f6\uff0c\u6e32\u67d3\u51fd\u6570\u7684\u5904\u7406\u6709\u6240\u4e0d\u540c\uff09\n      entry: 'http://localhost:3000',\n    },\n    {\n      name: 'vue',\n      activeWhen: '/vue',\n      entry: 'http://localhost:8080',\n    },\n  ],\n});\n")),(0,o.kt)("p",null,"\u5f53\u6267\u884c\u6ce8\u518c\u5b50\u5e94\u7528\u76f8\u5173\u4fe1\u606f\u5e76\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish.run")," \u540e\uff0c\u6b64\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish")," \u6846\u67b6\u5c06\u4f1a\u542f\u52a8\u8def\u7531\u52ab\u6301\u80fd\u529b\uff0c\u5f53\u6d4f\u89c8\u5668\u7684\u5730\u5740\u53d1\u751f\u53d8\u5316\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish")," \u6846\u67b6\u5185\u90e8\u4fbf\u4f1a\u7acb\u5373\u89e6\u53d1\u5339\u914d\u903b\u8f91\u5f53\u5e94\u7528\u7b26\u5408\u5339\u914d\u903b\u8f91\u65f6\u5c06\u4f1a\u81ea\u52a8\u5c06\u5e94\u7528\u6302\u8f7d\u81f3\u9875\u9762\u4e2d\u3002\u5e76\u4f9d\u6b21\u89e6\u53d1\u5b50\u5e94\u7528\u52a0\u8f7d\u3001\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u7684\u751f\u547d\u5468\u671f\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"basename: '/'")),(0,o.kt)("li",{parentName:"ul"},"React \u5e94\u7528\u7684\u6fc0\u6d3b\u5730\u5740\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"'/react'")),(0,o.kt)("li",{parentName:"ul"},"\u90a3\u4e48\u5728\u6d4f\u89c8\u5668\u8df3\u8f6c\u81f3 ",(0,o.kt)("inlineCode",{parentName:"li"},"/react")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"li"},"'/react/xxx/xx'")," \u7b49\u8def\u7531\u65f6\u90fd\u4f1a\u89e6\u53d1 React \u5e94\u7528\u90fd\u4f1a\u6302\u8f7d\u81f3 ",(0,o.kt)("inlineCode",{parentName:"li"},"domGetter")," \u4e2d"),(0,o.kt)("li",{parentName:"ul"},"\u82e5 ",(0,o.kt)("inlineCode",{parentName:"li"},"basename: '/demo'"),"\uff0c\u90a3 React \u5e94\u7528\u7684\u6fc0\u6d3b\u8def\u5f84\u5219\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"/demo/react")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"li"},"'/demo/react/xxx/xx'"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6302\u8f7d"))),(0,o.kt)("p",null,"\u5728\u4e1a\u52a1\u7684\u5b9e\u9645\u573a\u666f\u4e2d\uff0c\u5e94\u7528\u7684\u6302\u8f7d\u5e76\u4e0d\u4e00\u5b9a\u662f\u8ddf\u968f\u8def\u7531\u7684\u53d8\u5316\u800c\u6302\u8f7d\u7684\uff0c\u53ef\u80fd\u901a\u8fc7\u67d0\u4e9b\u4e8b\u4ef6\u89e6\u53d1\u4ece\u800c\u4f7f\u7528\u6302\u8f7d\u80fd\u529b\uff0c\u8be6\u7ec6\u4f7f\u7528\u7ec6\u8282\u53ef\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../advance/loadApp"},"\u624b\u52a8\u6302\u8f7d"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import Garfish from 'garfish';\n\nasync function loadApp() {\n  const app = await Garfish.loadApp('vue', {\n    // loadApp \u7684\u5e94\u7528\u4f1a\u4ece Garfish.run \u65f6\u6ce8\u518c\u7684\u4fe1\u606f\u4e0a\u63d0\u4f9b\uff0c\u624b\u52a8\u6302\u8f7d\u7684\u5e94\u7528 appInfo \u4e0d\u8981\u63d0\u4f9b activeWhen\n    basename: '/demo/vue',\n    domGetter: '#subModule',\n  });\n\n  await app.mount();\n}\n\nloadApp();\n")),(0,o.kt)("h2",{id:"\u5b50\u5e94\u7528"},"\u5b50\u5e94\u7528"),(0,o.kt)("h3",{id:"1-\u63d0\u4f9b\u5173\u952e\u7684\u6e32\u67d3\u548c\u9500\u6bc1\u94a9\u5b50"},"1. \u63d0\u4f9b\u5173\u952e\u7684\u6e32\u67d3\u548c\u9500\u6bc1\u94a9\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import ReactDOM from 'react-dom';\nimport App from './App';\n\nconst render = ({ dom, basename }) => {\n  ReactDOM.render(\n    // \u4f7f\u7528 Garfish \u6846\u67b6\u63d0\u4f9b\u7684 basename\uff0c\u5b50\u5e94\u7528\u7684\u6240\u6709\u5b50\u8def\u7531\u90fd\u57fa\u4e8e\u8be5 basename\uff0c\u5df2\u5230\u8fbe\u8def\u7531\u9694\u79bb\u3001\u5237\u65b0\u8def\u7531\u52a0\u8f7d\u5b50\u5e94\u7528\u7ec4\u4ef6\u7684\u76ee\u6807\n    <App basename={basename} />,\n    // \u8fd9\u91cc\u7684 document \u662f Garfish \u6784\u9020\u7684\u4e00\u4e2a\u5b50\u5e94\u7528\u5bb9\u5668\uff0c\u6240\u6709\u7684\u5185\u5bb9\u90fd\u4f1a\u88ab\u653e\u5728\u8fd9\u91cc\u9762\n    // \u5982\u679c\u662f js \u5165\u53e3\u76f4\u63a5\u6e32\u67d3\u5728 dom \u5373\u53ef\uff08\u56e0\u4e3a\u6ca1\u6709\u5176\u4ed6\u8282\u70b9\u4e86\uff09\n    // \u5982\u679c\u662f html \u5165\u53e3\u5219\u8981\u901a\u8fc7\u9009\u62e9\u5668\u6e32\u67d3\u5728\u81ea\u8eabhtml\u7684dom\u8282\u70b9\u91cc\n    dom.querySelector('#root'),\n  );\n};\n\n// \u5728\u9996\u6b21\u52a0\u8f7d\u548c\u6267\u884c\u65f6\u4f1a\u89e6\u53d1\u8be5\u51fd\u6570\nexport const provider = () => {\n  return {\n    render, // \u5e94\u7528\u5728\u6e32\u67d3\u65f6\u4f1a\u89e6\u53d1\u8be5 hook\n    destroy({ dom }) {\n      // \u5e94\u7528\u5728\u9500\u6bc1\u65f6\u4f1a\u89e6\u53d1\u8be5 hook\n      const root = (dom && dom.querySelector('#root')) || dom; // \u82e5\u4e3a JS \u5165\u53e3\u76f4\u63a5\u5c06\u4f20\u5165\u8282\u70b9\u4f5c\u4e3a\u6302\u8f7d\u70b9\u548c\u9500\u6bc1\u8282\u70b9\n      if (root) {\n        // \u505a\u5bf9\u5e94\u7684\u9500\u6bc1\u903b\u8f91\uff0c\u4fdd\u8bc1\u5b50\u5e94\u7528\u5728\u9500\u6bc1\u65f6\u5bf9\u5e94\u7684\u526f\u4f5c\u7528\u4e5f\u88ab\u79fb\u9664\n        ReactDOM.unmountComponentAtNode(root);\n      }\n    },\n  };\n};\n\n// \u8fd9\u80fd\u591f\u8ba9\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u8d77\u6765\uff0c\u4ee5\u4fdd\u8bc1\u540e\u7eed\u5b50\u5e94\u7528\u80fd\u8131\u79bb\u4e3b\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\uff0c\u65b9\u4fbf\u8c03\u8bd5\u3001\u5f00\u53d1\nif (!window.__GARFISH__) {\n  render({ dom: document, basename: '/' });\n}\n")),(0,o.kt)("h3",{id:"2-\u8c03\u6574\u5b50\u5e94\u7528\u76f8\u5173\u6784\u5efa\u914d\u7f6e"},"2. \u8c03\u6574\u5b50\u5e94\u7528\u76f8\u5173\u6784\u5efa\u914d\u7f6e"),(0,o.kt)("p",null,"\u5b50\u5e94\u7528\u9664\u4e86\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," \u5bfc\u51fa\u5185\u5bb9\u5916\uff0c\u8fd8\u9700\u8981\u589e\u52a0\u4e00\u5b9a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack")," \u914d\u7f6e\uff0c\u5177\u4f53\u914d\u7f6e\u5982\u4e0b\uff0c\u5173\u4e8e\u6bcf\u4e2a webpack \u914d\u7f6e\u610f\u4e49\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/output/#outputlibrary"},"webpack \u914d\u7f6e\u6587\u6863")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u4fee\u6539\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u907f\u514d\u9003\u9038\u6c99\u7bb1\n    globalObject: 'window',\n    // \u8bf7\u6c42\u786e\u4fdd\u6bcf\u4e2a\u5b50\u5e94\u7528\u8be5\u503c\u90fd\u4e0d\u76f8\u540c\uff0c\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\n    jsonpFunction: 'vue-app-jsonpFunction',\n    // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u8def\u5f84\u53d8\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u907f\u514d\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5728\u53d8\u4e3a\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\uff0c\u56e0\u4e3a\u5b50\u5e94\u7528\u548c\u4e3b\u5e94\u7528\u5728\u540c\u4e00\u4e2a\u6587\u6863\u6d41\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684\n    publicPath: 'http://localhost:8000',\n  },\n  devServer: {\n    // \u4fdd\u8bc1\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5e94\u7528\u7aef\u53e3\u4e0d\u4e00\u6837\n    port: '8000',\n    headers: {\n      // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\uff0c\u5728\u7ebf\u4e0a\u540e\u9700\u8981\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08**\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898**\uff09\n      'Access-Control-Allow-Origin': '*',\n    },\n  },\n};\n")),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u4f7f\u7528 Garfish \u642d\u5efa\u4e00\u5957\u5fae\u524d\u7aef\u4e3b\u5b50\u5e94\u7528\u7684\u4e3b\u8981\u6210\u672c\u6765\u81ea\u4e24\u65b9\u9762"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u5e94\u7528\u7684\u642d\u5efa",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u5b50\u5e94\u7528\u7684\u57fa\u672c\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Garfish \u5728\u4e3b\u5e94\u7528\u4e0a\u8c03\u5ea6\u7ba1\u7406\u5b50\u5e94\u7528"))),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u7684\u6539\u9020",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5bfc\u51fa ",(0,o.kt)("inlineCode",{parentName:"li"},"provider")," \u63d0\u4f9b\u5e94\u7528\u7684\u6e32\u67d3\u3001\u9500\u6bc1\u751f\u547d\u5468\u671f"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u6e32\u67d3\u751f\u547d\u5468\u671f\u4e2d\uff0c\u9488\u5bf9\u63d0\u4f9b\u7684\u5165\u53e3\u6a21\u5f0f\u6709\u6240\u4e0d\u540c\u63d0\u4f9b\u6e32\u67d3\u8282\u70b9"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u6e32\u67d3\u751f\u547d\u5468\u671f\u4e2d\uff0c\u4f7f\u7528\u6846\u67b6\u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"basename"),"\uff0c\u4f5c\u4e3a\u5e94\u7528\u7684\u57fa\u7840 ",(0,o.kt)("inlineCode",{parentName:"li"},"basename"),"\u5df2\u5230\u8fbe\u8def\u7531\u9694\u79bb\u3001\u5237\u65b0\u8def\u7531\u52a0\u8f7d\u5b50\u5e94\u7528\u7ec4\u4ef6\u7684\u76ee\u6807"),(0,o.kt)("li",{parentName:"ul"},"\u589e\u52a0\u975e\u5fae\u524d\u7aef\u6a21\u5f0f\u4e0b\u7684\u517c\u5bb9\u6e32\u67d3\u903b\u8f91\uff0c\u4f7f\u5176\u5b50\u5e94\u7528\u53ef\u72ec\u7acb\u8fd0\u884c\uff08\u4e00\u822c\u60c5\u51b5\u5efa\u8bae\u7528\u6237\u4ec5\u4f7f\u7528 html entry\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u589e\u52a0\u5bf9\u5e94\u7684\u6784\u5efa\u914d\u7f6e")))))}m.isMDXComponent=!0}}]);