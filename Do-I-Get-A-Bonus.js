




function bounsTime(salary,bouns) {

    return bouns ? ` $${salary * 10} `: `$${salary}`;
}


console.log(bounsTime(2000,true));