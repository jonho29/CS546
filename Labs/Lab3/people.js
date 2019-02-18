const axios = require("axios");

/**
 * Returns the data from the people.json file. Asynchronous.
 * @return {Array} data from the people.json file as an array
 */
const getPeople = async () => {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json"
  );
  return data;
};

/**
 * Returns the name of the person with the corresponding id number
 * @param {number} id id number to search for
 * @return {string} name of person
 */
const getPersonById = async id => {
  if (typeof id === "undefined") throw "Invalid input: undefined";
  if (typeof id !== "number") throw "Invalid input: not a number";
  if (id < 1 || id > 500) throw "Invalid input: number out of bounds";

  const data = await getPeople();
  return data[id - 1]["firstName"] + " " + data[id - 1]["lastName"];
};

/**
 * Sorts the people.json file, then returns the full name of the person at the given index.
 * @param {number} index index to grab name from
 * @return {string} full name of person at the given index
 */
const lexIndex = async index => {
  if (typeof index === "undefined") throw "Invalid input: undefined";
  if (typeof index !== "number") throw "Invalid input: not a number";
  if (index < 0 || index > 499) throw "Invalid input: number out of bounds";

  let data = await getPeople();
  data.sort((a, b) => {
    a = a["lastName"].toLowerCase();
    b = b["lastName"].toLowerCase();
    // Sort by comparing two elements
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return data[index]["firstName"] + " " + data[index]["lastName"];
};

/**
 * Returns metrics using the first names of all people in people.json
 * @return {Object} contains total letters, total vowels, total consonants, longest name, and shortest name
 */
const firstNameMetrics = async () => {
  const data = await getPeople();
  let letterSum = 0,
    vowelSum = 0,
    conSum = 0;
  let longestName = data[0]["firstName"],
    shortestName = longestName;

  for (let i of data) {
    letterSum += i["firstName"].length;
    let vowels = i["firstName"].match(/[aeiou]/gi);
    if (vowels) {
      vowelSum += vowels.length;
      conSum += i["firstName"].length - vowels.length;
    } else conSum += i["firstName"].length;
    if (i["firstName"].length > longestName.length)
      longestName = i["firstName"];
    if (i["firstName"].length < shortestName.length)
      shortestName = i["firstName"];
  }

  return {
    totalLetters: letterSum,
    totalVowels: vowelSum,
    totalConsonants: conSum,
    longestName: longestName,
    shortestName: shortestName
  };
};

module.exports = {
  getPersonById,
  lexIndex,
  firstNameMetrics
};
