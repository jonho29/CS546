/**
 * Takes the properties from earlier objects and composes a new object.
 * Will not overwrite duplicates.
 * @param  {...Object} args objects to be combined
 */
const extend = (...args) => {
  if (typeof args !== "undefined" && args instanceof Array && args.length > 1) {
    let comb = {};
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== "undefined" && args[i] instanceof Object) {
        for (let key in args[i]) {
          if (!args[i].hasOwnProperty(key)) continue;
          if (typeof comb[key] === "undefined") comb[key] = args[i][key];
        }
      } else {
        throw "Input contains a non-object";
      }
    }
    return comb;
  }
  throw "Invalid argument";
};

/**
 * Takes the properties from earlier objects and composes a new object
 * Will overwrite duplicates.
 * @param  {...Object} args objects to be combined
 */
const smush = (...args) => {
  if (typeof args !== "undefined" && args instanceof Array && args.length > 1) {
    let comb = {};
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== "undefined" && args[i] instanceof Object) {
        Object.assign(comb, args[i]);
      } else {
        throw "Input contains a non-object";
      }
    }
    return comb;
  }
  throw "Invalid argument";
};

/**
 * Performs the given function on every value of an object, returns as a new object
 * @param {Object} object object to have function mapped on
 * @param {Function} func function to map
 * @return {Object} new object operated on
 */
const mapValues = (object, func) => {
  if (
    typeof object !== "undefined" &&
    object instanceof Object &&
    typeof func !== "undefined" &&
    func instanceof Function
  ) {
    let obj = {};
    for (let i in object) {
      obj[i] = func(object[i]);
    }
    return obj;
  }
  throw "Invalid input";
};

module.exports = {
  extend,
  smush,
  mapValues
};
