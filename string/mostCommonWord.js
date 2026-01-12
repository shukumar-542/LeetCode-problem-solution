var mostCommonWord = function (paragraph, banned) {
    let countObj = {};

    const wordArr = paragraph
        .replace(/[^a-zA-Z\s]/g, " ")
        .toLowerCase()
        .split(/\s+/);

    for (let i = 0; i < wordArr.length; i++) {
        const word = wordArr[i];
        if (word === "") continue; 
        if (!banned.includes(word)) {
            countObj[word] = (countObj[word] || 0) + 1;
        }
    }

    let maxCount = 0;
    let result = "";

    for (const [key, value] of Object.entries(countObj)) {
        if (value > maxCount) {
            maxCount = value;
            result = key;
        }
    }

    console.log(result)
};
mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])