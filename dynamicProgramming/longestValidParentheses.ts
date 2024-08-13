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
 * If it is finding longest substring: DP
 * 
 * We will take into consideration only two conditions:
 * a. s[i - 1] == '(' && s[i] == ')';
 * b. s[i - 1] == ')' && s[i] == ')'.
 * Condition a. means that we have found a valid substring '( )' of parentheses of length 2. So we can put the length = 2 of that substring in the dp at index i: dp[i] = 2
 * But it could be a subsequent valid substring (e.g. i = 5 to 6 - this valid substring is a part of the bigger valid substring i = 3 to 6). So we also have to check the value in dp[i - 2], and the resulting equation for condition a. will be dp[i] = 2 + dp[i - 2].
 * 
 * Condition b. s[i - 1] == ')' && s[i] == ')' means that s[ i ] could be a closing parentheses of the pattern '((...)) '.
 * In this case we already checked s[i - 1] at the previous step and it could be a part of the previous valid or invalid substring,  let's call it sub(i-1)
 * Also we have already put some value in dp[i - 1]. Thus, only s[ i ] needs further investigation.
 * We have to check if the character before sub(i-1) equals '('. To do that we subtract the value of dp[i - 1] (the length of sub(i-1) plus 1
 * => dp[i - (dp[i - 1] + 2)] <=> dp[i - dp[i - 1] - 2] ( we also have to check if there a valid substring just before the considering substring)
 * 
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
