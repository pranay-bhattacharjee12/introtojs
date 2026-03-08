//call method is used to call a function with a given this value and arguments provided individually
//syntax: func.call(thisArg, arg1, arg2, ...)

function SetUsername(username){
    //complex calls
    this.username = username
    console.log("called");
}

//call() lets you invoke a function while explicitly setting the this context.
function createUser(username, email, password){
    SetUsername.call(this, username)    //this is explicitly set to the current object created by new createUser
    this.email = email
    this.password = password
}

const kishan = new createUser("kishan", "chai@fb.com", "123")
console.log(kishan);