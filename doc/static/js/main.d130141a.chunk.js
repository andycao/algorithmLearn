(this["webpackJsonpalgorithm-learn"]=this["webpackJsonpalgorithm-learn"]||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},16:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),l=t(2),o=t.n(l),c=(t(14),t(3)),u=t(4),i=t(7),f=t(5),s=t(8);var m=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"\u7b97\u6cd5\u5b66\u4e60\u8bb0\u5f55"),a.a.createElement("p",null,"\u70b9\u51fb\u5982\u4e0b\u540d\u79f0\uff0c\u67e5\u770b\u6267\u884c\u6548\u679c"),a.a.createElement("hr",null))},h=(t(15),function(){console.log(function(n){var e=n.trim(),t=/^[+-]?\d+/.exec(e);if(t){var r=parseInt(t[0]);return r>2147483647?2147483647:r<-2147483648?-2147483648:r}return 0}("-91283472332-="))}),v=function(){console.log(function n(e){return e.reduce((function(e,t){return e.concat(Array.isArray(t)?n(t):t)}),[])}([1,2,3,[4,5,6,[7,8]]]))};t(6);function x(n,e,t){for(;e>=0&&t<n.length&&n.charAt(e)===n.charAt(t);)e--,t++;return t-e-1}var g=function(){console.log(function(n){for(var e="",t=0;t<n.length;t++){var r=x(n,t,t),a=x(n,t,t+1),l=Math.max(r,a);l>e.length&&(e=n.substr(t-Math.floor((l-1)/2),l))}return e}("dabbac"))},E=function(n){for(var e=null,t=n;t;)t=n.next,n.next=e,e=n,n=t;return e};E=function(n){if(null==n||null==n.next)return n;var e=E(n.next);return n.next.next=n,n.next=null,e},E=function(n){return function n(e,t){if(!t)return e;var r=t.next;return t.next=e,n(t,r)}(null,n)};function d(n){this.val=n,this.next=null}var w=new d(1);w.next=new d(2),w.next.next=new d(3),w.next.next.next=new d(4);var p=function(){var n=JSON.parse(JSON.stringify(w)),e=E(w);console.log("old",n),console.log("new",e)};function b(n){return a.a.createElement("li",{className:"link",onClick:n.func},n.name)}var k=function(){return a.a.createElement("ul",null,a.a.createElement(b,{func:g,name:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32"}),a.a.createElement(b,{func:h,name:"8. \u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570 (atoi)"}),a.a.createElement(b,{func:v,name:"\u624b\u5199flat"}),a.a.createElement(b,{func:p,name:"\u53cd\u8f6c\u94fe\u8868"}))},y=function(n){function e(){return Object(c.a)(this,e),Object(i.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m,null),a.a.createElement(k,null))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},9:function(n,e,t){n.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d130141a.chunk.js.map