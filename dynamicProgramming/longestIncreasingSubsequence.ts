// https://leetcode.com/problems/longest-increasing-subsequence/

// LIS
/**
 * A = [3,1,8,2,5]
 * LIS([3,1,8,2,5]) => 1->2->5 => length = 3
 * Subproblem: LIS[k] = LIS ending at index k
 * Relationships among subproblem (Compute):
 *
 * L(i) = 1 + max(L(j) ) where 0 < j < i and arr[j] < arr[i]; or
 * L(i) = 1, if no such j exists.
 *
 * Other examples:
 * B = [6,7,8,2,5] => LIS = 3: 6->7->8
 * C[5,2,8,6,3,6,9,5] => 2->3->6->9 => 4
 *
 */

export const longestIncreasingSubsequence = (nums: number[]) => {
  let lis: number[] = []; // store the values (longest length)
  let max = 0;

  // Initialize LIS values
  for (let i = 0; i < nums.length; i++) {
    lis[i] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (nums[j] < nums[i] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
      if (lis[i] > max) {
        max = lis[i]; // rewrite new value
      }
    }
  }

  return max;
};

console.log(longestIncreasingSubsequence([5, 2, 8, 6, 3, 6, 9, 5]));
