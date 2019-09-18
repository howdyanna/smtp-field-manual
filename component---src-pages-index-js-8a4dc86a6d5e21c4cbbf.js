(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{597:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(57),l=t(592),s=t(591),i=t(324),c=t(601),d=t(603),m=t(322);a.default=function(){return n.a.createElement(l.a,{hideSearch:!0},n.a.createElement(s.a,{title:"SMTP Field Manual"}),n.a.createElement("div",{className:"hero"},n.a.createElement("div",{className:"hero_container"},n.a.createElement("h2",{className:"hero_title"},"A collection of raw SMTP responses spotted in the wild"),n.a.createElement("p",{className:"hero_description"},"Find a specific SMTP code or email provider"),n.a.createElement("div",{className:"hero_search"},n.a.createElement(i.a,{indices:m.a})),n.a.createElement("p",{className:"hero_postmark"},"Brought to you by"," ",n.a.createElement("a",{href:"https://postmarkapp.com",rel:"noopener noreferrer",target:"_blank",className:"hero_postmark-icon"},"Postmark")))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"list-section"},n.a.createElement("h3",null,"SMTP Field Manual"),n.a.createElement("p",null,"The SMTP field manual is a collection of raw STMP server responses from major email service providers. This serves as a troubleshooting tool for email professionals."),n.a.createElement("p",null,"We’ve open sourced the SMTP Field Manual so that anyone can add or edit SMTP responses. See something interesting from an email service provider or simply have a suggestion? Let us know."),n.a.createElement("p",null,n.a.createElement(r.a,{to:"/contribute"},"Contribute →"))),n.a.createElement("div",{id:"codes"},n.a.createElement(d.a,null)),n.a.createElement("div",{id:"providers"},n.a.createElement(c.a,null))))}},598:function(e,a){a.flatten=function(e){return e.edges.map((function(e){return e.node}))}},601:function(e,a,t){"use strict";t(21);var o=t(602),n=t(0),r=t.n(n),l=t(57),s=t(590),i=t(598);a.a=function(e){var a=e.showTitle,t=void 0===a||a,n=o.data;return n=i.flatten(n.allEmailProvidersJson),n=Object(s.orderBy)(n,[function(e){return e.name.toLowerCase()}]),r.a.createElement("section",{className:"list-section"},t&&r.a.createElement("h3",null,"Email providers"),r.a.createElement("p",null,"See all of the collected SMTP responses for a specific email service provider."),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.a,{to:"/provider/"+e.id},e.name))}))))}},602:function(e){e.exports=JSON.parse('{"data":{"allEmailProvidersJson":{"edges":[{"node":{"name":"Gmail","id":"gmail","slug":"/gmail"}},{"node":{"name":"AT&T","id":"att","slug":"/att"}},{"node":{"name":"Comcast","id":"comcast","slug":"/comcast"}},{"node":{"name":"Hotmail","id":"hotmail","slug":"/hotmail"}},{"node":{"name":"iCloud","id":"icloud","slug":"/icloud"}},{"node":{"name":"Mail.ru","id":"mailru","slug":"/mailru"}},{"node":{"name":"Outlook","id":"outlook","slug":"/outlook"}},{"node":{"name":"Yandex","id":"yandex","slug":"/yandex"}},{"node":{"name":"Zoho","id":"zoho","slug":"/zoho"}}]}}}')},603:function(e,a,t){"use strict";var o=t(604),n=t(0),r=t.n(n),l=t(57),s=t(590),i=t(598);a.a=function(e){var a=e.showTitle,t=void 0===a||a,n=o.data;return n=i.flatten(n.allCodesJson),n=Object(s.orderBy)(n,[function(e){return e.reply}]),r.a.createElement("section",{className:"list-section"},t&&r.a.createElement("h3",null,"SMTP codes"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.reply},r.a.createElement(l.a,{to:"/code/"+e.reply},e.reply))}))))}},604:function(e){e.exports=JSON.parse('{"data":{"allCodesJson":{"edges":[{"node":{"id":"58c0cc69-9ac1-5858-8359-96bd4796de5d","description":"The transaction failed permantently. The server will not try to send the message again. This is used as a general error code, so there are many reasons why you could be seeing it.<br><br>It’s common for email service providers to add a status code (5.1.1) after the SMTP reply code (smtp;550) for additional categorization of the issue.","reply":550,"slug":"/550"}},{"node":{"id":"d2f04a52-d1df-5549-a29a-e7609c3c2f0c","description":"Something about the code.","reply":471,"slug":"/471"}},{"node":{"id":"8245be59-f5cf-5536-81c5-450d1e3916ba","description":"The transaction failed permantently. The server will not try to send the message again. This is used as a general error code, so there are many reasons why you could be seeing it.<br><br>It’s common for email service providers to add a status code (5.1.1) after the SMTP reply code (smtp;550) for additional categorization of the issue.","reply":554,"slug":"/554"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-8a4dc86a6d5e21c4cbbf.js.map