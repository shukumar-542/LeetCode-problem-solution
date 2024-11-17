var isPalindrome = function(s) {
    const reverse = []
    const trimLetter = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for(let i = trimLetter.length ; i>=0 ; i--){
        reverse.push(trimLetter[i]);
    }
    console.log(trimLetter);
    console.log(reverse.join(''));
    if(trimLetter === reverse.join('')){
        return true;
    }else{
        return false
    }

};
console.log(isPalindrome("race a car"));