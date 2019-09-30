(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{605:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(39),i=t(598),l=t(597),o=t(325),c=t(608),m=(t(21),t(614)),d=t(596),u=t(221),p=function(){var e=m.data;return e=u.flatten(e.allSpamFiltersJson),e=Object(d.orderBy)(e,[function(e){return e.name.toLowerCase()}]),n.a.createElement("section",{className:"list-section"},n.a.createElement("div",{className:"list-section_title"},n.a.createElement("h3",null,"Spam filters")),n.a.createElement("div",{className:"list-section_content"},n.a.createElement("p",null,"View SMTP responses for a specific spam filter service."),n.a.createElement("ul",{className:"columns-3 columns-diamond"},e.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(s.a,{to:"/spamfilter/"+e.id},e.name))})))))},h=t(610),f=t(222),y=t(323);a.default=function(){return n.a.createElement(i.a,{hideSearch:!0},n.a.createElement(l.a,{description:"A collection of raw STMP server responses from major email service providers and spam filter services."}),n.a.createElement("div",{className:"hero"},n.a.createElement("div",{className:"hero_container"},n.a.createElement("h2",{className:"hero_title"},"A collection of raw SMTP responses spotted in the wild"),n.a.createElement("p",{className:"hero_description"},"Find a specific SMTP code or email provider"),n.a.createElement("div",{className:"hero_search"},n.a.createElement(o.a,{indices:y.a})),n.a.createElement("p",{className:"hero_postmark"},"Brought to you by ",n.a.createElement("span",{className:"hero_postmark-icon"}),n.a.createElement("a",{href:"https://postmarkapp.com",rel:"noopener noreferrer",target:"_blank",className:"hero_postmark-link"},"Postmark"),"."," ",n.a.createElement(s.a,{to:"/why",className:"hero_postmark-link"},"Why we built this →")))),n.a.createElement(f.a,{updateOnScroll:!0}),n.a.createElement("div",{className:"container-index"},n.a.createElement("div",{id:"codes",className:"u-push-top"},n.a.createElement(h.a,null)),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{id:"providers"},n.a.createElement(c.a,null)),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{id:"spamfilters"},n.a.createElement(p,null)),n.a.createElement("div",{className:"divider"}),n.a.createElement("section",{className:"list-section u-push-top"},n.a.createElement("div",{className:"list-section_title"},n.a.createElement("h3",null,"SMTP Field Manual")),n.a.createElement("div",{className:"list-section_content"},n.a.createElement("p",null,"The SMTP field manual is a collection of raw STMP server responses from major email service providers. It’s open source so anyone make contributions. Even you! See something interesting from an email service provider or simply have a suggestion?"," ",n.a.createElement(s.a,{to:"/contribute"},"Let us know"),"."),n.a.createElement("p",null,n.a.createElement(s.a,{to:"/why"},"Why we built this →"))))))}},608:function(e,a,t){"use strict";t(21);var r=t(609),n=t(0),s=t.n(n),i=t(39),l=t(596),o=t(221);a.a=function(){var e=r.data;return e=o.flatten(e.allEmailProvidersJson),e=Object(l.orderBy)(e,[function(e){return e.name.toLowerCase()}]),s.a.createElement("section",{className:"list-section"},s.a.createElement("div",{className:"list-section_title"},s.a.createElement("h3",null,"Email providers")),s.a.createElement("div",{className:"list-section_content"},s.a.createElement("p",null,"View SMTP responses for a specific email service provider."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},e.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(i.a,{to:"/provider/"+e.id},e.name))})))))}},609:function(e){e.exports=JSON.parse('{"data":{"allEmailProvidersJson":{"edges":[{"node":{"name":"Gmail","id":"gmail","slug":"/gmail"}},{"node":{"name":"AT&T","id":"att","slug":"/att"}},{"node":{"name":"Comcast","id":"comcast","slug":"/comcast"}},{"node":{"name":"Hotmail","id":"hotmail","slug":"/hotmail"}},{"node":{"name":"iCloud","id":"icloud","slug":"/icloud"}},{"node":{"name":"Mail.ru","id":"mailru","slug":"/mailru"}},{"node":{"name":"Outlook","id":"outlook","slug":"/outlook"}},{"node":{"name":"Yandex","id":"yandex","slug":"/yandex"}},{"node":{"name":"Zoho","id":"zoho","slug":"/zoho"}}]}}}')},610:function(e,a,t){"use strict";var r=t(611),n=t(0),s=t.n(n),i=t(39),l=t(596),o=t(221);a.a=function(){var e=r.data;return e=o.flatten(e.allCodesJson),e=Object(l.orderBy)(e,[function(e){return e.reply}]),s.a.createElement("section",{className:"list-section"},s.a.createElement("div",{className:"list-section_title"},s.a.createElement("h3",null,"SMTP codes")),s.a.createElement("div",{className:"list-section_content"},s.a.createElement("h4",{className:"code-title"},"4.X.X Persistent transient failure"),s.a.createElement("p",null,"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},c(e,4).map((function(e){return m(e)}))),s.a.createElement("h4",{className:"code-title u-push-top"},"5.X.X permanent error"),s.a.createElement("p",null,"The mail server has encounted a permanent error. These errors will result in the SMTP connection being dropped. Re-sending will usually produce the same result."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},c(e,5).map((function(e){return m(e)})))))};var c=function(e,a){return Object(l.filter)(e,(function(e){return Object(l.startsWith)(e.reply,a)}))},m=function(e){return s.a.createElement("li",{key:e.reply},s.a.createElement(i.a,{to:"/code/"+e.reply},e.reply))}},611:function(e){e.exports=JSON.parse('{"data":{"allCodesJson":{"edges":[{"node":{"id":"f9ca30dc-9569-5d5f-b18e-4ea1f8fedc1e","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":422,"slug":"/422"}},{"node":{"id":"cf42b8ba-72dc-5a48-bc53-5453c4efc527","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":452,"slug":"/452"}},{"node":{"id":"2ddb6c62-1490-5d13-baed-b2660521d9aa","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":421,"slug":"/421"}},{"node":{"id":"ec1b8226-7224-5bda-9a84-56d43e5fd6ea","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":450,"slug":"/450"}},{"node":{"id":"b1c987a1-5637-52c0-9da5-0a2edbcc1429","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":451,"slug":"/451"}},{"node":{"id":"db41fbf0-faf0-57ce-a232-99ccb7f9a686","description":"The transaction failed permantently. The server will not try to send the message again. ","reply":552,"slug":"/552"}},{"node":{"id":"88eda900-b9f5-5e6d-b4b7-6930f17216f2","description":"","reply":501,"slug":"/501"}},{"node":{"id":"fabd7546-7b26-5593-80c6-e788a740cd19","description":"The transaction failed permantently. The server will not try to send the message again. ","reply":553,"slug":"/553"}},{"node":{"id":"d309bd96-4922-50d9-a7db-62a3acb4ac74","description":"The transaction failed permantently. The server will not try to send the message again. ","reply":554,"slug":"/554"}},{"node":{"id":"c7bb5c82-9340-5329-82a4-bce81e4a6344","description":"The transaction failed permantently. The server will not try to send the message again. This is used as a general error code, so there are many reasons why you could be seeing it.<br><br>It’s common for email service providers to add a status code (5.1.1) after the SMTP reply code (smtp;550) for additional categorization of the issue.","reply":550,"slug":"/550"}}]}}}')},614:function(e){e.exports=JSON.parse('{"data":{"allSpamFiltersJson":{"edges":[{"node":{"name":"Mimecast","id":"mimecast","slug":"/mimecast"}},{"node":{"name":"Proofpoint","id":"proofpoint","slug":"/proofpoint"}},{"node":{"name":"Office 365","id":"office365","slug":"/office365"}},{"node":{"name":"Barracuda","id":"barracuda","slug":"/barracuda"}},{"node":{"name":"Symantec","id":"symantec","slug":"/symantec"}},{"node":{"name":"ZeroSpam","id":"zerospam","slug":"/zerospam"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-6903deea72b80bafea1d.js.map