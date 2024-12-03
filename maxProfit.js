var maxProfit = function(prices) {
   let buyPrice  = prices[0]
   let sellingPrice  = 0;
    for(let i = 1 ; i < prices.length ; i++){
        if(prices[i] < buyPrice){
            buyPrice = prices[i]
            for(let j = i+1 ; j<prices.length; j++){
                // sellingPrice = prices[j]
                // if(sellingPrice < prices[j]){
                //     console.log(prices[j]);
                // }
                console.log("x",prices[j]);
            }

        }
    }
    console.log(buyPrice);

};
 maxProfit([7,5,1,3,6,4])


// console.log(prices[j]);
//             if(prices[i] < prices[j]){
//                 return prices[j]
//             }else{
//                 return 0
//             }