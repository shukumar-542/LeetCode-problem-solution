var isSubsequence = function (s, t) {
    let index = 0 ; 
    for(let i = 0 ;  i < t.length ; i++){
        if(index < s.length && s[i] === t[i]){
            index++
        }
    }
    return index === s.length
};
console.log(isSubsequence("acb", "ahbgdc"))