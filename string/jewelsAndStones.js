var numJewelsInStones = function(jewels, stones) {
    let count = 0 ; 
    for(let i = 0 ; i <jewels.length ; i++){
        for(let j = 0 ; j < stones.length; j++){
            if(jewels[i]=== stones[j]){
                count++
            }
            // console.log("jewels[i]",jewels[i] , "stones[i]", stones[j])
        }
    }
    console.log(count)
    
};

numJewelsInStones("z", "ZZ")