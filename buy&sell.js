const price = [7,1,5,3,6,4]
let buyPrice = price[0];
let currentPrice = 0;
let sellingPrice = 0
for(let i = 1 ; i < price.length ; i++){
    if(price[i] < buyPrice ){
        buyPrice = price[i]
    }else{
        currentPrice = price[i] - buyPrice
        if(currentPrice > sellingPrice){
            sellingPrice = currentPrice
        }
    }
}
console.log(sellingPrice);