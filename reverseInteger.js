var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;

    const result =Number(String( Math.abs(x)).split('').reverse()?.join(""))


    if(result > 2 ** 31 - 1 ){
        return 0
    }
   return result * sign
};

const res = reverse(-123)
console.log(res)