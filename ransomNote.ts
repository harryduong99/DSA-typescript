// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

function canConstruct(ransomNote: string, magazine: string): boolean {
  const hashmap: { [key: string]: number } = {};
  for (let i = 0; i < magazine.length; i++) {
    if (hashmap[magazine[i]] != undefined) {
      hashmap[magazine[i]] += 1;
    } else {
      hashmap[magazine[i]] = 1;
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (hashmap[ransomNote[j]] != undefined) {
      hashmap[ransomNote[j]] -= 1;
    }
    if (hashmap[ransomNote[j]] == undefined || hashmap[ransomNote[j]] < 0) {
      return false;
    }
  }
  return true;
}

function canConstructWithSet(ransomNote: string, magazine: string): boolean {
  const hashmap = new Map(); // => much better run time
  for (let i = 0; i < magazine.length; i++) {
    if (hashmap.has(magazine[i])) {
      hashmap.set(magazine[i], hashmap.get(magazine[i]) + 1)
    } else {
      hashmap.set(magazine[i], 1)
    }
  }
  console.log(hashmap)
  for (let j = 0; j < ransomNote.length; j++) {
    if (hashmap.has(ransomNote[j])) {
      hashmap.set(ransomNote[j], hashmap.get(ransomNote[j]) - 1)
    }
    if (!hashmap.has(ransomNote[j]) || hashmap.get(ransomNote[j]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(canConstructWithSet("aa", "aab"));
