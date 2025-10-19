var addTwoNumbers = function(l1, l2) {
    const additionTotal = (Number(l1.reverse().join('')) + Number(l2.reverse().join('')))


    const result = Array.from(String(additionTotal), Number).reverse()
    console.log(result)

    
};

addTwoNumbers([2,4,3] , [5,6,4])