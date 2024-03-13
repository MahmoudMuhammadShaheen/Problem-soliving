


/*

the soulition to this fuction is


1- made a coundtion for null value return 0


2- made a sort for that fuction to sorrting that fuction form
lowest to highest 


3- after that we made slice for delete the lowest num in frist index in array 
add delete the highest num in last index in array 


4- we made reduce for plus all num anthor the higest num or lowest num

 */

function sumPlus (array) {
    if (array === null) return 0;

    return array
    .sort((a,b) => (a - b))
    .slice(1,-1).reduce((acc , cur) => acc + cur ,0);
}

console.log(sumPlus([1,2,4,4,10,10]));