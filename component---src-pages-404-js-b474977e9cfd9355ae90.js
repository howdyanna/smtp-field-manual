(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{603:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(597),o=t(596),i=t(606),l=t(608);a.default=function(){return r.a.createElement(s.a,{invertHeader:!0},r.a.createElement(o.a,{title:"404: Page not found"}),r.a.createElement("div",{className:"container u-push-top"},r.a.createElement("h2",{className:"u-center"},"ಥ_ಥ",r.a.createElement("br",null),"This page has gone missing."),r.a.createElement("div",{className:"divider u-push-top"}),r.a.createElement(l.a,null),r.a.createElement(i.a,null)))}},606:function(e,a,t){"use strict";t(21);var n=t(607),r=t(0),s=t.n(r),o=t(32),i=t(595),l=t(126);a.a=function(){var e=n.data;return e=l.flatten(e.allEmailProvidersJson),e=Object(i.orderBy)(e,[function(e){return e.name.toLowerCase()}]),s.a.createElement("section",{className:"list-section"},s.a.createElement("div",{className:"list-section_title"},s.a.createElement("h3",null,"Email providers")),s.a.createElement("div",{className:"list-section_content"},s.a.createElement("p",null,"View SMTP responses for a specific email service provider."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},e.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(o.a,{to:"/provider/"+e.id},e.name))})))))}},607:function(e){e.exports=JSON.parse('{"data":{"allEmailProvidersJson":{"edges":[{"node":{"name":"Gmail","id":"gmail","slug":"/gmail"}},{"node":{"name":"AT&T","id":"att","slug":"/att"}},{"node":{"name":"Comcast","id":"comcast","slug":"/comcast"}},{"node":{"name":"Hotmail","id":"hotmail","slug":"/hotmail"}},{"node":{"name":"iCloud","id":"icloud","slug":"/icloud"}},{"node":{"name":"Mail.ru","id":"mailru","slug":"/mailru"}},{"node":{"name":"Outlook","id":"outlook","slug":"/outlook"}},{"node":{"name":"Yandex","id":"yandex","slug":"/yandex"}},{"node":{"name":"Zoho","id":"zoho","slug":"/zoho"}}]}}}')},608:function(e,a,t){"use strict";var n=t(609),r=t(0),s=t.n(r),o=t(32),i=t(595),l=t(126);a.a=function(){var e=n.data;return e=l.flatten(e.allCodesJson),e=Object(i.orderBy)(e,[function(e){return e.reply}]),s.a.createElement("section",{className:"list-section"},s.a.createElement("div",{className:"list-section_title"},s.a.createElement("h3",null,"SMTP codes")),s.a.createElement("div",{className:"list-section_content"},s.a.createElement("h4",{className:"code-title"},"4.X.X Persistent transient failure"),s.a.createElement("p",null,"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},c(e,4).map((function(e){return d(e)}))),s.a.createElement("h4",{className:"code-title u-push-top"},"5.X.X permanent error"),s.a.createElement("p",null,"The mail server has encounted a permanent error. These errors will result in the SMTP connection being dropped. Re-sending will usually produce the same result."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},c(e,5).map((function(e){return d(e)})))))};var c=function(e,a){return Object(i.filter)(e,(function(e){return Object(i.startsWith)(e.reply,a)}))},d=function(e){return s.a.createElement("li",{key:e.reply},s.a.createElement(o.a,{to:"/code/"+e.reply},e.reply))}},609:function(e){e.exports=JSON.parse('{"data":{"allCodesJson":{"edges":[{"node":{"id":"2ddb6c62-1490-5d13-baed-b2660521d9aa","description":"","reply":421,"slug":"/421"}},{"node":{"id":"f9ca30dc-9569-5d5f-b18e-4ea1f8fedc1e","description":"","reply":422,"slug":"/422"}},{"node":{"id":"ec1b8226-7224-5bda-9a84-56d43e5fd6ea","description":"","reply":450,"slug":"/450"}},{"node":{"id":"cf42b8ba-72dc-5a48-bc53-5453c4efc527","description":"","reply":452,"slug":"/452"}},{"node":{"id":"88eda900-b9f5-5e6d-b4b7-6930f17216f2","description":"","reply":501,"slug":"/501"}},{"node":{"id":"9482715f-7ca6-5c81-9039-63a17a7692e0","description":"Something about the code.","reply":471,"slug":"/471"}},{"node":{"id":"db41fbf0-faf0-57ce-a232-99ccb7f9a686","description":"","reply":552,"slug":"/552"}},{"node":{"id":"fabd7546-7b26-5593-80c6-e788a740cd19","description":"","reply":553,"slug":"/553"}},{"node":{"id":"c7bb5c82-9340-5329-82a4-bce81e4a6344","description":"The transaction failed permantently. The server will not try to send the message again. This is used as a general error code, so there are many reasons why you could be seeing it.<br><br>It’s common for email service providers to add a status code (5.1.1) after the SMTP reply code (smtp;550) for additional categorization of the issue.","reply":550,"slug":"/550"}},{"node":{"id":"b1c987a1-5637-52c0-9da5-0a2edbcc1429","description":"","reply":451,"slug":"/451"}},{"node":{"id":"d309bd96-4922-50d9-a7db-62a3acb4ac74","description":"The transaction failed permantently. The server will not try to send the message again. This is used as a general error code, so there are many reasons why you could be seeing it.<br><br>It’s common for email service providers to add a status code (5.1.1) after the SMTP reply code (smtp;550) for additional categorization of the issue.","reply":554,"slug":"/554"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-404-js-b474977e9cfd9355ae90.js.map