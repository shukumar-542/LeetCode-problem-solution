var removeDuplicates = function (nums) {
  let index = 0;
  nums[index++] = nums[0];

  let count = 1;

  for(let i = 1 ; i < nums.length ; i++){
    if(nums[i] !== nums[i - 1]){
        nums[index++] = nums[i]
        count = 1
    }else if((nums[i] == nums[i - 1]) && (count < 2)){
        nums[index++] = nums[i]
        count++
    }else{
        count++
    }
  }

  return index
};

const result = removeDuplicates([1, 1, 1, 2, 2, 2, 3]);
console.log(result);