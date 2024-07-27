const longestCommonSubstring = (x: string, y: string) => {
  // build the grid which contains the optimal solution value (c)
  const m = x.length;
  const n = y.length;
  let b: string[][] = [],
    c: number[][] = [];
  for (let i = 0; i <= m; i++) {
    b[i] = [];
    c[i] = [];
    for (let j = 0; j <= n; j++) {
      b[i][j] = "";
      c[i][j] = 0;
    }
  }

  let result: string = "";
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // we are treating the first character is the one that has index i (j) = 1, last character index is m or n => but string start with index 0 => need to minus 1 (i-1) to access the correct char in string
      if (x[i - 1] == y[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1; // value of top-left cell +1
        b[i][j] = b[i - 1][j - 1] + x[i - 1]; // store the substring
        result = b[i][j].length > result.length ? b[i][j] : result;
      } else {
        c[i][j] = 0;
      }
    }
  }
  console.log(c); //
  console.log(b); //
  return result;
};

/**
 * "fish" and "vista" => "is"
 * "fish" and "hish" => "ish"
 */
console.log(longestCommonSubstring("fish", "hish"));
console.log(longestCommonSubstring("fish", "vista"));
