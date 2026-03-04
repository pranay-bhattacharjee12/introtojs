let a =10;   //global scope

if(true) {
    let a =100
    console.log(`block scope ${a}`)
    const b = 20 
    var c = 30
}

console.log(a)     //print due to global scope 
//console.log(b)     //error due to block scope 
console.log(c)     //print 

function one (){
    const name = "aryan"
    function two(){
        const mail ="axb@gmail.com"
        console.log(`printin from inside two ${name}`)
    }
    // console.log(mail);  //printyou error due to block scope access
    two();
}
one();

console.log(addone(10));

function addone(a){
    return a+1;
}

//console.log(addtwo(10));   //error due scope

//function expression
const addtwo = function(b){
    return b+2;
}
console.log(addtwo(10));




 