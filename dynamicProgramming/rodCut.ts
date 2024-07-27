// function rodCut<T extends number>(p: T[], n: T): T {
//   return n;
// }

// naive approach
function cutRod(p: number[], n: number): number {
  if (n == 0) {
    return 0;
  }
  let q = -Infinity;
  for (let i = 1; i <= n; i++) {
    q = Math.max(q, p[i] + cutRod(p, n - i));
  }

  return q;
}

let p = [0, 1, 5, 8, 9, 10, 17, 20, 24, 30]; // length 1 => price = 1, length 2 => price = 5, length 3 => price = 8
console.log(cutRod(p, 3));

// dynamic programming top-down: memorize the subproblem 's result
function memorizedCutRod(p: number[], n: number): number {
  let r: number[] = [];
  for (let i = 0; i <= n; i++) {
    r[i] = -Infinity;
  }

  return memorizedCutRodAux(p, n, r);
}

function memorizedCutRodAux(p: number[], n: number, r: number[]): number {
  if (r[n] >= 0) return r[n]; // if has in memory

  let q = -Infinity;
  if (n == 0) q = 0;

  for (let i = 1; i <= n; i++) {
    q = Math.max(q, p[i] + memorizedCutRodAux(p, n - i, r));
  }

  return q;
}

/**
 * dynamic programming bottom-up
 */
function bottomUpCutRod(p: number[], n: number): number {
  let r: number[] = []; // remember solution values in r
  r[0] = 0;
  // for increasing rod length j
  for (let j = 1; j <= n; j++) {
    let q = -Infinity;
    // i is the position of the first cut
    for (let i = 1; i <= j; i++) {
      q = Math.max(q, p[i] + r[j - i]);
    }
    r[j] = q; // remember the solution value for length j
  }

  return r[n];
}

console.log(bottomUpCutRod(p, 4));
