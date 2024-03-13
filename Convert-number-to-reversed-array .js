

// that function return random numbers and put them in new array

// frist we return the numbe to be as a string 

//02 we uesing split for return out varables in array

// 03 we use sort for make the biggest num in frist index in array 

// 04 we use map for make loop on our indexs in new array for 

// return them as a number




function backTo_An_Array(num) {

    return num.toString()
    .split("").sort((a,b) => b - a)
    .map((m) => Number(m));
}


console.log(backTo_An_Array(98756432))