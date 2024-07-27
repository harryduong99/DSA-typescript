

const twoSum = (nums: number[], target: number): number[] => {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.get(nums[i]) != undefined) {
      return [hashMap.get(nums[i]), i]
    }

    hashMap.set(target-nums[i], i);
  }

  return [-1,-1]
}

console.log(twoSum([2,7,11,15], 9))