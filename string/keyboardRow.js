/**
 * 
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

 */

var findWords = function(words) {

    let row1 = "qwertyuiop"
    let row2 = "asdfghjkl"
    let row3 = "zxcvbnm"

    let result = []

    for(let i = 0 ; i < words.length ; i++){
        let word = words[i]
        let lower = words[i].toLowerCase()
       if([...lower].every(ch => row1.includes(ch)) || [...lower].every(ch => row2.includes(ch)) || [...lower].every(ch => row3.includes(ch))){
        result.push(word)
       }

    }
    console.log(result)
    
};


findWords(["Hello","Alaska","Dad","Peace"])