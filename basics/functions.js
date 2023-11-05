// we will learn about functions here

function sayMyName(){
    console.log("hello");
                                        // if there is anything after return then it will never print or execute ever 
}
// function[function keyword]       ||               sayMyName[function name]       ||        () when define [parameters]       and      when call then [arguments]                                      ||   {} [scope]

sayMyName                     //function reference
sayMyName()                   //function execution




function loginUserMessage(username){                
        if (!username ) {                                           //same as username === undefined which is false always so it is not false             ||                                             //check karo ki kuch paas kiya  hai ki nahi
            console.log("Please enter a username");                     
            return                                                           //agar undefined nahi to aange ka kuch run hi na ho
        }

    return      `${username} just logged in`
}
//loginUserMessage("Rishabh")         ||  isme sirf value retun ho rahi hai but kuch print nahi ho raha hai
console.log(loginUserMessage("Rishabh"))
