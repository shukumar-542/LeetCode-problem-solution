// const s = "([])"
// const s2 = "()"
// const s3 = "()[]{}"
// const s4 = "(]"




const valid = (s) => {
    const checker = []
    for (let char of s) {
        
        if (char === "{" || char === "(" || char === "[") {
            checker.push(char)
            
        }else{
            if(char === ")" || char === "]" || char === "}"){
                checker.pop()
            }
            console.log(checker);
            return (checker.length === 0);
        }
        
    }

}

console.log(valid("(]"));


