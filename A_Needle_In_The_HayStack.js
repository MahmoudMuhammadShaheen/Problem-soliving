






let findNaddel = ["hay","junk","hay","hay","shaheen","needle"];


function find_The_Naddel(arr) {

    for (let i =0 ; i < arr.length; i++) {

        if (arr[i] === "needle") {
            return `found the needle in index number ${i}` ;
        }
    }
    return arr;
}


console.log(find_The_Naddel(findNaddel));



function finde(arr) {


return `found the needle in index number ${arr.indexOf("needle")}`;
}

console.log(finde(findNaddel))