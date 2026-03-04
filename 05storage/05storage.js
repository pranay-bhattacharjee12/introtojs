//mainly 2 types of storage 

//stack used for premetive data types
//in stack type we change in coppy var value 

let name = "ram";
let anotherName = name;
anotherName = "shayam"


console.log(name)
console.log(anotherName)

//non premetive data type used heap memmory 
//in heap we point out direct variable values 

let user1 = {
    mail: "xyz@gmail.com",
    age: 12
}

let user2 = user1;
user2.mail = "zzz@gmail.com";

console.log(user1.mail);
console.log(user2.mail);


