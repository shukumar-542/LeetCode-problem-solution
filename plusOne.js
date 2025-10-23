var plusOne = function(digits) {
    let totalSum = digits.join("")


    
    let addOne  =   (BigInt(totalSum) + 1n).toString()

    
    let result = String(addOne).split('').map(Number)
    console.log(result)

    return result



};

plusOne([1,2,3])