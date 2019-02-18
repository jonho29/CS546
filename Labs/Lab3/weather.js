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
 * Returns the data from the weather.json file. Asynchronous.
 * @return {Array} data from the weather.json file as an array
 */
const getWeather = async () => {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json"
  );
  return data;
};

/**
 * Determines if a person should go outside, based on the temperature of their location.
 * Finds the person in people.json, then finds their zip code, which allows getting their weather data
 * from weather.json. If the temperature is equal to or above 34 degrees, they should go outside.
 * @param {string} firstName first name of person to analyze
 * @param {string} lastName last  name of person to analyze
 * @return {string} a string indicating whether or not the person should go outside. Includes their name.
 */
const shouldTheyGoOutside = async (firstName, lastName) => {
  if (typeof firstName === "undefined") throw "Invalid first name: undefined";
  if (typeof firstName !== "string") throw "Invalid first name: not a string";
  if (typeof lastName === "undefined") throw "Invalid last name: undefined";
  if (typeof lastName !== "string") throw "Invalid last name: not a string";

  const people = await getPeople();
  const weather = await getWeather();

  for (let i of people) {
    if (i["firstName"] === firstName && i["lastName"] === lastName) {
      for (let j of weather) {
        if (j["zip"] === i["zip"]) {
          return j["temp"] >= 34
            ? "Yes, " + firstName + " should go outside."
            : "No, " + firstName + " should not go outside.";
        }
      }
    }
  }
  throw "Name not found";
};

module.exports = {
  shouldTheyGoOutside
};
