score = 100
console.log(score);

const balance = new Number(100.12345)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(3))  // number of fractional/decimal digits

const anotherNumber = 1234.21858769  
console.log(anotherNumber.toPrecision(3));
console.log(anotherNumber.toPrecision(4));
console.log(anotherNumber.toPrecision(5));
console.log(anotherNumber.toPrecision(6));  // priority gets to the numbers before decimal point

const hundreds = 10000000
console.log(hundreds.toLocaleString());  // US standards
console.log(hundreds.toLocaleString("en-IN"));  //Indian Standards

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

/* +++++++++++++++++++ MATHS ++++++++++++++++++ */
console.log(Math);
console.log(Math.abs(-3.984))
console.log(Math.round(9.45)); // 9
console.log(Math.round(9.55)); // 10
console.log(Math.ceil(123.4)); // 124
console.log(Math.floor(123.99)); // 123

//Other functions are min, max, etc

console.log(Math.random())  // always returns a number b/w 0 and 1
console.log((Math.random() * 10) + 1) // value should not be zero so added 1

// // Random Number between a range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

