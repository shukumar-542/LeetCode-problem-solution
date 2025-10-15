var containsNearbyDuplicate = function (nums, k) {
    const nMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (nMap.has(element)) {
            const prevIndex = nMap.get(element);
            const diff = i - prevIndex;

            if (diff <= k) {
                return true;
            }
        }

        nMap.set(element, i);
    }

    return false;

};

const result = containsNearbyDuplicate([1, 0, 1, 1], 1);
console.log(result)