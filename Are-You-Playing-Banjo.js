




function arePlayingBanjo (name) {

    // if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    //     return "you are playing banjo";
    // }
    // else {
    //     return "you are not";
    // }

    return name.charAt(0) == "r" 
    || name.charAt(0) =="R" 
    ? `${name} plays banjo`  
     :`${name} Dose not play banjo`;
}

console.log(arePlayingBanjo("Ramy"))


