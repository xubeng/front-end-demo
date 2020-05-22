
 /**
  * 节点定义
  */
 class TreeNode {
    constructor(val) {
        this.val= val;
        this.left = null;
        this.right = null;
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 计算深度（高度）
let maxDepth = (root) =>{
    let height = 0;
    let right = 0;
    let left = 0;
    if(!root) {return 0;}
    right = maxDepth(root.right)
    left = maxDepth(root.left)
    height = Math.max(right,left)+1;
    
    return height;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 计算宽度
let getWidth = (root)=> {
    if (!root) {
        return 0
    }
    const queue = [{ node: root, index: 1 }]//index为节点标记或者说索引
    let maxWidth = 1
    while (queue.length) {
        const len = queue.length
        if (len > 1) {
            const start = queue[0].index
            const end = queue[len - 1].index
            const currWidth = end - start + 1// 当前层级的宽度
            maxWidth = Math.max(maxWidth, currWidth)
        }
        for (let i = 0; i < len; i++) {
            const temp = queue.shift()//更新while循环条件
            const node = temp.node
            const index = temp.index
            node.left && queue.push({ node: node.left, index: index * 2 })
            node.right && queue.push({ node: node.right, index: index * 2 + 1 })
        }
    }
    return maxWidth
};

/**
 * @param {number} n
 * @return {number}
 */
 function numWays(n){
        if(n===1){return 1}
        if(n===2){return 2}
        else {return (numWays(n-1)+ numWays(n-2))}
    }
    