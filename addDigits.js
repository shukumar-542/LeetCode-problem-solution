var addDigits = function (num) {
    let digit = num

    while (digit > 9) {
        let firstNum = Math.floor(digit / 10);
        let secondNumber = digit % 10
        digit = firstNum + secondNumber
    }
    return digit


    console.log(digit)

};
addDigits(0)