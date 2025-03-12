const nums = [0,1,2,2,3,0,4,2]
const val = 2

var removeElement = function(nums, val) {


    let k = 0;
    for(let i  = 0 ; i<nums.length ; i++ ){
        if(nums[i] !== val){
            k += 1;
        }
    }
    // console.log(k);
    return k;
    
};

removeElement(nums , val)