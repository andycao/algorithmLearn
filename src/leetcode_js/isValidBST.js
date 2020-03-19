/**
 * 98. 验证二叉搜索树
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 如果一个树是bst，那么他的每个节点n的 n.left也是一个bst, n.right也是一个bst
 * 并且n.val > n.left.max, n.val < n.right.min
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null) return true;

    return isValidBST(root.left) && isValidBST(root.right) && root.val > maxVal(root.left) &&
    root.val < minVal(root.right);
};

/**
 * 找出一棵bst的max
 * 最右边的值
 * @param {TreeNode} root 
 */
function maxVal(root) {
    if(root === null) return Number.MIN_SAFE_INTEGER;
    if(root.right) return maxVal(root.right);
    else return root.val;
}
/**
 * 找出一棵bst的min
 * 最左边的值
 * @param {TreeNode} root 
 */
function minVal(root) {
    if(root === null) return Number.MAX_SAFE_INTEGER;
    if(root.left) return maxVal(root.left);
    else return root.val;
}

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
        let res = isValidBST(root1);
        console.log(root1);
        console.log(res);
        return `验证二叉搜索树 ${res}`;
    },
    title: `98. 验证二叉搜索树`,
    file: "leetcode_js/isValidBST.js",
    leetLink: 'https://leetcode-cn.com/problems/validate-binary-search-tree/solution/di-gui-hou-xu-sou-suo-by-egerton/'
}


