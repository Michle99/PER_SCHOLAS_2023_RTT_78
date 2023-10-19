
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
  
  console.log(`
    PersonOne's age: ${personOne.age},
    PersonTwo's age: ${personTwo.age},
    PersonThree's age: ${personThree.age}
    `
  )
  
  // Create a copy of personThree's location that 
  // breaks the reference to the current location object,
  const personThreeNewLoc = Object.assign({}, personThree.location);
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


  function computeArea(width, height) {
    let areaOfRect = width * height;
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${areaOfRect} square units.`;
  }
  
  console.log(computeArea(12, 12));
  console.log(computeArea(12, 10));
  
  let planetHasWater = function(planet) {
     const lowerCasePlanet = planet.toLowerCase();

    //  if (lowerCasePlanet === "earth" || lowerCasePlanet ===  "mars") {
    //   return true;
    //  } else {
    //   return false
    //  }
    return lowerCasePlanet === "earth" || lowerCasePlanet ===  "mars";
  }
  
  console.log(planetHasWater("MARS"));
  console.log(planetHasWater("EARTH"));
  console.log(planetHasWater("Jupiter"));