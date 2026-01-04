var reverseWords = function(s) {
    const word = s.split(" ").map(word => word.split("").reverse().join(""))
   const sentence = word.join(' ');

   console.log(sentence)
};

reverseWords("Let's take LeetCode contest")