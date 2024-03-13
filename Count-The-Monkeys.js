




function monkeysCount (n) {

    let newArray = [];

    for (let i = 1 ; i <= n ; i++) {

        if ( i <= n) {
            newArray.push(i)
        }
    }

    return newArray;
}

console.log(monkeysCount(10))