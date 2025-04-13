

var merge = function(nums1, m, nums2, n) {
   nums1 = nums1.slice(0,m)
   nums2 = nums2.slice(0,n)


   
    nums1  = nums1.concat(nums2).sort((a, b)=> a - b) 
    
    return nums1;
};
const result = merge([1,2,3,0,0,0],3,[2,5,6] ,3)
console.log(result)