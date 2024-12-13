var rotate = function(nums, k) {
    k = k % nums.length;
    const reverse = nums.slice(-k);
    console.log(reverse);
    if(k=== 0){
        return nums
    }
    const original = nums.slice(0, nums.length - k);
    nums.splice(0, nums.length, ...reverse, ...original);
    
    return nums
};
 const result = rotate([1,2,3,4,5,6,7] , 3)
 console.log(result);
// const arr = [1,2,3,4,5,6,7]
// const last = arr.pop()
// arr.unshift(last)
// console.log(arr);