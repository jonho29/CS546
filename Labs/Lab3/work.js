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
 * Returns the data from the work.json file. Asynchronous.
 * @return {Array} data from the work.json file as an array
 */
const getWork = async () => {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json"
  );
  return data;
};

/**
 * Given a first and last name, finds the person in the array, gets their SSN, and finds where they work from work.json.
 * @param {string} firstName person's first name
 * @param {string} lastName person's last name
 * @return {string} Prints the person's full name, company, job title, and if they will be fired.
 */
const whereDoTheyWork = async (firstName, lastName) => {
  if (typeof firstName === "undefined") throw "Invalid first name: undefined";
  if (typeof firstName !== "string") throw "Invalid first name: not a string";
  if (typeof lastName === "undefined") throw "Invalid last name: undefined";
  if (typeof lastName !== "string") throw "Invalid last name: not a string";

  const people = await getPeople();
  const work = await getWork();

  for (i of people) {
    if (i["firstName"] === firstName && i["lastName"] === lastName) {
      for (j of work) {
        if (j["ssn"] === i["ssn"]) {
          return (
            firstName +
            " " +
            lastName +
            " - " +
            j["jobTitle"] +
            " at " +
            j["company"] +
            ". They will " +
            (j["willBeFired"] ? "" : "not ") +
            "be fired."
          );
        }
      }
    }
  }
  throw "Person not found";
};

/**
 * Returns the name of the person whose ip address in input.
 * @param {string} ip ip address of hacker
 * @return {string} name of the hacker in a sentence
 */
const findTheHacker = async ip => {
  if (typeof ip === "undefined") throw "Invalid input: undefined";
  if (typeof ip !== "string") throw "Invalid input: not a string";

  const work = await getWork();
  const people = await getPeople();

  for (let i of work) {
    if (i["ip"] === ip) {
      for (let j of people) {
        if (j["ssn"] === i["ssn"]) {
          return j["firstName"] + " " + j["lastName"] + " is the hacker!";
        }
      }
    }
  }
  throw "Invalid IP address";
};

module.exports = {
  whereDoTheyWork,
  findTheHacker
};
