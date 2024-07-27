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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return recursion(root, targetSum);
};

const recursion = (node: TreeNode | null, targetSum: any, currentSum = 0): boolean => {
  if (node == null) { // is leaf
    return currentSum == targetSum;
  } else {
    currentSum += node.val
  }

  const isLeftValid = recursion(node.left, targetSum, currentSum)
  const isRightValid = recursion(node.right, targetSum, currentSum)

  return isLeftValid || isRightValid;
}

let a = new TreeNode(5)
a.left = new TreeNode(4)
a.right = new TreeNode(8)
a.left.left = new TreeNode(11)
a.left.left.left = new TreeNode(7)
a.left.left.right = new TreeNode(2)
a.right.left = new TreeNode(13)
a.right.right = new TreeNode(4)
a.right.right.right = new TreeNode(1)

console.log(hasPathSum(a, 22));