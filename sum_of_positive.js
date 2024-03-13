


// make an array for return positive number 



function sumOfPositive(arr) {
    
    // frist make this inti value for add all positive number in 
    // this value 
    let intivalue = 0;

    // we make this for loop for have all numbers add add the 
    //positive number in an array an the negitive number deleted;

    for(let i = 0 ; i < arr.length; i++) {

        if(arr[i] > 0) {

            intivalue += arr[i];
        }
    }

    return intivalue;
}


function sum_of_positive(arr) {

    return arr.filter((x) => x > 0)
    .reduce((acc,cur) => acc +cur ,0);
}

// frist fuction 
console.log(sumOfPositive([1,2,3,4,-5]))
// second fuction 
console.log(sum_of_positive([1,-1,2]))