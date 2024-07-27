// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
function isIsomorphicWrong(s: string, t: string): boolean { // not correct because not preserve the order of char
  const hashmapS = createHashMap(s);
  let resultS = Array.from(hashmapS.values()).sort((a, b) => (a < b ? 1 : -1));
  const hashmapT = createHashMap(t);
  let resultT = Array.from(hashmapT.values()).sort((a, b) => (a < b ? 1 : -1));

  return (
    resultS.length === resultT.length &&
    resultS.every((element, index) => element === resultT[index])
  );
}

const createHashMap = (s: string) => {
  let hashmap = new Map();
  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    if (hashmap.has(char)) {
      hashmap.set(char, hashmap.get(char) + 1);
    } else {
      hashmap.set(char, 1);
    }
  }

  return hashmap;
};

function isIsomorphic(s: string, t: string): boolean {
  if (s.length != t.length) {
      return false;
  }
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
      if (mapS.get(s[i]) != mapT.get(t[i])) { // if they are both stored before => then mist has the same index, if they both are not stored, then should both is undefined => equal
          return false;
      }
      mapS.set(s[i], i);
      mapT.set(t[i], i);
  }

  return true;
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
