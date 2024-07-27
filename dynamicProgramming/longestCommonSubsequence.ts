const longestCommonSubsequence = (x: string, y: string) => {
  const m = x.length;
  const n = y.length;
  let b: (number | string)[][] = [],
    c: number[][] = [];
  for (let i = 0; i <= m; i++) {
    b[i] = [];
    c[i] = [];
    for (let j = 0; j <= n; j++) {
      b[i][j] = 0;
      c[i][j] = 0;
    }
  }

  /**
   * c[i][j] value is the length of the LCS of xi and yj (string from x[1] to x[i] - consider x[1] is the first char)
   * => c will be a 2 dimensional array that contains the LCS values
   * b will be also 2 dimensional array that contains the step to construct the optimal solution
   * => b[i][j] points to the optimal subproblem solution chosen when computing c[i][j]
   */

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // we are treating the first character is the one that has index i (j) = 1, last character index is m or n => but string start with index 0 => need to minus 1 (i-1) to access the correct char in string
      if (x[i - 1] == y[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1;
        b[i][j] = "upLeft";
      } else if (c[i - 1][j] >= c[i][j - 1]) {
        c[i][j] = c[i - 1][j];
        b[i][j] = "up";
      } else {
        c[i][j] = c[i][j - 1];
        b[i][j] = "left";
      }
    }
  }
  return b;
};
let result = "";

const printLCS = (b: any[], x: string, i: number, j: number) => {
  if (i == 0 || j == 0) {
    return;
  }
  if (b[i][j] == "upLeft") {
    printLCS(b, x, i - 1, j - 1);
    // print result, since we're treating the start of string as index 1 (i=1) => the char is x[i-1]
    // console.log(x[i - 1]);
    result += [x[i - 1]];
  } else if (b[i][j] == "up") {
    printLCS(b, x, i - 1, j);
  } else {
    printLCS(b, x, i, j - 1);
  }
};

let b = longestCommonSubsequence("abcbdab", "bdcaba");
printLCS(b, "abcbdab", 6, 6);
console.log(result);
