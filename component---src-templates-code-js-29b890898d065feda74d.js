(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{593:function(e,t,a){"use strict";a.r(t);a(21);var r=a(0),n=a.n(r),l=a(590),i=a(55),s=a(592),c=a(591),m=a(599),o=a(600);t.default=function(e){var t=e.pageContext.data,a=t.reply,r=t.description,u=t.providers,d=t.otherCodes,f=Object(l.orderBy)(u,[function(e){return e.name.toLowerCase()}]),p=Object(l.orderBy)(d,[function(e){return e.reply}]);return n.a.createElement(s.a,null,n.a.createElement(c.a,{title:a+" SMTP code"}),n.a.createElement("div",{className:"masthead"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"masthead_title"},"Reply code ",a),n.a.createElement("p",{className:"masthead_description",dangerouslySetInnerHTML:{__html:r}}),n.a.createElement(o.a,{list:f,identifierKey:"id",labelKey:"name"}))),n.a.createElement("div",{className:"container"},n.a.createElement(m.a,{list:f,titleKey:"id",titleLabelKey:"name",titleSlugPrefix:"/provider"}),n.a.createElement("div",null,n.a.createElement("h3",null,"Other codes"),n.a.createElement("ul",null,p.map((function(e){return n.a.createElement("li",{key:e.reply},n.a.createElement(i.a,{to:"/code"+e.slug},e.reply))}))))))}},599:function(e,t,a){"use strict";a(7);var r=a(0),n=a.n(r);t.a=function(e){var t=e.list,a=e.titleLabelKey,r=e.titleKey,s=e.titleSlugPrefix,c=e.identifierPrefix,m=void 0===c?"":c;return n.a.createElement(n.a.Fragment,null,t.map((function(e){return n.a.createElement(l,{key:e[r],identifierPrefix:m,identifier:e[r],label:e[a],titleSlugPrefix:s},e.responses.map((function(t){return n.a.createElement(i,{key:t.status,data:t,code:e[r],identifierPrefix:m})})))})))};var l=function(e){var t=e.children,a=e.identifier,r=e.identifierPrefix,l=e.label,i=""+r+a,s="#"+i,c=e.titleSlugPrefix+"/"+a;return n.a.createElement("section",{className:"response-list"},n.a.createElement("h3",{className:"response-list_name",id:i},n.a.createElement("a",{href:s},"#")," ",n.a.createElement("a",{href:c},l)),n.a.createElement("div",{className:"response-list_items"},t),n.a.createElement("a",{href:"#top",className:"response-list_top"},"↑ Back to top"))},i=function(e){var t=e.data,a=e.code,r=e.identifierPrefix,l=t.status,i=t.response,s=""+r+a+"_"+l.replace(/\./g,"_"),c="#"+s;return n.a.createElement("div",{id:s,className:"response-list_item"},n.a.createElement("a",{href:c,className:"response-list_item-anchor"},n.a.createElement("span",null,"#")),n.a.createElement("p",{className:"response-label"},i))}},600:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.list,a=e.identifierKey,r=e.identifierPrefix,l=void 0===r?"":r,i=e.labelKey;return n.a.createElement("div",{className:"provider-jump"},n.a.createElement("h4",null,"Jump to ↓"),n.a.createElement("ul",null,t.map((function(e){return n.a.createElement("li",{key:e[a]},n.a.createElement("a",{href:"#"+l+e[a]},e[i]))}))))}}}]);
//# sourceMappingURL=component---src-templates-code-js-29b890898d065feda74d.js.map