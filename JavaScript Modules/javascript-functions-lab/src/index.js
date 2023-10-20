
document.getElementById("app").innerHTML = `
<h1> JavaScript Functions Lab</h1>
<div>
  JavaScript Functions Lab
</div>
`;

/**
 * ALAB 308H.5.1 - JavaScript Functions
 * Author: Michael Oroyo
 */

// 1 Max of two numbers
function maxOfTwoNumbers(x, y) {
  return x >= y ? x : y;
}

console.log("Max Num is: ", maxOfTwoNumbers(3, 5));

// 2 Max of three numbers
const maxOfThree = function (x, y, z) {
  if (x >= y) {
    return x;
  } else if (y >= z) {
    return y;
  } else {
    return z;
  }
};

console.log("Max of the three: ", maxOfThree(9.5, 7.5, 7));

// 3
const isVowel = ["a", "e", "i", "o", "u"];
// 3i
const isCharAVowel = (letter) => {
  return isVowel.indexOf(letter) !== -1;
};

console.log("Is the char a vowel: ", isCharAVowel("u"));
// 3ii
console.log("Is the letter a vowel? ", isVowel.includes("p"));

// 3iii
function isItAVowel(letter) {
  // var vowel = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < isVowel.length; i++) {
    if (isVowel[i] === letter) {
      return true;
    }
  }
  return false;
}

console.log("Is the letter a vowel? ", isItAVowel("o"));

// 4 Sum of array elements
const sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log("Sum of array elements: ", sumArray([2, 4, 5]));

// 5 Product of array elements
function multiplyArray(arr) {
  let prod = 1;
  for (const i of arr) {
    prod *= i;
  }
  return prod;
}

console.log("Product of array elements:", multiplyArray([2, 4, 5]));

// 6 Numbers of arguments
const numArgs = function (...args) {
  return args.length;
};

console.log("Numbers of arguments:", numArgs);

// 7 Reverse string
function reverseString(revStr) {
  let newString = "";
  for (let i = revStr.length - 1; i >= 0; i--) {
    newString += revStr[i];
  }
  return newString;
}

console.log("Reversed string:", reverseString("rockstar"));

// 8 Length of the longest string in the array
const longestStringInArray = (arr) => {
  if (arr.length === 0) {
    return;
  }

  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      const strLength = arr[i].length;
      if (strLength > maxLength) {
        maxLength = strLength;
      }
    }
  }
  return maxLength;
};

// Example usage:
const strings = ["apple", "mango", "pineapple", "date"];
const longestLength = longestStringInArray(strings);
console.log(`The length of the longest string is: ${longestLength}`);

// 9 Strings longer than a number of characters
function stringsLongerThan(arr, n) {
  if (arr.length === 0) {
    return;
  }

  // n = 5;
  let arrayOfLongerStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      const strLen = arr[i].length;
      if (strLen > n) {
        arrayOfLongerStrings.push(arr[i]);
      }
    }
  }

  return arrayOfLongerStrings;
}

// Example usage:
const stringy = ["apple", "banana", "pineapple", "date"];
const greetings = ["say", "hello", "in", "the", "morning"];
const longestStringArray = stringsLongerThan(greetings, 3);
console.log("String longer than 3 characters is: ", longestStringArray);

// 10 Add list of numbers
const addList = function (...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((total, number) => total + number, 0);
};

// Example usage:
console.log("Sum of the args:", addList(1, 2, 3)); // Output: 6
console.log("Sum of the args:", addList(5, 10, 15, 20)); // Output: 50
console.log("Sum of the args:", addList()); // Output: 0
