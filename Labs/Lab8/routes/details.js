const axios = require("axios");
const express = require("express");
const router = express.Router();

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
  if (!id) throw "Invalid";
  if (id < 1 || id > 500) throw "Invalid input: number out of bounds";

  const data = await getPeople();
  return data[id - 1];
};

router.get("/:id", async (req, res) => {
  const person = await getPersonById(req.params.id);
  res.render("site/details", {
    id: person.id,
    firstName: person.firstName,
    lastName: person.lastName,
    address: person.address,
    zip: person.zip,
    phone: person.phone,
    ssn: person.ssn
  });
});

module.exports = router;
