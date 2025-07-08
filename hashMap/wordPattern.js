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
  let charToWord = {};
  let wordToChar = {};
  const str = s.split(" ");
  if (pattern.length !== str.length) {
    return false;
  }

  for (const key in pattern) {
    const ch = pattern[key]
    const word = str[key]
   console.log(word);
  }
};

const result = wordPattern("abba", "dog cat cat dog");
console.log(result);
