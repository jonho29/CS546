/**
 * Calculates the sum the squares of all the numbers in the given array
 * @param {Array} arr Input array
 * @returns {number} Sum of squares. Invalid input returns -1
 */
const questionOne = function questionOne(arr) {
    // Ensures the input is an array and that it contains elements. Use instanceof for complex types.
    if(arr instanceof Array) {
        if(arr.length) {
            let sum = arr[0] * arr[0];
            for(let i = 1; i < arr.length; i++) {
                sum += arr[i] * arr[i];
            }
            return sum;
        }
        else {
            return 0;
        }
    }
    else {
        return -1;
    }
}

/**
 * Calculates the Fibonacci value that corresponds to the index given
 * @param {number} index Fibonacci index
 * @returns {number} Fibonacci value. Invalid input returns -1
 */
const questionTwo = function questionTwo(index) {
    // Ensures the input is a number. Use typeof for primitive types.
    if(typeof index === 'number') {
        // Recursive solution: declare base cases
        if(index <= 0) {
            return 0;
        }
        if(index === 1 || index === 2) {
            return 1;
        }
        else {
            return questionTwo(index - 1) + questionTwo(index - 2);
        }
    }
    else {
        return -1;
    }
}

/**
 * Returns the number of vowels in the given string
 * @param {string} str String to be checked
 * @returns {number} Number of vowels in the string. Invalid input returns -1
 */
const questionThree = function questionThree(str) {
    // Ensures the input is a string
    if (typeof str === 'string') { 
        // Learned about regular expressions for this hw :)
        let vowels = str.match(/[aeiou]/gi);
        if(vowels) {
            return vowels.length;
        }
        return 0;
    }
    else {
        return -1;
    }
}

/**
 * Returns the factorial of the given number
 * @param {number} num Number to find the factorial of
 * @returns {number} Factorial of input
 */
const questionFour = function questionFour(num) {
    // Recursive solution. Base case of zero.
    if(typeof num === 'number' && num >= 0) {
        if (num == 0) {
            return 1;
        }
        return num * questionFour(num - 1);
    }
    else if (num < 0) {
        return NaN;
    }
    else {
        return -1;
    }
}

module.exports = {
    firstName: "Justin",
    lastName: "Westley",
    studentId: "10416230",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};