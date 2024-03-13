





// that function retrun all Even indexs 
function removingElment(arr) {

    // let newArray =[];

    // for (let i=0; i < arr.length; i++) {
        
    //     if (i % 2 === 0) {
    //         newArray.push(arr[i]);
    //     }
    // }
    // return newArray;


    return arr.filter ((x,i) => i % 2 === 0);
}

console.log(removingElment(["nah","an","asv","asv"]))