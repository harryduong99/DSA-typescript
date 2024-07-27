// https://leetcode.com/problems/valid-parentheses/submissions/1282426161/?envType=study-plan-v2&envId=top-interview-150
function isValid(s: string): boolean {
  let stack: string[] = [];
  if (s.length % 2) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{") {
      stack.push("}");
      continue;
    }
    if (s[i] == "[") {
      stack.push("]");
      continue;
    }
    if (s[i] == "(") {
      stack.push(")");
      continue;
    }
    const closing = stack.pop();

    if (closing != s[i]) return false;
  }

  return stack.length == 0;
}

console.log(isValid("([}}])"));
