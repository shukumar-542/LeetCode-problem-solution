var firstUniqChar = function (s) {
    let uniqueChar = {}
    for (let i = 0; i < s.length; i++) {
        if (uniqueChar[s[i]]) {
            uniqueChar[s[i]] += 1;
        } else {
            uniqueChar[s[i]] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (uniqueChar[s[i]] === 1) {
            return i
        }

    }

    return -1


};

console.log(firstUniqChar("aabb"))