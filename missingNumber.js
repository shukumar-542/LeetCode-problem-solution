var missingNumber = function(nums) {
    let sortedNumber = nums.sort((a , b )=> a - b)
    for(let i = 0 ; i < sortedNumber.length ; i++){
        if(sortedNumber[i] !== i ){
            return i
        }

        
    }
    return sortedNumber.length;
    
};
console.log(missingNumber([3,0,1]))