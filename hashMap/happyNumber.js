var isHappy = function (n) {


    const alreadyUsed = new Map();
    while (true) {
        let sum = 0;
        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit
            n = Math.floor(n / 10)
        }
        if (sum == 1) return true;

        n = sum

        if (alreadyUsed.has(n)) return false;
        alreadyUsed.set(n)
    }


};

const result = isHappy(61)

console.log(result)