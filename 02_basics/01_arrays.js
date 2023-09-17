//arrays

const myArr = [0, 1, 2, 3, 4]
console.log(myArr);
const myHeroes = new Array(0, 1, 2, 3, 4, 5)
console.log(myHeroes[1]);

myArr.push(5)
console.log(myArr);

myArr.pop()


myArr.unshift(100) // adds 100 to the 0th position
myArr.shift() // removes 0th element from the array

console.log(myArr.includes(5)) // true
console.log(myArr.indexOf(3)); // 3
console.log(myArr.indexOf(199)); // -1 as the element 199 is not present in the array

console.log(myArr);

let newArr = myArr.join() // here 999 is appended to all the elements of the array 
console.log(newArr); // O/P -> 0,1,2,3,4
console.log(typeof(newArr)); // join methods converts the array elements to a string which is comma separated

// slice(gives the range as the o/p and excludes ending range)  
// splice(gives the range as the o/p and includes ending range along with permanently deleteing the values of the range defined in the original array)
let veggies = ["tomato", "carrot", "raddish", "cucumber", "brinjol", "ladyfinger"]
console.log("Veggies", veggies); // O/P -> Veggies [ 'tomato', 'carrot', 'raddish', 'cucumber', 'brinjol', 'ladyfinger' ]

sliceVeggies = veggies.slice(1, 3)
console.log("sliceVeggies", sliceVeggies); // O/P -> sliceVeggies [ 'carrot', 'raddish' ] 

spliceVeggies = veggies.splice(1, 3) 
console.log("spliceVeggies", spliceVeggies); // O/P -> spliceVeggies [ 'carrot', 'raddish', 'cucumber' ]
console.log("veggies", veggies); // O/P -> veggies [ 'tomato', 'brinjol', 'ladyfinger' ]

