(this["webpackJsonpalgorithm-learn"]=this["webpackJsonpalgorithm-learn"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(4),o=n.n(a),i=(n(15),n(5)),c=n(6),u=n(8),f=n(7),s=n(9);var h=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"\u7b97\u6cd5\u5b66\u4e60\u8bb0\u5f55"),l.a.createElement("p",null,"\u8fd0\u884c\u67e5\u770b\u6267\u884c\u7ed3\u679c\uff0cconsole"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://leetcode-cn.com/u/egerton/",target:"blank"},"\u6211\u7684Leetcode")),l.a.createElement("hr",null))},g=n(2),v=(n(16),function(e){return null===e||v(e.left)&&v(e.right)&&e.val>m(e.left)&&e.val<function(e){if(null===e)return Number.MAX_SAFE_INTEGER;return e.left?m(e.left):e.val}(e.right)});v=function(e){var t=Number.MIN_SAFE_INTEGER,n=!0;return function e(r){null!==r&&n&&(e(r.left),n=n&&r.val>t,t=r.val,e(r.right))}(e),n};function m(e){return null===e?Number.MIN_SAFE_INTEGER:e.right?m(e.right):e.val}function d(e){this.val=e,this.left=this.right=null}var p=new d(3);p.left=new d(2),p.right=new d(5),p.right.right=new d(6),p.right.left=new d(4),p.right.right.right=new d(7);var y={func:function(){var e=v(p);return console.log(p),console.log(e),"\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811 ".concat(e)},title:"98. \u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811",file:"leetcode_js/isValidBST.js",leetLink:"https://leetcode-cn.com/problems/validate-binary-search-tree/solution/shen-du-you-xian-zhong-xu-bian-li-by-egerton/"},b={func:function(){var e="aaaaaaaaaaab",t=function(e){var t=0,n=new Set,r=!0,l=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var c=o.value;n.has(c)?(t+=2,n.delete(c)):n.add(c)}}catch(u){l=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(l)throw a}}return 0!==n.size&&(t+=1),t}(e);return console.log(t),"\u6700\u957f\u56de\u6587\u4e32 ".concat(e," ").concat(t)},title:"409. \u6700\u957f\u56de\u6587\u4e32",file:"leetcode_js/longestPalindrome2.js",leetLink:"https://leetcode-cn.com/problems/longest-palindrome/solution/bian-li-zi-fu-chuan-by-egerton/"};function w(e){this.val=e,this.left=this.right=null}var j=new w(1);j.left=new w(2),j.right=new w(3),j.right.right=new w(4),j.right.right.right=new w(4);var x={func:function(){var e=function e(t){if(null===t)return 0;var n=e(t.left),r=e(t.right);return Math.max(n,r)+1}(j);return console.log(j),console.log(e),"\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6 ".concat(e)},title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",leetLink:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/js-hou-xu-bian-li-by-egerton/",file:"leetcode_js/maxDepth.js"};function E(e,t){return 2===e.length&&2===t.length&&(e[0]<=t[0]?e[1]>t[0]:e[0]<t[1])}var k={func:function(){var e=[0,0,2,2],t=[1,1,3,3],n=function(e,t){var n=Object(g.a)(e,4),r=n[0],l=n[1],a=n[2],o=n[3],i=Object(g.a)(t,4),c=i[0],u=i[1],f=i[2],s=i[3];return E([r,a],[c,f])&&E([l,o],[u,s])}(e,t);return console.log(n),"\u77e9\u5f62\u91cd\u53e0 ".concat(e," ").concat(t," : ").concat(n)},title:"836. \u77e9\u5f62\u91cd\u53e0",file:"leetcode_js/isRectangleOverlap.js"};function _(e){var t=new Map,n=!0,r=!1,l=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var i=a.value;t.has(i)?t.set(i,t.get(i)+1):t.set(i,1)}}catch(c){r=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t}function S(e,t){var n=!0,r=!1,l=void 0;try{for(var a,o=e.keys()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var i=a.value;if(!t.has(i)||t.get(i)<e.get(i))return!1}}catch(c){r=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return!0}var O={func:function(){var e=["cat","bt","hat","tree"],t=function(e,t){var n=_(t),r=0,l=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(l=(i=c.next()).done);l=!0){var u=i.value,f=_(u);S(f,n)&&(console.log(f,n),r+=u.length)}}catch(s){a=!0,o=s}finally{try{l||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,"atach");return console.log(t),"\u62fc\u5199\u5355\u8bcd ".concat(e," ").concat("atach"," : ").concat(t)},title:"1160. \u62fc\u5199\u5355\u8bcd",file:"leetcode_js/countChars.js"},N={func:function(){var e=function(e){for(var t="",n="",r=0,l=0;l<e.length;l++)n===e.charAt(l)?r++:(r>0&&(t+=n+r),n=e.charAt(l),r=1);return t+=n+r,e.length>t.length?t:e}("aabcaaaaa");return console.log(e),"compress ".concat("aabcaaaaa"," : ").concat(e)},title:"01.06 \u5b57\u7b26\u4e32\u538b\u7f29",file:"leetcode_js/compressString.js"},L={func:function(){var e=[1,2,1,2,1,2,1,2,2],t=function(e){var t=new Map,n=1,r=e[0],l=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(l=(i=c.next()).done);l=!0){var u=i.value;t.has(u)?(t.set(u,t.get(u)+1),t.get(u)>n&&(r=u,n=t.get(u))):t.set(u,1)}}catch(f){a=!0,o=f}finally{try{l||null==c.return||c.return()}finally{if(a)throw o}}return r}(e);return console.log(t),"majorityElement ".concat(e," ").concat(t)},title:"169. \u591a\u6570\u5143\u7d20",file:"leetcode_js/majorityElement.js",leetLink:"https://leetcode-cn.com/problems/majority-element/solution/js-bao-li-fa-you-hua-by-egerton/"};function A(e,t){return new RegExp("^(".concat(e,")+$"),"i").test(t)}function M(e,t){var n=e%t;return 0===n?t:M(t,n)}var z={func:function(){var e=function(e,t){var n=e.length,r=t.length;if(0===n||0===r)return"";var l=1;l=n>r?M(n,r):M(r,n);var a=e.substr(0,l);return A(a,e)&&A(a,t)?e.substr(0,l):""}("aaaaaaaa","aaaa");return console.log(e),"gcd of string: ".concat(e)},title:"1071. \u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50",file:"leetcode_js/gcdOfStrings.js",leetLink:"https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/qie-fen-zheng-ze-biao-da-shi-by-egerton/"};function I(e,t,n){for(var r=0,l=t;l<n;l++)r+=e[l];return r}var T={func:function(){var e=function(e){if(e.length<3)return!1;for(var t=0,n=0,r=1;r<e.length-1;r++){t+=e[r-1],n=0;for(var l=r+1;l<e.length;l++)if(t===(n+=e[l-1])&&t===I(e,l,e.length))return!0}return!1}([3,3,6,5,-2,2,5,1,-9,4]);return console.log(e),"".concat(e)},title:"1013. \u6570\u7ec4\u4e09\u7b49\u5206",file:"leetcode_js/diameterOfBinaryTree.js"};function J(e){this.val=e,this.left=this.right=null}var R=new J(1);R.left=new J(2),R.right=new J(3);var C=new J(1);C.left=new J(2),C.right=new J(3);var B={func:function(){var e=function e(t,n){return null===t&&null===n||null!==t&&null!==n&&(t.val===n.val&&e(t.left,n.left)&&e(t.right,n.right))}(R,C);return console.log(R,C,e),"isSame tree ".concat(e)},title:"100. \u76f8\u540c\u7684\u6811",file:"leetcode_js/isSameTree.js",leetLink:"https://leetcode-cn.com/problems/same-tree/solution/javascript-xian-xu-bian-li-by-egerton/"},F={func:function(){var e=function(e,t){for(var n=new Array(t).fill(0),r=0,l=1;e>0;)l>e&&(l=e),n[r]+=l,e-=l,l+=1,r=++r%t;return console.log(n),n}(16,3);return console.log(e),JSON.stringify(e)},title:"1103.\u5206\u7cd6\u679c2",file:"leetcode_js/candies2.js",leetLink:"https://leetcode-cn.com/problems/distribute-candies-to-people/solution/js-shu-zu-by-egerton/"},G={func:function(){var e=function(e){var t=[];if(1===e)return t;for(var n=1,r=2,l=0,a=Math.ceil(e/2);n<a&&n<r;)if((l=(n+r)*(r-n+1)/2)<e)r++;else if(l===e){for(var o=[],i=n;i<=r;i++)o.push(i);t.push(o),n++,r++}else n++;return t}(15);return console.log(e),JSON.stringify(e)},title:"57 - II \u8fde\u7eed\u6b63\u6574\u6570\u5e8f\u5217",file:"leetcode_js/findContinuousSequence.js",leetLink:"https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/javascript-shuang-zhi-zhen-hua-dong-chuang-kou-by-/"},P=n(1),q=function(e){var t=[];return null!==e&&(t.push(e.val),t.push.apply(t,Object(P.a)(q(e.left))),t.push.apply(t,Object(P.a)(q(e.right)))),t};q=function(e){for(var t=[],n=[],r=e;null!==r||n.length>0;)null!==r?(t.push(r.val),n.push(r),r=r.left):r=n.pop().right;return t};function D(e){this.val=e,this.left=this.right=null}var W=new D(1);W.left=new D(2),W.right=new D(2),W.left.left=new D(3),W.right.right=new D(3),W.left.right=new D(4),W.right.left=new D(4);var $={func:function(){var e=q(W);return console.log(e),"\u5148\u5e8f\u904d\u5386 ".concat(JSON.stringify(e))},title:"144. \u4e8c\u53c9\u6811\u5148\u5e8f\u904d\u5386",file:"leetcode_js/preorderTraversal.js",leetLink:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/di-gui-zan-cun-zhan-by-egerton/"},V={func:function(){var e=function(e){var t=e.trim(),n=/^[+-]?\d+/.exec(t);if(n){var r=parseInt(n[0]);return r>2147483647?2147483647:r<-2147483648?-2147483648:r}return 0}("-91283472332-=");return console.log(e),"".concat(e)},title:"8. \u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570",file:"leetcode_js/myAtoi.js"},X={func:function(){var e=function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?e(n):n)}),[])}([1,2,3,[4,5,6,[7,8]]]);return console.log(e),"".concat(e)},title:"\u624b\u5199flat",file:"leetcode_js/flatten.js"};function H(e,t,n){for(;t>=0&&n<e.length&&e.charAt(t)===e.charAt(n);)t--,n++;return n-t-1}var K={func:function(){var e=function(e){for(var t="",n=0;n<e.length;n++){var r=H(e,n,n),l=H(e,n,n+1),a=Math.max(r,l);a>t.length&&(t=e.substr(n-Math.floor((a-1)/2),a))}return t}("abcabcabcabccedabbac");return console.log(e),"\u6700\u957f\u56de\u6587\u5b50\u4e32 ".concat(e)},title:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",file:"leetcode_js/longestPalindrome.js"},Q=function(e){for(var t=null,n=e;n;)n=e.next,e.next=t,t=e,e=n;return t};Q=function(e){if(null==e||null==e.next)return e;var t=Q(e.next);return e.next.next=e,e.next=null,t},Q=function(e){return function e(t,n){if(!n)return t;var r=n.next;return n.next=t,e(n,r)}(null,e)};function U(e){this.val=e,this.next=null}var Y=new U(1);Y.next=new U(2),Y.next.next=new U(3),Y.next.next.next=new U(4);var Z={func:function(){var e=JSON.stringify(Y),t=Q(Y);return console.log("old",e),console.log("new",t),JSON.stringify(t)},title:"\u53cd\u8f6c\u94fe\u8868",file:"leetcode_js/reverseLinkedList.js"};function ee(e){this.val=e,this.left=this.right=null}var te=new ee(1);te.left=new ee(2),te.right=new ee(2),te.left.left=new ee(3),te.right.right=new ee(3),te.left.right=new ee(4),te.right.left=new ee(4);var ne={func:function(){var e=function(e){if(null===e)return!0;for(var t=[e.left,e.right];t.length>0;){var n=t.shift(),r=t.shift();if(null!==n||null!=r){if(null===n||null===r)return!1;if(n.val!==r.val)return!1;t.push(n.left,r.right),t.push(n.right,r.left)}}return!0}(te);return console.log(e),"isSymmetric ".concat(e)},title:"101. \u955c\u50cf\u4e8c\u53c9\u6811",file:"leetcode_js/mirrorTree.js"},re={func:function(){var e=function(e){var t=0;if(0===e.length)return t;var n=e[0],r=!0,l=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var c=o.value;c<n?n=c:c-n>t&&(t=c-n)}}catch(u){l=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(l)throw a}}return t}([2,1,2,0,1,5,4,1,6]);return console.log(e),JSON.stringify("max profit: ".concat(e))},title:"121. \u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",file:"leetcode_js/maxProfit.js"};function le(e){this.val=e,this.left=this.right=null}var ae=new le(1);ae.left=new le(2),ae.right=new le(3),ae.left.left=new le(4),ae.left.right=new le(5);var oe=[X,V,K,Z,ne,re,{func:function(){var e=function(e){var t=0;return function e(n){if(null===n)return 0;var r=e(n.left),l=e(n.right);return t=Math.max(t,r+l),Math.max(r,l)+1}(e),t}(ae);return console.log(e),"\u76f4\u5f84 ".concat(e)},title:"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",file:"leetcode_js/diameterOfBinaryTree.js"},$,G,F,B,T,z,L,N,O,k,x,b,y],ie="https://github.com/andycao/algorithmLearn/blob/master/src/";function ce(e){var t=e.answer,n=e.setResult;return l.a.createElement("li",null,l.a.createElement("span",null,t.title),l.a.createElement("span",{className:"link",onClick:function(){window.open(ie+t.file)}},"\u6e90\u7801"),l.a.createElement("span",{className:"link",onClick:function(){n(t.func())}},"\u8fd0\u884c"),t.leetLink?l.a.createElement("span",{className:"link",onClick:function(){window.open(t.leetLink)}},"leetcode\u9898\u89e3"):null)}var ue=function(){var e=Object(r.useState)(),t=Object(g.a)(e,2),n=t[0],a=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,oe.map((function(e){return l.a.createElement(ce,{setResult:a,answer:e})}))),l.a.createElement("div",{className:"result"},n))},fe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="Andy\u7684\u7b97\u6cd5\u5b66\u4e60"}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(h,null),l.a.createElement(ue,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.09e4308b.chunk.js.map