const fn = "Jaya";

const job = "Software Engineer";

const brnYr = 1999;

const brthMnth = "Feb";

const jaya =
  "I am" + fn + "," + "a" + job + "born in" + brnYr + "in" + brthMnth;

console.log(jaya);

//Template Literals

const jayaNew = `I am ${fn}, a ${job}, born in ${brnYr} in ${brthMnth}`;
console.log(jayaNew);

console.log(`Just a regular string..`);

//String with Multiple Lines

const str =
  "This is a \n\
multiline \n\
string";

console.log(str);

//Using Template literal a string with multiple lines

const strNew = `Hey,
I am Jaya,
How Do you do bro ?`;
console.log(strNew);
