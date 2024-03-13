



/*
that function return count of postive and sum of negative

01 frist we made an empty arr for push all postive number in this empty array

02 we made an empty varable for has all sum of negative numbers

03 we made loop for loop of all number in the array 

04 we made a condation for if number hightest 0 push his in the empty array

05 when the number lowest than 0 we sum it to the negativeSum 

06 we return the empty array back his length and the negtive sum back 
his sums




*/


function countAndsum (arr) {

    let postiveArray = [];
    let negtiveSum = 0;

    for(let i = 0; i < arr.length ; i++) {

        if (arr[i] > 0) {

            postiveArray.push(arr[i]);
        }
        else {
            negtiveSum += arr[i];
        }
    }

    return [postiveArray.length , negtiveSum];



}

console.log(countAndsum([1,2,3,4,5,-1,-2,-2]));


// that is antoer souloiton 

function count_sum(arr) {


    let postiveArray = arr.filter((x) => x > 0).length;
    let negtiveSum = arr.filter ((x) => x < 0).reduce((acc,cur) => acc +cur ,0);

        return [postiveArray , negtiveSum];
}





console.log(count_sum([1,2,3,4,5,-1,-2,-2]));