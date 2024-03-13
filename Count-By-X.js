









// frist we will make an empty array 
// and loop through n 
// and push the result of x * i
// and return the newArray


function countByX (x , n ) {

    let newArray =[];

    for (let i =1 ; i <= n ; i++) {

        newArray.push(x * i) ;
    }
 return newArray;   
}


console.log(countByX(2,10))