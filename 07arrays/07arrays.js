const arr= [12,423,23,32,67]
console.log(arr[1]);

//Arrays methhod
//push in given arr
arr.push(1);
console.log(arr)

//popout last element
console.log(arr.pop());

const orga = [12,13,14,34,56,89]

//slice ->donot manipulate the original array
const ar1 = orga.slice(1,3);
console.log(orga);
console.log(ar1);

//splice -> manipulate the original array 
const ar2 = orga.splice(1,3)
console.log(orga);      //only print which are notincluded
console.log(ar2);

//spredopertaor -> used to spred the array 
console.log("using spredoperator : " + [...arr, ...orga]);

//flat -> used to join the all arrays and return new array 
const arr3 = [1, 2, [23,43,56], 78,55,[4,6,7,9], 9,97 ]
console.log(`after using flat ${arr3.flat(Infinity)}`)        // .flat(depth)

