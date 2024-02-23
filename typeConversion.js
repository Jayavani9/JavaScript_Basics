//Type conversion

const numeric = "1992";
console.log(numeric + 18);

//After type conversion
console.log(Number(numeric) + 12);

//Gives a not a number error if we try to convert a string of type character to a number
console.log(Number("Hona"));

console.log(typeof NaN);

console.log(String(23));

//Type coercion
console.log("23" * "2" * 10);

console.log("22" - "10" + "5");

console.log("10a" + 10);

console.log("Str" * "str");

let n = "1" + 1;
n = n - 1;

console.log(n);
console.log(typeof n);

console.log(typeof ("10" - "2"));



