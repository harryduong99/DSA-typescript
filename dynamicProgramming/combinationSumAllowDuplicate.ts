// https://leetcode.com/problems/combination-sum/description/
// in this problem, The same number may be chosen from candidates an unlimited number of times

export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  // dp stores combinations of each target value from 0 to target
  let dp: number[][][] = [];
  for (let i = 0; i <= target; i++) {
    dp[i] = [];
  }
  dp[0] = [[]]; // to start the loop combinations

  // build the dp, from 0 to target
  for (const candidate of candidates) {
    // build the dp for target gradually by updating the combinations for each value (i),
    // as i increase to target, the smaller i's combinations result will be used to compute combinations for bigger i
    // => This is dynamic programming bottom up
    for (let i = candidate; i <= target; i++) {
      // loop though all combination (*) that exist for target = i - candidate
      // then can have the combinations for target = i by adding the candidate element to each combination (*) above
      for (const combination of dp[i - candidate]) {
        const newCombination = [...combination, candidate];
        // duplication of combinations might happen if there are duplicated candidate in the candidates, eg: [1,2,4,1] (duplicated 1),
        // check newCombination already exist in dp[i] before pushing
        if (!isCombinationExist(dp[i], newCombination)) {
          dp[i].push(newCombination);
        }
      }
    }
  }

  return dp[target];
}
const isCombinationExist = (
  combinations: number[][],
  inComingCombination: number[]
): boolean => {
  for (const combination of combinations) {
    if (isArrayEqual(combination, inComingCombination)) {
      return true;
    }
  }
  return false;
};

const isArrayEqual = (array1: number[], array2: number[]) => {
  if (array1.length != array2.length) {
    return false;
  }
  array1.sort();
  array2.sort();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
};

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));
