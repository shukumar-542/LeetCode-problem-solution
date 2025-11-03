var removeDuplicates = function(nums) {
    let index = 0
    let newArr  = []
    for(let i = 0 ; i < nums.length ; i++){
        
        if(i === 0 || nums[i] !== nums[i - 1]){
            nums[index] = nums[i]
            index ++
            newArr.push(nums[i])
        }



    }
    console.log(newArr)
    return index
};

const result = removeDuplicates([1,1,2,3,3])
console.log(result);
