//this -> used extract current context value

const user = {
    mail: "xyz@gmail.com",
    price: 789,

    welcomemsg: function(){
        console.log(`${this.mail} welcome jii`)
       // console.log(this);   //print nothing 
    }
}

// user.welcomemsg();
// user.mail ="sam@gmail.com"
// user.welcomemsg();

// In Node.js -> prints {}
// In browser -> prints window object
console.log(this); 


// In JavaScript, arrow functions use lexical this. That means they do not create their own 
// this context.Instead, they inherit this from the surrounding scope where the arrow 
// function is defined.Normal functions (function(){}) create their own this
// but arrow functions reuse the parent scope’s this.
const user1 = {
  name: "Aryan",
  greet: () => {
    console.log(this.name);   //undefined - Arrow function does not bind this to user
                              //It takes this from the outer/global scope
  }
};

user1.greet();

