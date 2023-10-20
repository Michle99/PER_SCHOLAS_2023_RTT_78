/**
 * Author: Michael Oroyo
 * Assigment: ALAB 308H.5.2 - Array Methods and Callbacks
 * 
 */


// Arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

/** Array Callback methods */ 
/** Every */ 
// 1
const greaterThanZero = nums.every(currVal => currVal >= 0);

console.log(
  "Are array elements greater than 0: ",
  greaterThanZero
);

// 2  Determine if every word shorter than 8 characters.
const lessThanEightChars = panagram.every(charNums => charNums.length < 8);

console.log(
  "Are array elements less than 8: ",
  lessThanEightChars
);

/** Filter */
// 1
const arrNumsLessThanFour = nums.filter((i) => i < 4);
console.log("Array Numbers < 4: ", arrNumsLessThanFour);
// 2. words that have an even length
const evenLengthWords = panagram.filter((word) => word.length % 2 === 0);
console.log("Even length words: ", evenLengthWords);

/** Find */
// 1. Find the first value divisible by 5.
console.log("First Value divisible by 5: ", 
    nums.find((element) => element % 5 === 0)
)

// 2 first word that is longer than 5 characters.
console.log("first word that is longer than 5 characters: ", 
    panagram.find(charElement => charElement.length > 5)
)

// Find Index
// 1. Find the index of the first number that is divisible by 3.
console.log("Index of first number divisible by 3: ",
    nums.findIndex(numElement => numElement % 3 === 0)
)

// 2 Find the index of the first word that is less than 2 characters long.
console.log("Index of the words < 2 characters: ",
  panagram.findIndex(indexLongerChars => indexLongerChars.length < 2)
)

// For Each
// 1 Log each value of the array multiplied by 3.
nums.forEach(numMultiplied => {
    const result =  numMultiplied * 3;
    console.log(`Array value-${numMultiplied} multiplied by 3: `, result)
})
console.log(" ");
console.log("Original nums array: ", nums);
// 2. Log each word with an exclamation point at the end of it.
panagram.forEach(wordExclamined => {
    const exclaminedWords = wordExclamined + "!";
    console.log("Each word is exclaimed: ", exclaminedWords)
})

console.log("---------------------------------------------------------------");
/** Thought Question */
/**
 * When you use the forEach method to iterate over an array and 
 * perform operations on its elements, it doesn't change the original array. 
 * The original array remains unchanged.

 *   You can store the values from a forEach method in a new array 
 *   by creating an empty array and pushing the modified values into it.
 */


// Map
/**
 *   Map
 *   Make a new array of each number multiplied by 100.
 *   Make a new array of all of the words in all uppercase.
 *
 *   Thought Questions
 *   What happened to the original array? 
     Original arrays remains unchanged by the map method.
 *   Can you store the values from a map method in a new array?
     yes, the tasks below demonstrated this.
 */

const numHundredMultiplied = [];
nums.map(hunderedMultiplied => {
    const multipliedValues = hunderedMultiplied * 100;
    console.log(`Array value-${hunderedMultiplied} multiplied by 100:`, multipliedValues);
    numHundredMultiplied.push(multipliedValues);
});
console.log("Original nums array: ", nums);
console.log(" ");

const upperCaseWords = [];
panagram.map(notLowerCaseWords => {
    const uppercaseValues = notLowerCaseWords.toUpperCase();
    console.log(`Array value-'${notLowerCaseWords}' to uppercase: `, uppercaseValues);
    upperCaseWords.push(uppercaseValues);
    // console.log("uppercase Words inside map: ", upperCaseWords);
});

console.log(" ");

console.log("uppercase Words outside map: ", upperCaseWords);
console.log("Original panagram array: ", panagram);

/** Some */
/**
 * Some
    Find out if some numbers are divisible by 7.
    Find out if some words have the letter "a" in them.
*/
console.log("---------------------------------------------------------------");

const divisibleBySeven = nums.some(someDivisible => someDivisible % 7 === 0)
console.log("Some values divisible by 7: ", divisibleBySeven)

const wordsWithLetterA = panagram.some(aLetter => aLetter.includes("a"));
console.log("Words with 'a' in them: ", wordsWithLetterA); // lazy

console.log("---------------------------------------------------------------");
/** Optional */
/** Reduce
 * Add all of the numbers in the array together using the reduce method.
 * Concatenate all the words using reduce.
 *
 *  Thought Questions: What happened to the original array?
 * The original array, panagram or nums in this case, remains unchanged when    * the reduce method or any other array method like map, filter, or forEach. 
 * These methods do not modify the original array; 
 * they return a new value or array based on the operations specified.
 */

const reducedNums = nums.reduce((summedArrayEl, currValue) => summedArrayEl + currValue)
console.log("Reduced nums array by adding: ", reducedNums);
console.log(" ");

const concatenatedWords = panagram.reduce((chainedWords, currWord) => chainedWords+ " " + currWord)
console.log("Concatenated all words: ", concatenatedWords)
console.log("---------------------------------------------------------------");

/** Sort */
/**
 *   Sort
 *   Try to sort without any arguments, do you get what you'd expect with the   *   numbers array?
 *   Try to sort without any arguments, do you get what you'd expect with the   *   words array?
 *   Sort the numbers in ascending order.
 *   Sort the numbers in descending order.
 *   Sort the words in ascending order.
 *   Sort the words in descending order.
 *   Thought Questions

 *   What happened to the original array? The original array is modified by     *    the sort method.
 */
// Try to sort without any arguments
const sortedNumsNoArgs = nums.sort()
console.log("Sorted nums w/o arguments: ", sortedNumsNoArgs);
console.log(" ");
console.log("Original nums : ", nums); // nums array is modified by sort()
console.log("-------------- ");
const sortedWordsNoArgs = panagram.sort()
console.log("Sorted panagram w/o arguments: ", sortedWordsNoArgs);
console.log("Original panagram : ", panagram); // panagram array is modified 
console.log(" ");

// Sort the numbers in ascending order & descending order.
const ascendingNumSorted = nums.sort((a, b) => a - b);
console.log("Sorted nums in ascending order: ", ascendingNumSorted);

const descendingNumSorted = nums.sort((a, b) => b - a);
console.log("Sorted nums in descending order: ", descendingNumSorted);


// Sort the panagram in ascending order & descending order.
const ascendingWordsSorted = panagram.sort((a, b) => a.localeCompare(b));
console.log("Sorted panagrams in ascending order: ", ascendingWordsSorted);

const descendingWordsSorted = panagram.sort((a, b) => b.localeCompare(a));
console.log("Sorted panagrams in descending order: ", descendingWordsSorted);

console.log("---------------------------------------------------------------");

/***
 * isPanagram
 * Using the following array, test whether each letter a-z (case insensitive) is  * used at least once.
 * Pangram string contains all the character of the alphabets ignoring the case   * of the alphabets.
 */

// Panagram strings
function isAlphabetUsedToo(words) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const wordString = words.join('').toLowerCase(); // Combine all words and make them lowercase

    for (let letter of alphabet) {
      if (wordString.indexOf(letter) === -1) {
        return false;
      }
    }

    return true;
}

const isAlphabetUsedInPanagram = isAlphabetUsedToo(panagram);
console.log("Is each letter from 'a' to 'z' used at least once:", isAlphabetUsedInPanagram);

console.log("-----------------------------------------------------------------");



/**
 * Working with data
 * Using the array of objects below:

 * Filter for products with a price that is less than 10.
 * Sort alphabetically by product name.
 */

const products = [
    {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
    },
    {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
    },
    {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
    },
    {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
    },
    {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
    },
    {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
    },
    {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
    },
    {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
    },
    {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
    },
    {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
    },
    {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
    },
    {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
    },
    {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
    },
    {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
    },
    {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
    },
    {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
    },
    {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
    },
    {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
    },
    {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
    },
]

// Filter for products with a price that is less than 10.
const filteredPrice = products.filter((product) => product.price < 10);
console.log("Product prices less than 10: ", filteredPrice);

console.log("-----------------------------------------------------------------");

// Sort alphabetically by product name.
const sortedProdName = products.sort((a, b) => a.name.localeCompare(b.name));
console.log("Product names sorted alphabetically: ", sortedProdName);