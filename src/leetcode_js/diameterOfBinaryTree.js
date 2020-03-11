/**
 * 543.二叉树的直径
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
 * 
 * 一个树经过root节点的直径，就是它左侧的深度 L 右侧的深度 R  + 1
 * 那么，在经过所有节点的直径中，找到最大值就可以了
 * 后序，深度遍历
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let diameterOfBinaryTree = function(root) {
    //在作用域内保存变量
    let maxRadius = 0;
    findDepth(root);
    return maxRadius;

    function findDepth(root){
        if(root === null) return 0;
        //max 左侧，右侧
        let leftDepth = findDepth(root.left);
        let rightDepth = findDepth(root.right);
        
        maxRadius = Math.max(maxRadius, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1
    
    }
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
// root1.right.left = new TreeNode(6)
/**
          1
         / \
        2   3
       / \     
      4   5  
 */
export default () => {
    const res = diameterOfBinaryTree(root1)
    console.log(res);
    return `depth ${res}`;
}
