var convertToTitle = function(columnNumber) {
    let result = ""
    
    while(columnNumber > 0){
        columnNumber--
        const reminder = columnNumber % 26
        result = String.fromCharCode(65 + reminder) + result;
        columnNumber = Math.floor(columnNumber / 26)
        
    }

    console.log(result)

    
};

convertToTitle(701)