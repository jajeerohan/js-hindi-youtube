//Dates

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getDate());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

// Months in javaScript starts from 0 i,e 0 is January
let myCreatedDate = new Date(2023, 8, 17, 10, 23)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("2023-8-17")  //yyyy-mm-dd
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-01-2023")  //mm-dd-yyyy
console.log(myCreatedDate2);

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp.toLocaleString());  //returns in milliseconds
console.log(myCreatedDate2.getDate());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default', {
    weekday: "long", hour:"numeric"
}))


