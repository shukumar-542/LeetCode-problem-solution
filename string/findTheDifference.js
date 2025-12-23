var findTheDifference = function(s, t) {
     let map = {};

    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    for (let ch of t) {
        if (!map[ch]) {
            return ch;
        }
        map[ch]--;
    }
};

console.log(findTheDifference("a","aa"))