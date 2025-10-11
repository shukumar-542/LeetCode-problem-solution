var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;
    while(numBottles >= numExchange) {
        const exchangeBottles = Math.floor(numBottles / numExchange);
        total += exchangeBottles;
        numBottles = exchangeBottles + (numBottles % numExchange);

    }   
    return total;

};

const result = numWaterBottles(15, 4) // 13

console.log(result)