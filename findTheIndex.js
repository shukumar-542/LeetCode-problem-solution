var strStr = function (haystack, needle) {

    const comapireString = (str1, str2, index) => {
        let incementIndex = index;
        if(str2.lenght < index){
            return false;
        }
        for (let i = 0; i < str2.length; i++) {
            if(str2[i] != str1[incementIndex]){
                return false
            }else{
                incementIndex++
            }
        }
        return true
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if(comapireString(haystack, needle, i) == true){
                console.log(i)
            }
        }
    }

};
strStr("mississippi", "issip")
