//this -> used extract currect context value

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

//print empty object 
//but ifyou run this same on browser it will give you window obj 
console.log(this); 

const one = () => {
    let naam= "akshay"
    console.log(this);
}


