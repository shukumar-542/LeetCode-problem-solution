// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


var groupAnagrams = function (strs) {
    const map = new Map();

    for (let word of strs) {
        const sorted = word.split('').sort().join('');

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.get(sorted).push(word);
    }

    return Array.from(map.values());
};

const value = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])