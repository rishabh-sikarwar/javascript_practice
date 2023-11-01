const name = "Rishabh"
const repoCount =  6

console.log(name + repoCount + "Very less need to improve");     //not recommended for modern times 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)        // in this type backticks is used which is a modern way ( ` ` )


// another way to declare a string 
const gameName = new String('superMario')

console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);



const spacesInString = "          Rishabh          "
console.log(spacesInString);
console.log(spacesInString.trim());         //this command trim all the empty spaces in the string

console.log(spacesInString.replace('h', 'ShSikarwar'));
console.log(spacesInString.includes('Sikarwar'));
console.log(spacesInString.includes('sh'));






