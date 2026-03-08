async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()  //await use to wait for the promise to resolve and get the actual data & json() method is used to parse the response body as JSON
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()     //function call to fetch the data from the API and log it to the console
