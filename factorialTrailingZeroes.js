var trailingZeroes = function(n) {


    let result = 1n;
    for(let i = BigInt(n) ; i > 1n ; i--){
       result = i * result
    }


    let checkNumber = String(result)


    let count = 0
     for(let i = checkNumber.length-1 ; i >= 0 ; i--){
        if(checkNumber[i] != 0 ){
            return count
        }else{
            count += 1
        }
     }

   

};

console.log(trailingZeroes(30))