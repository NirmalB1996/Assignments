//initialization
const a; // SyntaxError: Missing initializer in const declaration
let b; // valid
var c; // valid

// reassignment
a = 10; // Error: Assignment to constant variable.
b = 20; // valid
c = 30; // valid

// redeclaration
const a = 15; // SyntaxError: Identifier 'a' has already been declared
let b = 25; // SyntaxError: Identifier 'b' has already been declared
var c = 35; // valid

// scope
{
    const d = 40; // valid
    let e = 50; // valid
    var f = 60; // valid
    console.log(d); // valid
    console.log(e); // valid
    console.log(f); // valid    
}

console.log(d); // ReferenceError: d is not defined
console.log(e); // ReferenceError: e is not defined
console.log(f); // valid, outputs: 60