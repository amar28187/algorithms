/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * The thief has found himself a new place for his thievery again.
 * There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house.
 * After a tour, the smart thief realized that "all houses in this place forms a binary tree".
 * It will automatically contact the police if two directly-linked houses were broken into on the same night.
 * Determine the maximum amount of money the thief can rob tonight without alerting the police.
 *
 * Example:
 *    3
    / \
   2   3
    \   \
     3   1
 * Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 *
 *     3
      / \
    4   5
    / \   \
  1   3   1
 * Maximum amount of money the thief can rob = 4 + 5 = 9.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  const _dfs = (node) => {
    return node ? dfs(node.left) + dfs(node.right) : 0;
  };

  const dfs = (node) => {
    if (!node) return 0;
    if (!node.left && !node.right) return node.val;

    const unRobRoot = dfs(node.left) + dfs(node.right); // unrob root
    const robRoot = node.val + _dfs(node.left) + _dfs(node.right); // rob root
    return Math.max(unRobRoot, robRoot);
  };

  return dfs(root);
};