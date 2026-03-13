// Can you change Math.pi value ? -> yes 

const ans = Object.getOwnPropertyDescriptors(Math, 'pi');
console.log(ans) //not chnges writable props set to false

const user = {
    name: 'John',
    age: 30,
    isActive: true
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

//you can chnage props 
Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false,
})  

console.log(Object.getOwnPropertyDescriptor(user, 'name'))


