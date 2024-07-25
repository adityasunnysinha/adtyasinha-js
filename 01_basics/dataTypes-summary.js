const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id === anotherId)
// console.log(typeof id);   //symbol

const bigNumber=123456789n
// console.log(typeof bigNumber);  //bigint

const nullValue=null
// console.log(typeof null);  //object



const heros=["shaktimn","doga"]
// let myObj{
//     name:"hitesh",
//     age:22,
// }

// const myfunction=function(){

//     console.log("helloworld")
// }

// console.log(typeof myfunction)// iska datatype function object hoga 
// phone me kuch screenshot hai 25 jul 24 me dekh lena kon se ka kya datatype aayga


//********************************************************************* */


//Stack memory (primitive), Heap memory (non primitive)
//stack
let myYoutubename ="helloworld"
let anotherName=myYoutubename
anotherName="chai aur code"
// console.log(myYoutubename)
// console.log(anotherName)

//heap
let userOne={
    email:"a@gmail.com",
    upi:"abcd@ybl"
}

let userTwo=userOne
userTwo.email="b@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
