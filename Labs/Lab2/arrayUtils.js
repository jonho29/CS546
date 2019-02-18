/**
 * Returns the first element of the given array
 * @param {Array} array
 * @return First element of array
 */
const head = array => {
  if (
    typeof array !== "undefined" &&
    array instanceof Array &&
    array.length > 0
  )
    return array[0];
  throw "Invalid array";
};

/**
 * Returns the last element of the given array
 * @param {Array} array
 * @return Last element of array
 */
const last = array => {
  if (
    typeof array !== "undefined" &&
    array instanceof Array &&
    array.length > 0
  )
    return array[array.length - 1];
  throw "Invalid array";
};

/**
 * Removes the element from the array at the specified index. Returns the array
 * @param {Array} array
 * @param {number} index
 * @return {Array} the array with element removed
 */
const remove = (array, index) => {
  if (
    typeof array !== "undefined" &&
    array instanceof Array &&
    array.length > 0
  ) {
    if (
      typeof index !== "undefined" &&
      typeof index === "number" &&
      index > -1 &&
      index < array.length
    ) {
      array.splice(index, 1);
      return array;
    }
    throw "Invalid index";
  }
  throw "Invalid array";
};

/**
 * Returns a new array starting at 0 and increasing by 1 up to end - 1.
 * If given a value, sets all elements equal to that value.
 * @param {number} end array goes up to end - 1
 * @param value optional value to set all array values to
 * @return {Array} completed array
 */
const range = (end, value) => {
  if (typeof end !== "undefined" && typeof end == "number" && end > -1) {
    let arr = [];
    if (typeof value !== "undefined") {
      for (let i = 0; i < end; i++) {
        arr.push(value);
      }
      return arr;
    }
    for (let i = 0; i < end; i++) {
      arr.push(i);
    }
    return arr;
  }
  throw "Invalid end value";
};

/**
 * Counts the unique elements of an array and returns them as an Object
 * @param {Array} array array to be counted
 * @return {Object} count of the unique elements in array
 */
const countElements = array => {
  if (typeof array !== "undefined" && array instanceof Array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      if (typeof obj[array[i]] === "undefined") {
        obj[array[i]] = 1;
      } else {
        obj[array[i]]++;
      }
    }
    return obj;
  }
  throw "Invalid array";
};

/**
 * Checks if two arrays are equal in terms of size and elements
 * @param {Array} arrayOne first array to check equality
 * @param {Array} arrayTwo second array to check equality
 * @return {boolean} Returns true if equal, else false
 */
const isEqual = (arrayOne, arrayTwo) => {
  if (
    typeof arrayOne !== undefined &&
    typeof arrayOne !== undefined &&
    arrayOne instanceof Array &&
    arrayTwo instanceof Array
  ) {
    if (arrayOne.length === arrayTwo.length) {
      for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
      }
      return true;
    }
    return false;
  }
  throw "Invalid input";
};

module.exports = {
  head,
  last,
  remove,
  range,
  countElements,
  isEqual
};
