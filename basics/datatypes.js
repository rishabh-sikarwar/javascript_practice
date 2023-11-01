// two types of datatypes   
//    1.  Primitive   
//         7 types   : string, number, boolean , null , undefined , symbol, bigint


//       2. Reference (non primitive)
//         Array, Objects , Functions



//    javascript dynamically or statically typed language  ???               dynamically typed as type of variable is not defined
const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);     //false




// ******************************************************************************************************************
// let is a primitive type  
// stack  (Primitive)  :;  Heap (Non - Primitive )    it is a reference type    copy nahi di jati hai 

let myName = "rishabh"
let mysurname = myName      //value nahi di jaati balki ek copy di jati hai 
mysurname = "sikarwar"

console.log(myName)
console.log(mysurname)


let userOne = {
    email: "rishabhsikarwar1000@gmail.com" ,
    section : "first"
}

let userTwo = userOne

userTwo.email = "asdf@gmail.com"

console.log(userOne.email);     //isme bhi value change ho gae hai 
console.log(userTwo.email);


