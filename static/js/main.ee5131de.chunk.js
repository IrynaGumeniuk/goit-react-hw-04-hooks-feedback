(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),o=n.n(a),s=n(3),b=n(0),i=function(e){var t=e.title,n=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:t}),n]})},u=n(2),j=n.n(u),d=function(e){var t=e.counter;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:j.a.btn,children:[Object(b.jsx)("button",{className:j.a.button,name:"good",type:"button",onClick:t,children:"Good"}),Object(b.jsx)("button",{className:j.a.button,name:"neutral",type:"button",onClick:t,children:"Neutral"}),Object(b.jsx)("button",{className:j.a.button,name:"bad",type:"button",onClick:t,children:"Bad"})]})})},l=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Statistic:"}),r>0?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Good: ",t]}),Object(b.jsxs)("p",{children:["Neutral: ",n]}),Object(b.jsxs)("p",{children:["Bad: ",c]}),Object(b.jsxs)("p",{children:["Total: ",r]}),Object(b.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]}):Object(b.jsx)("p",{children:"No feedback given"})]})};function h(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),o=Object(s.a)(a,2),u=o[0],j=o[1],h=Object(c.useState)(0),O=Object(s.a)(h,2),x=O[0],f=O[1],p={good:n,neutral:u,bad:x},g=function(){return Object.values(p).reduce((function(e,t){return e+t}),0)};return Object(b.jsxs)(i,{title:"Please leave feedback",children:[Object(b.jsx)(d,{counter:function(e){switch(e.target.name){case"good":return r((function(e){return e+1}));case"neutral":return j((function(e){return e+1}));case"bad":return f((function(e){return e+1}))}}}),Object(b.jsx)(l,{good:n,neutral:u,bad:x,total:g(),positivePercentage:Math.round(n/g()*100)})]})}o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={btn:"Feedback_btn__2l22B",button:"Feedback_button__1E_-H"}}},[[11,1,2]]]);
//# sourceMappingURL=main.ee5131de.chunk.js.map