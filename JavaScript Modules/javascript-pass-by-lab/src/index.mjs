
document.getElementById("app").innerHTML = `
<h1>JavaScript Pass by Lab</h1>
<div>
  <h3>Data For the Tasks</h3>
  <pre>
  const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
  }
  
  const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
  }
  </pre>
</div>
`;
// Data
const personOne = {
  name: {
      first: 'Timmy',
      last: 'Timtim'
  },
  age: 30,
  location: {
      city: 'New York',
      state: 'New York',
      zip: 10001
  }
}

const personTwo = {
  name: {
      first: 'Julie',
      last: 'July'
  },
  age: 28,
  location: {
      city: 'Albany',
      state: 'New York',
      zip: 12201
  }
}

// Task 1
/***
 * People move location frequently. Create a new function moveLocation().
 * moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
 * The location object will have the properties city, state, and zip.
 * The function should change the city, state, and zip properties of the person to match those of the new location.
 * Test your function by using the following code. Does personTwo now live in Rochester? (They should.)
 * 
 */

function moveLocation(person, newLocation) {
  person.location.city = newLocation.city;
  person.location.state = newLocation.state;
  person.location.zip = newLocation.zip;
}

const nLoc = {
  city: 'Rochester',
  state: 'New York',
  zip: 14604
}

moveLocation(personTwo, nLoc);

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log(personTwo.location.city); // This should now print 'Rochester'

/** 2
 * Julie and Timmy have gotten married! 
 * Since they'll be living together, we should give them the same location. 
 * However, since they'll be living together forever, 
 * let's save ourselves the hassle of updating both of their locations every time they move.
 * Set Julie's location to Timmy's location by reference.
 * Test this new link by using the following code, 
 * which utilizes our already-completed moveLocation() function with 
 * no changes necessary. Do both people now live in California? (They both should.)
 */

const nLoc1 = {
  city: 'Mountain View',
  state: 'California',
  zip: 94035
}
// Set Timmy's location.
moveLocation(personOne, nLoc1);
// Set Julie's location to Timmy's location by reference.
personTwo.location = personOne.location;

console.log(`${personOne.name.first} Location: `, personOne.location)
console.log(`${personTwo.name.first} Location: `, personTwo.location)


/**
 * 3 
 */
const personThree = {
  name: {},
  age: "",
  location: {}
};

// Set personThree.name.first to whatever you'd like
personThree.name.first = "Vanessa";
// personThree.name.last to a hyphenated combination of personOne and personTwo's last names.
personThree.name.last = `${personOne.name.last}-${personTwo.name.last}`;
console.log("Person Three Fullname:", personThree.name.first,personThree.name.last);
// Give personThree an age of 0.
personThree.age = 0;
console.log("PersonThree age:", personThree.age);
// Set personThree's location to that of their parents, 
// by reference so that the baby stays with its family.
personThree.location = personOne.location;
console.log("PersonThree location:", personThree.location);
// JSON.stringify to log the personThree
console.log("PersonThree :", JSON.stringify(personThree));


/**
 * 4 
 */
// Increment everyone's age values by 20.
personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

console.log(" ")
console.log("--------------------------SOLUTION 4-------------------------- ")
console.log(`
  PersonOne's age: ${personOne.age},
  PersonTwo's age: ${personTwo.age},
  PersonThree's age: ${personThree.age}
  `
)

// Create a copy of personThree's location that 
// breaks the reference to the current location object,
const personThreeNewLoc = Object.assign({}, personThree.location);
// Set personThree's location to the copy
personThree.location = personThreeNewLoc; // <-- breaks reference to current location object
console.log("PersonThree new Location variable:", personThreeNewLoc);

/** 
 * Test your code by having personThree moveLocation() somewhere of your * * 
 *  choosing. Does this change the locations of personOne or personTwo? (It * * 
 * shouldn't.)
*/
const personThreeNewReside = {
  city: 'Sacremento',
  state: 'California',
  zip: 95899
}
moveLocation(personThree, personThreeNewReside);
console.log(" ")

// PersonThree updated Data
console.log("PersonThree updated data :", JSON.stringify(personThree));

// PersonOne & PersonTwo data
console.log(`${personOne.name.first} Location: `, personOne.location)
console.log(`${personTwo.name.first} Location: `, personTwo.location)


/** 
** 5
**/
// Increment everyone's age values by 300.
personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;

console.log(" ")
console.log("--------------------------SOLUTION 5-------------------------- ")
console.log(`
  PersonOne's Immortality age: ${personOne.age},
  PersonTwo's Immortality age: ${personTwo.age},
  PersonThree's Immortality age: ${personThree.age}
  `
)
// Create a new function clonePerson() that accepts one of our person objects and returns a deep copy of them with age set to 0.
function clonePerson(person) {
  // Use object spreading to create a shallow copy of the person
  const clonedPerson = { ...person };

  // Create a deep copy of the name and location objects
  clonedPerson.name = { ...person.name };
  clonedPerson.location = { ...person.location };

  // Set the age to 0 for the cloned person
  clonedPerson.age = 0;

  return clonedPerson;
}

const deepCloneOfPersonOne = clonePerson(personOne);

console.log("Clone One",deepCloneOfPersonOne); // This will be a deep copy of personOne with age set to 0

// Several independent persons clones
const deepCloneOfPersonTwo = clonePerson(personOne);
const deepCloneOfPersonThree = clonePerson(personOne);
const deepCloneOfPersonFour = clonePerson(personOne);
console.log("Clone Two",deepCloneOfPersonTwo); 
console.log("Clone Three",deepCloneOfPersonThree); 
console.log("Clone Four",deepCloneOfPersonFour);
console.log(" ")

const deepCloneOfPersonOneReside = {
  city: 'Napa',
  state: 'California',
  zip: 95899
}
const deepCloneOfPersonTwoReside = {
  city: 'LA',
  state: 'California',
  zip: 95899
}
const deepCloneOfPersonThreeReside = {
  city: 'Santa Fe',
  state: 'California',
  zip: 95899
}
const deepCloneOfPersonFourReside = {
  city: 'Santa Monica',
  state: 'California',
  zip: 95899
}

// Changing clone person locations
moveLocation(deepCloneOfPersonOne, deepCloneOfPersonOneReside);
moveLocation(deepCloneOfPersonTwo, deepCloneOfPersonTwoReside);
moveLocation(deepCloneOfPersonThree, deepCloneOfPersonThreeReside);
moveLocation(deepCloneOfPersonFour, deepCloneOfPersonFourReside);
console.log(" ")
// Logging new loacations
console.log("Deep Clone Person One data:", deepCloneOfPersonOne);
console.log("Deep Clone Person Two data:", deepCloneOfPersonTwo);
console.log("Deep Clone Person Three data:", deepCloneOfPersonThree);
console.log("Deep Clone Person Four data:", deepCloneOfPersonFour);
console.log(" ")
// Check the age values of your original persons to make sure you did not accidentally set them to 0!
console.log("PersonOne age:", personOne.age);
console.log("PersonTwo age:", personTwo.age);
console.log("PersonThree age:", personThree.age);




/** *
* The hive mind has taken over... Create a new object called thoughts and give it some properties.
*/
console.log(" ")
console.log("--------------------------SOLUTION 6-------------------------- ")
// Create a new object called thoughts and give it some properties.
// Create a thoughts object
const thoughts = {
    happiness: 'Content',
    dreams: 'Ambitious',
    mood: 'Calm'
};

// Assign thoughts to personOne and its clone by reference
personOne.thoughts = thoughts;
const clonedPersonOne = clonePerson(personOne);
clonedPersonOne.thoughts = thoughts;

// Assign thoughts to personTwo and its clone by reference
personTwo.thoughts = thoughts;
const clonedPersonTwo = clonePerson(personTwo);
clonedPersonTwo.thoughts = thoughts;

// Testing code by modifying everyone's thoughts with a single line of code
thoughts.mood = 'Excited';

console.log(personOne.thoughts.mood); // Should print 'Excited'
console.log(clonedPersonOne.thoughts.mood); // Should print 'Excited'
console.log(personTwo.thoughts.mood); // Should print 'Excited'
console.log(clonedPersonTwo.thoughts.mood); // Should print 'Excited'

