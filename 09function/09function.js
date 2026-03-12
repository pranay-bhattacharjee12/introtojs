//function declears 
function sum(num1, num2){      //here num1 and num2 as parameter
    console.log(num1 + num2)
}

//function calling
sum(3,4);            //called & 3,4 as argument


//using rest operator(...) = take multiple arguments and return an array of all arguments
function addToCart(...price){
    return price;
}

console.log(addToCart(20,34,78,343,87));   //returns an array of all arguments

function addToCart1(v1,v2, ...price){  
    return price;
}

console.log(addToCart1(20,34,78,343,87));   //v1 ->20, v2->34

//arrow function
const one = () => {
    let naam= "akshay"
    console.log(naam);
}

one();