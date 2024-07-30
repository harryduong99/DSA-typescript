// https://leetcode.com/problems/longest-palindromic-subsequence/description/
import { longestCommonSubsequence } from "./longestCommonSubsequence";

// LPS
// LPS(a) = LCS(a, reserve(a))
export function longestPalindromeSubsequence(s: string) {
  const b = longestCommonSubsequence(s, s.split("").reverse().join());
  console.log(b);
  // => get longest common subsequence of string s and its reversed version => that is the longest palindromic subsequence of s
}

// bbba => bbbb
// bbcbab => bbcbb

console.log(longestPalindromeSubsequence("bbba"));
