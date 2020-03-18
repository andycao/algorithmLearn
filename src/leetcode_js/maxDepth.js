/**
 * 104. 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 后序遍历
 * 当前节点深度 = 子节点最大深度 + 1
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    const dep = Math.max(left, right) + 1;
    return dep;
};



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.right.right = new TreeNode(4);
root1.right.right.right = new TreeNode(4);

export default {
    func: () => {
        let res = maxDepth(root1);
        console.log(root1);
        console.log(res);
        return `二叉树的最大深度 ${res}`;
    },
    title: `104. 二叉树的最大深度`,
    leetLink: 'https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/js-hou-xu-bian-li-by-egerton/',
    file: "leetcode_js/maxDepth.js"
}


