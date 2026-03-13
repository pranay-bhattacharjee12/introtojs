// lexical  scope -> Lexical scope is a fundamental concept in programming languages, including JavaScript, that defines how variable names are resolved in nested functions. It means that a function can access variables from its own scope and from the scopes of its parent functions, but not from the scopes of its child functions.

function a() {
    var b =12;
    c();
    function c() {
        console.log(b);
    }
}

a()
console.log(b); // gives error as b is not defined outside the function a
//func c try find out b inside c first then it try to find out b in a and it find b in a and print 12