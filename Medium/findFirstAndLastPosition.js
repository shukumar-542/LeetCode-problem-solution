var searchRange = function(nums, target) {
   let firstIndex = -1;
    let lastIndex = -1;

    for(let i  = 0 ; i <= nums.length; i++){
        if(nums[i] === target){
            if(firstIndex === -1){
                firstIndex = i
                lastIndex = i
            }else{
                lastIndex = i
            }
        }
    }
   return [firstIndex , lastIndex]
};
const result  = searchRange([1], 1)

console.log(result)