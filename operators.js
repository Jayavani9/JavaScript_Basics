//Basic operartors in JS

//1. Arithmetic Operators
//The Arithmetic Operators are used to perform arithmetic operations:

let a = 3;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);
console.log(a++);
console.log(a--);

let bi = 10;
console.log(bi++);
console.log(bi++);

let str1 = "Jaya";
let str2 = "Vani";
console.log(str1 + str2);
console.log(a + str1);
console.log(str2 + a);
console.log(str1 + " " + str2);

let y = "5" + 5;
console.log(y);

let z = 5 + "5";
console.log(z);
//2. Assigment Operators
//The Assignment Operators are used to assign values to variables:

let x = 5;
console.log(x);

let xa = 3;
xa += 2;
console.log(xa);

let text3 = "What a very ";
text3 += "nice day";
console.log(text3);

xa -= 1;
console.log(xa);

xa *= 2;
console.log(xa);

xa /= 1;
console.log(xa);

xa %= 2;
console.log(xa);

xa **= 3;
console.log(xa);

//3. Comparison Operators
//The Comparison Operators are used to compare two values:
// == checks only the value and returns true or false
// === checks the value and the data type and returns true or false

console.log(2 == 2);
console.log(2 == "2");

console.log(2 === 2);
console.log(2 === "2");

// != checks only the value and returns true or false
console.log(2 != 2);
console.log(2 != "2");
console.log(1 != 2);

// !== checks the value and the data type and returns true or false
console.log(2 !== "2");
console.log(1 != 2);

// > greater than chacks the value and returns true or false

console.log(2 > 1);

// < less than chacks the value and returns true or false

console.log(2 < 1);

// >= greater than or equal to chacks the value and returns true or false

console.log(2 >= 2);

// <= less than or equal to chacks the value and returns true or false

console.log(2 <= 2);

// ? ternary operator
// The ternary operator is a shorthand for if...else statements. It is used to evaluate a condition and return

console.log(2 > 1 ? "Yes" : "No");

//Note that strings are compared alphabetically:
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);

let textA = "20";
let textB = "5";
let resultq = text1 < text2;
console.log(resultq);

//4. Logical Operators
//Logical AND ; Logical OR ; Logical NOT
console.log(2 && 3);
console.log(2 || 3);
console.log(!3);
console.log(!null);

// 5. Type Operators
//The Type Operators are used to get the data type of a variable:
console.log(typeof 2);

//6. Bitwise Operators
// Bit operators work on 32 bits numbers.
// Bitwise operators are used to compare, manipulate, and evaluate integers.
//Bitwise &(AND) |(OR) ~(NOT) ^(XOR) <<(Left shift) >>(Right shift) >>> (Unsigned right shift)
