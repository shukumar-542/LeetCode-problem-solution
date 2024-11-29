var majorityElement = function(nums) {
    let maxValue = 0
    let key = 0
    const allNumbers = {}
    nums.forEach(num =>{
        allNumbers[num] = (allNumbers[num] || 0) + 1
    }) 
    for(large in allNumbers){
        if(allNumbers[large] > maxValue){
            maxValue = allNumbers[large]
            key = large
        }

    }
    console.log(Number(key));
};

majorityElement([3,3,4])