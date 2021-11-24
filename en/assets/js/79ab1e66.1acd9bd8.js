"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[549],{4635:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7711);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},499:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(8538),a=r(7765),o=(r(7711),r(4635)),i=["components"],p={title:"props",slug:"/api/attributes/props",order:2},s=void 0,c={unversionedId:"api/attributes/props",id:"api/attributes/props",isDocsHomePage:!1,title:"props",description:"Garfish.props is used to get the public content passed by the main application, to use shared data, or to pass specified content to child applications. Can be used with mobx.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/attributes/props.md",sourceDirName:"api/attributes",slug:"/api/attributes/props",permalink:"/en/api/attributes/props",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/api/attributes/props.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1637726767,formattedLastUpdatedAt:"11/24/2021",frontMatter:{title:"props",slug:"/api/attributes/props",order:2},sidebar:"api",previous:{title:"channel",permalink:"/en/api/attributes"},next:{title:"router",permalink:"/en/api/attributes/router"}},u=[{value:"Master application shared data",id:"master-application-shared-data",children:[]},{value:"Sub-application fetching data",id:"sub-application-fetching-data",children:[]},{value:"Or get it in the provider",id:"or-get-it-in-the-provider",children:[]}],l={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Garfish.props")," is used to get the public content passed by the main application, to use shared data, or to pass specified content to child applications. Can be used with ",(0,o.kt)("a",{parentName:"p",href:"https://cn.mobx.js.org"},"mobx"),"."),(0,o.kt)("h3",{id:"master-application-shared-data"},"Master application shared data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\nimport { observable, computed, action } from 'mobx';\n\nclass Store {\n  @observable price = 0;\n  @observable amount = 1;\n\n  @computed get total() {\n    return this.price * this.amount;\n  }\n\n  @action.bound\n  increment() {\n    this.amount++;\n  }\n}\n\nGarfish.run({\n  basename: basePath,\n  domGetter: '#subModule',\n  apps,\n  props: {\n    store: new Store(),\n  },\n});\n")),(0,o.kt)("h3",{id:"sub-application-fetching-data"},"Sub-application fetching data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const store = window.Garfish.props.store;\nconst price = store.price;\nconst amount = store.amount;\nstore.increment();\n")),(0,o.kt)("h3",{id:"or-get-it-in-the-provider"},"Or get it in the provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function provider({ dom, basename, store }) {\n  return {\n    render() {},\n    destroy() {},\n  };\n}\n")))}d.isMDXComponent=!0}}]);