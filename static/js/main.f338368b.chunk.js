(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={counterValue:"Statistics_counterValue__xXHJ3",title:"Statistics_title__33alU",counter:"Statistics_counter__2TGms"}},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(2),o=a.n(c),s=a(5),i=a.n(s),r=(a(16),a(6)),l=a(7),u=a(8),d=a(10),b=a(9),j=a(1),h=a.n(j);var O=function(t){var e=t.good,a=t.neutral,c=t.bad,o=t.total,s=t.positiveFeedback;return Object(n.jsxs)("ul",{className:h.a.counter,children:[Object(n.jsxs)("li",{className:h.a.counterValue,children:["Good: ",e]}),Object(n.jsxs)("li",{className:h.a.counterValue,children:["Neutral: ",a]}),Object(n.jsxs)("li",{className:h.a.counterValue,children:["Bad: ",c]}),Object(n.jsxs)("li",{className:h.a.counterValue,children:["Total: ",o]}),Object(n.jsxs)("li",{className:h.a.counterValue,children:["Positive feedback: ",s,"%"]})]})},f=a(3),x=a.n(f);var k=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{id:"good",type:e,className:x.a.btn,onClick:function(){return a("good")},children:"Good"}),Object(n.jsx)("button",{id:"neutral",type:e,className:x.a.btn,onClick:function(){return a("neutral")},children:"Neutral"}),Object(n.jsx)("button",{id:"bad",type:e,className:x.a.btn,onClick:function(){return a("bad")},children:"Bad"})]})},v=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.total=0,t.positiveFeedback=0,t.onAddition=function(e){t.setState((function(t){return Object(r.a)({},e,Number(t[e]+1))})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.countTotalFeedback=function(){t.setState((function(t){return{total:t.good+t.neutral+t.bad}}))},t.countPositiveFeedbackPercentage=function(){t.setState((function(t){return{positiveFeedback:Math.round(t.good/t.total*100)}}))},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:h.a.title,children:"Please leave feedback"}),Object(n.jsx)(k,{options:"button",onLeaveFeedback:this.onAddition}),Object(n.jsxs)("div",{className:h.a.counter,children:[Object(n.jsx)("h2",{className:h.a.title,children:"Statistics"}),Object(n.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positiveFeedback:this.state.positiveFeedback})]})]})}}]),a}(c.Component);function p(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(v,{})})}i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))},3:function(t,e,a){t.exports={btn:"FeedbackOptions_btn__3tT9D"}}},[[17,1,2]]]);
//# sourceMappingURL=main.f338368b.chunk.js.map