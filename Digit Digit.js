


/* 
this function do all number to digit 

01 we return the number in an object Number 

02 and we chahing to string after that 

03 we will make it an array 

04 and thorugh of the array in map fucntion 

05 and ues the bulit in function Math.pow() 


 */



function Digits (number) {

    return Number(number.toString().split("").map((x) => Math.pow(x,2)).join(''));

}

console.log(Digits(123232))