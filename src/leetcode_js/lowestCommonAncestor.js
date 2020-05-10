/**
 * 236. 二叉树的最近公共祖先
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 后序遍历，两个节点都出现后，开始对每个节点进行搜索，确定存在首先出现的节点的就是LCA
 * postOrder
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let afterP = false;
    let afterQ = false;
    let ans = null;
    let test = null;

    function postOrder(node) {
        if (node) {
            postOrder(node.left);
            postOrder(node.right);
            if (node === p) {
                afterP = true;
                test = q;
            } else if (node === q) {
                afterQ = true;
                test = p;
            }

            if (afterP && afterQ && !ans) {
                if (treeContain(node, test)) {
                    ans = node;
                }
            }
        }
    }

    function treeContain(root, node) {
        let res = false;
        preOrder(root);
        return res;
        function preOrder(root) {
            if (root === node) res = true;
            if (root.left) preOrder(root.left);
            if (root.right) preOrder(root.right);
        }
    }

    postOrder(root);
    return ans;
};

/**
 * 看了题解后优化，O(n) 后序遍历
 * postOrder
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;

    /**
     * 判断是否包含p q其中之一
     * 过程中设置ans
     */
    function postOrder(node) {
        if (node === null) return false;

        let leftRes = postOrder(node.left);
        let rightRes = postOrder(node.right);

        //考虑左右个包含一个，或者当前node是一个左右有一个的情况
        if (((node === p || node === q) && (leftRes || rightRes)) || (leftRes && rightRes)) {
            ans = node;
        }

        return node === p || node === q || leftRes || rightRes;
    }

    postOrder(root);
    return ans;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(2);
let a = root1.left;
root1.right = new TreeNode(5);
root1.right.right = new TreeNode(6);
root1.right.left = new TreeNode(4);
root1.right.right.right = new TreeNode(7);
let b = root1.right.right.right;

export default {
    func: () => {
        let res = lowestCommonAncestor(root1, a, b);
        console.log(res);
        return `${res.val}`;
    },
    title: `236. 二叉树的最近公共祖先`,
    file: "leetcode_js/lowestCommonAncestor.js",
    leetLink:
        "https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/on2de-ben-fang-fa-by-egerton/",
};
