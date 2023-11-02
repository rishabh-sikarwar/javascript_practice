const balance = new Number(100)      //100% it will be now a number only    as we have used new keyword
const score = 400
console.log(balance);
console.log(score);
console.log(balance.toString().length);    // now it is converted to the string
console.log(balance.toFixed(2));    //  give pricision value up to the given no. of digits


const otherNumber = 234.356435
console.log(otherNumber.toPrecision(3));     //precision me priority decimal se pehle ki hi hoti hai



const zeroNumbers = 10000000
console.log(zeroNumbers.toLocaleString('en-IN'));    //by writing en-IN the commas will be adden by indian number system


// *********************************************Maths********************************************************

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(3.34));
console.log(Math.max(2,5,2,7,3));
console.log(Math.random( ));                           //always value is between 0 and 1  
console.log( (Math.random( )*10) + 1 );                //by multiplying by 10 the values will come in between 1 and 10 






//    *************  basic formula for any random number in between any two given numbers**************************************
const  min = 10
const max = 20

console.log(Math.floor(Math.random() *(max-min + 1) + min))    



// *******************************************  Date and Time  *****************************************************************

let myDate = new Date()
console.log(myDate);                                  //date is a object in js
console.log(myDate.toString());

let myCreateDate = new Date(2023,0,23,5,3)
console.log(myCreateDate.toLocaleString());




