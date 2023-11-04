//singleton                   it is a unique as it is made by a constructor           
// Object.create               constructor method to create a object     

// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Rishabh"     ,                   //instead of name we can make 0 or 1 to mane like an array
    "full name ": "rishabh sikarwar"  ,         //iske liye hume sirj second method hi use kar sakte hai bracket wala isliye first wale method ki limitations hai
       [ mySymbol]:" mykey1 ",                  //to declare a symbol make the naming in the square bracket
    age: 18,
    location: "Gwalior",
    email: "rishabhsikarwar1000@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]

}

console.log(JsUser.email);                                  //two ways to access the object
console.log(JsUser["email"]);                                //lekin idehar ye email string ki tarah lega to usko string hi dena hai
console.log(JsUser["full name "]);
console.log(JsUser[mySymbol]);                               //to access the symbol we do not use the double inverted commas
console.log(typeof JsUser[mySymbol]);                               //to access the symbol we do not use the double inverted commas


JsUser.age = 50
//Object.freeze(JsUser)                                    //   by using freeze we cannot edit the object anymore
JsUser.age = 100
console.log(JsUser);




JsUser.greetings = function(){
    console.log("hello JS user");
}
JsUser.greetingsTwo = function(){
    console.log( `Hello JS user , ${this.name}`);                       //to reference the same object
}
 
console.log(JsUser.greetings);    //[Function (anonymous)]
console.log(JsUser.greetings());    //hello js user         and           undefined
console.log(JsUser.greetingsTwo);
console.log(JsUser.greetingsTwo());




// *********************************************  object_2  **********************************************************

// const tinderUser = new Object()                  singleton object
const tinderUser = {}                        //both are same only the difference is to declare otherwise both are the empty objects

tinderUser.id = "123abc"
tinderUser.name = "Rishabh"
tinderUser.isLoggedIn = false


const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullname: {
            firstname: "Rishabh",            //nested objects
            lastname: "Sikarwar"                 
        }
    }
}


console.log(regularUser.fullname.userFullname.firstname);



const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}              this problem is same as the string problem
// const obj3 = Object.assign({},obj1 ,obj2)                        // { } an empty object  ,    it is good to merge the different objects
const obj3 = {...obj1, ...obj2}
console.log(obj3);



const users = [
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 2,
        email: "R@gmail.com"
    },
    {
        id: 3,
        email: "R@gmail.com"
    },
    {
        id: 4,
        email: "R@gmail.com"
    },
    {
        id: 5,
        email: "R@gmail.com"
    }

]

console.log(users[1].id);




console.log(tinderUser);
console.log(Object.keys(tinderUser));                   //saari keys ek array me convert ho jati hai or hume ek array milta hai
console.log(Object.values(tinderUser));                  //keys ki tarah values bhi nikal sakte hai ek array me
console.log(Object.entries(tinderUser));                  //array ke andaar array

console.log(tinderUser.hasOwnProperty("isLogged"));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));











