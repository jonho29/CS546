const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

const first = { x: 2, y: 3 };
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

// Test objectUtils.js. Should pass
try {
  const one = objUtils.extend(first, second, third);
  console.log(one);
  console.log("test case 1 passed");
} catch (error) {
  console.log("test case 1 failed", error);
}

// Fail
try {
  const two = objUtils.extend(first, null, second, undefined, third);
  console.log(two);
  console.log("test case 2 passed");
} catch (error) {
  console.log("test case 2 failed", error);
}

// Should pass
try {
  const three = objUtils.mapValues(first, x => x * x);
  console.log(three);
  console.log("test case 3 passed");
} catch (error) {
  console.log("test case 3 failed", error);
}

// Fail
try {
  const four = objUtils.mapValues(first, undefined);
  console.log(four);
  console.log("test case 4 passed");
} catch (error) {
  console.log("test case 4 failed", error);
}

// Should pass
try {
  const five = stringUtils.countChars("qwerty1233");
  console.log(five);
  console.log("test case 5 passed");
} catch (error) {
  console.log("test case 5 failed", error);
}

// Throw error
try {
  const six = stringUtils.countChars({ i: "am not a string" });
  console.log(six);
  console.log("test case 6 passed");
} catch (error) {
  console.log("test case 6 failed", error);
}

// Pass
try {
  const seven = stringUtils.repeat("Annoying", 5);
  console.log(seven);
  console.log("test case 7 passed");
} catch (error) {
  console.log("test case 7 failed", error);
}

// Throw error
try {
  const eight = stringUtils.repeat("ThisMightWork", -3);
  console.log(eight);
  console.log("test case 8 passed");
} catch (error) {
  console.log("test case 8 failed", error);
}
