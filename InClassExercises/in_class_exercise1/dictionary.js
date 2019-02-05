const words = {
  programming: "The action or process of writing computer programs.",
  charisma:
    "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
  sleuth: "To act as a detective : search for information",
  foray: "A sudden or irregular invasion or attack for war or spoils : raid",
  adjudicate:
    "to make an official decision about who is right in (a dispute) : to settle judicially"
};

/**
 * Checks if input is a valid string
 * @param {string} str
 */
function checkInput(str) {
  // First ensures the type is a string, second ensures it is not an empty string (empty string evaluates to 0)
  if (typeof str !== "string" || !isNaN(str)) {
    throw `${str} is not a valid input`;
  }
}

/**
 * Looks up definition of given word
 * @param {string} str Word you are looking for definition of
 * @return {string} Defintion of input str
 */
function lookupDefinition(str) {
  checkInput(str);
  if (words[str.toLowerCase()] == undefined) {
    throw `${str} is not in the dictionary`;
  }
  return words[str.toLowerCase()].charAt(0).toUpperCase() + words[str.toLowerCase()].slice(1);
}

/**
 * Returns the word for the given definition
 * @param {string} str Definition you are looking for the word of
 * @return {string} Word of input str definition
 */
function getWord(str) {
  checkInput(str);
  //gets a key from its value, loops thru all until it finds, or gives undefined
  let theWord = Object.keys(words).find(key => words[key] === str);
  if (theWord === undefined) {
    throw "Word not found";
  }
  return theWord.charAt(0).toUpperCase() + theWord.slice(1);
}

module.exports = {
  lookupDefinition,
  getWord
};
