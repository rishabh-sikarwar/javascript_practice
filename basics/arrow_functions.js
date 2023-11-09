const user = {
    username: "Rishabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "SaM"
// user.welcomeMessage()
console.log(this);    //current context is empty as in node envirenment but not in website

function chai(){
    console.log(this);
}
 chai()


// const chai = function() {
//     let username = "Rishabh "
//     console.log(this.username);
// } 

// chai()



const chai = () => {                           //arrow function   () => {}
    let username = "Rishabh "
    console.log(this);
} 

chai()
// ***************************************example of arrow function *************************************

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,5));


// ******************************inplicit of arrow functions******************************************
                                // explicit matlab aapko return lagana pad raha hai 

const addThree = (num3 , num4) => num3 + num4

const addThreee = (num3 , num4) => (num3 + num4)            //return is necessary only in curly braces but not in any other case
                                                        //   and parentesis is necessary to return an object so ( ) it is good 








