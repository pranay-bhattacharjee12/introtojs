//Hoisting is a JavaScript behavior where variable and function declarations 
//are moved to the top of their scope during the execution phase before the code runs.

console.log(x);   //undefined (hoisted but not assigned value)
//console.log(y);   //not hoisted gives error (undefined tomemory allocation part )
//console.log(z);   //not hoisted gives error (undefined tomemory allocation part )
fe();       //hello (hoisted and assigned value)
//f2();   //not hoisted gives error (undefined tomemory allocation part )

var x =7;
const y =4;
let z =12;

function fe() {
    console.log("hello ");
}

const f2 = () => {
    console.log("hello from f2 ");
}

//temporal dead zone (TDZ) is the time between the start of a block and the point where a variable is declared.
//During this time, the variable is in a "dead zone" and cannot be accessed. 
//This applies to variables declared with let and const, but not to var.