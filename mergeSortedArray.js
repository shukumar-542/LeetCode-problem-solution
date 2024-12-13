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
   nums1 = nums1.slice(0,m)
   nums2 = nums2.slice(0,n)
    console.log(nums2);
    nums1.concat(nums2).sort((a, b)=> a - b) 
    
    console.log(mergeTwoArray);
};
merge([1,2,3,0,0,0],3,[2,5,6] , 3)