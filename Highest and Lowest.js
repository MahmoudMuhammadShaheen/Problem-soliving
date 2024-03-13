



// highest and lowest number 



//this function return the highest number in your paramtar and the lowest number in your paramter

function highestAndLowest(number) {

    let newArray = number.split(" ").map((n) => Number(n));

    return `${Math.min(...newArray)} ${Math.max(...newArray)}`;
}

console.log(highestAndLowest("22 10 30 11"))
