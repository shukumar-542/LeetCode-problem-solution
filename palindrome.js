const x = -121;
let reverse = []
const digits = x.toString().split('')
for(let i = x.toString().length - 1 ; i>= 0; i--){
    reverse.push(x.toString()[i]);
}
console.log(digits.join('') == reverse.join(''));
