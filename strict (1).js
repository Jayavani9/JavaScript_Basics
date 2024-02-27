"use strict";

// If we use the same script without using strict mode, the output is false
//If we use strict mode, the output is hassDL is not defined
let hasDL = false;

const passTest = true;

if (passTest) hassDL = true;

console.log(hasDL);
