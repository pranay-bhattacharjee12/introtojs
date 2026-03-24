// Promises -> The Promise object represents the eventual completion or failure of an asynchronous operation.
//promise has 3 states -> pending, fulfilled, rejected

//creating a promise
const promiseOne = new Promise (function ( resolve, reject) {
    setTimeout(() => {
        resolve({name: "John", age: 30});   //to connect with then make it resolve
        console.log(`Async task is completed `)
    }, 2000)
})

//consuming a promise
promiseOne.then ((user) => {
    console.log(`Promise is consumed and user data is ${user.name} and age is ${user.age}`)
})


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseTwo
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){      //if there there is an error in the promise then catch will handle it
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  //finally will execute regardless of the promise is resolved or rejected



//Async Await
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000) // ✅ added delay
})

async function consumePromiseThree() {
    try {
        const response = await promiseThree   // ✅ await inside try
        console.log(response);
    } catch (error) {
        console.log(error);   // ✅ handle rejection here
    }
}

consumePromiseThree();