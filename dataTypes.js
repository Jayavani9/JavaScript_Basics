//Data Types in JS
//In JS, every value is an object or a primitive (Value = Primitive or Object)

//Pirmitive Data Types (7):
//1. Number (Floating Point number - Used for decimal n integers)
let age = 23;
console.log(typeof age);
//2. String (Used for text)
let firstName = "Priya";
console.log(typeof firstName);
//3. Boolean (Used for true or false)
let isStudent = true;
console.log(typeof isStudent);
//4. Undefined (Value taken by a variable that is not assigned a value or not defined yet; empty value)
let address;
console.log(typeof address);
//5. Null (Empty value)
let stNo = null;
console.log(typeof stNo);
//6. Symbol (Introduced in ES2015; Used for unique identifiers)
//7. BigInt(Introduced in ES2020; Used for large integers))

//JS is dynamicaly typed language (Type of a variable can be changed during runtime) -- We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically based on the value assigned to the variable.

//let const var keywords

//1. let (Introduced in ES6; Used for block-scoped variables)
let yourAge = 30;
//Throws an error because youAge is already declared as a let variable
//let yourAge = 32;
yourAge = 32;
console.log(yourAge);

//2. const (Introduced in ES6; Used for constant values)
const birthYr = 1998;
//cannot be changed once assigned a value for const
//birthYr = 1997;
console.log(birthYr);
//Missing initializer in const declaration
//const lookNull;
//console.log(lookNull);

//3. var (Introduced in ES5; Used for global-scoped variables)
var birthPlace = "Delhi";
//Can be changed anywhere in the code
var birthPlace = "Gujarat";
console.log(birthPlace);

//In modern JavaScript, it's considered good practice to declare variables using var, let, or const to avoid polluting the global namespace unintentionally and to catch errors early.
name = "Pinky";
console.log(name);
