



function BesicOperations(str,num1,num2) {

    // if(str == "+")return num1 +num2;
    // if(str == "-")return num1 -num2;
    // if(str == "*")return num1 *num2;
    // if(str == "/")return num1 /num2;

    return eval(num1 + str + num2)
}

console.log(BesicOperations("*",2,3));