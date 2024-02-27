//Arrays

//Defining an array
const frnds = ["Michael", "Steven", "Peter"];

//Printing an array
console.log(frnds);

//Accessing an element at an index
console.log(frnds[2]);

//Length of an Array
console.log(frnds.length);

console.log(frnds[frnds.length - 1]);

//Overwriting an element at an index
frnds[1] = "Pan";
console.log(frnds);

//Heterogenous array

random = [1, "Jay", 2, "Swan", 3, "Pip"];
console.log(random);

console.log(random.length);

//Methods of an Array

//1. To push an element at the end of the array

frnds.push("Rinky");
console.log(frnds);

//2. To add an element at the beginning of the array

frnds.unshift("John");
console.log(frnds);

//3. Remove element from the end
frnds.pop();
console.log(frnds);

//4. For removing an element from beginning

const ans = frnds.shift();
console.log(ans);
console.log(frnds);

//5. To find the index of the given element if present
console.log(frnds.indexOf('Steven'));
console.log(frnds.indexOf('Pan'));

//6. To check if an element is present in the array
console.log(frnds.includes('Peter'))
console.log(frnds.includes('John'))