var uncommonFromSentences = function (s1, s2) {
    let countWord = {}
    for (let word of (s1 + " " + s2).split(" ")) {
        if(countWord[word]){

            countWord[word] = countWord[word] + 1
        }else{
            countWord[word] = 1
        }
    }

    let result = Object.keys(countWord).filter(key =>countWord[key]  === 1)
    console.log(result)
    

};
uncommonFromSentences("this apple is sweet", "this apple is sour")