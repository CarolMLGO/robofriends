(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(13),n(1)),l=n(2),s=n(4),h=n(3),u=n(5),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",width:"200",height:"200",src:"https://robohash.org/".concat(a)}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})}))},b=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--gree bg-lightest-blue",type:"search",onChange:t,placeholder:"search robots"}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid yellow",height:"600px"}},e.children)},p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Something went wrong. "):this.props.children}}]),t}(a.Component),g=(n(15),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RobotFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{robots:a})))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.d574452d.chunk.js.map