var countSegments = function(s) {
    if(s.trim() == ""){
        return 0
    }
    const words = s.trim().split(/\s+/)
    console.log(words.length)
    
};

countSegments("Hello")