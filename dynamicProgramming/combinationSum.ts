// https://leetcode.com/problems/combination-sum-ii/description/
// in this problem, each candidate can be only used once in a combination

// This problem can be solved by recursion/ backtracking or dynamic programming. 
// Seems backtracking is a preferred solution. Below is the DP solution
// Literally similar Subset Sum problem
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  // dp stores combinations of each target value from 0 to target
  let dp: number[][][] = [];
  for (let i = 0; i <= target; i++) {
    dp[i] = [];
  }
  dp[0] = [[]]; // to start the loop of combinations

  // build the dp, from 0 to target
  for (const candidate of candidates) {
    // build the dp for target gradually by updating the combinations for each value (i),
    // as i increase to target, the smaller i's combinations result will be used to compute combinations for bigger i
    // => This is dynamic programming bottom up
    for (let i = candidate; i <= target; i++) {
      // loop though all combination (*) that exist for target = i - candidate
      // then can have the combinations for target = i by adding the candidate element to each combination (*) above
      for (const combination of dp[i - candidate]) {
        // for non-repeating candidate requirement => check weather candidate is used or not
        // if candidate duplication is allowed => can remove this check
        if (isCandidateAvailable(candidates, combination, candidate)) {
          const newCombination = [...combination, candidate];
          // duplication of combinations might happen if there are duplicated candidate in the candidates, eg: [1,2,4,1] (duplicated 1),
          // check newCombination already exist in dp[i] before pushing
          if (!isCombinationExist(dp[i], newCombination)) {
            dp[i].push(newCombination);
          }
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

const isCandidateAvailable = (
  candidates: number[],
  combination: number[],
  candidate: number
) => {
  let hashTable = new Map();
  for (let i = 0; i < candidates.length; i++) {
    let value = hashTable.get(candidates[i]);
    hashTable.set(candidates[i], value == undefined ? 1 : value + 1);
  }
  for (let i = 0; i < combination.length; i++) {
    hashTable.set(combination[i], hashTable.get(combination[i]) - 1);
  }

  return hashTable.get(candidate) > 0;
};

// Run time is slow
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
