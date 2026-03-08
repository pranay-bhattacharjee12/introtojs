// object literals
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);    //this refers to the current object (person)
    }
}

console.log(`person name: ${person.name} and age is ${person.age}`);
person.greet()

// constructor function-> new keyword allows us to create multiple instances of the same type of object
function user (name, age) {
    this.name = name,
    this.age = age;
}

// creating instances of user
const user1 = new user("ravi", 18);   
const user2 = new user("kavi", 56);

console.log(`user1 name: ${user1.name} and age is ${user1.age}`);
console.log(`user2 name: ${user2.name} and age is ${user2.age}`);   

