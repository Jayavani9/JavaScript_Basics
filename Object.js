//Objects in JS

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 36,
  job: "professor",
  friends: ["michael", "john", "smith"],
};

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas.friends[2]);
console.log(jonas["firstName"]);
const key = "Name";

console.log(jonas["first" + key]);
console.log(jonas["last" + key]);
console.log(jonas['friends'])
console.log(jonas.friends[2])
console.log(jonas['friends'][2])
console.log(jonas['friends'][0])