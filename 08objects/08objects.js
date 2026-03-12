// singleton object create by Object.create
const user = Object.create(null);

user.name = "Ramesh Das";
user.age = 25;
user.location = "Agra";

console.log(user);
console.log(user.name);

//declare symbol
const sym =Symbol("key1")

//object literal
const obj ={
    naam : "rmesh das",
    [sym] : "key1",
    age : 13,
    loc : "agra",
    Email : "rmesh@gmail.com",
}

console.log(typeof(obj[sym]))
console.log(obj)
console.log(obj.sym)      // undefined cnot access symbol property using dot notation
console.log(obj[sym])    // accessing symbol property -> key1


//destructuring
const {naam, loc} = obj;    
console.log(`naam is ${naam} from ${loc}`)