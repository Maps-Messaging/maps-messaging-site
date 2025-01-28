"use strict";(self.webpackChunkmaps_messaging_site=self.webpackChunkmaps_messaging_site||[]).push([[3976],{7879:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"intro","title":"Getting Started with MAPS Messaging","description":"Welcome to MAPS Messaging - the protocol and transport agnostic messaging middleware software that revolutionizes IoT by unleashing in-transit intelligence.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/mapsmessaging-site/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/Maps-Messaging/maps-messaging-site/tree/main/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Getting Started","permalink":"/mapsmessaging-site/docs/category/getting-started"}}');var t=i(4848),r=i(8453);const l={sidebar_position:1},o="Getting Started with MAPS Messaging",a={},c=[{value:"Quick Start",id:"quick-start",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"getting-started-with-maps-messaging",children:"Getting Started with MAPS Messaging"})}),"\n",(0,t.jsx)(n.p,{children:"Welcome to MAPS Messaging - the protocol and transport agnostic messaging middleware software that revolutionizes IoT by unleashing in-transit intelligence."}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Choose Your Edition"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/community",children:"Community Edition"})," - Free, core functionality"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/enterprise",children:"Enterprise Edition"})," - Full features with support"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/premium",children:"Premium ML Edition"})," - Advanced ML capabilities"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"System Requirements"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JDK 13 or higher"}),"\n",(0,t.jsx)(n.li,{children:"Supported platforms: Linux, Windows, macOS"}),"\n",(0,t.jsx)(n.li,{children:"Docker support available"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Installation"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Docker\ndocker pull mapsmessaging/maps-messaging-server\n\n# Or download the latest release\nwget https://github.com/Maps-Messaging/maps_messaging/releases/latest/download/maps-messaging-server.jar\n\n"})}),"\n",(0,t.jsx)(n.h1,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"server:\n  port: 1883\n  protocols:\n    - mqtt\n    - amqp\n"})}),"\n",(0,t.jsx)(n.h1,{id:"first-connection",children:"First Connection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// MQTT Example\nMqttClient client = new MqttClient("tcp://localhost:1883", "clientId");\nclient.connect();\n'})}),"\n",(0,t.jsx)(n.h1,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Protocol Agnostic Support (MQTT, AMQP, MQTT-SN, CoAP, STOMP, Other)"}),"\n",(0,t.jsx)(n.li,{children:"High Performance Message Routing"}),"\n",(0,t.jsx)(n.li,{children:"Built-in Security (SSL/TLS, SASL)"}),"\n",(0,t.jsx)(n.li,{children:"AI/ML Integration Ready"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/community",children:"Explore Community Edition"})," - Free, core functionality"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/enterprise",children:"View Enterprise Edition"})," - Full features with support"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/premium",children:"Discover Premium ML Capabilities"})," - Advanced ML capabilities"]}),"\n",(0,t.jsx)(n.li,{children:"Github Repository"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"support",children:"Support"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/community",children:"Community Forum"})," - Free, core functionality"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/enterprise",children:"Github Issues"})," - Full features with support"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"editions/premium",children:"Enterprise Support (Available with Enterprise Edition)"})," - Advanced ML capabilities"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);