let marvel = ["ironMan", 'blackPanther', "spiderMan"]
let dc = ["superMan", "batMan", 'flash']

marvel.push(dc)
console.log(marvel);  
/* [
    'ironMan',
    'blackPanther',
    'spiderMan',
    [ 'superMan', 'batMan', 'flash' ]
  ] */
  console.log(marvel[3]); //[ 'superMan', 'batMan', 'flash' ]
  console.log(marvel[3][1]); // batMan

// Push Method add elements to the existing array
//Concat Method returns a new array

marvel = ["ironMan", 'blackPanther', "spiderMan"]
dc = ["superMan", "batMan", 'flash']
allHeroes = marvel.concat(dc)
console.log(allHeroes);

//Spread Operator (... => is a spread operator)
let arr1 = [0, 1, 2, 3, 4]
let arr2 = [5, 6, 7, 8, 9]
let arr3 = [10, 11, 12, 13, 14]
arr123 = [...arr1, ...arr2, ...arr3]
console.log(arr123);

//flat method converts all the inner arrays into a single array given the depth
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //depth = 3
const newAnotherArray = anotherArray.flat(1) // depth = 1
console.log(newAnotherArray); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const newAnotherArray2 = anotherArray.flat(Infinity) // depth is identified by compiler/interpretor
console.log(newAnotherArray2); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("RohanJajee")); // false
console.log(Array.from("RohanJajee")); //[ 'R', 'o', 'h', 'a', 'n', 'J', 'a', 'j','e', 'e' ]

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));
