//for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//nesteded for loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }   
}

//2 table
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}

//while loop -> check condition first then execute the code
let i = 0;  
while (i < 0) {
    console.log(i);
    i++;
}

//do while loop -> execute the code first then check the condition. at leats runs once even if the condition is false
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 0);    


//break -> to exit the loop
for (let i =0; i<10; i++) {
    if (i == 5) {
        console.log(i);
        break;
    }   
    console.log(`cnt: ${i}`);
}

//continue -> to skip the current iteration
for (let i =0; i<10; i++) {
    if (i == 5) {
        console.log(i);
        continue;
    }   
    console.log(`cnt: ${i}`);
}