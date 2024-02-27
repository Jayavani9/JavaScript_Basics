function logger() {
  console.log("My name is Rinky");
}

logger();
logger();
logger();
logger();

function Veggies(Onion, Tomato, Potato) {
  console.log(Onion, Tomato, Potato);

  Curry = `Curry with ${Onion} onion, ${Tomato} tomatoes, and ${Potato} potatoes`;
  console.log(Curry);
  return Curry;
}

const ans = Veggies(1, 2, 5);
console.log(ans);

const num = Number("23");
console.log(num);

//Function declaration

function calAge1(BornYr) {
  return 2024 - BornYr;
}

const age = calAge1(1995);

//Function Expression
let calAge2 = function (BornYr) {
  return 2024 - BornYr;
};

const age2 = calAge2(1995);

console.log(age, age2);

//Arrow functions

const calcAge3 = (bornYear) => 2024 - bornYear;
const age3 = calcAge3(1995);
console.log(age3);

const yrUntilRet = (bornYear, fname) => {
  const age = 2024 - bornYear;
  const ret = 65 - age;

  return `${fname} retires in ${ret} years`;
};

console.log(yrUntilRet(1995, "Rinky"));

//Function in function

function cutVeggies(veggie) {
  return veggie * 4;
}

function CurProcessor(onion, potato) {
  const onionCur = cutVeggies(onion);
  const potatoCur = cutVeggies(potato);

  const mixCur = `Mix ${onionCur} onion and ${potatoCur} potatoes`;
  return mixCur;
}

console.log(CurProcessor(2, 4));
