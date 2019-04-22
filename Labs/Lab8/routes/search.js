const axios = require("axios");
const express = require("express");
const router = express.Router();

/**
 * Returns the ids of those whose first or last name match the input string
 * @param {string} searchName name to search for
 * @return {Array} array of objects
 */
async function getIDs(searchName) {
  if (typeof searchName === "undefined") throw "Undefined input";
  if (typeof searchName !== "string") throw "Invalid input";
  let idList = [];
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json"
  );
  for (let x of data) {
    if (
      x["firstName"].includes(
        searchName.charAt(0).toUpperCase() +
          searchName.substring(1, searchName.length)
      )
    )
      idList.push(x);
    else if (
      x["lastName"].includes(
        searchName.charAt(0).toUpperCase() +
          searchName.substring(1, searchName.length)
      )
    )
      idList.push(x);
    else if (x["firstName"].includes(searchName.toLowerCase())) idList.push(x);
    else if (x["lastName"].includes(searchName.toLowerCase())) idList.push(x);
    if (idList.length === 20) break;
  }
  return idList;
}
router.post("/", async (req, res) => {
  if (!req.body.personName) {
    res.status(400);
    res.render("site/error", {});
  } else {
    const name = req.body.personName;
    const peopleList = await getIDs(name);
    res.render("site/search", { name: name, people: peopleList });
  }
});

module.exports = router;
