/**


 1. if array length 0 then return empty string
 2. sort array
 3. take largest and smallest word
 4. loop smallest array and compare two word and return
 
 */



var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return ""
    }
    strs.sort()
    let largestWord = strs[0]
    let smallestWord = strs[strs.length - 1]
    let prefix  = ""
    for(let i = 0 ; i<smallestWord.length ; i++){
        if(smallestWord[i] === largestWord[i]){
            prefix += smallestWord[i]
        }else{
            break;
        }
    }
    return prefix;

};
const result = longestCommonPrefix(["flower","flow","flight"]);
console.log(result);