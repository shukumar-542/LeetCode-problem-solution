
/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

**/

var detectCapitalUse = function(word) {
    let countUpperCase = 0;
    let countLowerCase = 0;

    const firstLetter = word[0]

    for(let i = 0 ; i < word.length; i++){

        let ch = word[i]

        if(ch >= "A" && ch <= "Z"){
            countUpperCase++
        }else if(ch >= "a" && ch <= "z"){
            countLowerCase++
        }
    }

    if(countLowerCase === word.length){
        return true
    }else if(countUpperCase === word.length) {
        return true
    }

    if(firstLetter >= "A" && firstLetter <= "Z" &&  countLowerCase === word.length - 1){

        return true
    }
    return false

};
console.log(detectCapitalUse("FOag"))