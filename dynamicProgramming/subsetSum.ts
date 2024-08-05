// Given a set of non-negative integers and a value sum,
// the task is to check if there is a subset of the given set whose sum is equal to the given sum.
// https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

// Similar to combination sum, but only need to return true/false instead of the combinations

/**
 * This problem can be solved by recursion/ recursion + memoization / dynamic programming
 * Let's check the recursion solution first:
 * Build recurrence relation:
 * isSubsetSum(set, n, sum) = isSubsetSum(set, n-1, sum) | isSubsetSum(set, n-1, sum-set[n-1])
 * Base Cases:
 * isSubsetSum(set, n, sum) = false, if sum > 0 and n = 0
 * isSubsetSum(set, n, sum) = true, if sum = 0
 *
 * Estimate time complexity:
 * => Based on recurrence relation => Time function T(n) = 2T(n-1) + O(1)
 * Apply Master Theorem for decreasing function => a = 2, b = 1, k = 0 => T(n) = O(2^(n/1) * n ^ 0) = O(2^n)
 *
 * Or draw recursion tree => 2 branches, depth = n
 * => Time complexity: O(2^n)
 */
export const isSubsetSumRecursion = (
  set: number[],
  n: number,
  sum: number
): boolean => {
  // Base Cases
  if (sum == 0) {
    return true;
  }
  // if n = 0 (and sum != 0) => no subset found
  if (n == 0) {
    return false;
  }
  // If last element is greater than sum => ignore it
  if (set[n - 1] > sum) {
    return isSubsetSumRecursion(set, n - 1, sum);
  }

  // Else, check if sum can be obtained by 2 cases:
  // 1) including the last element
  // 2) excluding the last element
  // These 2 cases will cover all the possibility of combinations
  return (
    isSubsetSumRecursion(set, n - 1, sum) ||
    isSubsetSumRecursion(set, n - 1, sum - set[n - 1])
  );
};

// console.log(isSubsetSumRecursion([3, 34, 4, 12, 5, 2], 6, 9));

// Storing the value -1 to the matrix
let results = Array(10)
  .fill(-1)
  .map(() => Array(10).fill(-1));

/**
 * Memoization
 */
const isSubsetSumRecursionMemoization = (
  set: number[],
  n: number,
  sum: number
): number => {
  if (sum == 0) return 1; // true

  if (n <= 0) return 0;

  // If the value is not -1 it means it already call the function with the same value.
  // it will save our from the repetition.
  if (results[n - 1][sum] != -1) return results[n - 1][sum];

  if (set[n - 1] > sum) {
    return (results[n - 1][sum] = isSubsetSumRecursionMemoization(
      set,
      n - 1,
      sum
    ));
  }

  return (results[n - 1][sum] =
    isSubsetSumRecursionMemoization(set, n - 1, sum) ||
    isSubsetSumRecursionMemoization(set, n - 1, sum - set[n - 1]));
};

console.log(isSubsetSumRecursionMemoization([3, 34, 4, 12, 5, 2], 6, 9));

/**
 * Dynamic programming
 * Create a grid (matrix) => one axis is 0,1,2... sum, the other axis is numbers of the set => size = (n+1) * (sum+1)
 * (including no element row => n+1, including 0 sum => sum + 1 column)
 * dp[i][j] will be true if there exists a subset of elements from set[0 . . . i] with sum value = ‘j’.
 * => dp[i][j] = True/False (i <=> 0->n, j <=> sum)
 *
 * Compute the result:
 * if (set[i-1] > j)
 *   dp[i][j] = dp[i-1][j]
 * else
 *  dp[i][j] = dp[i-1][j] OR dp[i-1][j-set[i-1]]
 *
 * The result will be in dp[n][sum]
 */
const isSubsetSum = (set: number[], n: number, sum: number): boolean => {
  let dp = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(0)); // create grid
  // If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }
  // If no element, meaning answer is false for every sum
  for (let j = 0; j <= sum; j++) {
    dp[0][j] = false;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (set[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - set[i - 1]];
      }
    }
  }

  return dp[n][sum];
};
console.log(isSubsetSum([3, 34, 4, 12, 5, 2], 6, 9));
