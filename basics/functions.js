// we will learn about functions here

function sayMyName(){
    console.log("hello");
                                        // if there is anything after return then it will never print or execute ever 
}
// function[function keyword]       ||               sayMyName[function name]       ||        () when define [parameters]       and      when call then [arguments] or pass them                                    ||   {} [scope]

sayMyName                     //function reference
sayMyName()                   //function execution




function loginUserMessage(username){                
        if (!username ) {                                           //same as username === undefined which is false always so it is not false             ||                 //check karo ki kuch paas kiya  hai ki nahi
            console.log("Please enter a username");                     
            return                                                           //agar undefined nahi to aange ka kuch run hi na ho
        }

    return      `${username} just logged in`
}
//loginUserMessage("Rishabh")         ||  isme sirf value retun ho rahi hai but kuch print nahi ho raha hai
console.log(loginUserMessage("Rishabh"))





// parameters jisme pata nahi ki kitne items aane wale hai to uske liye function             ||  use of rest operator  (...)
function calculatorCarPrice(val1, val2, ...num1){                                           //num1 me first 2 ko chod kar baki sab
    return num1
}

console.log(calculatorCarPrice(200 , 400 , 500 , 600));            //gives an array


const user = {
    username: "Rishabh",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//      handleObject(user)      or
handleObject({
    username: "sikarwar",
    price:2929
})





