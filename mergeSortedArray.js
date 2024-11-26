const removeZero = (arr)=>{
    let result = []
    for(num of arr){
        if(num > 0){
            result.push(num)
        }
    }
    return result
}

var merge = function(nums1, m, nums2, n) {
    const num1Result = removeZero(nums1)
    const num2Result = removeZero(nums2)
    const mergeTwoArray =num1Result.concat(num2Result) 
    console.log(mergeTwoArray.sort((a, b)=> a-b));
};
merge([1,2,3,0,0,0],3,[2,5,6] , 3)