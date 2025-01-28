"use strict";(self.webpackChunkmaps_messaging_site=self.webpackChunkmaps_messaging_site||[]).push([[7924],{4575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"getting-started/installation","title":"Installation Guide","description":"Prerequisites","source":"@site/docs/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/docs/getting-started/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/Maps-Messaging/maps-messaging-site/tree/main/docs/getting-started/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"quick-start","permalink":"/docs/getting-started/quick-start"},"next":{"title":"configuration","permalink":"/docs/getting-started/configuration"}}');var s=n(4848),r=n(8453);const a={sidebar_position:1},o="Installation Guide",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start with Docker",id:"quick-start-with-docker",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"installation-guide",children:"Installation Guide"})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before installing MAPS Messaging, ensure you have:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"JDK 13 or higher"}),"\n",(0,s.jsx)(t.li,{children:"Docker environment (for containerized deployment)"}),"\n",(0,s.jsx)(t.li,{children:"Minimum system requirements met"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"quick-start-with-docker",children:"Quick Start with Docker"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Pull the latest Docker image\ndocker pull mapsmessaging/maps-messaging\n\n# Run the container\ndocker run -d \\\n  -p 1883:1883 \\\n  -p 8883:8883 \\\n  --name maps-messaging \\\n  mapsmessaging/maps-messaging\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);