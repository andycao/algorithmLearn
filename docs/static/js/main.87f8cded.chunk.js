(this["webpackJsonpalgorithm-learn"]=this["webpackJsonpalgorithm-learn"]||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(7),a=n.n(l),i=(n(18),n(8)),c=n(9),u=n(11),f=n(10),s=n(12);var h=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"\u7b97\u6cd5\u5b66\u4e60\u8bb0\u5f55"),o.a.createElement("p",null,"\u8fd0\u884c\u67e5\u770b\u6267\u884c\u7ed3\u679c\uff0cconsole\u6570\u51fa"),o.a.createElement("p",null,"\u6839\u636e\u9898\u53f7\uff0c\u6216\u8005leetcode\u9898\u89e3\uff0c\u627e\u5230\u539f\u95ee\u9898"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://leetcode-cn.com/u/egerton/",target:"blank"},"\u6211\u7684Leetcode")),o.a.createElement("hr",null))},v=n(3),g=(n(19),function(e){return null===e||g(e.left)&&g(e.right)&&e.val>m(e.left)&&e.val<function(e){if(null===e)return Number.MAX_SAFE_INTEGER;return e.left?m(e.left):e.val}(e.right)});g=function(e){var t=Number.MIN_SAFE_INTEGER,n=!0;return function e(r){null!==r&&n&&(e(r.left),n=n&&r.val>t,t=r.val,e(r.right))}(e),n};function m(e){return null===e?Number.MIN_SAFE_INTEGER:e.right?m(e.right):e.val}function d(e){this.val=e,this.left=this.right=null}var y=new d(3);y.left=new d(2),y.right=new d(5),y.right.right=new d(6),y.right.left=new d(4),y.right.right.right=new d(7);var p={func:function(){var e=g(y);return console.log(y),console.log(e),"\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811 ".concat(e)},title:"98. \u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811",file:"leetcode_js/isValidBST.js",leetLink:"https://leetcode-cn.com/problems/validate-binary-search-tree/solution/shen-du-you-xian-zhong-xu-bian-li-by-egerton/"},b={func:function(){var e="aaaaaaaaaaab",t=function(e){var t=0,n=new Set,r=!0,o=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var c=a.value;n.has(c)?(t+=2,n.delete(c)):n.add(c)}}catch(u){o=!0,l=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw l}}return 0!==n.size&&(t+=1),t}(e);return console.log(t),"\u6700\u957f\u56de\u6587\u4e32 ".concat(e," ").concat(t)},title:"409. \u6700\u957f\u56de\u6587\u4e32",file:"leetcode_js/longestPalindrome2.js",leetLink:"https://leetcode-cn.com/problems/longest-palindrome/solution/bian-li-zi-fu-chuan-by-egerton/"};function j(e){this.val=e,this.left=this.right=null}var w=new j(1);w.left=new j(2),w.right=new j(3),w.right.right=new j(4),w.right.right.right=new j(4);var x={func:function(){var e=function e(t){if(null===t)return 0;var n=e(t.left),r=e(t.right);return Math.max(n,r)+1}(w);return console.log(w),console.log(e),"\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6 ".concat(e)},title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",leetLink:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/js-hou-xu-bian-li-by-egerton/",file:"leetcode_js/maxDepth.js"};function k(e,t){return 2===e.length&&2===t.length&&(e[0]<=t[0]?e[1]>t[0]:e[0]<t[1])}var _={func:function(){var e=[0,0,2,2],t=[1,1,3,3],n=function(e,t){var n=Object(v.a)(e,4),r=n[0],o=n[1],l=n[2],a=n[3],i=Object(v.a)(t,4),c=i[0],u=i[1],f=i[2],s=i[3];return k([r,l],[c,f])&&k([o,a],[u,s])}(e,t);return console.log(n),"\u77e9\u5f62\u91cd\u53e0 ".concat(e," ").concat(t," : ").concat(n)},title:"836. \u77e9\u5f62\u91cd\u53e0",file:"leetcode_js/isRectangleOverlap.js"};function E(e){var t=new Map,n=!0,r=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var i=l.value;t.has(i)?t.set(i,t.get(i)+1):t.set(i,1)}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return t}function S(e,t){var n=!0,r=!1,o=void 0;try{for(var l,a=e.keys()[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var i=l.value;if(!t.has(i)||t.get(i)<e.get(i))return!1}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return!0}var L={func:function(){var e=["cat","bt","hat","tree"],t=function(e,t){var n=E(t),r=0,o=!0,l=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var u=i.value,f=E(u);S(f,n)&&(console.log(f,n),r+=u.length)}}catch(s){l=!0,a=s}finally{try{o||null==c.return||c.return()}finally{if(l)throw a}}return r}(e,"atach");return console.log(t),"\u62fc\u5199\u5355\u8bcd ".concat(e," ").concat("atach"," : ").concat(t)},title:"1160. \u62fc\u5199\u5355\u8bcd",file:"leetcode_js/countChars.js"},M={func:function(){var e=function(e){for(var t="",n="",r=0,o=0;o<e.length;o++)n===e.charAt(o)?r++:(r>0&&(t+=n+r),n=e.charAt(o),r=1);return t+=n+r,e.length>t.length?t:e}("aabcaaaaa");return console.log(e),"compress ".concat("aabcaaaaa"," : ").concat(e)},title:"01.06 \u5b57\u7b26\u4e32\u538b\u7f29",file:"leetcode_js/compressString.js"},N={func:function(){var e=[1,2,1,2,1,2,1,2,2],t=function(e){var t=new Map,n=1,r=e[0],o=!0,l=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var u=i.value;t.has(u)?(t.set(u,t.get(u)+1),t.get(u)>n&&(r=u,n=t.get(u))):t.set(u,1)}}catch(f){l=!0,a=f}finally{try{o||null==c.return||c.return()}finally{if(l)throw a}}return r}(e);return console.log(t),"majorityElement ".concat(e," ").concat(t)},title:"169. \u591a\u6570\u5143\u7d20",file:"leetcode_js/majorityElement.js",leetLink:"https://leetcode-cn.com/problems/majority-element/solution/js-bao-li-fa-you-hua-by-egerton/"};function O(e,t){return new RegExp("^(".concat(e,")+$"),"i").test(t)}function A(e,t){var n=e%t;return 0===n?t:A(t,n)}var z={func:function(){var e=function(e,t){var n=e.length,r=t.length;if(0===n||0===r)return"";var o=1;o=n>r?A(n,r):A(r,n);var l=e.substr(0,o);return O(l,e)&&O(l,t)?e.substr(0,o):""}("aaaaaaaa","aaaa");return console.log(e),"gcd of string: ".concat(e)},title:"1071. \u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50",file:"leetcode_js/gcdOfStrings.js",leetLink:"https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/qie-fen-zheng-ze-biao-da-shi-by-egerton/"};function R(e,t,n){for(var r=0,o=t;o<n;o++)r+=e[o];return r}var T={func:function(){var e=function(e){if(e.length<3)return!1;for(var t=0,n=0,r=1;r<e.length-1;r++){t+=e[r-1],n=0;for(var o=r+1;o<e.length;o++)if(t===(n+=e[o-1])&&t===R(e,o,e.length))return!0}return!1}([3,3,6,5,-2,2,5,1,-9,4]);return console.log(e),"".concat(e)},title:"1013. \u6570\u7ec4\u4e09\u7b49\u5206",file:"leetcode_js/diameterOfBinaryTree.js"};function I(e){this.val=e,this.left=this.right=null}var J=new I(1);J.left=new I(2),J.right=new I(3);var C=new I(1);C.left=new I(2),C.right=new I(3);var B={func:function(){var e=function e(t,n){return null===t&&null===n||null!==t&&null!==n&&(t.val===n.val&&e(t.left,n.left)&&e(t.right,n.right))}(J,C);return console.log(J,C,e),"isSame tree ".concat(e)},title:"100. \u76f8\u540c\u7684\u6811",file:"leetcode_js/isSameTree.js",leetLink:"https://leetcode-cn.com/problems/same-tree/solution/javascript-xian-xu-bian-li-by-egerton/"},G={func:function(){var e=function(e,t){for(var n=new Array(t).fill(0),r=0,o=1;e>0;)o>e&&(o=e),n[r]+=o,e-=o,o+=1,r=++r%t;return console.log(n),n}(16,3);return console.log(e),JSON.stringify(e)},title:"1103.\u5206\u7cd6\u679c2",file:"leetcode_js/candies2.js",leetLink:"https://leetcode-cn.com/problems/distribute-candies-to-people/solution/js-shu-zu-by-egerton/"},F={func:function(){var e=function(e){var t=[];if(1===e)return t;for(var n=1,r=2,o=0,l=Math.ceil(e/2);n<l&&n<r;)if((o=(n+r)*(r-n+1)/2)<e)r++;else if(o===e){for(var a=[],i=n;i<=r;i++)a.push(i);t.push(a),n++,r++}else n++;return t}(15);return console.log(e),JSON.stringify(e)},title:"57 - II \u8fde\u7eed\u6b63\u6574\u6570\u5e8f\u5217",file:"leetcode_js/findContinuousSequence.js",leetLink:"https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/javascript-shuang-zhi-zhen-hua-dong-chuang-kou-by-/"},q=n(1),X=function(e){var t=[];return null!==e&&(t.push(e.val),t.push.apply(t,Object(q.a)(X(e.left))),t.push.apply(t,Object(q.a)(X(e.right)))),t};X=function(e){for(var t=[],n=[],r=e;null!==r||n.length>0;)null!==r?(t.push(r.val),n.push(r),r=r.left):r=n.pop().right;return t};function D(e){this.val=e,this.left=this.right=null}var W=new D(1);W.left=new D(2),W.right=new D(2),W.left.left=new D(3),W.right.right=new D(3),W.left.right=new D(4),W.right.left=new D(4);var P={func:function(){var e=X(W);return console.log(e),"\u5148\u5e8f\u904d\u5386 ".concat(JSON.stringify(e))},title:"144. \u4e8c\u53c9\u6811\u5148\u5e8f\u904d\u5386",file:"leetcode_js/preorderTraversal.js",leetLink:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/di-gui-zan-cun-zhan-by-egerton/"},$={func:function(){var e=function(e){var t=e.trim(),n=/^[+-]?\d+/.exec(t);if(n){var r=parseInt(n[0]);return r>2147483647?2147483647:r<-2147483648?-2147483648:r}return 0}("-91283472332-=");return console.log(e),"".concat(e)},title:"8. \u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570",file:"leetcode_js/myAtoi.js"},V={func:function(){var e=function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?e(n):n)}),[])}([1,2,3,[4,5,6,[7,8]]]);return console.log(e),"".concat(e)},title:"\u624b\u5199flat",file:"leetcode_js/flatten.js"};function H(e,t,n){for(;t>=0&&n<e.length&&e.charAt(t)===e.charAt(n);)t--,n++;return n-t-1}var K={func:function(){var e=function(e){for(var t="",n=0;n<e.length;n++){var r=H(e,n,n),o=H(e,n,n+1),l=Math.max(r,o);l>t.length&&(t=e.substr(n-Math.floor((l-1)/2),l))}return t}("abcabcabcabccedabbac");return console.log(e),"\u6700\u957f\u56de\u6587\u5b50\u4e32 ".concat(e)},title:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",file:"leetcode_js/longestPalindrome.js"},Q=function(e){for(var t=null,n=e;n;)n=e.next,e.next=t,t=e,e=n;return t};Q=function(e){if(null==e||null==e.next)return e;var t=Q(e.next);return e.next.next=e,e.next=null,t},Q=function(e){return function e(t,n){if(!n)return t;var r=n.next;return n.next=t,e(n,r)}(null,e)};function U(e){this.val=e,this.next=null}var Y=new U(1);Y.next=new U(2),Y.next.next=new U(3),Y.next.next.next=new U(4);var Z={func:function(){var e=JSON.stringify(Y),t=Q(Y);return console.log("old",e),console.log("new",t),JSON.stringify(t)},title:"\u53cd\u8f6c\u94fe\u8868",file:"leetcode_js/reverseLinkedList.js"};function ee(e){this.val=e,this.left=this.right=null}var te=new ee(1);te.left=new ee(2),te.right=new ee(2),te.left.left=new ee(3),te.right.right=new ee(3),te.left.right=new ee(4),te.right.left=new ee(4);var ne={func:function(){var e=function(e){if(null===e)return!0;for(var t=[e.left,e.right];t.length>0;){var n=t.shift(),r=t.shift();if(null!==n||null!=r){if(null===n||null===r)return!1;if(n.val!==r.val)return!1;t.push(n.left,r.right),t.push(n.right,r.left)}}return!0}(te);return console.log(e),"isSymmetric ".concat(e)},title:"101. \u955c\u50cf\u4e8c\u53c9\u6811",file:"leetcode_js/mirrorTree.js"},re={func:function(){var e=function(e){var t=0;if(0===e.length)return t;var n=e[0],r=!0,o=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var c=a.value;c<n?n=c:c-n>t&&(t=c-n)}}catch(u){o=!0,l=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw l}}return t}([2,1,2,0,1,5,4,1,6]);return console.log(e),JSON.stringify("max profit: ".concat(e))},title:"121. \u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",file:"leetcode_js/maxProfit.js"};function oe(e){this.val=e,this.left=this.right=null}var le=new oe(1);le.left=new oe(2),le.right=new oe(3),le.left.left=new oe(4),le.left.right=new oe(5);var ae={func:function(){var e=function(e){var t=0;return function e(n){if(null===n)return 0;var r=e(n.left),o=e(n.right);return t=Math.max(t,r+o),Math.max(r,o)+1}(e),t}(le);return console.log(e),"\u76f4\u5f84 ".concat(e)},title:"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",file:"leetcode_js/diameterOfBinaryTree.js"},ie={func:function(){var e=[2,1,3,5,2,4,1,6,2],t=function(e,t){if(t<e.length/2){for(var n=0;n<t;n++)for(var r=n+1;r<e.length;r++)if(e[n]>e[r]){var o=e[n];e[n]=e[r],e[r]=o}}else for(var l=e.length;l>t-1;l--)for(var a=l-1;a>=0;a--)if(e[l]<e[a]){var i=e[l];e[l]=e[a],e[a]=i}return e.slice(0,t)}(e,5);return console.log(t),"getLeastNumbers ".concat(e," : ").concat(t)},title:"40. \u6700\u5c0f\u7684k\u4e2a\u6570",file:"leetcode_js/getLeastNumbers.js"},ce=function(e,t,n){for(var r=e+t,o=Math.min(e,t),l=[0,o,r],a=i(r,o);!l.includes(a);)l.push(a),a=i(a,o);return l.includes(n);function i(e,t){return e>=t?e-t:r-(t-e)}},ue=function(e,t,n){var r=Math.max(e,t),o=e>t?Math.min(e-t,t):Math.min(t-e,e);return!(n>e+t)&&(r%o===0?n%o===0:r%2!==0||o%2!==0||n%2===0)},fe={func:function(){var e=[6,9,1],t=ce.apply(void 0,e),n=ue.apply(void 0,e);return console.log(t),"canMeasureWater ".concat(e," func1: ").concat(t,"  func2: ").concat(n)},title:"365. \u6c34\u58f6\u95ee\u9898",file:"leetcode_js/canMeasureWater.js",leetLink:"https://leetcode-cn.com/problems/water-and-jug-problem/solution/shui-hu-wen-ti-by-leetcode-solution/"};function se(e){this.val=e,this.next=null}var he=new se(1);he.next=new se(2),he.next.next=new se(3),he.next.next.next=new se(4),he.next.next.next.next=new se(5);var ve={func:function(){var e=function(e){for(var t=e,n=e;t&&t.next;)t=t.next.next,n=n.next;return n}(he);return"\u94fe\u8868\u4e2d\u95f4\u70b9 ".concat(e.val)},title:"876. \u94fe\u8868\u4e2d\u95f4\u70b9",file:"leetcode_js/middleNode.js",leetLink:"https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/fu-zhu-shu-zu-by-egerton/"};function ge(e){this.val=e,this.left=this.right=null}var me=new ge(3);me.left=new ge(2),me.right=new ge(5),me.right.right=new ge(6),me.right.left=new ge(4),me.right.right.right=new ge(7);var de={func:function(){var e=function e(t){if(null===t)return null;var n=t.right;return t.right=t.left,t.left=n,e(t.left),e(t.right),t}(me);return console.log(e),"\u7ffb\u8f6c\u4e8c\u53c9\u6811 ".concat(JSON.stringify(e))},title:"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811",file:"leetcode_js/invertTree.js"},ye={func:function(){var e=function(e){for(var t=0,n=0,r=0;r<e.length;r++)for(var o=0;o<e[r].length;o++){var l=e[r][o];t+=l,n+=l>0?l-1:0,n+=o>0?Math.min(e[r][o-1],l):0,n+=r>0?Math.min(e[r-1][o],l):0}return 6*t-2*n}([[1,2],[3,4]]);return console.log(e),"surfaceArea: ".concat(e)},title:"892. \u4e09\u7ef4\u5f62\u4f53\u7684\u8868\u9762\u79ef",file:"leetcode_js/surfaceArea.js",leetLink:"https://leetcode-cn.com/problems/surface-area-of-3d-shapes/solution/kuai-ji-suan-by-egerton/"},pe={func:function(){var e=function(e){var t=0,n=[];e:for(var r=0;r<8;r++)for(var o=0;o<8;o++)if("R"===e[r][o]){n=[r,o];break e}console.log(n);e:for(var l=n[1];l>=0;l--){var a=e[n[0]][l];if("."!==a&&"R"!==a){if("p"===a){t++;break e}break e}}e:for(var i=n[1];i<8;i++){var c=e[n[0]][i];if("."!==c&&"R"!==c){if("p"===c){t++;break e}break e}}e:for(var u=n[0];u>=0;u--){var f=e[u][n[1]];if("."!==f&&"R"!==f){if("p"===f){t++;break e}break e}}e:for(var s=n[0];s<8;s++){var h=e[s][n[1]];if("."!==h&&"R"!==h){if("p"===h){t++;break e}break e}}return t}([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]);return console.log(e),"numRookCaptures: ".concat(e)},title:"999. \u8f66\u7684\u53ef\u7528\u6355\u83b7\u91cf",file:"leetcode_js/numRookCaptures.js"},be=[],je={func:function(){var e=function e(t){if(1===t||0===t)return 1;if(be[t])return be[t];for(var n=0,r=1;r<=t;r++)n+=e(r-1)*e(t-r);return be[t]=n,n}(10);return console.log(e),"1 .. ".concat(10,"\u53ef\u4ee5\u7ec4\u6210\u7684\u4e8c\u53c9\u641c\u7d22\u6811\u6570\u91cf\uff1a ").concat(e)},title:"96. \u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",file:"leetcode_js/numTrees.js",leetLink:"https://leetcode-cn.com/problems/unique-binary-search-trees/solution/di-gui-you-hua-by-egerton/"};function we(e,t){if(0===t)throw Error("no 0");var n=e%t;return 0===n?t:we(t,n)}var xe={func:function(){var e=[1],t=function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var i=l.value;t[i]=t[i]?t[i]+1:1}}catch(g){r=!0,o=g}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}var c=(t=t.filter((function(e){return e})))[0],u=!0,f=!1,s=void 0;try{for(var h,v=t[Symbol.iterator]();!(u=(h=v.next()).done);u=!0){if((c=we(c,h.value))<2)return!1}}catch(g){f=!0,s=g}finally{try{u||null==v.return||v.return()}finally{if(f)throw s}}return!0}(e);return console.log(t),"hasGroupsSizeX ".concat(e,"\uff1a ").concat(t)},title:"914. \u5361\u724c\u5206\u7ec4",file:"leetcode_js/hasGroupsSizeX.js",leetLink:"https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/solution/bao-li-gcd-by-egerton/"};var ke={func:function(){var e=function(e){var t=new Set(e),n=!0,r=!1,o=void 0;try{for(var l,a=t[Symbol.iterator]();!(n=(l=a.next()).done);n=!0)for(var i=l.value,c=1;c<i.length;c++){var u=i.slice(c);t.has(u)&&t.delete(u)}}catch(d){r=!0,o=d}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}var f=0,s=!0,h=!1,v=void 0;try{for(var g,m=t[Symbol.iterator]();!(s=(g=m.next()).done);s=!0){f+=g.value.length+1}}catch(d){h=!0,v=d}finally{try{s||null==m.return||m.return()}finally{if(h)throw v}}return f}(["time","me","bell","ell"]);return console.log(e),"\u5355\u8bcd\u7684\u538b\u7f29\u7f16\u7801\uff1a ".concat(e)},title:"820. \u5355\u8bcd\u7684\u538b\u7f29\u7f16\u7801",file:"leetcode_js/minimumLengthEncoding.js"},_e={func:function(){var e=function(e){var t=[];t.length=500,t.fill(0);var n=!0,r=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){t[l.value]+=1}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}for(var i=t.length-1;i>0;i--)if(t[i]===i)return i;return-1}([1,1,2,2,3,3]);return console.log(e),"5368. \u627e\u51fa\u6570\u7ec4\u4e2d\u7684\u5e78\u8fd0\u6570\uff1a ".concat(e)},title:"5368. \u627e\u51fa\u6570\u7ec4\u4e2d\u7684\u5e78\u8fd0\u6570",file:"leetcode_js/findLucky.js",leetLink:"https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/solution/js-bian-li-by-egerton-2/"},Ee={func:function(){var e=function(e){var t=0,n=e.length;if(n<3)return t;for(var r=0;r<n-2;r++)for(var o=r+1;o<n-1;o++)for(var l=o+1;l<n;l++)(e[r]>e[o]&&e[o]>e[l]||e[r]<e[o]&&e[o]<e[l])&&t++;return t}([1,2,3,4,5]);return console.log(e),"".concat("5369. \u7edf\u8ba1\u4f5c\u6218\u5355\u4f4d\u6570",": ").concat(e)},title:"5369. \u7edf\u8ba1\u4f5c\u6218\u5355\u4f4d\u6570",file:"leetcode_js/findLucky.js",leetLink:"https://leetcode-cn.com/problems/count-number-of-teams/solution/bao-li-bian-li-by-egerton/"},Se={func:function(){var e=function(e){var t=0,n=e.length,r=[];r.length=n;for(var o=0;o<n;o++){r[o]=[],r[o].length=n;for(var l=0;l<n;l++)r[o][l]=1===e[o][l]?0:Number.MAX_SAFE_INTEGER}for(var a=0;a<=2*n;a++)u(a);for(var i=0;i<n;i++)for(var c=0;c<n;c++)t=Math.max(r[i][c],t);return t===Number.MAX_SAFE_INTEGER||0===t?-1:t;function u(e){for(var t=0;t<n;t++)for(var o=0;o<n;o++)if(r[t][o]===e){var l=r[t][o]+1;t<n-1&&(r[t+1][o]=Math.min(r[t+1][o],l)),t>0&&(r[t-1][o]=Math.min(r[t-1][o],l)),o>0&&(r[t][o-1]=Math.min(r[t][o-1],l)),o<n-1&&(r[t][o+1]=Math.min(r[t][o+1],l))}}}([[1,0,1,0,0,0],[0,0,0,1,0,0],[1,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]);return console.log(e),"".concat("1162. \u5730\u56fe\u5206\u6790",": ").concat(e)},title:"1162. \u5730\u56fe\u5206\u6790",file:"leetcode_js/maxDistance.js",leetLink:"https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/gou-jian-ju-chi-di-tu-dong-tai-gui-hua-by-egerton/"},Le={func:function(){var e=function(e,t){for(var n=[],r=0;r<e;r++)n[r]=r;for(var o=0;n.length>1;)o=(o-1+t)%n.length,n.splice(o,1);return n[0]}(10,17);return console.log(e),"".concat("\u976262. \u6700\u540e\u7684\u6570\u5b57",": ").concat(e)},title:"\u976262. \u6700\u540e\u7684\u6570\u5b57",file:"leetcode_js/lastRemaining.js",leetLink:"https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/bao-li-js-by-egerton/"},Me=function(e){return function t(n,r){var o=function(t,n){var r=e[t],o=t,l=n;for(;o<l;){for(;o<=l&&e[o]<=r;)o++;for(;o<=l&&e[l]>r;)l--;if(o>=l)break;Ne(e,o,l)}return Ne(e,l,t),l}(n,r);o>n&&t(n,o-1);o<r&&t(o+1,r)}(0,e.length-1),e};function Ne(e,t,n){var r=e[n];e[n]=e[t],e[t]=r}var Oe={func:function(){var e=Me([0,5,9,12,2,5,7,3,8,5]);return console.log(e),"".concat("912. \u6392\u5e8f\u6570\u7ec4",": ").concat(e)},title:"912. \u6392\u5e8f\u6570\u7ec4",file:"leetcode_js/sortArray.js",leetLink:"https://leetcode-cn.com/problems/sort-an-array/solution/kuai-pai-kan-zhao-jian-dan-xie-qi-lai-nan-by-egert/"},Ae=function(e){var t=[],n=function(e){var t=0,n=0,r=!0,o=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){"("===a.value?(n++,t=Math.max(t,n)):n--}}catch(c){o=!0,l=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw l}}return t}(e),r=Math.ceil(n/2),o=(Math.floor(n/2),0),l=0,a=!0,i=!1,c=void 0;try{for(var u,f=e[Symbol.iterator]();!(a=(u=f.next()).done);a=!0){"("===u.value?o<r?(o++,t.push(0)):(l++,t.push(1)):l>0?(l--,t.push(1)):(o--,t.push(0))}}catch(s){i=!0,c=s}finally{try{a||null==f.return||f.return()}finally{if(i)throw c}}return t};var ze={func:function(){var e=Ae("()(())()");return console.log(e),"".concat("1111. \u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",": ").concat(e)},title:"1111. \u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",file:"leetcode_js/maxDepthAfterSplit.js",leetLink:"https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solution/jian-dan-rong-yi-li-jie-de-on-by-egerton/"};function Re(e,t,n){for(var r=0,o=t-1;o<=t+1;o++)for(var l=n-1;l<=n+1;l++)"object"===typeof e[o]&&1===e[o][l]&&r++;return 1===e[t][n]&&r--,r}var Te={func:function(){var e=[[0,1,0],[0,0,1],[1,1,1],[0,0,0]];return function(e){for(var t=[],n=0;n<e.length;n++){t[n]=[];for(var r=0;r<e[n].length;r++)t[n][r]=e[n][r]}for(var o=0;o<e.length;o++)for(var l=0;l<e[o].length;l++){var a=Re(t,o,l);3===a||2===a&&1===t[o][l]?e[o][l]=1:e[o][l]=0}}(e),console.log(e),"".concat("289. \u751f\u547d\u6e38\u620f",": ").concat(e)},title:"289. \u751f\u547d\u6e38\u620f",file:"leetcode_js/gameOfLife.js"},Ie=n(5),Je=[V,$,K,Z,ne,re,ae,P,F,G,B,T,z,N,M,L,_,x,b,p,ie,fe,ve,de,ye,pe,je,xe,ke,_e,Ee,Se,Le,Oe,ze,Te,{func:function(){var e=[[1,2,3],[4,5,6],[7,8,9]];return function(e){for(var t=e.length,n=0;n<t;n++)for(var r=0;r<n;r++)a(e,[n,r],[r,n]);for(var o=0;o<t;o++)for(var l=0;l<t/2;l++)a(e,[o,l],[o,t-1-l]);function a(e,t,n){var r=Object(Ie.a)(t,2),o=r[0],l=r[1],a=Object(Ie.a)(n,2),i=a[0],c=a[1],u=e[o][l];e[o][l]=e[i][c],e[i][c]=u}}(e),console.log(e),"".concat("\u9762\u8bd5\u9898 01.07. \u65cb\u8f6c\u77e9\u9635",": ").concat(e)},title:"\u9762\u8bd5\u9898 01.07. \u65cb\u8f6c\u77e9\u9635",file:"leetcode_js/rotate.js",leetLink:"https://leetcode-cn.com/problems/rotate-matrix-lcci/solution/jian-dan-hao-li-jie-de-kong-jian-o1-by-egerton/"}],Ce="https://github.com/andycao/algorithmLearn/blob/master/src/";function Be(e){var t=e.answer,n=e.setResult;return o.a.createElement("li",null,o.a.createElement("span",null,t.title),o.a.createElement("span",{className:"link",onClick:function(){window.open(Ce+t.file)}},"\u6e90\u7801"),o.a.createElement("span",{className:"link",onClick:function(){n(t.func())}},"\u8fd0\u884c"),t.leetLink?o.a.createElement("span",{className:"link",onClick:function(){window.open(t.leetLink)}},"leetcode\u9898\u89e3"):null)}var Ge=function(){var e=Object(r.useState)(),t=Object(v.a)(e,2),n=t[0],l=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,Je.map((function(e,t){return o.a.createElement(Be,{key:t,setResult:l,answer:e})}))),o.a.createElement("div",{className:"result"},n))},Fe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="Andy\u7684\u7b97\u6cd5\u5b66\u4e60"}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(Ge,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.87f8cded.chunk.js.map