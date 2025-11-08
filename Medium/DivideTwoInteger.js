var divide = function(dividend, divisor) {
     const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }


    const result = dividend / divisor;
    console.log(result)

    return Math.trunc(result)
    
};
divide(-2147483648 , -1)