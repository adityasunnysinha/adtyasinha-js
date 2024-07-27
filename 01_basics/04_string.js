const name="aditya"
const repoCount=50

// backtick--is a modern way to print or write a string

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("adityasinha")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2)); // is index pe kon hai wo batata hai
// console.log(gameName.indexOf("t"));  // index no deta hai
// console.log(gameName.substring(0,4));  // only positive value use kar sakte hai
// console.log(gameName.slice(1,-4)); //slice me hum negative value use kar sakte hai 

const newStringOne="     aditya    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


const url = "https://aditya.com/aditya%20sinha"
console.log(url.replace('%20','-'));
console.log(url.includes('aditya'));
console.log(gameName.split('-'))