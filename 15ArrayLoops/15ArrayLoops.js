const arr = [1, 2, 3, 4, 5];

//forof loop
for(const element of arr) {
    console.log(element);
}

//Maps
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

//forin loop
const obj = {a: 1, b: 2, c: 3}; 
for(const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//foreach loop
arr.forEach( (ele) => {
    console.log(` using foreach loop ${ele * 2}`);
});

//foreach loopnever returs anything
const val =arr.forEach( (ele) => {
    console.log(` using foreach loop ${ele * 2}`);
    return ele;
});
console.log(val); //undefined

const obje = [
    {name: 'John', age: 30}, 
    {name: 'Jane', age: 25}, 
    {name: 'Bob', age: 35}
];

obje.forEach( (ele) => {
    console.log(`Name: ${ele.name}, Age: ${ele.age}`);
})