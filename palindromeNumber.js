var isPalindrome = function(x) {
    let s = String(x);

    let isPalindromeString = ""

    for(let i = s.length - 1 ; i >= 0 ; i--){
        isPalindromeString += s[i]
    }


    if(x === Number(isPalindromeString)){
        return true
    }else{
       return  false
    }
    
    
};

console.log(isPalindrome(121))