// const s = "([])"
// const s2 = "()"
// const s3 = "()[]{}"
// const s4 = "(]"




const valid = (s) => {
    const checker = []

    if(s.length % 2 != 0){
        return false
    }
    for (let char of s) {
        
        if (char === "{" || char === "(" || char === "[") {
            checker.push(char)
            
        }else if(char == ")"){

            let value = checker.pop()
            if(value !== "("){
                return false
            }
        }else if(char == "}"){

            let value = checker.pop()
            if(value !== "{"){
                return false
            }
        }else if(char == "]"){

            let value = checker.pop()

            if(value !== "["){
                return false
            }
        }
        
        
        
    }
    return checker.length === 0;

    

}
// valid("(]")
console.log(valid("()"));


