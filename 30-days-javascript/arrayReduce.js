var reduce = function(nums, fn, init) {
    console.log("nums", nums , "fn" , fn , "init", init )
    let accumulator = init;
    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }   
    return accumulator;

};