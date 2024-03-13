



function position(letter) {

    let alphpet = "abcdefghijklmnopqrstuvwxyz";

    // for(let i =0; i< alphpet.length; i++) {
        
    //     if (alphpet[i] === letter) {
    //         return `the position is :${i + 1}`;
    //     }
    // }
    return alphpet.indexOf(letter)+1;
}

console.log(position("c"))
