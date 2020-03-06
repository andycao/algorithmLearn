/**
 * 144.给定一个二叉树，返回它的 先序 遍历。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归的方法，先访问本节点value，再访问左节点，再右节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = [];
    if (root !== null) {
        result.push(root.val);
        result.push(...preorderTraversal(root.left));
        result.push(...preorderTraversal(root.right));
    }
    return result;
};

/**
 * 迭代的方法
 * 拿到一个节点，检查是否为null
 * 非null, 保存值，添加到暂存栈，指向它的left
 * null，则从栈里pop出来一个node，并且指向它的right
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = [];

    //暂存
    let temp = [];

    //检查的node
    let node = root;

    while (node !== null || temp.length > 0) {

        if (node !== null) {
            result.push(node.val);
            temp.push(node);
            node = node.left;
        } else {
            node = temp.pop().right
        }
    }
    return result;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 *         1
       /        \
     2           2
   /   \       /   \
  3     4     4     3
 */
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.right.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);

export default () => {
    let res = preorderTraversal(root);
    console.log(res);

    return JSON.stringify(res);
}