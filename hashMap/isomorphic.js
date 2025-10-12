// 205. Isomorphic Strings
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true




var isIsomorphic = function(s, t) {
    const mapLR = new Map();
    const mapRL = new Map();

    for(let i = 0 ; i < s.length ; i++){


        if((mapLR.has(s[i]) && mapLR.get(s[i]) !== t[i]) || (mapRL.has(t[i]) && mapRL.get(t[i]) !== s[i])){
            return false
        }

        mapLR.set(s[i], t[i])
        mapRL.set(t[i], s[i])
    }

    return true

    
};

const result  =  isIsomorphic("foo" , "bar")
console.log(result)
























 