(this.webpackJsonpcoundownchamp=this.webpackJsonpcoundownchamp||[]).push([[0],{15:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(17),i=n.n(a),c=n(8),l=n(9),o=n(11),r=n(10),d=(n(15),n(18)),u=n.n(d),h=n(6),j=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).leading0=function(e){return e<10?"0"+e:e},s.state={days:0,hours:0,minutes:0,seconds:0},s}return Object(l.a)(n,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.props.deadline)}),1e3)}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60),a=Math.floor(t/36e5%24),i=Math.floor(t/864e5);this.setState({days:i,hours:a,minutes:s,seconds:n})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"Clock-days",children:[this.leading0(this.state.days)," Days"]}),Object(h.jsxs)("div",{className:"Clock-hours",children:[this.leading0(this.state.hours)," hours"]}),Object(h.jsxs)("div",{className:"Clock-minutes",children:[this.leading0(this.state.minutes)," minutes"]}),Object(h.jsxs)("div",{className:"Clock-seconds",children:[this.leading0(this.state.seconds)," seconds"]})]})}}]),n}(s.Component),m=n(31),v=n(19),b=n(32),p=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={deadline:"December 25 , 2021",newDeadline:""},s}return Object(l.a)(n,[{key:"changeDeadline",value:function(){var e=u()(this.state.newDeadline).format("MMMM DD, YYYY");this.setState({deadline:e})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"App-title",children:[" Countdown to ",this.state.deadline]}),Object(h.jsx)("div",{children:Object(h.jsx)(j,{deadline:this.state.deadline})}),Object(h.jsxs)(m.a,{inline:!0,className:"form-div",children:[Object(h.jsx)(v.a,{type:"date",className:"Deadline-input",placeholder:"new date",onChange:function(t){return e.setState({newDeadline:t.target.value})}}),Object(h.jsx)(b.a,{onClick:function(){return e.changeDeadline()},children:"Submit"})]})]})}}]),n}(s.Component);i.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5f7c0771.chunk.js.map