/**
 * knapsack: carry maximum 4 lbs (4 pounds)
 * stereo: $3000 - 4 lbs
 * laptop: $2000 - 3 lbs
 * guitar: $1500 - 1 lbs
 * => get maximum value that the knapsack can handle
 */

/**
 * COMPUTE:
 * cell[i][j] = max of {
 * 1. the previous max (value at cell[i-1][j])
 * 2. value of current item + value of the remaining space (cell[i-1][j-item's weight])
 * }
 */

interface Goods {
  name: string;
  price: number;
  weight: number;
}

const knapsack = (knapsackCap: number, goods: Goods[]) => {
  /**
   * c: the cells that contain the optimal solution values
   * b: record the result at each cell, in this case, we record the list of goods names at that cell
   */
  let c: number[][] = [],
    b: string[][][] = [];
  for (let i = 0; i <= goods.length; i++) {
    // row 1: guitar
    // row 2: laptop
    // row 3: stereo
    // order of these items is not matter
    b[i] = [];
    c[i] = [];
    /**
     * 1 lbs is the min gap for subproblem in this case => j++
     * incase we also have a necklace be sides guitar..., and necklace's weight is 0.5 => j += 0.5
     * */
    for (let j = 0; j <= knapsackCap; j++) {
      b[i][j] = [];
      c[i][j] = 0;
    }
  }
  let maxValue: number = 0;
  let optimalI: number = 0;
  let optimalJ: number = 0;

  for (let i = 1; i <= goods.length; i++) {
    for (let j = 1; j <= knapsackCap; j++) {
      const previousMax = c[i - 1][j];
      // if the current item's weight can fit in the knapsack => calculate current max,
      // if not => set to 0 and max will be the previousMax
      // NOTE: i = 1 <=> first goods item (first row)
      const currentMax =
        j >= goods[i - 1].weight
          ? goods[i - 1].price + c[i - 1][j - goods[i - 1].weight]
          : 0;
      if (previousMax >= currentMax) {
        c[i][j] = previousMax;
        b[i][j] = b[i - 1][j];
      } else {
        c[i][j] = currentMax;
        b[i][j] = [...b[i - 1][j - goods[i - 1].weight], goods[i - 1].name]; // add the goods name
      }
      if (maxValue < c[i][j]) {
        maxValue = c[i][j];
        optimalI = i;
        optimalJ = j;
      }
    }
  }

  // console.log(c);
  // console.log(b);
  console.log("max value:", maxValue);
  return b[optimalI][optimalJ];
};

console.log(
  knapsack(4, [
    {
      name: "guitar",
      price: 1500,
      weight: 1,
    },
    {
      name: "laptop",
      price: 2000,
      weight: 3,
    },
    {
      name: "stereo",
      price: 3000,
      weight: 4,
    },
  ])
);
