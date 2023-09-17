// Singleton
// Object.create();

// Object Literals 

const mySym = Symbol("key1")
console.log(mySym);

const jsUser = {
    name : "Rohan",
    "full name" : "Rohan Jajee",  // cannot be accessed using dot, should be accessed using [""]
    [mySym] : "myKey1",  // to add symbols in objects first create a symbol and then add in onjects
    age : 23,
    location : "Hyderabad",
    email : "jajee@google.com",
    isLoggedIn : false,
    loggedInDays : ["Monday", "Saturday"]
}

// Object  can be accessed in 2 ways
// 1. using . -> dot
console.log(jsUser.name);  // Rohan
// console.log(jsUser."full name")  // gives error

// 2. using ["property_name"]
console.log(jsUser["name"]);  // Rohan
console.log(jsUser["full name"]) // Rohan Jajee

console.log(jsUser)
console.log(jsUser[mySym]); // myKey1

jsUser.age = 99
jsUser.email = "gmail.com"
// Object.freeze(jsUser) // freezes the object i,e the values cannot be changes once freeze is used on any object 
jsUser.age = 66
console.log(jsUser); // O/P is below Note : age 66 is not applied to object
/* {
  name: 'Rohan',
  'full name': 'Rohan Jajee',
  age: 99,
  location: 'Hyderabad',
  email: 'gmail.com',
  isLoggedIn: false,
  loggedInDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
} */ 

// Adding functions into objects
// Functions can also be stored in variables in javascript
jsUser.greeting = function() {
    console.log("Hello Greetings to all")
}

console.log(jsUser)
/* {
  name: 'Rohan',
  'full name': 'Rohan Jajee',
  age: 66,
  location: 'Hyderabad',
  email: 'gmail.com',
  isLoggedIn: false,
  loggedInDays: [ 'Monday', 'Saturday' ],
  greeting: [Function (anonymous)],
  [Symbol(key1)]: 'myKey1'
} */

console.log(jsUser.greeting) // [Function (anonymous)]
console.log(jsUser.greeting()) 
// Hello Greetings to all 
// undefined

jsUser.greetingTwo = function() {
    console.log(`Hello jsUser ${this["full name"]}`);
}

console.log(jsUser)
/* {
  name: 'Rohan',
  'full name': 'Rohan Jajee',
  age: 66,
  location: 'Hyderabad',
  email: 'gmail.com',
  isLoggedIn: false,
  loggedInDays: [ 'Monday', 'Saturday' ],
  greeting: [Function (anonymous)],
  greetingTwo: [Function (anonymous)],
  [Symbol(key1)]: 'myKey1'
} */

console.log(jsUser.greetingTwo); // [Function (anonymous)]
console.log(jsUser.greetingTwo()); 
// Hello jsUser Rohan Jajee
// undefined

