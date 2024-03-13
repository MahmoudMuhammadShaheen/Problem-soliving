


function creatArray (num) {

    let newArray =[];

    for(let i = 0; i <= 5;) {
        // that function has bug the bug is that is infilte loop 
        //becues the i not  i++ that mean i alowes = 0 ;
        // becuse that i not go to be = 5
        
        newArray.push(i)
    }

    return newArray;
}




function creatArray_2 (num) {

    let newArray =[];

    for(let i = 0; i <= num; i++) {


        newArray.push(i)
    }

    return newArray;
}

console.log(creatArray_2(10))