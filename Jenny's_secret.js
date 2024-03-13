

// that fucntion in comment has a mistak and just we fix that
//mistak




// function greet (name) {
//     return "Hello, " + name + "!";
//     if (name === "johnny")
//     return "hello my love";
// }

// console.log(greet("johnny"))



// the mastake is he put a return and he put a code after return
// and we just make code as short hand
function greet (name) {
    "Hello, " + name + "!";

    return name === "johnny" ? "HEllo my LOVE" : "hello";
}

console.log(greet("johnny"))