


// this function return the vowel (a,e,i,o,u)
// and we gave the function a string and the fucntion check how much 
// a vowel letter its has



function vowelCount(str) {


    let vouwels = "aeiou";
    // let count = 0;
    // let newStr = str.replaceAll(" ","").split("");

    // for (let i =0; i < newStr.length; i++) {

    //     if (vouwels.includes(newStr[i]))  {
    //         count++;
    //     }
    // }

    // return count

    return str.replaceAll(" ","").split("").filter((chars) => vouwels.includes(chars)).length;


}

console.log(vowelCount("mahmoud mahmoudedoa"))