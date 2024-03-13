



/*

that function for make count of array about true value 
and false value if your value = true now counter++

if not your counter dosn`t make anything

01 frist we make an initvalue has = 0

02 we use map becuse map has loop in his 

03 we made a condation for if value = true or value = false


 */



function countingSheep(num) {


    let initValue = 0;

    num.map((m) => {

        if(m === true) initValue++;
    })
    return initValue;
}


console.log(countingSheep([true,true,false,true]));
