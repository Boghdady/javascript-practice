// 1) Premitive 
let age = 26;
let oldAge = age;
age = 30;

console.log("age: ", age);
console.log("old age: ", oldAge);

// 2) Refrence
const oldAddress = {
  country: "Egypt",
  city: "ismalia"
}

// will refer to the same address in the heap memeory
// the address in stack will change but in the heap they have the same address
const currentAddress = oldAddress;

currentAddress.country = "Germany";
currentAddress.city = "Berlin";

console.log("Old address: ", oldAddress);
console.log("Current address", currentAddress);