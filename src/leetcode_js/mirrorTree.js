/* eslint-disable no-redeclare */
/**
 * 101 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

           1
       /        \
     2           2
   /   \       /   \
  3     4     4     3
 / \   / \   / \   / \
5   6 7   8 8   7 6   5
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归的方法，如果两个树是镜像树的话，那么他们的值相等，并且一个的左边，与另一个的右边互为镜像树
 * 一个的右边与另一个的左边互为镜像树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return isMirror(root, root);
};

function isMirror(nodeLeft, nodeRight) {
    if (nodeLeft === null && nodeRight === null) {
        return true;
    } else if (nodeLeft === null || nodeRight === null) {
        return false;
    } else if (nodeLeft.val === nodeRight.val &&
        isMirror(nodeLeft.left, nodeRight.right) &&
        isMirror(nodeLeft.right, nodeRight.left)) {
        return true;
    } else {
        return false;
    }
}

/**
 * 递归，除了root向队列里推左右两边，shift出来2个元素，比较相同。如果相等，继续推两个元素的左边，右边一对，右边，左边一对
 * 不相等时退出，两个元素同为null时退出
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if(root === null) return true;
    let list = [root.left, root.right];
    
    while(list.length > 0) {
        let a = list.shift();
        let b = list.shift();

        if(a === null && b == null) {
            continue;
        } else if(a === null || b === null) {
            return false;
        } else if(a.val === b.val) {
            list.push(a.left, b.right);
            list.push(a.right, b.left);
        } else {
            return false;
        }
    }

    return true;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.right.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);

export default {
    func: () => {
        let res = isSymmetric(root);
        console.log(res);

        return `isSymmetric ${res}`
    },
    title: '101. 镜像二叉树',
    file: "leetcode_js/mirrorTree.js",
}