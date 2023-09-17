//Converting to number
let score = "33"
console.log(typeof score)
console.log(typeof(score))
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log("valueInNumber = " ,valueInNumber) // 33

let x = "33abc"
console.log(typeof x)
console.log(typeof(x))
let y = Number(x)
console.log(typeof y)
console.log("y = ",y) // NaN

let a = null
console.log(typeof a)
console.log(typeof(a))
let b = Number(a)
console.log(typeof b)
console.log("b = ",b) // 0

let c
console.log(typeof c)
console.log(typeof(c))
let d = Number(c)
console.log(typeof d)
console.log("d = ", d) // Nan


let e = false  //true = 1 , false = 0
console.log(typeof e)
console.log(typeof(e))
let f = Number(e)
console.log(typeof f)
console.log("f = ",f) // 0

// "33" = 33
// "33abe" = Nan -> Not a Number
// true = 1, false = 0

// converting to Boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

// "" => false
// "redf" => true
// 1 => true, 0=> false

// conversion to String
let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(typeof(stringSomeNumber))
console.log(stringSomeNumber)

console.log("1" + 2)  // 12
console.log(1 + "2")  // 12
console.log("1" + 2 + 2)  //122
console.log(1 + 2 + "2")  //32

console.log(3 + 4 * 5 % 3);
console.log((3 + 4) * 5 % 3);

console.log(true)  // true
console.log(+true) // 1
console.log("")  // 
console.log(+"") // 0