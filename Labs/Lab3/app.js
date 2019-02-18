const people = require("./people");
const weather = require("./weather");
const work = require("./work");

// Test every function
async function main() {
  // people.js test
  // firstNameMetrics
  try {
    const fnmPass = await people.firstNameMetrics();
    console.log(fnmPass);
  } catch (e) {
    console.log(e);
  }
  // getPersonById. should return Anet Elland
  try {
    const idPass = await people.getPersonById(500);
    console.log(idPass);
  } catch (e) {
    console.log(e);
  }
  // should throw
  try {
    const idFail = await people.getPersonById(-12321);
    console.log(idFail);
  } catch (e) {
    console.log(e);
  }
  // getPersonById. should return Blayne Yushankin
  try {
    const lexPass = await people.lexIndex(499);
    console.log(lexPass);
  } catch (e) {
    console.log(e);
  }
  // should throw
  try {
    const lexFail = await people.lexIndex();
    console.log(lexFail);
  } catch (e) {
    console.log(e);
  }

  // weather.js test

  // shouldTheyGoOutside. Returns No, Blayne should not go outside.
  try {
    const outPass = await weather.shouldTheyGoOutside("Blayne", "Yushankin");
    console.log(outPass);
  } catch (e) {
    console.log(e);
  }
  // should throw
  try {
    const outFail = await weather.shouldTheyGoOutside(123, "asdf");
    console.log(outFail);
  } catch (e) {
    console.log(e);
  }

  // work.js test
  // getPersonById. should return
  try {
    const wherePass = await work.whereDoTheyWork("Anet", "Elland");
    console.log(wherePass);
  } catch (e) {
    console.log(e);
  }
  // should throw
  try {
    const whereFail = await work.whereDoTheyWork("who?");
    console.log(whereFail);
  } catch (e) {
    console.log(e);
  }
  // getPersonById. should return Madonna Raft is the hacker!
  try {
    const hackerPass = await work.findTheHacker("2.3.234.240");
    console.log(hackerPass);
  } catch (e) {
    console.log(e);
  }
  // should throw
  try {
    const hackerFail = await work.findTheHacker();
    console.log(hackerFail);
  } catch (e) {
    console.log(e);
  }
}

// Run it
main();
