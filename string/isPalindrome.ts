function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let xInString = x.toString();
  for (let i = 0; i < Math.ceil(xInString.length); i++) {
    if (xInString[i] != xInString[xInString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome2(s: string): boolean {
  // if empty string return true
  if (s.trim() === "") {
    return true;
  }

  let str = "";

  // first convert the string into lowercase
  const lowerString = s.toLowerCase();

  // join the string if it's alpha-numeric
  for (let i = 0; i <= lowerString.length - 1; i++) {
    if (
      (lowerString[i] >= "a" && lowerString[i] <= "z") ||
      (lowerString[i] >= "0" && lowerString[i] <= "9")
    ) {
      str += lowerString[i];
    }
  }

  // two pointer solution
  let left = 0;
  let right = str.length - 1;

  while (right > left) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

// without converting to string: https://leetcode.com/problems/palindrome-number/solutions/4089743/typescript-javascript-o-k-solution-where-k-is-number-of-digits/

console.log(isPalindrome(1));

// can use the reverse technique for integer (reverseInteger.ts) to reverse a number and determine if it is palindrome (reversed number should be equal to original value)
