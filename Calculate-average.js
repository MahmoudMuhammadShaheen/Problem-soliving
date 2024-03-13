// wrting a fucntion to calcuate the avarge of the numbers


// fist we make a new var 
// we put an if staut ment about if value in array = null 
// we make a for loop 


function find_averge(array) {
    // let num = 0;


    // if(array == null )return 0;


    // for (let i = 0 ; i < array.length ; i++) {

    //     num += array[i];
        
    // }
    // let finalAnswer = num / array.length;
    // return finalAnswer;

    if(array == null )return 0;
    return array.reduce((acc,cur) => acc + cur ,0) / array.length;
}


console.log(find_averge([1,2,3]))





