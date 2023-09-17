console.log(2 > 3)
console.log(2 >= 3)
console.log(2 < 3)
console.log(2 != 3)
console.log(2 == 3)

console.log("2" > 1);  // true
console.log("02" > 1); // true

// Never do these comparisions
console.log(null == 0)  //false
console.log(null > 0)  //false
console.log(null >= 0) //true

console.log(undefined == 0) //false
console.log(undefined > 0)  //false
console.log(undefined >= 0) //false

// ===  ->  strict check(compares both the value and datatype)