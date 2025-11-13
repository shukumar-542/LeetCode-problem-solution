var isPerfectSquare = function(num) {

    if (num < 2) return true;
    console.log(Math.round(num/3))
    for (let i = 1; i * i <= num; i++) {
        if( i * i  === num){
            return true
        }
        
    }
    return false
    
};

console.log(isPerfectSquare(4))