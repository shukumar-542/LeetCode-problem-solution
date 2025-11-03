var candy = function(ratings) {

   let candies = new Array(ratings.length).fill(1)

    for(let i = 0 ; i < ratings.length ; i++){

        if(ratings[i] > ratings[i-1]){
            candies[i] = candies[i - 1] + 1
        }
    }
    for(let i = ratings.length-1 ; i >= 0; i--){


        if(ratings[i] > ratings[i+1]){
            candies[i] = Math.max(candies[i] , candies[i + 1] + 1)
        }
    }
    let total = candies.reduce((a, b)=> a + b , 0)



    console.log(total)
    
};

candy([1,2,2])