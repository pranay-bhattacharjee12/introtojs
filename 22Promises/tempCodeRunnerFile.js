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