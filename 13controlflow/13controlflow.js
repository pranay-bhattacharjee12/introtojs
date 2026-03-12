//if else

let age = 18;

//if the condition is true, execute this block otherwise execute the else block
    console.log("You are an adult.");
if (age >= 18) {       
} else {
    console.log("You are a minor.");
}

//if else if else

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
}   else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


const debitcard = true;
const userLoggedIn = true;
const loggedInGoogle = false;
const loggedInEmail= true;

//&&(and) operator
if (debitcard && userLoggedIn) {
    console.log("You can make a purchase.");
} else {
    console.log("Please log in and add a debit card to make a purchase.");
}

// ||(or) operator
if (loggedInGoogle || loggedInEmail) {
    console.log("You are logged in.");
} else {
    console.log("Please log in to continue.");
}

//switch case
let day = 3;    

//if anything matches the case, it will execute that block and break out of the switch statement. 
//If no cases match, it will execute the default block.

switch (day) {
    case 1:
        console.log("Monday");
        break;   //if you donot use break after match it will continue to execute the next cases until it finds a break, excepts default case.
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break; 
    default:
        console.log("Invalid day");
}

//Falsy -> false, 0, -0, "", null, undefined, NaN
//truthy -> "0", 'false', [], {}, function(){}, true, 1, -1

//Nullish coalescing operator (??) - returns the right-hand operand 
// when the left-hand operand is null or undefined, otherwise returns the left-hand operand.
let val = null ?? 20;
console.log(val)

//ternary operator - condition ? expressionIfTrue : expressionIfFalse
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log(discount);