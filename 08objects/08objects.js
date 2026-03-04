// singelton 
// Object.create

//decllear symbol
const sym =Symbol("key1")

//object literals
const obj ={
    naam : "rmesh das",
    [sym] : "key1",
    age : 13,
    loc : "agra",
    Email : "rmesh@gmail.com",
}

console.log(typeof(obj[sym]))
console.log(obj)

//destraucturing
const {naam, loc} = obj;    
console.log(`naam is ${naam} from ${loc}`)