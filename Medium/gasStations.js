var canCompleteCircuit = function (gas, cost) {
   
    let totalGas = 0; let totalCost = 0

    let currentGas = 0 ; let startFrom = 0


    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i]
        totalCost += cost[i]
        currentGas += gas[i] - cost[i]


        if(currentGas < 0){
            startFrom = i + 1
            currentGas = 0
        }

    }

    if(totalGas < totalCost ){
        return -1
    }

    return startFrom



};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))