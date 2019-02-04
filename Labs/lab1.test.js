const lab1 = require("./lab1");

console.log("Test case 1.1: " + lab1.questionOne([1, 2, 3]));
// should output 14
console.log("Test case 1.2: " + lab1.questionOne([]));
// should output 0
console.log("Test case 1.3: " + lab1.questionOne("I'm not an array!"));
// should output -1 (invald input)
console.log("Test case 1.4: " + lab1.questionOne([-2, -4, -6]));
// should output 56
console.log("Test case 1.5: " + lab1.questionOne([1, 3, 5, 7, 10, -1, -6]));
// should output 221

console.log("Test case 2.1: " + lab1.questionTwo(7));
// should output 13
console.log("Test case 2.2: " + lab1.questionTwo(-3));
// should output 0
console.log("Test case 2.3: " + lab1.questionTwo(0));
// should output 0
console.log("Test case 2.4: " + lab1.questionTwo(1));
// should output 1
console.log("Test case 2.5: " + lab1.questionTwo(27));
// should output 196418

console.log("Test case 3.1: " + lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere."));
// should output 196
console.log("Test case 3.2: " + lab1.questionThree(1289737));
// should output -1 (invalid input)
console.log("Test case 3.3: " + lab1.questionThree("Hvn't ny vwls"));
// should output 0
console.log("Test case 3.4: " + lab1.questionThree(""));
// should output 0
console.log("Test case 3.5: " + lab1.questionThree("I can't think of any other good test cases. Actually, this one is good since it has some capital vowels."));
// should output 32

console.log("Test case 4.1: " + lab1.questionFour(10));
// should output 3628800
console.log("Test case 4.2: " + lab1.questionFour(-4));
// should output NaN
console.log("Test case 4.3: " + lab1.questionFour(0));
// should output 1
console.log("Test case 4.4: " + lab1.questionFour(13));
// should output 6227020800
console.log("Test case 4.5: " + lab1.questionFour([17, 21, 3]));
// should output -1 (invalid input)