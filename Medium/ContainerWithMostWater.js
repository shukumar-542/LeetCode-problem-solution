/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = minHeight * width;
        max = Math.max(max, area);  
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return max;
};



const area = maxArea([1,8,6,2,5,4,8,3,7])
console.log(area)