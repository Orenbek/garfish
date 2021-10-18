"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[61],{4635:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7711);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5507:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=n(8538),i=n(7765),r=(n(7711),n(4635)),o=["components"],p={title:"API Reference",slug:"/api/new",order:2},l=void 0,d={unversionedId:"api/instance",id:"api/instance",isDocsHomePage:!1,title:"API Reference",description:"run",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/instance.md",sourceDirName:"api",slug:"/api/new",permalink:"/en/api/new",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/api/instance.md",tags:[],version:"current",lastUpdatedBy:"Arthur",lastUpdatedAt:1634549822,formattedLastUpdatedAt:"10/18/2021",frontMatter:{title:"API Reference",slug:"/api/new",order:2},sidebar:"api",previous:{title:"Overview",permalink:"/en/api"},next:{title:"props",permalink:"/en/api/attributes/props"}},s=[{value:"run",id:"run",children:[{value:"Options",id:"options",children:[]}]}],m={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"run"},"run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.run(options: Options) : Garfish")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"domgetter---element--string"},(0,r.kt)("inlineCode",{parentName:"h4"},"domGetter: () => Element | string")),(0,r.kt)("p",null,"You can fill in the node to get the mount point or the characters that ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelect")," can select."),(0,r.kt)("h4",{id:"apps-arrayappinfo"},(0,r.kt)("inlineCode",{parentName:"h4"},"apps: Array<AppInfo>")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"The main framework is not automatically associated with the remote Garfish management platform and needs to be injected manually. 2."),(0,r.kt)("li",{parentName:"ol"},"Sub-application resource addresses need to support cross-domain (",(0,r.kt)("strong",{parentName:"li"},"please control the allowed range, if not set the allowed range may cause security risks"),")."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Garfish")," will determine whether the resource is an ",(0,r.kt)("inlineCode",{parentName:"li"},"html entry")," or a ",(0,r.kt)("inlineCode",{parentName:"li"},"js entry")," based on its ",(0,r.kt)("inlineCode",{parentName:"li"},"mineType"),". 4."),(0,r.kt)("li",{parentName:"ol"},"for a single ",(0,r.kt)("inlineCode",{parentName:"li"},"js"),", the exported content must be ",(0,r.kt)("inlineCode",{parentName:"li"},"provider: { render, destroy }"),".\n:::")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AppInfo: { name, entry, activeWhen, active, deactive }"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," The name of the template, please make sure that the name is unique."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entry")," Sub-application entry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activeWhen")," path name, the path to activate the sub-application, fill in the root route, use as a function please do not use asynchronous logic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"active")," Trigger when the application is activated, used instead of the default rendering logic inside Garfish. This hook can be used to render ",(0,r.kt)("inlineCode",{parentName:"li"},"iframe")," if the app is not accessible quickly, ",(0,r.kt)("a",{parentName:"li",href:"https://site.bytedance.net/docs/4545/6924/ifame"},"details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deactive")," triggered when the application is destroyed, used instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish")," internal default destruction logic, with or without ",(0,r.kt)("inlineCode",{parentName:"li"},"active")," configuration")))),(0,r.kt)("h4",{parentName:"div",id:"basename-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"basename?: string")),(0,r.kt)("p",{parentName:"div"},"Base routing address, explained in detail below."),(0,r.kt)("h4",{parentName:"div",id:"sandbox-sandboxconfig"},(0,r.kt)("inlineCode",{parentName:"h4"},"sandbox?: SandboxConfig")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"open?: boolean")," default ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot?: boolean")," Whether to open the snapshot sandbox, default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("h4",{parentName:"div",id:"props-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"props?: Object")),(0,r.kt)("p",{parentName:"div"},"Provide parameters as ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," parameters for the child application"),(0,r.kt)("h4",{parentName:"div",id:"protectvariable-arraystring"},(0,r.kt)("inlineCode",{parentName:"h4"},"protectVariable?: Array<string>")),(0,r.kt)("p",{parentName:"div"},"Save the specified variable without clearing it during the sandbox switch"),(0,r.kt)("h4",{parentName:"div",id:"autorefreshapp-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"autoRefreshApp?: boolean")),(0,r.kt)("p",{parentName:"div"},"Default ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the main app will update the component when jumping through the app subroutes"),(0,r.kt)("h4",{parentName:"div",id:"beforeload-appinfo-appinfo--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"beforeLoad?: (appInfo: AppInfo) => void")),(0,r.kt)("p",{parentName:"div"},"Called before the resource is loaded, returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", which will prevent the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," from being loaded, when there may be no ",(0,r.kt)("inlineCode",{parentName:"p"},"app")),(0,r.kt)("h4",{parentName:"div",id:"beforemount-appinfo-appinfo-path-string--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"beforeMount?: (appInfo: AppInfo, path: string) => void")),(0,r.kt)("p",{parentName:"div"},"Called before the child app is mounted"),(0,r.kt)("h4",{parentName:"div",id:"aftermount-appinfo-appinfo-path-string--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"afterMount?: (appInfo: AppInfo, path: string) => void")),(0,r.kt)("p",{parentName:"div"},"Called after the child app is mounted"),(0,r.kt)("h4",{parentName:"div",id:"beforeunmount-appinfo-appinfo-path-string--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"beforeUnmount?: (appInfo: AppInfo, path: string) => void")),(0,r.kt)("p",{parentName:"div"},"Called before the child application is destroyed"),(0,r.kt)("h4",{parentName:"div",id:"afterunmount-appinfo-appinfo-path-string--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"afterUnmount?: (appInfo: AppInfo, path: string) => void")),(0,r.kt)("p",{parentName:"div"},"Called after the destruction of the sub-application"),(0,r.kt)("h4",{parentName:"div",id:"customloader-provider-any-path-string-module-app--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"customLoader?: (provider: any, path: string, module: App) => void")),(0,r.kt)("p",{parentName:"div"},"Custom loading rules"),(0,r.kt)("h4",{parentName:"div",id:"errorloadapp-err-error-appinfo-appinfo--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"errorLoadApp?: (err: Error, appInfo: AppInfo) => void")),(0,r.kt)("p",{parentName:"div"},"Catch errors in loading sub-applications"),(0,r.kt)("h4",{parentName:"div",id:"errormountapp-err-error-appinfo-appinfo--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"errorMountApp?: (err: Error, appInfo: AppInfo) => void")),(0,r.kt)("p",{parentName:"div"},"Catch error when mounting a sub-application"),(0,r.kt)("h4",{parentName:"div",id:"errorunmountapp-err-error-appinfo-appinfo--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"errorUnmountApp?: (err: Error, appInfo: AppInfo) => void")),(0,r.kt)("p",{parentName:"div"},"Catch the error when unmounting a child application"),(0,r.kt)("h4",{parentName:"div",id:"onnotmatchrouter-path-string--void"},(0,r.kt)("inlineCode",{parentName:"h4"},"onNotMatchRouter?: (path: string) => void")),(0,r.kt)("p",{parentName:"div"},"Triggered if the corresponding sub-application is not matched"),(0,r.kt)("h3",{parentName:"div",id:"example"},"Example"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\n\nGarfish.run({\n  sandbox: false,\n  basename: '/exmaple',\n  domGetter: '#submodule',\n  beforeMount() {\n    console.log('Before application mount');\n  },\n  afterUnmount() {\n    console.log('After application destruction');\n  },\n  apps: [\n    {\n      name: 'index',\n      activeWhen: '/index',\n      entry: 'sourceUrl', // js entry or html entry\n    },\n  ],\n});\n")),(0,r.kt)("h3",{parentName:"div",id:"basename"},"basename"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The default value of ",(0,r.kt)("inlineCode",{parentName:"li"},"basename")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"'/'")),(0,r.kt)("li",{parentName:"ul"},"This parameter is used as the ",(0,r.kt)("inlineCode",{parentName:"li"},"basePath")," of the child application activation and can be provided to the child application as the ",(0,r.kt)("inlineCode",{parentName:"li"},"basepath")," of the child application."),(0,r.kt)("li",{parentName:"ul"},"Example.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sub-applications: ",(0,r.kt)("inlineCode",{parentName:"li"},"activeWhen: '/detail'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"basename: '/toutiao'"),"."),(0,r.kt)("li",{parentName:"ul"},"The sub-application will be active when jumping to: ",(0,r.kt)("inlineCode",{parentName:"li"},"/toutiao/detail"),"."),(0,r.kt)("li",{parentName:"ul"},"Sub-application jumps based on: ",(0,r.kt)("inlineCode",{parentName:"li"},"/toutiao/detail"),".")))),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"If the child app has a route itself, you need to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"basename")," passed by the ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," function as the route base path.")),(0,r.kt)("p",{parentName:"div"},"Take the example of the main app Vue, and the child app React."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// index.js of the main app\nconst basePath = 'toutiao';\nconst router = new VueRouter({\n  mode: 'history',\n  base: basePath,\n});\n\nGarfish.run({\n  basename: basePath,\n  domGetter: '#submodule',\n  apps: [\n    {\n      name: 'react',\n      activeWhen: '/react',\n      entry: `http://localhost:3000/index.js`,\n    },\n  ],\n});\n\nconst app = new Vue({ router }).$mount('#app');\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// index.js of the child application\n// Get the basename provided by the main app that the framework transfers as the basename of the child app, and use it as the root route when routing hops\nclass App extends React.Component<Props> {\n  render() {\n    return (\n      <BrowserRouter basename={this.props.basename}>\n        <div>\n          <ul>\n            <li>\n              <Link to=\"/\">Home</Link\n            </li>\n          </ul>\n          <Route exact path=\"/\" component={Index}></Route\n        </div>\n      </BrowserRouter\n    );\n  }\n}\n\nexport function provider() {\n  return {\n    render({ dom, basename }) {\n      // Render to a node in the sub-application html\n      ReactDOM.render(<App basename={basename} />, dom.querySelector('#root'));\n    },\n\n    destroy({ dom }) {\n      const root = dom && dom.querySelector('#root');\n      if (root) {\n        ReactDOM.unmountComponentAtNode(root);\n      }\n    },\n  };\n}\n")),(0,r.kt)("h2",{parentName:"div",id:"registerapp"},"registerApp"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.registerApp(app: AppInfo | AppInfo[]) : Garfish")),(0,r.kt)("p",{parentName:"div"},"This method is used to register subapplication information, in addition to registering information when ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.run")," is started."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.registerApp({\n  name: 'childApp',\n  entry: 'sourceUrl',\n  activeWhen: '/xx',\n});\n\n// You can also register multiple apps by passing in an array\nGarfish.registerApp([\n  {\n    name: 'childApp',\n    entry: 'sourceUrl',\n    activeWhen: '/xx',\n  },\n]);\n")),(0,r.kt)("h2",{parentName:"div",id:"loadapp"},"loadApp"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp(appName: string, options?: Options) : App | null")),(0,r.kt)("p",{parentName:"div"},"Manually loaded api, see ","[manual load app documentation]"," for more details on usage (... /api/attributes/loadApp)"))))}u.isMDXComponent=!0}}]);