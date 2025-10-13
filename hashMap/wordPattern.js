// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".

var wordPattern = function (pattern, s) {

  const mapLR = new Map();
  const mapRL = new Map();
  const t = s.split(' ')

  if (pattern.length !== t.length) {
    return false
  }


  for (let i = 0; i < pattern.length; i++) {


    if ((mapLR.has(pattern[i]) && mapLR.get(pattern[i]) !== t[i]) || (mapRL.has(t[i]) &&mapRL.get(t[i]) !== pattern[i])) {
      return false
    }
   


    mapLR.set(pattern[i], t[i])
    mapRL.set(t[i], pattern[i])
  }

  return true



};

const result = wordPattern("abba", "dog cat cat dog")

console.log("result ", result)