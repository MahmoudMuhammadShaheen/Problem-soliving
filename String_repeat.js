


// frist function is basic to soulation 

/*
01 we made the empty string  

02 second we made loop for put the  str value in the empty string 

03 return the empty string 
*/

function stringRepeat(num , str) {
    let newString ="";

    for (let i =0 ; i < num ; i++) {
        newString += str;
    }

    return newString
}


console.log(stringRepeat(10,"Ben 10"))



// that souliton is has a bultin function in js named is repeat 
// it`s did what we did it

function repeat(num, str) {

    return str.repeat(num);
}


console.log(repeat(10,"w"))