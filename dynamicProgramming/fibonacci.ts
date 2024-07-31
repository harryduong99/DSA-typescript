/**
 * naive approach with recursion
 * => too many re-calculation
 * run time: O(2^n)
 */
const fib = (n: number): number => {
  // base case
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

/**
 * Fibonacci is a simple example of dynamic programming because:
 * - We already have the compute formula: f(n) = f(n-1) + f(n-2), no need to brainstorm the compute step
 * - Can easily see that the subproblem is f(k)
 * => Dynamic programming top-down: Memorization
 */
let memo: number[] = []; // or use hash table here
const fibMemo = (n: number): number => {
  if (memo[n] != undefined) return memo[n];
  // base case
  if (n == 0) return 0;
  if (n == 1) return 1;
  memo[n] = fibMemo(n - 1) + fibMemo(n - 2);

  return memo[n];
};

console.log(fibMemo(29));

/**
 * Dynamic programming: bottom up
 */
const fibBottomUp = (n: number): number => {
  let c: number[] = [];
  c[0] = 0;
  c[1] = 1;
  for (let i = 2; i <= n; i++) {
    c[i] = c[i - 1] + c[i - 2];
  }

  return c[n];
};
console.log(fibBottomUp(29));

/**
 * Dynamic programming bottom up optimized memory:
 * Can see that in fibBottomUp, we are storing every calculation result, in fact, we only need to store 2 previous results to calculate the current result
 * => 3 items in array c is enough
 * => can do a trick here to reduce memory from O(n) to O(1)
 */

const fibBottomUOptimize = (n: number): number => {
  let c: number[] = [];
  c[0] = 0;
  c[1] = 1;

  for (let i = 2; i <= n; i++) {
    c[i % 3] = c[(i - 1) % 3] + c[(i - 2) % 3];
  }

  return c[n % 3];
};
console.log(fibBottomUOptimize(29));
