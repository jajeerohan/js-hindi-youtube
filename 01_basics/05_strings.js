const name = "Rohan Jajee"
const repoCount = 10

console.log(name + repoCount )
console.log(`Hello my name is ${name} and repoCount is ${repoCount}`)

const gameName = new String("hiteshhc")
console.log(gameName)
console.log(gameName.__proto__)

console.log(gameName.charAt(3));
console.log(gameName.toUpperCase());
console.log(gameName)

const newString = gameName.substring(1, 5)  //negative indexing doesn't work for substring
console.log(newString);

const anotherString = gameName.slice(-8, -4)
console.log(anotherString)

const url = "https://hitesh.com/hitesh%20Choudhary"
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));



