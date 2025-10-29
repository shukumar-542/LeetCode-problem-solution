var hammingWeight = function(n) {

    let count  = 0

    let binary = n.toString(2)

    for(let i = 0 ;  i < binary.length ; i++){
        if(binary[i] === "1"){
            count++
        }
    }

    console.log(count)


    
};
hammingWeight(11)