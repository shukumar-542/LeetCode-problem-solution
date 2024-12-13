var romanToInt = function(s) {
  

    const romanNumber = {
        I : 1 , V : 5 ,  X : 10 , L : 50 , C : 100 , D : 500 , M : 1000  
    }
    let result = 0
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if(romanNumber[s[i - 1]] < romanNumber[s[i]]){
            result +=     romanNumber[s[i]] -  romanNumber[s[i - 1]] 
            i-- 
        }
        else{
            result += romanNumber[s[i]]
        }


    }
    console.log(result);
};

romanToInt("LVIII")