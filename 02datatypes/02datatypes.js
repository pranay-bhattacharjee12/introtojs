 //primitive (call by value)
 //7 types -> string,number, boolean, null, undefined, symbol(use for unique values),BigInt

 
 //string 
 let name = "ram";
 console.log(name);

 //number 
 let a =30;
 console.log(a);

 //boolean
 let isActive = false;
 console.log(isActive);
  
 //undefined : when value was not assigned to variable
 let b;
 console.log(b);

 //null: standalsone value 
 let c = null;
 console.log(c);

 //symbol
//  const id = Symbol('123')
//  const ids = Symbol('123')
//  console.log(id)
//  console.log(ids)

 //typeof : used to check type of the var 
 console.log(typeof(b))     //undefined 
 console.log(typeof(c))     //object

 //Non Primitive (call by reference)
 // array, object, Functions
 //every non premitive data types are object 
 // and function data type is functin object 

 
 //array
 const arr = [1,2, 3,4]
 console.log(arr)
 console.log(typeof(arr))

 //object
 let obj = {
    name : "ram",
    age : 20,
    city : "hyd"
 }
 console.log(obj)
 console.log(typeof(obj))

 //function
 const fun = function () {
    console.log("hello ")
 }

 fun();  //function calling
 console.log(typeof(fun))


