/** ⭐
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */
import TreeNode from '../../../data-structures/tree/TreeNode';

// [3,9,20,null,null,15,7] => output: 3
// 9, 15, 7 => Max(0, 0) + 1 = 1
// 20(15,17) => Max(1, 1) + 1 = 2
// 3(9,20) => Max(1, 2) + 1 = 3

// Solution: Use Recursion thinking from the leaf node
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  // if we are on the leaft node, both left and right dpth will be 0
  // so leaf node's max dpth = 1
  // parent's max dpth = Max(rightDpth, leftDpth) + 1
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
