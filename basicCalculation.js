var calculate = function(s) {
    console.log(s)
    let tokens = s.match(/(\d+|\+|\-|\*|\/)/g);
    console.log("tokens", tokens)
    // let stack = [];
    // let num = 0;
    // let sign = '+';
    // for (let i = 0; i < tokens.length; i++) {
    //     let token = tokens[i];
    //     if (!isNaN(token)) {
    //         num = parseInt(token);
    //     }
    //     if (isNaN(token) || i === tokens.length - 1) {
    //         if (sign === '+') {
    //             stack.push(num);
    //         } else if (sign === '-') {
    //             stack.push(-num);
    //         } else if (sign === '*') {
    //             stack.push(stack.pop() * num);
    //         } else if (sign === '/') {
    //             stack.push(Math.trunc(stack.pop() / num));
    //         }
    //     }
    //     sign = token;
    // }
    // let result = 0;
    // while (stack.length > 0) {
    //     result += stack.pop();
    // }
    // return result;
};

calculate("3+5");