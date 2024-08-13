// https://leetcode.com/problems/longest-valid-parentheses/description/

/**
 * parenthesis => stack data structure
 * longest => dynamic programming?
 *
 * NOTE: EXAMPLE: ()(() => LVP-substring = 2 and LVP-subsequence = 4
 *
 * ---------------
 * If it is finding longest subsequence:
 *
 * if meet ( => longest length remains
 * if meet ) => longest length might + 2 (a pair => 2)
 *
 * => LVP(i) = 2 + LVP(i-1) string[i] == ) and stack(of i).length > 0 | stack = ["(", "(",...]
 * Or LVP(i) = LVP(i-1)
 * -----------------------------
 */
export function longestValidParenthesesSubsequence(s: string): number {
  if (!s.length) {
    return 0;
  }

  let dp = Array(s.length).fill(0);
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    console.log("i", i);

    if (s[i] == "(") {
      stack.push("(");
    }
    console.log("stack", stack);
    if (s[i] == ")" && stack.length > 0) {
      dp[i] = 2 + (i - 1 >= 0 ? dp[i - 1] : 0);
      stack.pop();
    } else {
      dp[i] = i - 1 >= 0 ? dp[i - 1] : 0;
    }

    console.log("dp", dp);
  }

  return dp[s.length - 1];
}

// console.log(longestValidParenthesesSubsequence(")((()(()))"));

/**
 * If it is finding longest substring:
 */
function longestValidParenthesesSubstring(s: string): number {
  let maxLength: number = 0;
  let dp: number[] = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === "(" && s[i] === ")") {
      dp[i] = 2 + (dp[i - 2] || 0);
      maxLength = Math.max(maxLength, dp[i]);
    }
    if (s[i - 1] === ")" && s[i] === ")" && s[i - dp[i - 1] - 1] === "(") {
      dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
      maxLength = Math.max(maxLength, dp[i]);
    }
  }
  return maxLength;
}
console.log(longestValidParenthesesSubstring("()(()"));
