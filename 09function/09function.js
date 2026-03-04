//function declear 
function sum(num1, num2){      //here num1 and num2 called as parameter
    console.log(num1 + num2)
}

//function calling
sum(3,4);            //called as argument


//using rest operator(...)
function addToCart(...price){
    return price;
}

console.log(addToCart(20,34,78,343,87));

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