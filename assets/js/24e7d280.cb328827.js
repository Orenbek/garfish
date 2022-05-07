"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[196],{4635:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7711);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(t),d=l,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1050:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var r=t(5086),l=t(9126),a=(t(7711),t(4635)),o=["components"],u={title:"\u9519\u8bef\u5904\u7406\u548c sourcemap",slug:"/blog/sourcemap",order:3},c=void 0,i={unversionedId:"blog/sourcemap",id:"blog/sourcemap",isDocsHomePage:!1,title:"\u9519\u8bef\u5904\u7406\u548c sourcemap",description:"\u80cc\u666f",source:"@site/docs/blog/sourcemap.md",sourceDirName:"blog",slug:"/blog/sourcemap",permalink:"/blog/sourcemap",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/blog/sourcemap.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651928914,formattedLastUpdatedAt:"2022/5/7",frontMatter:{title:"\u9519\u8bef\u5904\u7406\u548c sourcemap",slug:"/blog/sourcemap",order:3},sidebar:"blog",previous:{title:"\u70ed\u66f4\u65b0\u95ee\u9898",permalink:"/blog/hmr"}},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[],level:2},{value:"\u5177\u4f53\u95ee\u9898",id:"\u5177\u4f53\u95ee\u9898",children:[],level:2},{value:"\u5806\u6808\u4e22\u5931\u95ee\u9898",id:"\u5806\u6808\u4e22\u5931\u95ee\u9898",children:[],level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",children:[],level:2},{value:"sourcemap \u5bf9\u5e94\u9519\u8bef",id:"sourcemap-\u5bf9\u5e94\u9519\u8bef",children:[{value:"\u9519\u884c",id:"\u9519\u884c",children:[{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5-1",children:[],level:4}],level:3},{value:"\u9519\u5217",id:"\u9519\u5217",children:[],level:3},{value:"\u65b9\u6848\u5bf9\u6bd4",id:"\u65b9\u6848\u5bf9\u6bd4",children:[],level:3}],level:2}],s={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"\u5fae\u524d\u7aef\u573a\u666f\u4e0b\uff0c\u5b58\u5728\u6c99\u76d2\u673a\u5236\uff0c\u57fa\u4e8e eval \u548c new Function \u7684\u5f62\u5f0f\u53bb\u5b9e\u73b0\u6c99\u7bb1\u673a\u5236\u3002\u5728\u624b\u52a8\u6267\u884c\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u4ea7\u751f\u5806\u6808\u4e22\u5931\u3001sourcemap \u8fd8\u539f\u9519\u884c\u7b49\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4ee3\u7801\u6267\u884c\u65b9\u5f0f\uff0c\u5f00\u53d1\u73af\u5883\u53ef\u7528")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u89e3\u51b3\u5806\u6808\u9519\u884c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"step1\uff1a\u5347\u7ea7\u4e3b\u5e94\u7528\u81f3 garfish \u81f3\u6700\u65b0\u7248\u672c")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589e webpack \u63d2\u4ef6\uff0c\u89e3\u51b3\u751f\u4ea7\u73af\u5883\u95ee\u9898\u5806\u6808\u8fd8\u539f\u95ee\u9898")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b50\u5e94\u7528\u4e0e Garfish \u76f8\u5173\u5fae\u524d\u7aef\u914d\u7f6e\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\uff0c\u89e3\u51b3\u4ee3\u7801\u538b\u7f29\u540e\u5728 Garfish \u6c99\u7bb1\u5185\u6267\u884c\u5806\u6808\u5f02\u5e38")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// webpack\u914d\u7f6e\nconst webpack = require('webpack');\n\nconfig.plugins = [\n  new webpack.BannerPlugin({\n      banner: 'Micro front-end',\n  });\n]\n")),(0,a.kt)("h2",{id:"\u5177\u4f53\u95ee\u9898"},"\u5177\u4f53\u95ee\u9898"),(0,a.kt)("h2",{id:"\u5806\u6808\u4e22\u5931\u95ee\u9898"},"\u5806\u6808\u4e22\u5931\u95ee\u9898"),(0,a.kt)("p",null,"\u4f7f\u7528 eval\u3001new Function \u53bb\u6267\u884c\u51fd\u6570\uff0c\u5982\u679c\u5728\u9519\u8bef\u629b\u51fa\u7684\u65f6\u5019\uff0c\u5806\u6808\u662f\u4e0d\u5b8c\u6574\u7684\uff0c\u53ea\u4f1a\u663e\u793a\u5230 eval \u6216 new Function \u6267\u884c\u7684\u90a3\u884c\u3002\n\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var str = `\n    var a = 1;\n    throw Error(123)\n`;\neval(str);\n")),(0,a.kt)("p",null,"\u9519\u8bef\u629b\u51fa\u7684\u4f4d\u7f6e\u662f eval \u7684\u8fd9\u884c\uff0c\uff08new Function \u540c\u7406\uff09\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://tosv.byted.org/obj/eden-internal/ozpmyhn_lm_hymuPild/ljhwZthlaukjlkulzlp/sourcemap1.png",alt:"image.png"})),(0,a.kt)("p",null,"\u8fd9\u4e5f\u662f\u6b64\u524d\u8bb8\u591a\u4f7f\u7528 Garfish \u7684\u7528\u6237\u9047\u5230\u7684\u4e00\u4e2a\u95ee\u9898\uff0cjs \u6267\u884c\u51fa\u9519\uff0c\u4f46\u662f\u7f3a\u5c11\u5806\u6808\uff0c\u5bfc\u81f4\u6392\u67e5\u56f0\u96be\u3002"),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6b64\u95ee\u9898\uff0c\u6d4f\u89c8\u5668\u662f\u63d0\u4f9b\u4e86\u76f8\u5173\u89e3\u51b3\u65b9\u6848\u6765\u89e3\u51b3\u7684\uff0c\u90a3\u5c31\u662f sourceURL\u3002\n\uff08MDN\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Debug_eval_sources%EF%BC%89"},"https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Debug_eval_sources\uff09")),(0,a.kt)("p",null,"\u6211\u4eec\u8fd8\u662f\u62ff\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u589e\u52a0\u4e86 sourceURL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var str = `\n    var a = 1;\n    throw Error(123)\n//# sourceURL=./index.js\n`;\neval(str);\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6709\u4e86\u5177\u4f53\u7684\u5806\u6808\u3002"),(0,a.kt)("p",null,"\u4e8e\u662f Garfish \u6267\u884c\u4ee3\u7801\u7684\u5f62\u5f0f\u53d8\u6210\uff0c\u8fd9\u6837\u629b\u51fa\u7684\u9519\u8bef\u5c31\u6709\u8be6\u7ec6\u7684\u5806\u6808\uff0c\u80fd\u591f\u89e3\u51b3\u770b\u4e0d\u5230\u5806\u6808\u7684\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Function('\n    ...code\n//# sourceURL=url\n'\n")),(0,a.kt)("h2",{id:"sourcemap-\u5bf9\u5e94\u9519\u8bef"},"sourcemap \u5bf9\u5e94\u9519\u8bef"),(0,a.kt)("h3",{id:"\u9519\u884c"},"\u9519\u884c"),(0,a.kt)("p",null,"\u7531\u4e8e\u4f7f\u7528 new Function \u6765\u6267\u884c\uff0c\u52a0\u4e0a\u62fc\u63a5\u4e86\u4e00\u4e9b\u53d8\u91cf\uff0c\u6240\u4ee5\u4f7f\u7528\u6784\u5efa\u751f\u6210\u7684 sourcemap \u6765\u8fd8\u539f\u4f1a\u5bfc\u81f4\u9519\u884c\u7684\u95ee\u9898\u3002\n\u6e90\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// code\n\n// \u6c99\u7bb1\u91cc\u6267\u884c\u7684\u4ee3\u7801\nfunction (window) {\n    with(window) {\n        // code\n    }\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4f7f\u7528 sourcemap \u8fd8\u539f\u7684\u65f6\u5019\u4f1a\u9519\u4e24\u884c\uff0c\u8fd9\u4e5f\u662f\u5f88\u591a\u4f7f\u7528 Garfish \u7684\u540c\u5b66\u9047\u5230\u7684\u95ee\u9898\uff0csourcemap \u5b9a\u4f4d\u9519\u8bef\uff0c\u867d\u7136\u80fd\u591f\u8fd8\u539f\u4e00\u5b9a\u7684\u60c5\u51b5\uff0c\u4f46\u662f\u5bf9\u4e8e debug \u6765\u8bf4\uff0c\u8fd8\u662f\u6bd4\u8f83\u86cb\u75bc\u7684\u3002"),(0,a.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6cd5-1"},"\u89e3\u51b3\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4f7f\u7528 eval \u66ff\u4ee3 new Function\uff0c\u540c\u65f6\u5c06\u62fc\u63a5\u7684\u4ee3\u7801\u653e\u7f6e\u4e8e\u540c\u4e00\u884c\u3002"),(0,a.kt)("p",null,"\u5f62\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"eval(function(window) {{with} { //code\n}}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u89e3\u51b3\u9519\u884c\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u9519\u5217"},"\u9519\u5217"),(0,a.kt)("p",null,'\u4e0a\u9762\u7684\u89e3\u51b3\u65b9\u6cd5\u53ef\u4ee5\u89e3\u51b3\u884c\u6570\u5bf9\u5e94\u4e0d\u4e0a\u7684\u95ee\u9898\uff0c\u5728\u5f00\u53d1\u73af\u5883\u57fa\u672c\u6ca1\u6709\u95ee\u9898\uff0c\u56e0\u4e3a\u4ee3\u7801\u6ca1\u6709\u8fdb\u884c\u538b\u7f29\u3002\n\u7531\u4e8e\u5728\u524d\u9762\u589e\u52a0\u4e86"function(window)"\uff0c\u5217\u6570\u5bf9\u5e94\u8fd8\u662f\u6709\u95ee\u9898\u7684\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u8fd8\u662f\u6709\u6bd4\u8f83\u5927\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u751f\u4ea7\u73af\u5883\u4ee3\u7801\u4f1a\u538b\u7f29\u6210\u4e00\u884c\uff0c\u6240\u4ee5\u5217\u6570\u5bf9\u5e94\u4e0d\u4e0a\u5c31\u6210\u4e86\u5927\u95ee\u9898\u3002'),(0,a.kt)("h3",{id:"\u65b9\u6848\u5bf9\u6bd4"},"\u65b9\u6848\u5bf9\u6bd4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u9519\u8bef\u629b\u51fa\u7684\u65f6\u5019\u4fee\u6b63\u5217\u6570\n\u6211\u4eec\u53ef\u4ee5\u8ba1\u7b97\u51fa\u9519\u7684\u5217\u6570\u7684\u6570\u5b57\uff0ccatch \u4f4f\u9519\u8bef\u7136\u540e\u5bf9 error \u7684 stack \u8fdb\u884c\u4fee\u6539\u3002\n\u95ee\u9898\uff1a\u65e0\u6cd5\u6355\u83b7\u6240\u6709\u7684\u9519\u8bef\uff0c\u6709\u7684\u9519\u8bef\u4e0d\u662f\u5728\u7f16\u8bd1\u9636\u6bb5\u629b\u51fa\uff0c\u53ef\u80fd\u5728\u9875\u9762\u6e32\u67d3\u6216\u8005\u4ea4\u4e92\u7684\u65f6\u5019\u629b\u51fa\u7684\uff0c\u8fd9\u4e9b\u9519\u8bef garfish \u65e0\u6cd5\u6355\u83b7\uff0c\u4e5f\u5c1d\u8bd5\u91cd\u5199 Error \u5bf9\u8c61\uff0c\u4f46\u662f\u65e0\u6cd5\u6db5\u76d6\u5168\u90e8\u60c5\u51b5\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6355\u83b7\u6240\u6709\u5f02\u5e38",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"window.onerror"),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5f02\u6b65 api \u5c01\u88c5\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"setTimeout\u3001promise \u6355\u83b7\u5f02\u5e38"))),(0,a.kt)("li",{parentName:"ul"},"Dom",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6d41\u90fd\u5305\u4e86\u4e00\u5c42")))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u4fee\u6b63\u5217\u6570"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u7f16\u8bd1\u9636\u6bb5\u4fee\u6b63\uff0c\u5982\u751f\u6210\u7684 sourcemap \u5c31\u8fdb\u884c\u5217\u7684\u504f\u79fb\uff0c\u4f46\u662f\u8fd9\u4f1a\u5bfc\u81f4\u72ec\u7acb\u8fd0\u884c\u7684\u65f6\u5019\u5b50\u5e94\u7528\u5806\u6808\u4e0d\u6b63\u786e\u3002\n\u6240\u4ee5\u7ecf\u8fc7\u8003\u8651\uff0c\u53ef\u80fd\u5728\u751f\u4ea7\u7f16\u8bd1\u4ea7\u7269\u548c sourcemap \u7684\u65f6\u5019\uff0c\u5c31\u9ed8\u8ba4\u7ed9 js \u6587\u4ef6\u9876\u90e8\u751f\u4ea7\u4e00\u884c\u6ce8\u91ca\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u89e3\u51b3\u884c\u6570\u5217\u6570\u5bf9\u5e94\u4e0d\u4e0a\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u89e3\u51b3\u72ec\u7acb\u8fd0\u884c\u5b50\u5e94\u7528\u7684\u95ee\u9898\u3002\u5bf9\u4e8e\u4e0d\u7ecf\u8fc7\u7f16\u8bd1\u7684 cdn \u52a0\u8f7d\u6587\u4ef6\u6709\u95ee\u9898\u3002")))}m.isMDXComponent=!0}}]);