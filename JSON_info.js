//Serialization and Deserialization in JS

//1.Serialization
//Serialization is the process of converting a data structure, such as JavaScript object or array, into a format that can be easily stored.

const data = { firstName: "Jack", id: 1 };

//Converted the JS Object to JSON format
const jsonString = JSON.stringify(data);

console.log(jsonString);

//2.Deserialization
//Deserialization is the opposite process of Serialization. It converts data in its serialized format into its original data structure, such as a JavaScript object or array, to make the data usable and accessible in the application.

//Converted the JSON string to JS Object

const dataOutput = JSON.parse(jsonString);
console.log(dataOutput);

//Not only JSON, there are numerous serialization formats available
/*
BSON
BSON is a binary-encoded data interchange format designed to be more efficient in terms of storage and transmission compared to JSON. It extends JSON with additional data types and is typically used in the context of MongoDB. */

/*
EJSON
Extended JSON (EJSON) is a superset of JSON, which means it includes all features of standard JSON and extends it additional conventions for representing certain data type and MongoDB specific constructs.*/


//Ref: https://dev.to/maafaishal/serialization-and-deserialization-in-javascript-3kdd
