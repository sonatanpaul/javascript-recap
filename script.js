// // variable
// let finalName = "Sonatan Paul";

// // conditional
// let isGood = true;

// if (isGood) {
//   //   console.log("He is a good Man");
// } else {
//   //   console.log("He is a bad Man");
// }

// // Array
// const number = [3, 5, 6, 8, 4, 5, 5];
// // console.log(number);
// let numberValue = number[2];
// // console.log(numberValue);

// // Object

// const name = {
//   fullName: "Sonatan Paul",
//   age: 25,
//   isStudent: true,
// };
// // console.log(student);

// const nameFull = name.fullName;
// const age = name["age"];
// // console.log(nameFull);
// // console.log(age);

// // function
// function result() {
//   //   console.log("hello world");
// }
// result();

// // parametar function
// function number(a, b) {
//   const result = a + b;
//   return result;
// }
// number(5, 6);

// // arrow function
// const arrowFunction = () => {
//   //   console.log("Hello World");
// };

// // loop
// for (let i = 0; (i) => 5; i++) {
//   //   console.log("i love you");
// }

// // spread operator
// const num = [2, 3, 6, 45, 6];
// // console.log(num);
// const newNum = [...num];
// // console.log(newNum);

// // template string
// const fullName = "Sonatan Paul";
// const age = 25;
// const result = `Hi there, my name is ${fullName} and my age is ${age} , Thank you`;
// // console.log(result);

// // array method

const phones = [
  { name: "samsung", price: 54245, color: "blue" },
  { name: "iphone", price: 54245, color: "blue" },
  { name: "walton", price: 54245, color: "blue" },
  { name: "iphone", price: 54245, color: "blue" },
  { name: "oppo", price: 54245, color: "blue" },
  { name: "iphone", price: 54245, color: "blue" },
];

// array map
// const phone = phones.map((phone) => phone.color);
// console.log(phone);

// phones.forEach((phone) => console.log(phone.price));

// const phoneFind = phones.find((phone) => phone.name.includes("on"));
// console.log(phoneFind);

const phoneFilter = phones.filter((phone) => phone.name === "iphone");
console.log(phoneFilter);
