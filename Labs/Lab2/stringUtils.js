/**
 * Given a string, capitalizes the first letter and lowercases the rest of the string
 * @param {string} string
 * @return {string} formatted string
 */
const capitalize = string => {
  if (typeof string !== "undefined" && typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  throw "Invalid input--not a string";
};

/**
 * Given a string and number, returns the string the given amount of times
 * @param {string} string string to be repeated
 * @param {number} num number of times to repeat given string
 * @return {string} repeated string
 */
const repeat = (string, num) => {
  if (typeof string !== "undefined" && typeof string === "string") {
    if (typeof num !== "undefined" && typeof num === "number" && num > -1) {
      str = "";
      while (num > 0) {
        str += string;
        num--;
      }
      return str;
    }
    throw "Invalid number";
  }
  throw "Invalid string";
};

/**
 * Counts the instances of each character in a string and returns values in an object
 * @param {string} string
 * @return object of compiled counts
 */
const countChars = string => {
  if (typeof string !== "undefined" && typeof string === "string") {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
      if (typeof obj[string.charAt(i)] === "undefined") {
        obj[string.charAt(i)] = 1;
      } else {
        obj[string.charAt(i)]++;
      }
    }
    return obj;
  }
  throw "Invalid string";
};

module.exports = {
  capitalize,
  repeat,
  countChars
};
