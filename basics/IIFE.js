// Immediately Invoked Function Expressions   (IIFE)

(function chai(){
    console.log("Data Base Connected");
                }
)();                           // main important is the semicolone to end the iife 

//            ()()    first parenthesis is the function defination and the second one is the execution call 




// *************************************Or  as both are same *********************************************

(  (argument ) =>  {
    console.log( `DB connected two ${argument } `);
}  )  ("pass the parameter");
