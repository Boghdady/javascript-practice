'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // es6 enhanced write function inside object literal
  orderDelivery({ time, starterIndex, mainIndex = 2 }) {
    console.log(time, this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ------------------Destructuring Arrays-------------------------//
console.log('---------Destructuring Arrays------------');
// 1) Destructuring
let [itailia, pizzeria, , organic] = restaurant.categories;
console.log(itailia, pizzeria, organic);

// 2) Switch values
let [first, second] = restaurant.categories;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);

// 3) Nested Array
const arr = [1, 2, ['a', 'b']];
const [num1, , [a, b]] = arr;
console.log(num1, a, b);

// 4) Defualt values
let arr2 = [1, 2];
let [x, y, z = 10] = arr2;
console.log(x, y, z);

// 5) Recieve two values from a function
const [starterMenueItem, mainMenueItem] = restaurant.order(2, 1);
console.log(starterMenueItem, mainMenueItem);

// ------------------Destructuring Objects-------------------------//
console.log('---------Destructuring Objects------------');
// 1) Normal destructuring
const { name, categories, location: restaurantLocation } = restaurant;

console.log(name, categories, restaurantLocation);

// 2) Defual values
const {
  name: restaurantName,
  categories: restaurantVCategories,
  menu = [],
} = restaurant;

console.log(restaurantName, restaurantVCategories, menu);

// 3) Mutating || Switch values
let a1 = 10;
let b1 = 20;

const obj = {
  a1: 4,
  b1: 5,
};

({ a1, b1 } = obj);
console.log(a1, b1);

// 4) Nested Object
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

// 5) Pass object to funcation args

restaurant.orderDelivery({
  time: '2.00 pm',
  starterIndex: 2,
});

// ------------------Spread Operators-------------------------//
// Goal: 1) build new array , 2) path multiple variables to function params
console.log('---------Spread Operators------------');

// 1) Join 2 arrays or more
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

// 2) Copy array
const copyMenu = ['checken', ...fullMenu];
console.log(copyMenu);

// 3) Function args
function sum(num1, num2) {
  console.log(num1 + num2);
}

const numbers = [3, 4];
sum(...numbers);

// Copy object (shallow coping)
const copyRestuarant = {
  ...restaurant,
};
console.log(copyRestuarant);

// ------------------Rest Operators-------------------------//
console.log('---------Rest Operators------------');

// SPREAD: because of on right of "="
const arrSp = [1, 2, ...[3, 4]];
// REST: because of on right of "="
const [firstEl, secondEl, ...others] = [20, 30, 40, 50];
console.log(firstEl, secondEl, others);

// 2) objects

const { fri, ...otherDays } = restaurant.openingHours;
console.log(fri, otherDays);

// 3) funcation
// REST
function add(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
}

add(1, 3, 4);
add(1, 4, 6, 2);
add(3, 5);
const numsArr = [2, 4, 2, 5, 2, 56, 2];
// SPREAD
add(...numsArr);

// ------------------Rest Operators-------------------------//
console.log('---------Circuiting------------');

// 1) || Operator
// Will return the first trully value if all is false will return the last false value
console.log('---------OR------------');

console.log(undefined || '' || 3);
console.log('' || null || false || 0 || undefined);

console.log('---------Nullish Operator------------');
// Special case (|| not good solution here)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// The best solution here is Nullish operators
// Nullish : null and undefined (not 0 or '')
const correctGuests = restaurant.numGuests ?? 10;
console.log(correctGuests);

// 2) && Operators
// Will return the first false value, if all values are false will return the last false value
console.log('---------&&------------');
console.log(3 && true && null && 4);
console.log(3 && true && 5);

// ------------------Arrays loops-------------------------//
console.log('---------Arrays loops------------');
// 1) for of loop
const menuArr = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuArr) console.log(item);

// Print index and value
for (const [index, value] of menuArr.entries())
  console.log(`${index + 1} : ${value}`);

// ------------------Chaining operator ".?"-----------------------//

console.log('--Mix chainning operator with Nullish operator--');
// "?." : if channing poroperty is not exist will retrun undefinded
const openHour = restaurant.openingHours?.open ?? 'close';

console.log(openHour);

// With arrays
const usersArr = [
  {
    name: 'Ahmed',
    email: 'ahmed@example.com',
  },
  {
    name: 'mohamed',
    email: 'mohamed@example.com',
  },
];

const firstUser = usersArr[0]?.name ?? 'Not Exist';
const thirdUser = usersArr[2]?.name ?? 'Not Exist';

console.log(firstUser);
console.log(thirdUser);

// With function
const userObj = {
  name: 'Ahmed',
  age: 30,
  setAddress() {
    return 'ismalia';
  },
};

const addr = userObj.setAddress?.() ?? 'No Address s';
const addr2 = userObj.setLocation?.() ?? 'No Location';
console.log(addr);
console.log(addr2);

// ------------------Objects loops-------------------------//
console.log('---------Objects loops------------');

const userObject = {
  name: 'Ahmed',
  age: 30,
  address: {
    country: 'Egypt',
    city: 'ismailia',
    street: '15B mazadat st',
  },
};

// 1) Print keys
for (const key of Object.keys(userObject)) console.log(key);

// 2) Print values
for (const value of Object.values(userObject)) console.log(value);

// 3) Print Entires (key + value)
for (const [key, value] of Object.entries(userObject)) {
  console.log(key, value);
  // {["name", "ahmed"], ["age", 30]}
  // console.log(`My name is ${name}, my age is ${age} and I
  // live in ${country} in ${city} city in street ${street}`);
}

// ------------------Set-------------------------//
console.log('---------Sets------------');

// Goal : Remove duplicate values in array
const stuff = ['waiter', 'waiter', 'manager', 'chef', 'chef'];
const positions = new Set(stuff);
console.log(positions);

// Convert sets to array (it's easy because set is iterable)
console.log([...positions]);

// Add elements & Remove elements
positions.add('HR');
positions.delete('manager');

// has element
console.log(positions.has('HR'));

// Looping at sets
for (const p of positions) console.log(p);

// ------------------Maps-------------------------//
console.log('---------Maps------------');
// Goal: Maps like object but the big difference is map can contain different keys type
const stringKey = 'name';
const numberKey = 12;
const boolKey = true;

const rest = new Map();

rest.set(stringKey, 'Ahmed');
rest.set(numberKey, {
  name: 'ahmed',
  age: 20,
});
rest.set(boolKey, ['a', 'b', 'c']);

// console.log(rest);
// console.log(rest.get(stringKey));
// console.log(rest.get(numberKey));
// console.log(rest.get(boolKey));

for (const item of rest) console.log(item);
for (const item of rest.values()) console.log(item);
for (const item of rest.keys()) console.log(item);

// ------------------String-------------------------//
console.log('---------Strings------------');
const companyName = 'Index Software Company Company';

// indexOf() lastIndexOf()
console.log(companyName.indexOf('o'));
console.log(companyName.lastIndexOf('o'));

// slice() ==> get last word in the statement
console.log(companyName.slice(companyName.lastIndexOf(' ')));

console.log(companyName.slice(companyName.indexOf(' ')));

// trim()
console.log('   hi ahmed boghdady    \n'.trim());

// toLowerCase() toUpperCase()
console.log(companyName.toLowerCase());
console.log(companyName.toUpperCase());

// replace() replaceAll()
console.log(companyName.replace('Software', 'Group'));
console.log(companyName.replaceAll('Company', 'Group'));

// includes()
console.log(companyName.includes('Index'));

// startWith endsWith()
console.log(companyName.startsWith('Index'));
console.log(companyName.endsWith('Company'));

// split()
console.log(companyName.split(' '));
// join()
const companyNameArr = companyName.split(' ');
console.log(companyNameArr.join(' '));
console.log(companyNameArr.join(','));

function captalizeName(name) {
  let nameArr3 = [];
  const nameArr2 = name.split(' ');
  for (const n of nameArr2) {
    nameArr3.push(n[0].toUpperCase() + n.slice(1));
  }
  return nameArr3.join(' ');
}

console.log(captalizeName('ahmed elsayed boghdady'));
console.log(captalizeName('index group comapny'));

function secureCreditCard(number) {
  const str = String(number);
  const lastFourDigits = str.slice(-4);
  const secureNumber = lastFourDigits.padStart(str.length, '*');
  console.log(secureNumber);
}

secureCreditCard(12345678912345);
secureCreditCard('983957891-0890835879823');
