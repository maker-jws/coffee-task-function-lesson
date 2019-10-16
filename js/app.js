$("body").append("<p>JS::live<p>");

function theNameOfYourFunction(string1, string2) {
  const aNewString = string1 + " " + string2;
  // Step 1. assigning the arguments to a new variable
  // Step n.  the process of the code may continue...
  return console.log(aNewString);
  // Step 2. a value is returned that concatenates the two strings into one new string and
}

const aNewWord = theNameOfYourFunction;
// aNewWord( )
// aNewWord("duck","pickle")

const secondNewWord = function aNewFunction(string1, string2) {
  return string1 + " " + string2;
};

// console.log(secondNewWord("pat","cat"))
// const string;

// console.log(typeof aNewFunction);

//Extra Code
const checkMaths = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "This is a new string:" + a + " " + b + "!";
  } else {
    return a + b
  }
};

const strings = checkMaths("capital", "gains");
const numbers = checkMaths(1, 2);
const mixed = checkMaths(1, "dog");

function thirdFD(arg1, arg2) {
  console.log(arg1 == 1);
  console.log(arg1, arg2);
  return checkMaths(arg1, arg2);
}

const lastAttempt = thirdFD(true, strings);
console.log(lastAttempt);
