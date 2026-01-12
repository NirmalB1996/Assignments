//primitive data types in JavaScript
//1.number - represents both integer and floating-point numbers- with and without decimals - without quotes
let age = 25;
let temperature = 98.6;
let count = -10;
console.log(typeof age); // Output: number
console.log(typeof temperature); // Output: number
console.log(typeof count); // Output: number

//2.string - represents a sequence of characters enclosed in single quotes, double quotes, or backticks
let name = "John Doe"; // double quotes
let city = 'New York'; // single quotes
let greeting = 'Hello, World!';
let templateLiteral = `My name is ${name}`;
console.log(typeof name); // Output: string
console.log(typeof greeting); // Output: string
console.log(templateLiteral); // Output: My name is John Doe

//3.boolean - represents a logical entity that can have two values: true or false -> results from comparisons or conditions
let isStudent = true;
let hasGraduated = false;
console.log(typeof isStudent); // Output: boolean
console.log(typeof hasGraduated); // Output: boolean

//4.undefined - represents a variable that has been declared but not assigned a value
let uninitializedVar; //variable declared but not assigned. not sure what to store here yet
console.log(typeof uninitializedVar); // Output: undefined

//5.null - represents the intentional absence of any object value -> stored with null value
let emptyValue = null; //no mempory allocated for this variable
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)

//Non-primitive data types in JavaScript
//6.object - represents a collection of key-value pairs of different data types
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    address:{
        street: "123 Main St",
        city: "Wonderland"
    } //object within an object
};
console.log(typeof person); // Output: object
console.log(person.address.city); // Output: Wonderland
console.log(person['name']); // Output: Alice
console.log(person.age); // Output: 30

//7.array - represents an ordered collection of values, which can be of different data types
let numbers = [1, 2, 3, 4, 5]; //array of numbers
let mixedArray = [1, "two", true, null, {key: "value"}]; //array with different data types
console.log(typeof numbers); // Output: object
console.log(numbers[2]); // Output: 3
console.log(mixedArray[1]); // Output: two
console.log(mixedArray[4].key); // Output: value