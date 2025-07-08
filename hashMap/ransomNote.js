// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function (ransomNote, magazine) {
  const countWord = (str) => {
    let map = {};
    for (let char of str) {
      if (map[char]) {
        map[char] += 1;
      } else {
        map[char] = 1;
      }
    }
    return map;
  };
  const countRansom = countWord(ransomNote);
  const countMagazine = countWord(magazine);
  for (const key in countRansom) {
    if (!countMagazine[key] || countMagazine[key] < countRansom[key]) {
      return false;
    }
  }
  return true;
};

const result = canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi");

console.log(result);
