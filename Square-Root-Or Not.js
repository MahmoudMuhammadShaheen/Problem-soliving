





// soulition

// frist we will make a new array
// make a for loop 
// use for loop for check if you num has a sqyare root or not 
// if ture pust them in newArray 
//else * num * num



function sqyareRoot(array) {

    // let NewArray = [];


    // for (let i = 0 ; i < array.length; i++) {

    //     if (Number.isInteger(Math.sqrt(array[i]))) {

    //         NewArray.push(Math.sqrt(array[i]));
    //     }
    //     else {
    //         NewArray.push(array[i] * array[i]);
    //     }
    // } 

    // return NewArray;

    return array.map((x) => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x);


}

console.log(sqyareRoot([4,3,9,7,2,1]))
