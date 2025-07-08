var removeDuplicates = function(nums) {
    let index = 0
    for(let i = 0 ; i < nums.length ; i++){
        
        if(i === 0 || nums[i] !== nums[i - 1]){
            nums[index] = nums[i]
            index ++
        }

        console.log(nums);


    }
    return index
};

const result = removeDuplicates([1,1,2,2,3])
console.log(result);
