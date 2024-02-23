const age = 15;

const isOld = age >= 18;

if (isOld) {
  console.log("You are allowd to Vote");
} else {
  console.log(`Please wait ${18 - age} years to vote !!`);
}
