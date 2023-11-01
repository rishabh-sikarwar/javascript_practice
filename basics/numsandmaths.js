const balance = new Number(100)      //100% it will be now a number only    as we have used new keyword
const score = 400
console.log(balance);
console.log(score);
console.log(balance.toString().length);    // now it is converted to the string
console.log(balance.toFixed(2));    //  give pricision value up to the given no. of digits


const otherNumber = 234.356435
console.log(otherNumber.toPrecision(3));     //precision me priority decimal se pehle ki hi hoti hai



const zeroNumbers = 10000000
console.log(zeroNumbers.toLocaleString('en-IN'));    //