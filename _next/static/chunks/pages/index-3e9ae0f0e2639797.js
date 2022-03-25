(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8805)}])},8805:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return S}});var r=n(5893),a=n(9008),o=n(3017),i=n.n(o),s="Unimelb Timetable";function l(e){var t=e.children;e.home;return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"what class is in what room at what time in what semester at what university?"}),(0,r.jsx)("meta",{name:"og:title",content:s}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,r.jsx)("header",{}),(0,r.jsx)("main",{children:t}),(0,r.jsxs)("footer",{children:["Liam Saliba, March 2022."," ",(0,r.jsx)("a",{href:"https://github.com/liamsaliba/unimelb-timetable",children:"Open Source"})," ","- antd, next.js, gh-pages. Data scraped from"," ",(0,r.jsx)("a",{href:"https://sws.unimelb.edu.au/",children:"Unimelb's website."})]})]})}var c=n(6748),u=c.Z.Column,d=function(e){var t=e.data;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z,{dataSource:t,size:"middle",pagination:{pageSize:50},scroll:{y:"60vh"},children:[(0,r.jsx)(u,{title:"Location",dataIndex:"location",filterMode:"tree",filterSearch:!0,onFilter:function(e,t){return t.location.includes(e)}},"location"),(0,r.jsx)(u,{title:"Time",dataIndex:"time"},"time"),(0,r.jsx)(u,{title:"Class code",dataIndex:"class_code",onFilter:function(e,t){return t.class_code.indexOf(e)>=0},filters:[{text:"Semester 1",value:"/SM1/"},{text:"Semester 2",value:"/SM2/"}]},"class_code"),(0,r.jsx)(u,{title:"Subject",dataIndex:"subj_name"},"subj_name")]})})},f=n(9288),m=n(7294);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(e){var t=function(t,n){return function(t){return j(new Set(e.map(t)))}(t).map((function(e){return{value:e,label:(0,r.jsxs)("div",{className:"demo-option-label-item",children:[e,(0,r.jsx)("span",{style:{paddingLeft:"0.2em",textTransform:"uppercase",fontSize:"0.8em",color:"gray"},children:n})]})}}))};return j(t((function(e){return e.location}),"Room")).concat(j(t((function(e){return e.subj_code}),"Subj")),j(t((function(e){return e.subj_name}),"Subj")))},p=function(e){var t=e.data,n=e.onChange,a=(0,m.useMemo)((function(){return x(t)}),t);return(0,r.jsx)(f.Z,{allowClear:!0,style:{width:"100%"},showSearch:!0,placeholder:"Search (room, subject code, name)",optionFilterProp:"label",options:a,onChange:n,filterOption:function(e,t){var n=(e=e.toLowerCase()).split(" "),r=t.value.toLowerCase(),a=r.split(" ");return console.log(a),n.every((function(e){return r.includes(e)}))||e.split("").every((function(e,t){return a.length>t&&a[t][0]==e}))},filterSort:function(e,t){return e.value.toLowerCase().localeCompare(t.value.toLowerCase())}})},b=(n(5730),n(7961)),v=n(5611),_=n(841),w=b.Z.TabPane,y=!0;function S(e){var t=e.timetableData,n=(0,m.useState)(t),o=n[0],i=n[1];return(0,r.jsxs)(l,{home:!0,children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:s})}),(0,r.jsxs)("section",{children:[(0,r.jsx)(p,{data:o,onChange:function(e){if(void 0!=e&&""!=e){var n=e.toLowerCase().split(" "),r=t.filter((function(e){var t=[e.location.toLowerCase(),e.subj_code.toLowerCase(),e.subj_name.toLowerCase()];return n.every((function(e){return t.some((function(t){return t.includes(e)}))}))}));i(r)}else i(t)}}),(0,r.jsxs)(b.Z,{defaultActiveKey:"1",children:[(0,r.jsx)(w,{tab:(0,r.jsxs)("span",{children:[(0,r.jsx)(v.Z,{}),"Table"]}),children:(0,r.jsx)(d,{data:o})},"1"),(0,r.jsx)(w,{disabled:!0,tab:(0,r.jsxs)("span",{children:[(0,r.jsx)(_.Z,{}),"Calendar"]}),children:"To be implemented"},"2")]})]})]})}},3017:function(e){e.exports={container:"layout_container__6rKGf",header:"layout_header__IuhhG"}}},function(e){e.O(0,[965,784,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);