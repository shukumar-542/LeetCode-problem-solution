var addBinary = function(a, b) {

    let i = a.length - 1
    let j  = b.length -1

    let result = ""
    let carry = 0;

    while( i >= 0 || j >= 0 || carry ){
        let sum = carry ; 
        if(i >= 0) sum += Number(a[i--])
        if(j >= 0) sum += Number(b[j--])

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2)
    }
    return result



    
};

console.log(addBinary("11" , "1"))