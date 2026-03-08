//mainly 2 types of storage 
//stack used for primitive data types
//in stack type we change in coppy of variables value 

let name = "ram";
let anotherName = name;
anotherName = "shayam"

console.log(name)           //ram
console.log(anotherName)    //shayam

//non primitive data type used heap memmory 
//in heap we change direct variable values 

let user1 = {
    mail: "xyz@gmail.com",
    age: 12
}
let user2 = user1;
user2.mail = "zzz@gmail.com";

console.log(user1.mail);     //zzz@gmail.com
console.log(user2.mail);     //zzz@gmail.com


