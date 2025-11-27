var climbStairs = function(n) {
    if (n === 1) return 1;

    let a = 1; // ways(1)
    let b = 2; // ways(2)

    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};
