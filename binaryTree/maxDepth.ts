class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  return recursion(root);
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

/**
 *
 * basic rules to run recursion:
 * + must have a stop point
 * + must have a something to store the result
 */
const recursion = (node: TreeNode | null, depth = 0): number => {
  if (node == null) {
    return depth;
  } else {
    depth += 1;
  }

  console.log("val", node.val);
  console.log("depth", depth);

  // travel left and right, if the node is not null then +1 for depth
  const maxLeft = recursion(node.left, depth);
  const maxRight = recursion(node.right, depth);

  // image left and right for root node, and apply the same for children
  // => the return for each recursion gonna be the compare of left and right, from bottom to top we will get the biggest depth
  return Math.max(maxLeft, maxRight);
};

let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.right = new TreeNode(7);
tree.right.left = new TreeNode(15);

let tree2 = new TreeNode(-8);
tree2.left = new TreeNode(-6);
tree2.left.left = new TreeNode(6);
tree2.left.left.right = new TreeNode(5);
tree2.right = new TreeNode(7);

console.log(maxDepth(tree2));


// From solutions: => the same

function maxDepth2(root: TreeNode | null): number {
  if(!root) return 0;
  
  return DFS(root, 0)
}; 

function DFS(root: TreeNode | null, count : number): number {
  if(!root){
      return count;
  }
  
  count++;
  return Math.max(DFS(root.left, count), DFS(root.right, count))
}