(this["webpackJsonpalgorithm-learn"]=this["webpackJsonpalgorithm-learn"]||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),l=n.n(a),i=(n(20),n(2));var c=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"\u7b97\u6cd5\u5b66\u4e60\u8bb0\u5f55"),o.a.createElement("p",null,"\u6839\u636e\u9898\u53f7\uff0c\u6216\u8005leetcode\u9898\u89e3\uff0c\u627e\u5230\u539f\u95ee\u9898"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://leetcode-cn.com/u/egerton/",target:"blank"},"\u6211\u7684Leetcode"),o.a.createElement("a",{style:{marginLeft:"10px"},href:"#",onClick:function(t){t.preventDefault(),e.changeOrder()}},"\u53cd\u8f6c\u987a\u5e8f")),o.a.createElement("hr",null))},u=n(5),f=n(14),s=(n(21),function(e){return null===e||s(e.left)&&s(e.right)&&e.val>h(e.left)&&e.val<function(e){if(null===e)return Number.MAX_SAFE_INTEGER;return e.left?h(e.left):e.val}(e.right)});s=function(e){var t=Number.MIN_SAFE_INTEGER,n=!0;return function e(r){null!==r&&n&&(e(r.left),n=n&&r.val>t,t=r.val,e(r.right))}(e),n};function h(e){return null===e?Number.MIN_SAFE_INTEGER:e.right?h(e.right):e.val}function v(e){this.val=e,this.left=this.right=null}var g=new v(3);g.left=new v(2),g.right=new v(5),g.right.right=new v(6),g.right.left=new v(4),g.right.right.right=new v(7);var m={func:function(){var e=s(g);return console.log(g),console.log(e),"\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811 ".concat(e)},title:"98. \u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811",file:"leetcode_js/isValidBST.js",leetLink:"https://leetcode-cn.com/problems/validate-binary-search-tree/solution/shen-du-you-xian-zhong-xu-bian-li-by-egerton/"},d={func:function(){var e="aaaaaaaaaaab",t=function(e){var t=0,n=new Set,r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var c=l.value;n.has(c)?(t+=2,n.delete(c)):n.add(c)}}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return 0!==n.size&&(t+=1),t}(e);return console.log(t),"\u6700\u957f\u56de\u6587\u4e32 ".concat(e," ").concat(t)},title:"409. \u6700\u957f\u56de\u6587\u4e32",file:"leetcode_js/longestPalindrome2.js",leetLink:"https://leetcode-cn.com/problems/longest-palindrome/solution/bian-li-zi-fu-chuan-by-egerton/"};function p(e){this.val=e,this.left=this.right=null}var b=new p(1);b.left=new p(2),b.right=new p(3),b.right.right=new p(4),b.right.right.right=new p(4);var j={func:function(){var e=function e(t){if(null===t)return 0;var n=e(t.left),r=e(t.right);return Math.max(n,r)+1}(b);return console.log(b),console.log(e),"\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6 ".concat(e)},title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",leetLink:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/js-hou-xu-bian-li-by-egerton/",file:"leetcode_js/maxDepth.js"},y=n(10);function w(e,t){return 2===e.length&&2===t.length&&(e[0]<=t[0]?e[1]>t[0]:e[0]<t[1])}var x={func:function(){var e=[0,0,2,2],t=[1,1,3,3],n=function(e,t){var n=Object(y.a)(e,4),r=n[0],o=n[1],a=n[2],l=n[3],i=Object(y.a)(t,4),c=i[0],u=i[1],f=i[2],s=i[3];return w([r,a],[c,f])&&w([o,l],[u,s])}(e,t);return console.log(n),"\u77e9\u5f62\u91cd\u53e0 ".concat(e," ").concat(t," : ").concat(n)},title:"836. \u77e9\u5f62\u91cd\u53e0",file:"leetcode_js/isRectangleOverlap.js"};function k(e){var t=new Map,n=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var i=a.value;t.has(i)?t.set(i,t.get(i)+1):t.set(i,1)}}catch(c){r=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return t}function _(e,t){var n=!0,r=!1,o=void 0;try{for(var a,l=e.keys()[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var i=a.value;if(!t.has(i)||t.get(i)<e.get(i))return!1}}catch(c){r=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return!0}var E={func:function(){var e=["cat","bt","hat","tree"],t=function(e,t){var n=k(t),r=0,o=!0,a=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var u=i.value,f=k(u);_(f,n)&&(console.log(f,n),r+=u.length)}}catch(s){a=!0,l=s}finally{try{o||null==c.return||c.return()}finally{if(a)throw l}}return r}(e,"atach");return console.log(t),"\u62fc\u5199\u5355\u8bcd ".concat(e," ").concat("atach"," : ").concat(t)},title:"1160. \u62fc\u5199\u5355\u8bcd",file:"leetcode_js/countChars.js"},O={func:function(){var e=function(e){for(var t="",n="",r=0,o=0;o<e.length;o++)n===e.charAt(o)?r++:(r>0&&(t+=n+r),n=e.charAt(o),r=1);return t+=n+r,e.length>t.length?t:e}("aabcaaaaa");return console.log(e),"compress ".concat("aabcaaaaa"," : ").concat(e)},title:"01.06 \u5b57\u7b26\u4e32\u538b\u7f29",file:"leetcode_js/compressString.js"},L={func:function(){var e=[1,2,1,2,1,2,1,2,2],t=function(e){var t=new Map,n=1,r=e[0],o=!0,a=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var u=i.value;t.has(u)?(t.set(u,t.get(u)+1),t.get(u)>n&&(r=u,n=t.get(u))):t.set(u,1)}}catch(f){a=!0,l=f}finally{try{o||null==c.return||c.return()}finally{if(a)throw l}}return r}(e);return console.log(t),"majorityElement ".concat(e," ").concat(t)},title:"169. \u591a\u6570\u5143\u7d20",file:"leetcode_js/majorityElement.js",leetLink:"https://leetcode-cn.com/problems/majority-element/solution/js-bao-li-fa-you-hua-by-egerton/"};function S(e,t){return new RegExp("^(".concat(e,")+$"),"i").test(t)}function M(e,t){var n=e%t;return 0===n?t:M(t,n)}var A={func:function(){var e=function(e,t){var n=e.length,r=t.length;if(0===n||0===r)return"";var o=1;o=n>r?M(n,r):M(r,n);var a=e.substr(0,o);return S(a,e)&&S(a,t)?e.substr(0,o):""}("aaaaaaaa","aaaa");return console.log(e),"gcd of string: ".concat(e)},title:"1071. \u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50",file:"leetcode_js/gcdOfStrings.js",leetLink:"https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/qie-fen-zheng-ze-biao-da-shi-by-egerton/"};function N(e,t,n){for(var r=0,o=t;o<n;o++)r+=e[o];return r}var z={func:function(){var e=function(e){if(e.length<3)return!1;for(var t=0,n=0,r=1;r<e.length-1;r++){t+=e[r-1],n=0;for(var o=r+1;o<e.length;o++)if(t===(n+=e[o-1])&&t===N(e,o,e.length))return!0}return!1}([3,3,6,5,-2,2,5,1,-9,4]);return console.log(e),"".concat(e)},title:"1013. \u6570\u7ec4\u4e09\u7b49\u5206",file:"leetcode_js/diameterOfBinaryTree.js"};function R(e){this.val=e,this.left=this.right=null}var I=new R(1);I.left=new R(2),I.right=new R(3);var T=new R(1);T.left=new R(2),T.right=new R(3);var D={func:function(){var e=function e(t,n){return null===t&&null===n||null!==t&&null!==n&&(t.val===n.val&&e(t.left,n.left)&&e(t.right,n.right))}(I,T);return console.log(I,T,e),"isSame tree ".concat(e)},title:"100. \u76f8\u540c\u7684\u6811",file:"leetcode_js/isSameTree.js",leetLink:"https://leetcode-cn.com/problems/same-tree/solution/javascript-xian-xu-bian-li-by-egerton/"},C={func:function(){var e=function(e,t){for(var n=new Array(t).fill(0),r=0,o=1;e>0;)o>e&&(o=e),n[r]+=o,e-=o,o+=1,r=++r%t;return console.log(n),n}(16,3);return console.log(e),JSON.stringify(e)},title:"1103.\u5206\u7cd6\u679c2",file:"leetcode_js/candies2.js",leetLink:"https://leetcode-cn.com/problems/distribute-candies-to-people/solution/js-shu-zu-by-egerton/"},F={func:function(){var e=function(e){var t=[];if(1===e)return t;for(var n=1,r=2,o=0,a=Math.ceil(e/2);n<a&&n<r;)if((o=(n+r)*(r-n+1)/2)<e)r++;else if(o===e){for(var l=[],i=n;i<=r;i++)l.push(i);t.push(l),n++,r++}else n++;return t}(15);return console.log(e),JSON.stringify(e)},title:"57 - II \u8fde\u7eed\u6b63\u6574\u6570\u5e8f\u5217",file:"leetcode_js/findContinuousSequence.js",leetLink:"https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/javascript-shuang-zhi-zhen-hua-dong-chuang-kou-by-/"},J=n(3),G=function(e){var t=[];return null!==e&&(t.push(e.val),t.push.apply(t,Object(J.a)(G(e.left))),t.push.apply(t,Object(J.a)(G(e.right)))),t};G=function(e){for(var t=[],n=[],r=e;null!==r||n.length>0;)null!==r?(t.push(r.val),n.push(r),r=r.left):r=n.pop().right;return t};function B(e){this.val=e,this.left=this.right=null}var X=new B(1);X.left=new B(2),X.right=new B(2),X.left.left=new B(3),X.right.right=new B(3),X.left.right=new B(4),X.right.left=new B(4);var q={func:function(){var e=G(X);return console.log(e),"\u5148\u5e8f\u904d\u5386 ".concat(JSON.stringify(e))},title:"144. \u4e8c\u53c9\u6811\u5148\u5e8f\u904d\u5386",file:"leetcode_js/preorderTraversal.js",leetLink:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/di-gui-zan-cun-zhan-by-egerton/"},P={func:function(){var e=function(e){var t=e.trim(),n=/^[+-]?\d+/.exec(t);if(n){var r=parseInt(n[0]);return r>2147483647?2147483647:r<-2147483648?-2147483648:r}return 0}("-91283472332-=");return console.log(e),"".concat(e)},title:"8. \u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570",file:"leetcode_js/myAtoi.js"},W={func:function(){var e=function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?e(n):n)}),[])}([1,2,3,[4,5,6,[7,8]]]);return console.log(e),"".concat(e)},title:"\u624b\u5199flat",file:"leetcode_js/flatten.js"};function U(e,t,n){for(;t>=0&&n<e.length&&e.charAt(t)===e.charAt(n);)t--,n++;return n-t-1}var $={func:function(){var e=function(e){for(var t="",n=0;n<e.length;n++){var r=U(e,n,n),o=U(e,n,n+1),a=Math.max(r,o);a>t.length&&(t=e.substr(n-Math.floor((a-1)/2),a))}return t}("abcabcabcabccedabbac");return console.log(e),"\u6700\u957f\u56de\u6587\u5b50\u4e32 ".concat(e)},title:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",file:"leetcode_js/longestPalindrome.js"},V=function(e){for(var t=null,n=e;n;)n=e.next,e.next=t,t=e,e=n;return t};V=function(e){if(null==e||null==e.next)return e;var t=V(e.next);return e.next.next=e,e.next=null,t},V=function(e){return function e(t,n){if(!n)return t;var r=n.next;return n.next=t,e(n,r)}(null,e)};function H(e){this.val=e,this.next=null}var K=new H(1);K.next=new H(2),K.next.next=new H(3),K.next.next.next=new H(4);var Q={func:function(){var e=JSON.stringify(K),t=V(K);return console.log("old",e),console.log("new",t),JSON.stringify(t)},title:"\u53cd\u8f6c\u94fe\u8868",file:"leetcode_js/reverseLinkedList.js"};function Y(e){this.val=e,this.left=this.right=null}var Z=new Y(1);Z.left=new Y(2),Z.right=new Y(2),Z.left.left=new Y(3),Z.right.right=new Y(3),Z.left.right=new Y(4),Z.right.left=new Y(4);var ee={func:function(){var e=function(e){if(null===e)return!0;for(var t=[e.left,e.right];t.length>0;){var n=t.shift(),r=t.shift();if(null!==n||null!=r){if(null===n||null===r)return!1;if(n.val!==r.val)return!1;t.push(n.left,r.right),t.push(n.right,r.left)}}return!0}(Z);return console.log(e),"isSymmetric ".concat(e)},title:"101. \u955c\u50cf\u4e8c\u53c9\u6811",file:"leetcode_js/mirrorTree.js"},te={func:function(){var e=function(e){var t=0;if(0===e.length)return t;var n=e[0],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var c=l.value;c<n?n=c:c-n>t&&(t=c-n)}}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}([2,1,2,0,1,5,4,1,6]);return console.log(e),JSON.stringify("max profit: ".concat(e))},title:"121. \u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",file:"leetcode_js/maxProfit.js"};function ne(e){this.val=e,this.left=this.right=null}var re=new ne(1);re.left=new ne(2),re.right=new ne(3),re.left.left=new ne(4),re.left.right=new ne(5);var oe={func:function(){var e=function(e){var t=0;return function e(n){if(null===n)return 0;var r=e(n.left),o=e(n.right);return t=Math.max(t,r+o),Math.max(r,o)+1}(e),t}(re);return console.log(e),"\u76f4\u5f84 ".concat(e)},title:"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",file:"leetcode_js/diameterOfBinaryTree.js"},ae={func:function(){var e=[2,1,3,5,2,4,1,6,2],t=function(e,t){if(t<e.length/2){for(var n=0;n<t;n++)for(var r=n+1;r<e.length;r++)if(e[n]>e[r]){var o=e[n];e[n]=e[r],e[r]=o}}else for(var a=e.length;a>t-1;a--)for(var l=a-1;l>=0;l--)if(e[a]<e[l]){var i=e[a];e[a]=e[l],e[l]=i}return e.slice(0,t)}(e,5);return console.log(t),"getLeastNumbers ".concat(e," : ").concat(t)},title:"40. \u6700\u5c0f\u7684k\u4e2a\u6570",file:"leetcode_js/getLeastNumbers.js"},le=function(e,t,n){for(var r=e+t,o=Math.min(e,t),a=[0,o,r],l=i(r,o);!a.includes(l);)a.push(l),l=i(l,o);return a.includes(n);function i(e,t){return e>=t?e-t:r-(t-e)}},ie=function(e,t,n){var r=Math.max(e,t),o=e>t?Math.min(e-t,t):Math.min(t-e,e);return!(n>e+t)&&(r%o===0?n%o===0:r%2!==0||o%2!==0||n%2===0)},ce={func:function(){var e=[6,9,1],t=le.apply(void 0,e),n=ie.apply(void 0,e);return console.log(t),"canMeasureWater ".concat(e," func1: ").concat(t,"  func2: ").concat(n)},title:"365. \u6c34\u58f6\u95ee\u9898",file:"leetcode_js/canMeasureWater.js",leetLink:"https://leetcode-cn.com/problems/water-and-jug-problem/solution/shui-hu-wen-ti-by-leetcode-solution/"};function ue(e){this.val=e,this.next=null}var fe=new ue(1);fe.next=new ue(2),fe.next.next=new ue(3),fe.next.next.next=new ue(4),fe.next.next.next.next=new ue(5);var se={func:function(){var e=function(e){for(var t=e,n=e;t&&t.next;)t=t.next.next,n=n.next;return n}(fe);return"\u94fe\u8868\u4e2d\u95f4\u70b9 ".concat(e.val)},title:"876. \u94fe\u8868\u4e2d\u95f4\u70b9",file:"leetcode_js/middleNode.js",leetLink:"https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/fu-zhu-shu-zu-by-egerton/"};function he(e){this.val=e,this.left=this.right=null}var ve=new he(3);ve.left=new he(2),ve.right=new he(5),ve.right.right=new he(6),ve.right.left=new he(4),ve.right.right.right=new he(7);var ge={func:function(){var e=function e(t){if(null===t)return null;var n=t.right;return t.right=t.left,t.left=n,e(t.left),e(t.right),t}(ve);return console.log(e),"\u7ffb\u8f6c\u4e8c\u53c9\u6811 ".concat(JSON.stringify(e))},title:"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811",file:"leetcode_js/invertTree.js"},me={func:function(){var e=function(e){for(var t=0,n=0,r=0;r<e.length;r++)for(var o=0;o<e[r].length;o++){var a=e[r][o];t+=a,n+=a>0?a-1:0,n+=o>0?Math.min(e[r][o-1],a):0,n+=r>0?Math.min(e[r-1][o],a):0}return 6*t-2*n}([[1,2],[3,4]]);return console.log(e),"surfaceArea: ".concat(e)},title:"892. \u4e09\u7ef4\u5f62\u4f53\u7684\u8868\u9762\u79ef",file:"leetcode_js/surfaceArea.js",leetLink:"https://leetcode-cn.com/problems/surface-area-of-3d-shapes/solution/kuai-ji-suan-by-egerton/"},de={func:function(){var e=function(e){var t=0,n=[];e:for(var r=0;r<8;r++)for(var o=0;o<8;o++)if("R"===e[r][o]){n=[r,o];break e}console.log(n);e:for(var a=n[1];a>=0;a--){var l=e[n[0]][a];if("."!==l&&"R"!==l){if("p"===l){t++;break e}break e}}e:for(var i=n[1];i<8;i++){var c=e[n[0]][i];if("."!==c&&"R"!==c){if("p"===c){t++;break e}break e}}e:for(var u=n[0];u>=0;u--){var f=e[u][n[1]];if("."!==f&&"R"!==f){if("p"===f){t++;break e}break e}}e:for(var s=n[0];s<8;s++){var h=e[s][n[1]];if("."!==h&&"R"!==h){if("p"===h){t++;break e}break e}}return t}([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]);return console.log(e),"numRookCaptures: ".concat(e)},title:"999. \u8f66\u7684\u53ef\u7528\u6355\u83b7\u91cf",file:"leetcode_js/numRookCaptures.js"},pe=[],be={func:function(){var e=function e(t){if(1===t||0===t)return 1;if(pe[t])return pe[t];for(var n=0,r=1;r<=t;r++)n+=e(r-1)*e(t-r);return pe[t]=n,n}(10);return console.log(e),"1 .. ".concat(10,"\u53ef\u4ee5\u7ec4\u6210\u7684\u4e8c\u53c9\u641c\u7d22\u6811\u6570\u91cf\uff1a ").concat(e)},title:"96. \u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",file:"leetcode_js/numTrees.js",leetLink:"https://leetcode-cn.com/problems/unique-binary-search-trees/solution/di-gui-you-hua-by-egerton/"},je=n(1);function ye(e,t){if(0===t)throw Error("no 0");var n=e%t;return 0===n?t:ye(t,n)}var we={func:function(){var e=[1],t=function(e){var t,n=[],r=Object(je.a)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n[o]=n[o]?n[o]+1:1}}catch(c){r.e(c)}finally{r.f()}var a,l=(n=n.filter((function(e){return e})))[0],i=Object(je.a)(n);try{for(i.s();!(a=i.n()).done;){if((l=ye(l,a.value))<2)return!1}}catch(c){i.e(c)}finally{i.f()}return!0}(e);return console.log(t),"hasGroupsSizeX ".concat(e,"\uff1a ").concat(t)},title:"914. \u5361\u724c\u5206\u7ec4",file:"leetcode_js/hasGroupsSizeX.js",leetLink:"https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/solution/bao-li-gcd-by-egerton/"};var xe={func:function(){var e=function(e){var t,n=new Set(e),r=Object(je.a)(n);try{for(r.s();!(t=r.n()).done;)for(var o=t.value,a=1;a<o.length;a++){var l=o.slice(a);n.has(l)&&n.delete(l)}}catch(f){r.e(f)}finally{r.f()}var i,c=0,u=Object(je.a)(n);try{for(u.s();!(i=u.n()).done;){c+=i.value.length+1}}catch(f){u.e(f)}finally{u.f()}return c}(["time","me","bell","ell"]);return console.log(e),"\u5355\u8bcd\u7684\u538b\u7f29\u7f16\u7801\uff1a ".concat(e)},title:"820. \u5355\u8bcd\u7684\u538b\u7f29\u7f16\u7801",file:"leetcode_js/minimumLengthEncoding.js"},ke={func:function(){var e=function(e){var t=[];t.length=500,t.fill(0);var n,r=Object(je.a)(e);try{for(r.s();!(n=r.n()).done;){t[n.value]+=1}}catch(a){r.e(a)}finally{r.f()}for(var o=t.length-1;o>0;o--)if(t[o]===o)return o;return-1}([1,1,2,2,3,3]);return console.log(e),"5368. \u627e\u51fa\u6570\u7ec4\u4e2d\u7684\u5e78\u8fd0\u6570\uff1a ".concat(e)},title:"5368. \u627e\u51fa\u6570\u7ec4\u4e2d\u7684\u5e78\u8fd0\u6570",file:"leetcode_js/findLucky.js",leetLink:"https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/solution/js-bian-li-by-egerton-2/"},_e={func:function(){var e=function(e){var t=0,n=e.length;if(n<3)return t;for(var r=0;r<n-2;r++)for(var o=r+1;o<n-1;o++)for(var a=o+1;a<n;a++)(e[r]>e[o]&&e[o]>e[a]||e[r]<e[o]&&e[o]<e[a])&&t++;return t}([1,2,3,4,5]);return console.log(e),"".concat("5369. \u7edf\u8ba1\u4f5c\u6218\u5355\u4f4d\u6570",": ").concat(e)},title:"5369. \u7edf\u8ba1\u4f5c\u6218\u5355\u4f4d\u6570",file:"leetcode_js/findLucky.js",leetLink:"https://leetcode-cn.com/problems/count-number-of-teams/solution/bao-li-bian-li-by-egerton/"},Ee={func:function(){var e=function(e){var t=0,n=e.length,r=[];r.length=n;for(var o=0;o<n;o++){r[o]=[],r[o].length=n;for(var a=0;a<n;a++)r[o][a]=1===e[o][a]?0:Number.MAX_SAFE_INTEGER}for(var l=0;l<=2*n;l++)u(l);for(var i=0;i<n;i++)for(var c=0;c<n;c++)t=Math.max(r[i][c],t);return t===Number.MAX_SAFE_INTEGER||0===t?-1:t;function u(e){for(var t=0;t<n;t++)for(var o=0;o<n;o++)if(r[t][o]===e){var a=r[t][o]+1;t<n-1&&(r[t+1][o]=Math.min(r[t+1][o],a)),t>0&&(r[t-1][o]=Math.min(r[t-1][o],a)),o>0&&(r[t][o-1]=Math.min(r[t][o-1],a)),o<n-1&&(r[t][o+1]=Math.min(r[t][o+1],a))}}}([[1,0,1,0,0,0],[0,0,0,1,0,0],[1,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]);return console.log(e),"".concat("1162. \u5730\u56fe\u5206\u6790",": ").concat(e)},title:"1162. \u5730\u56fe\u5206\u6790",file:"leetcode_js/maxDistance.js",leetLink:"https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/gou-jian-ju-chi-di-tu-dong-tai-gui-hua-by-egerton/"},Oe={func:function(){var e=function(e,t){for(var n=[],r=0;r<e;r++)n[r]=r;for(var o=0;n.length>1;)o=(o-1+t)%n.length,n.splice(o,1);return n[0]}(10,17);return console.log(e),"".concat("\u976262. \u6700\u540e\u7684\u6570\u5b57",": ").concat(e)},title:"\u976262. \u6700\u540e\u7684\u6570\u5b57",file:"leetcode_js/lastRemaining.js",leetLink:"https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/bao-li-js-by-egerton/"},Le=function(e){return function t(n,r){var o=function(t,n){var r=e[t],o=t,a=n;for(;o<a;){for(;o<=a&&e[o]<=r;)o++;for(;o<=a&&e[a]>r;)a--;if(o>=a)break;Se(e,o,a)}return Se(e,a,t),a}(n,r);o>n&&t(n,o-1);o<r&&t(o+1,r)}(0,e.length-1),e};function Se(e,t,n){var r=e[n];e[n]=e[t],e[t]=r}var Me={func:function(){var e=Le([0,5,9,12,2,5,7,3,8,5]);return console.log(e),"".concat("912. \u6392\u5e8f\u6570\u7ec4",": ").concat(e)},title:"912. \u6392\u5e8f\u6570\u7ec4",file:"leetcode_js/sortArray.js",leetLink:"https://leetcode-cn.com/problems/sort-an-array/solution/kuai-pai-kan-zhao-jian-dan-xie-qi-lai-nan-by-egert/"},Ae=function(e){var t,n=[],r=function(e){var t,n=0,r=0,o=Object(je.a)(e);try{for(o.s();!(t=o.n()).done;){"("===t.value?(r++,n=Math.max(n,r)):r--}}catch(a){o.e(a)}finally{o.f()}return n}(e),o=Math.ceil(r/2),a=(Math.floor(r/2),0),l=0,i=Object(je.a)(e);try{for(i.s();!(t=i.n()).done;){"("===t.value?a<o?(a++,n.push(0)):(l++,n.push(1)):l>0?(l--,n.push(1)):(a--,n.push(0))}}catch(c){i.e(c)}finally{i.f()}return n};var Ne={func:function(){var e=Ae("()(())()");return console.log(e),"".concat("1111. \u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",": ").concat(e)},title:"1111. \u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",file:"leetcode_js/maxDepthAfterSplit.js",leetLink:"https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solution/jian-dan-rong-yi-li-jie-de-on-by-egerton/"};function ze(e,t,n){for(var r=0,o=t-1;o<=t+1;o++)for(var a=n-1;a<=n+1;a++)"object"===typeof e[o]&&1===e[o][a]&&r++;return 1===e[t][n]&&r--,r}var Re={func:function(){var e=[[0,1,0],[0,0,1],[1,1,1],[0,0,0]];return function(e){for(var t=[],n=0;n<e.length;n++){t[n]=[];for(var r=0;r<e[n].length;r++)t[n][r]=e[n][r]}for(var o=0;o<e.length;o++)for(var a=0;a<e[o].length;a++){var l=ze(t,o,a);3===l||2===l&&1===t[o][a]?e[o][a]=1:e[o][a]=0}}(e),console.log(e),"".concat("289. \u751f\u547d\u6e38\u620f",": ").concat(e)},title:"289. \u751f\u547d\u6e38\u620f",file:"leetcode_js/gameOfLife.js"},Ie={func:function(){var e=[[1,2,3],[4,5,6],[7,8,9]];return function(e){for(var t=e.length,n=0;n<t;n++)for(var r=0;r<n;r++)l(e,[n,r],[r,n]);for(var o=0;o<t;o++)for(var a=0;a<t/2;a++)l(e,[o,a],[o,t-1-a]);function l(e,t,n){var r=Object(i.a)(t,2),o=r[0],a=r[1],l=Object(i.a)(n,2),c=l[0],u=l[1],f=e[o][a];e[o][a]=e[c][u],e[c][u]=f}}(e),console.log(e),"".concat("\u9762\u8bd5\u9898 01.07. \u65cb\u8f6c\u77e9\u9635",": ").concat(e)},title:"\u9762\u8bd5\u9898 01.07. \u65cb\u8f6c\u77e9\u9635",file:"leetcode_js/rotate.js",leetLink:"https://leetcode-cn.com/problems/rotate-matrix-lcci/solution/jian-dan-hao-li-jie-de-kong-jian-o1-by-egerton/"},Te={func:function(){var e=function(e){for(var t=0,n=0,r=0;r<e.length;r++)e[r]>e[n]&&(n=r);for(var o=0,a=0;a<n;a++)e[a]>o?o=e[a]:t+=o-e[a];o=0;for(var l=e.length-1;l>n;l--)e[l]>o?o=e[l]:t+=o-e[l];return t}([0,1,0,2,1,0,1,3,2,1,2,1]);return console.log(e),"".concat("42. \u63a5\u96e8\u6c34",": ").concat(e)},title:"42. \u63a5\u96e8\u6c34",file:"leetcode_js/trap.js",leetLink:"https://leetcode-cn.com/problems/trapping-rain-water/solution/onbian-li-by-egerton/"},De=function(e){this.map=new Map,this.capa=e,this.timer=0};De.prototype.get=function(e){var t=this.map.get(e);return void 0===t?-1:(t.times=t.times+1,t.lastDate=this.timer++,t.value)},De.prototype.put=function(e,t){if(0!==this.capa)if(this.map.has(e)){var n=this.map.get(e);this.map.set(e,{value:t,times:n.times+1,lastDate:this.timer++})}else if(this.map.size<this.capa)this.map.set(e,{value:t,times:1,lastDate:this.timer++});else{var r,o,a={times:Number.MAX_SAFE_INTEGER,lastDate:this.timer++},l=Object(je.a)(this.map);try{for(l.s();!(o=l.n()).done;){var i=o.value,c=i[1];(c.times<a.times||c.times===a.times&&c.lastDate<a.lastDate)&&(a=i[1],r=i[0])}}catch(u){l.e(u)}finally{l.f()}this.map.delete(r),this.map.set(e,{value:t,times:1,lastDate:this.timer++})}};var Ce={func:function(){var e=new De(2);return e.put(1,1),e.put(2,2),e.put(3,3),e.get(3),e.get(2),e.put(4,4),e.get(2),console.log(e),"".concat("460. LFU\u7f13\u5b58",": ").concat(JSON.stringify(e))},title:"460. LFU\u7f13\u5b58",file:"leetcode_js/LFUCache.js"},Fe=function(e,t,n){for(var r=[],o=0;o<e;o++)r[o]=[];r[0][0]=!0;for(var a=0;a<e;a++)for(var l=0;l<t;l++)!0===r[a][l]&&(a+1<e&&(r[a+1][l]=Je(a+1,l,n)),l+1<t&&(r[a][l+1]=Je(a,l+1,n)));return function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?e(n):n)}),[])}(r).filter((function(e){return e})).length};function Je(e,t,n){var r=0;return r+=Math.floor(e/100)+Math.floor(e/10)+e%10,(r+=Math.floor(t/100)+Math.floor(t/10)+t%10)<=n}var Ge={func:function(){var e=Fe(38,15,9);return console.log(e),"".concat("\u9762\u8bd5\u989813. \u673a\u5668\u4eba\u7684\u8fd0\u52a8\u8303\u56f4",": ").concat(e)},title:"\u9762\u8bd5\u989813. \u673a\u5668\u4eba\u7684\u8fd0\u52a8\u8303\u56f4",file:"leetcode_js/movingCount.js"},Be={func:function(){var e=function(e){var t=[];return function e(n){if(t[n])return t[n];var r=[];if(0===n)return[""];for(var o=0;o<n;o++){var a,l=Object(je.a)(e(o));try{for(l.s();!(a=l.n()).done;){var i,c=a.value,u=Object(je.a)(e(n-o-1));try{for(u.s();!(i=u.n()).done;){var f=i.value;r.push("(".concat(c,")").concat(f))}}catch(s){u.e(s)}finally{u.f()}}}catch(s){l.e(s)}finally{l.f()}}return t[n]=r,r}(e)}(4);return console.log(e),"".concat("22. \u62ec\u53f7\u751f\u6210",": length").concat(e.length," ").concat(e)},title:"22. \u62ec\u53f7\u751f\u6210",file:"leetcode_js/generateParenthesis.js"};function Xe(e){this.val=e,this.next=null}var qe=new Xe(1),Pe=new Xe(9);Pe.next=new Xe(9);var We=[W,P,$,Q,ee,te,oe,q,F,C,D,z,A,L,O,E,x,j,d,m,ae,ce,se,ge,me,de,be,we,xe,ke,_e,Ee,Oe,Me,Ne,Re,Te,Ce,Ie,Ge,Be,{func:function(){var e=function(e,t){for(var n=[],r=[];e;)n.push(e.val),e=e.next;for(;t;)r.push(t.val),t=t.next;for(var o=n.length,a=r.length,l=new Xe,i=1,c=0,u=Math.max(o,a);i<=u||1===c;i++){var f=(n.length>0?n.pop():0)+(r.length>0?r.pop():0)+c;c=f>=10?1:0;var s=new Xe(f%10);s.next=l.next,l.next=s}return l.next}(qe,Pe);return console.log(e),"".concat("445. \u4e24\u6570\u76f8\u52a0 II",": ").concat(e)},title:"445. \u4e24\u6570\u76f8\u52a0 II",file:"leetcode_js/addTwoNumbers.js",leetLink:"https://leetcode-cn.com/problems/add-two-numbers-ii/solution/zhan-dao-xu-by-egerton/"},{func:function(){var e=function(e){for(var t=0,n=0;n<e.length;n++)for(var r=n;r<e.length;r++)e[r]<e[n]&&t++;return t}([7,5,6,4]);return console.log(e),"".concat("\u9762\u8bd5\u989851. \u6570\u7ec4\u4e2d\u7684\u9006\u5e8f\u5bf9",": ").concat(e)},title:"\u9762\u8bd5\u989851. \u6570\u7ec4\u4e2d\u7684\u9006\u5e8f\u5bf9",file:"leetcode_js/reversePairs.js"},{func:function(){var e=[1,2,3,0,0,0];return function(e,t,n,r){for(var o=e.slice(0,t),a=0;o.length>0||n.length>0;)o[0]<n[0]||0===n.length?e[a]=o.shift():e[a]=n.shift(),a++}(e,3,[2,5,6]),console.log(e),"".concat("\u9762\u8bd5\u9898 10.01. \u5408\u5e76\u6392\u5e8f\u7684\u6570\u7ec4",": ").concat(e)},title:"\u9762\u8bd5\u9898 10.01. \u5408\u5e76\u6392\u5e8f\u7684\u6570\u7ec4",file:"leetcode_js/mergeArray.js"},{func:function(){var e=function(e){for(var t=0,n=new Set,r=0,o=0;o<e.length;o++){for(n.delete(e.charAt(o-1));r<e.length&&!n.has(e.charAt(r));)n.add(e.charAt(r)),r++;t=Math.max(t,n.size)}return t}("bbbb");return console.log(e),"".concat("3. \u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",": ").concat(e)},title:"3. \u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",file:"leetcode_js/lengthOfLongestSubstring.js",leetLink:"https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/js-setguan-fang-ti-jie-er-lai-by-egerton/"},{func:function(){var e=[-2,-1,-3,-4],t=function(e){for(var t=0;t<e.length;t++)t>0&&e[t-1]>0&&(e[t]=e[t]+e[t-1]);return Math.max.apply(Math,Object(u.a)(e))}(e);return"maxSubArray ".concat(e,"\uff1a ").concat(t)},title:"53. \u6700\u5927\u5b50\u5e8f\u548c",file:"leetcode_js/maxSubArray.js",leetLink:"https://leetcode-cn.com/problems/maximum-subarray/solution/kan-liao-ti-jie-zhong-xie-de-dong-tai-gui-hua-by-e/"}],Ue=n(13),$e=n.n(Ue);function Ve(e){var t=e.answer,n=e.stageSelf,a=e.showAns,l=Object(r.useState)(""),c=Object(i.a)(l,2),u=c[0],f=c[1];return o.a.createElement("li",null,o.a.createElement("div",{className:"action"},o.a.createElement("span",null,t.title),o.a.createElement("span",{className:"link",onClick:function(){window.open("https://github.com/andycao/algorithmLearn/blob/master/src/"+t.file)}},"\u6e90\u7801"),o.a.createElement("span",{className:"link",onClick:function(e){e.preventDefault(),n(),f(t.func())}},"\u8fd0\u884c"),t.leetLink?o.a.createElement("span",{className:"link",onClick:function(){window.open(t.leetLink)}},"leetcode\u9898\u89e3"):null),a?o.a.createElement("div",{className:"result"},u):"")}var He=function(e){var t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],l=n[1],c=Object(r.useState)(We.map((function(e){return Object(f.a)({},e,{key:$e.a.generate()})}))),s=Object(i.a)(c,2),h=s[0],v=s[1];return Object(r.useEffect)((function(){v(Object(u.a)(h).reverse()),l(null)}),[e.order]),o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,h.map((function(e,t){return o.a.createElement(Ve,{key:t,answer:e,showAns:a===t,stageSelf:l.bind(null,t)})}))))};var Ke=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){document.title="Andy\u7684\u7b97\u6cd5\u5b66\u4e60"}),[]),o.a.createElement("div",{className:"container"},o.a.createElement(c,{changeOrder:function(){a(0===n?1:0)}}),o.a.createElement(He,{order:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.36fbf60e.chunk.js.map