// You are given n activities with their start and finish times. Select the maximum number of activities that can be performed by a single person,
// assuming that a person can only work on a single activity at a time.
// This is the problem that is mentioned in Greedy Algorithm topic of the Introduction to Algorithms book

/**
Example: Input: start[]  =  {1, 3, 0, 5, 8, 5}, finish[] =  {2, 4, 6, 7, 9, 9};
Output: 0 1 3 4
Explanation: A person can perform at most four activities. The 
maximum set of activities that can be executed 
is {0, 1, 3, 4} [ These are indexes in start[] and finish[]
 */

// assumed that the activities are already sorted according to their finish time,
// meaning the next activity alway is the optimized one in term of the finished time
// If the start time of this activity is greater than or equal to the finish time of the previously selected activity then select this activity
const result: number[] = []; // store indexes of activity
export const activitySelectionRecursion = (
  s: number[],
  f: number[],
  k: number = 0
): number[] => {
  const n = s.length; // should equal to f.length as well
  if (k == 0) {
    result.push(0);
  }
  if (k >= n) {
    return result;
  }

  while (k < n && s[k] < f[result[result.length - 1]]) {
    k++;
  }
  if (s[k] >= f[result[result.length - 1]]) {
    result.push(k);
  }
  return activitySelectionRecursion(s, f, k);
};

console.log(activitySelectionRecursion([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));

// iteration
const activitySelection = (s: number[], f: number[]): number[] => {
  const n = s.length;
  let result: number[] = [0];
  for (let i = 1; i < n; i++) {
    if (s[i] >= f[result[result.length - 1]]) {
      result.push(i);
    }
  }

  return result;
};
console.log(activitySelection([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));
