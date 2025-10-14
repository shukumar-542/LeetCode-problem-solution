var longestConsecutive = function (nums) {


if (nums.length === 0) {
        return 0
    }

    const sortArr = [...new Set(nums)].sort((a, b) => a - b)
    let longestCount = 1;
    let temp = 1;


    


    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] + 1 == sortArr[i + 1]) {
            temp += 1
        } else {
            longestCount = Math.max(longestCount, temp);
            temp = 1

        }


    }
    console.log(longestCount)

    return longestCount

};

longestConsecutive([1,0,1,2])