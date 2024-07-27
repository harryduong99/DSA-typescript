// https://leetcode.com/problems/longest-common-prefix/solutions/3493266/alphabetise-and-compare-98-speed/

function longestCommonPrefix(strs: string[]): string {
  let sorted = strs.sort((a, b) => (a < b ? -1 : 1)); // sort strings in array alphabetically
  console.log(sorted);

  let output: string[] = [];
  let firstWord = sorted[0];
  let lastword = sorted[sorted.length - 1];
  for (var i = 0; i < firstWord.length; i++) {
    if (firstWord[i] == lastword[i]) {
      output.push(firstWord[i]);
    } else {
      break;
    }
  }

  return output.join("");
}

function longestCommonPrefix2(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // remove last char
    }

    if (prefix === '') {
      return prefix;
    }
  }
  
  return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["ahk", "cdf", "abc"]));
