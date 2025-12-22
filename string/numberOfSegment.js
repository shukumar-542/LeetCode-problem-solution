var countSegments = function(s) {
    if(s.trim() == ""){
        return 0
    }
    const words = s.split(" ").filter(word => word !== "")
    console.log(words.length)
    
};

countSegments("Hello   John  ")