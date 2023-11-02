const myArr = [1,3,5,6,'s',true, ]

const myArr2 = new Array(1,3,5,6,6)
myArr.push(77)      //add the value at last
console.log(myArr)

console.log(myArr.pop())      //pop up the last value

//  there are also unshift and shift parameters              

console.log(myArr.includes(4))
console.log(myArr.indexOf(true))

const newArr = myArr.join()         // join simply adds all the element of the array into the string and gives the string
console.log(typeof newArr)


//   difference between slice and splice
const abc = myArr.slice(1,3)               //slice the 1,2 and store it in the other array
console.log(myArr);
console.log(abc);
const abcd = myArr.splice(1,3)             // slice the 1,2,3  and store it in the other array and also remove them from original array
console.log(myArr);
console.log(abcd);
