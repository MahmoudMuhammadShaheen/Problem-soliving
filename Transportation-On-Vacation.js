
//  this function does offer for gusests in hotel if the guest 
// if the guest has stay at hotle < 3 he will has no offer 
// if he stay >= 7 he will has 50 dorlers offer 
// else this he will has offer 20 dorlers offer




function getOffer(days) {

    let defultPrice = 40 *days; 

    if(days < 3) return defultPrice;

    if (days >= 7){
        return defultPrice - 50
    }else {
         return defultPrice - 20;
    }
 
} 

console.log(getOffer(4))


