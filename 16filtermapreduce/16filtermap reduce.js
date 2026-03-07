const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004, price: 203 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008, price: 300 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007, price: 239 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010, price: 250 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014, price: 350 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010, price: 280 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996, price: 220 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016, price: 380 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989, price: 260 }
];

const numbers = [1, 2, 3, 4, 5];

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
const result = numbers.filter((num) => {
    return num > 2;
})  //if you didnot start scope({}) then it will normally return without return keyword otherwise you have to use return keyword msut be used when you have scope({}) in arrow function
console.log(result); // [3, 4, 5]

const historyBooks = books.filter((bk) => bk.genre === "History")
console.log(historyBooks);


//map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const result2 = numbers.map((num) => num + 10)
console.log(result2); // [11, 12, 13, 14, 15]

//chaining filter and map
const result3 = numbers
                .map((num) => num * 100)
                .filter((num) => num > 110)
console.log(result3);


//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const myTotal = numbers.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)   //1st acc =0 and currval =1, 2nd acc =1 and currval =2 ... and so on
console.log(`total is ${myTotal}`); // 15

const totalPriceOfBooks = books.reduce((acc, currentPrice) => acc+currentPrice.price, 0)
console.log(totalPriceOfBooks);


