(this["webpackJsonpalgorithm-learn"]=this["webpackJsonpalgorithm-learn"]||[]).push([[0],{10:function(e,n,t){e.exports=t(17)},15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(4),l=t.n(o),c=(t(15),t(5)),i=t(6),u=t(8),s=t(7),f=t(9);var h=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"\u7b97\u6cd5\u5b66\u4e60\u8bb0\u5f55"),a.a.createElement("p",null,"\u70b9\u51fb\u67e5\u770b\u6267\u884c\u7ed3\u679c\uff0cconsole"),a.a.createElement("hr",null))},m=t(2),g=(t(16),function(){var e=function(e){var n=e.trim(),t=/^[+-]?\d+/.exec(n);if(t){var r=parseInt(t[0]);return r>2147483647?2147483647:r<-2147483648?-2147483648:r}return 0}("-91283472332-=");return console.log(e),e}),v=function(){var e=function e(n){return n.reduce((function(n,t){return n.concat(Array.isArray(t)?e(t):t)}),[])}([1,2,3,[4,5,6,[7,8]]]);return console.log(e),e},d=t(1);function p(e,n,t){for(;n>=0&&t<e.length&&e.charAt(n)===e.charAt(t);)n--,t++;return t-n-1}var b=function(){var e=function(e){for(var n="",t=0;t<e.length;t++){var r=p(e,t,t),a=p(e,t,t+1),o=Math.max(r,a);o>n.length&&(n=e.substr(t-Math.floor((o-1)/2),o))}return n}("abcabcabcabccedabbac");return console.log(e),e},y=function(e){for(var n=null,t=e;t;)t=e.next,e.next=n,n=e,e=t;return n};y=function(e){if(null==e||null==e.next)return e;var n=y(e.next);return e.next.next=e,e.next=null,n},y=function(e){return function e(n,t){if(!t)return n;var r=t.next;return t.next=n,e(t,r)}(null,e)};function j(e){this.val=e,this.next=null}var w=new j(1);w.next=new j(2),w.next.next=new j(3),w.next.next.next=new j(4);var E=function(){var e=JSON.stringify(w),n=y(w);return console.log("old",e),console.log("new",n),JSON.stringify(n)};function x(e){this.val=e,this.left=this.right=null}var k=new x(1);k.left=new x(2),k.right=new x(2),k.left.left=new x(3),k.right.right=new x(3),k.left.right=new x(4),k.right.left=new x(4);var O=function(){var e=function(e){if(null===e)return!0;for(var n=[e.left,e.right];n.length>0;){var t=n.shift(),r=n.shift();if(null!==t||null!=r){if(null===t||null===r)return!1;if(t.val!==r.val)return!1;n.push(t.left,r.right),n.push(t.right,r.left)}}return!0}(k);return console.log(k,e),"isSymmetric ".concat(e)},_=function(){var e=function(e,n){for(var t=new Array(n).fill(0),r=0,a=1;e>0;)a>e&&(a=e),t[r]+=a,e-=a,a+=1,r=++r%n;return console.log(t),t}(16,3);return console.log(e),JSON.stringify(e)},S=function(){var e=function(e){var n=[];if(1===e)return n;for(var t=1,r=2,a=0,o=Math.ceil(e/2);t<o&&t<r;)if((a=(t+r)*(r-t+1)/2)<e)r++;else if(a===e){for(var l=[],c=t;c<=r;c++)l.push(c);n.push(l),t++,r++}else t++;return n}(15);return console.log(e),JSON.stringify(e)},L=function(e){var n=[];return null!==e&&(n.push(e.val),n.push.apply(n,Object(d.a)(L(e.left))),n.push.apply(n,Object(d.a)(L(e.right)))),n};L=function(e){for(var n=[],t=[],r=e;null!==r||t.length>0;)null!==r?(n.push(r.val),t.push(r),r=r.left):r=t.pop().right;return n};function N(e){this.val=e,this.left=this.right=null}var z=new N(1);z.left=new N(2),z.right=new N(2),z.left.left=new N(3),z.right.right=new N(3),z.left.right=new N(4),z.right.left=new N(4);var A=function(){var e=L(z);return console.log(e),JSON.stringify(e)},J=function(){var e=function(e){var n=0;if(0===e.length)return n;var t=e[0],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;i<t?t=i:i-t>n&&(n=i-t)}}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}([2,1,2,0,1,5,4,1,6]);return console.log(e),JSON.stringify("max profit: ".concat(e))};function M(e){this.val=e,this.left=this.right=null}var C=new M(1);C.left=new M(2),C.right=new M(3);var T=new M(1);T.left=new M(2),T.right=new M(3);var B=function(){var e=function e(n,t){return null===n&&null===t||null!==n&&null!==t&&(n.val===t.val&&e(n.left,t.left)&&e(n.right,t.right))}(C,T);return console.log(C,T,e),"isSame tree ".concat(e)};function I(e){this.val=e,this.left=this.right=null}var P=new I(1);P.left=new I(2),P.right=new I(3),P.left.left=new I(4),P.left.right=new I(5);var q=function(){var e=function(e){var n=0;return function e(t){if(null===t)return 0;var r=e(t.left),a=e(t.right);return n=Math.max(n,r+a),Math.max(r,a)+1}(e),n}(P);return console.log(e),"depth ".concat(e)};function R(e,n,t){for(var r=0,a=n;a<t;a++)r+=e[a];return r}var W=function(){var e=function(e){if(e.length<3)return!1;for(var n=0,t=0,r=1;r<e.length-1;r++){n+=e[r-1],t=0;for(var a=r+1;a<e.length;a++)if(n===(t+=e[a-1])&&n===R(e,a,e.length))return!0}return!1}([3,3,6,5,-2,2,5,1,-9,4]);return console.log(e),"".concat(e)};function $(e,n){return new RegExp("^(".concat(e,")+$"),"i").test(n)}function D(e,n){var t=e%n;return 0===t?n:D(n,t)}var F=function(){var e=function(e,n){var t=e.length,r=n.length;if(0===t||0===r)return"";var a=1;a=t>r?D(t,r):D(r,t);var o=e.substr(0,a);return $(o,e)&&$(o,n)?e.substr(0,a):""}("aaaa","aaaaab");return console.log(e),"gcd of string: ".concat(e)},G=function(){var e=[1,2,1,2,1,2,1,2,2],n=function(e){var n=new Map,t=1,r=e[0],a=!0,o=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var u=c.value;n.has(u)?(n.set(u,n.get(u)+1),n.get(u)>t&&(r=u,t=n.get(u))):n.set(u,1)}}catch(s){o=!0,l=s}finally{try{a||null==i.return||i.return()}finally{if(o)throw l}}return r}(e);return console.log(n),"majorityElement ".concat(e," ").concat(n)},H={func:function(){var e=function(e){for(var n="",t="",r=0,a=0;a<e.length;a++)t===e.charAt(a)?r++:(r>0&&(n+=t+r),t=e.charAt(a),r=1);return n+=t+r,e.length>n.length?n:e}("aabcaaaaa");return console.log(e),"compress ".concat("aabcaaaaa"," : ").concat(e)},title:"01.06 \u5b57\u7b26\u4e32\u538b\u7f29"};function K(e){var n=new Map,t=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var c=o.value;n.has(c)?n.set(c,n.get(c)+1):n.set(c,1)}}catch(i){r=!0,a=i}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}return n}function Q(e,n){var t=!0,r=!1,a=void 0;try{for(var o,l=e.keys()[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var c=o.value;if(!n.has(c)||n.get(c)<e.get(c))return!1}}catch(i){r=!0,a=i}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}return!0}var U={func:function(){var e=["cat","bt","hat","tree"],n=function(e,n){var t=K(n),r=0,a=!0,o=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var u=c.value,s=K(u);Q(s,t)&&(console.log(s,t),r+=u.length)}}catch(f){o=!0,l=f}finally{try{a||null==i.return||i.return()}finally{if(o)throw l}}return r}(e,"atach");return console.log(n),"\u62fc\u5199\u5355\u8bcd ".concat(e," ").concat("atach"," : ").concat(n)},title:"1160. \u62fc\u5199\u5355\u8bcd"};function V(e,n){return 2===e.length&&2===n.length&&(e[0]<=n[0]?e[1]>n[0]:e[0]<n[1])}var X={func:function(){var e=[0,0,2,2],n=[1,1,3,3],t=function(e,n){var t=Object(m.a)(e,4),r=t[0],a=t[1],o=t[2],l=t[3],c=Object(m.a)(n,4),i=c[0],u=c[1],s=c[2],f=c[3];return V([r,o],[i,s])&&V([a,l],[u,f])}(e,n);return console.log(t),"\u77e9\u5f62\u91cd\u53e0 ".concat(e," ").concat(n," : ").concat(t)},title:"836. \u77e9\u5f62\u91cd\u53e0"};function Y(e){this.val=e,this.left=this.right=null}var Z=new Y(1);Z.left=new Y(2),Z.right=new Y(3),Z.right.right=new Y(4),Z.right.right.right=new Y(4);var ee={func:function(){var e=function e(n){if(null===n)return 0;var t=e(n.left),r=e(n.right);return Math.max(t,r)+1}(Z);return console.log(Z),console.log(e),"\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6 ".concat(e)},title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",leetLink:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/js-hou-xu-bian-li-by-egerton/",file:"leetcode_js/maxDepth.js"},ne="https://github.com/andycao/algorithmLearn/blob/master/src/";function te(e){return a.a.createElement("li",null,a.a.createElement("span",null,e.name),a.a.createElement("span",{className:"link",onClick:function(){window.open(ne+e.source)}},"\u6e90\u7801"),a.a.createElement("span",{className:"link",onClick:e.func},"\u8fd0\u884c"),e.leetLink?a.a.createElement("span",{className:"link",onClick:function(){window.open(e.leetLink)}},"leetcode\u9898\u89e3"):null)}var re=function(){var e=Object(r.useState)(),n=Object(m.a)(e,2),t=n[0],o=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,a.a.createElement(te,{func:function(){o(b())},name:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",source:"leetcode_js/longestPalindrome.js"}),a.a.createElement(te,{func:function(){o(g())},name:"8. \u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570 (atoi)",source:"leetcode_js/myAtoi_leetcode08.js"}),a.a.createElement(te,{func:function(){o(v())},source:"leetcode_js/flatten.js",name:"\u624b\u5199flat"}),a.a.createElement(te,{func:function(){o(E())},name:"\u53cd\u8f6c\u94fe\u8868",source:"leetcode_js/reverseLinkedList.js"}),a.a.createElement(te,{func:function(){o(O())},name:"\u955c\u50cf\u4e8c\u53c9\u6811",source:"leetcode_js/mirrorTree101.js"}),a.a.createElement(te,{func:function(){o(_())},name:"1103.\u5206\u7cd6\u679c2",source:"leetcode_js/candies2.js",leetLink:"https://leetcode-cn.com/problems/distribute-candies-to-people/solution/js-shu-zu-by-egerton/"}),a.a.createElement(te,{func:function(){o(S())},name:"57 - II \u8fde\u7eed\u6b63\u6574\u6570\u5e8f\u5217",source:"leetcode_js/findContinuousSequence.js",leetLink:"https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/javascript-shuang-zhi-zhen-hua-dong-chuang-kou-by-/"}),a.a.createElement(te,{func:function(){o(A())},name:"144.\u4e8c\u53c9\u6811\u5148\u5e8f\u904d\u5386",source:"leetcode_js/preorderTraversal.js",leetLink:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/di-gui-zan-cun-zhan-by-egerton/"}),a.a.createElement(te,{func:function(){o(J())},name:"121. \u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",source:"leetcode_js/maxProfit.js"}),a.a.createElement(te,{func:function(){o(J())},name:"121. \u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",source:"leetcode_js/maxProfit.js"}),a.a.createElement(te,{func:function(){o(B())},name:"100. \u76f8\u540c\u7684\u6811",source:"leetcode_js/isSameTree.js",leetLink:"https://leetcode-cn.com/problems/same-tree/solution/javascript-xian-xu-bian-li-by-egerton/"}),a.a.createElement(te,{func:function(){o(q())},name:"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",source:"leetcode_js/diameterOfBinaryTree.js"}),a.a.createElement(te,{func:function(){o(W())},name:"1013.\u6570\u7ec4\u4e09\u7b49\u5206",source:"leetcode_js/diameterOfBinaryTree.js"}),a.a.createElement(te,{func:function(){o(F())},name:"1071. \u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50",source:"leetcode_js/gcdOfStrings.js",leetLink:"https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/qie-fen-zheng-ze-biao-da-shi-by-egerton/"}),a.a.createElement(te,{func:function(){o(G())},name:"169. \u591a\u6570\u5143\u7d20",source:"leetcode_js/majorityElement.js",leetLink:"https://leetcode-cn.com/problems/majority-element/solution/js-bao-li-fa-you-hua-by-egerton/"}),a.a.createElement(te,{func:function(){o(H.func)},name:H.title,source:"leetcode_js/compressString.js",leetLink:"https://leetcode-cn.com/problems/compress-string-lcci/solution/js-bian-li-by-egerton/"}),a.a.createElement(te,{func:function(){o(U.func)},name:U.title,source:"leetcode_js/countChars.js",leetLink:"https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/solution/js-bao-li-fa-by-egerton-2/"}),a.a.createElement(te,{func:function(){o(X.func)},name:X.title,source:"leetcode_js/isRectangleOverlap.js"}),a.a.createElement(te,{func:function(){o(ee.func)},name:ee.title,source:ee.file,leetLink:ee.leetLink})),a.a.createElement("div",{className:"result"},t))},ae=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(h,null),a.a.createElement(re,null))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7d5592cc.chunk.js.map