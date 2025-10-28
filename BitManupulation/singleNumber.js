var singleNumber = function (nums) {
    const count = {};
    for (const element of nums) {
        count[element] = count[element] + 1

        if(count[element]){
            count[element] + 1
        }
        else{
            count[element] = 1
        }


    }


    for (const key in count) {
        if(count[key] === 1) return Number(key)
        
    }

};
// singleNumber([2,2,1, 2])

console.log(singleNumber([1, 2, 1]))