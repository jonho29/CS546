const dictionary = require("./dictionary");

// Return definition of programming
try {
  console.log(dictionary.lookupDefinition("programming"));
} catch (error) {
  console.log(error);
}

// Return definition of charisma
try {
  console.log(dictionary.lookupDefinition("charisma"));
} catch (error) {
  console.log(error);
}

// Return not in the dictionary
try {
  console.log(dictionary.lookupDefinition(" "));
} catch (error) {
  console.log(error);
}

// Return invalid input
try {
  console.log(dictionary.lookupDefinition(123));
} catch (error) {
  console.log(error);
}

// Return sleuth
try {
  console.log(
    dictionary.getWord("To act as a detective : search for information")
  );
} catch (error) {
  console.log(error);
}

// Return foray
try {
  console.log(
    dictionary.getWord(
      "A sudden or irregular invasion or attack for war or spoils : raid"
    )
  );
} catch (error) {
  console.log(error);
}

// Return word not found
try {
  console.log(dictionary.getWord("no"));
} catch (error) {
  console.log(error);
}

// Return invalid input
try {
  console.log(dictionary.getWord(321));
} catch (error) {
  console.log(error);
}
