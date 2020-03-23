/**
 * 226. 翻转二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 深度遍历，对每个节点的left, right进行调换
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(root === null) return null;

    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(2);
root1.right = new TreeNode(5);
root1.right.right = new TreeNode(6);
root1.right.left = new TreeNode(4);
root1.right.right.right = new TreeNode(7);

export default {
    func: () => {
        let res = invertTree(root1);
        console.log(res);
        return `翻转二叉树 ${JSON.stringify(res)}`;
    },
    title: `226. 翻转二叉树`,
    file: "leetcode_js/invertTree.js",
}


