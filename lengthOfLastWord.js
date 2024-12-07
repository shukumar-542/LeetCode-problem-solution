var lengthOfLastWord = function(s) {
     let trimStr = s.trim('')
     let lastWord = ""
     for(let i = trimStr.length - 1 ; i >= 0 ; i--){
        if(trimStr[i] === " " && lastWord.length > 0){
            break
        }
        if(trimStr[i] !== " "){
            lastWord = trimStr[i] + lastWord 
        }

     }
     return lastWord
};
const result  = lengthOfLastWord("   fly me   to   the moon  ");
console.log(result);