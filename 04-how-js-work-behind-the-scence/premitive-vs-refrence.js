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

// 3) Copying

const car = {
  color: "red",
  model: "BMW",
  cd: ['radio', 'dvd']
}

// Object.assign() not work with inner object (object inside object)
const copyingCar = Object.assign({}, car);

copyingCar.color = "Yello";

// Will affect in the main object "car" because Object.assign() not work with inner object (object inside object)
copyingCar.cd.push("tv");

console.log(car);
console.log(copyingCar);