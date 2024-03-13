



// frist we make an expty array
// make a loop for our arry
// pust the reuslt in an newArray
// return the newArray


function invert(array) {

// let newArray =[];
//     for (let i =0 ; i< array.length ; i++) {

//         newArray.push(-array[i])
//     }

//     return newArray;

return array.map((x) => -x);
}

console.log(invert([1,2,3,4,5,-1]))