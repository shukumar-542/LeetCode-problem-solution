var maxProfit = function(prices) {
    console.log(prices)
    let profit = 0
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
};


const profit = maxProfit([7,1,5,3,6,4]) 
console.log(profit)