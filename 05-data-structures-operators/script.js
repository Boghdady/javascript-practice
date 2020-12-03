'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({
    time,
    starterIndex,
    mainIndex = 2
  }) {
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
console.log("---------Destructuring Arrays------------");
// 1) Destructuring
let [itailia, pizzeria, , organic] = restaurant.categories;
console.log(itailia, pizzeria, organic);

// 2) Switch values
let [first, second] = restaurant.categories;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);

// 3) Nested Array
const arr = [1, 2, ["a", "b"]];
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
console.log("---------Destructuring Objects------------");
// 1) Normal destructuring
const {
  name,
  categories,
  location: restaurantLocation
} = restaurant;

console.log(name, categories, restaurantLocation);

// 2) Defual values
const {
  name: restaurantName,
  categories: restaurantVCategories,
  menu = []
} = restaurant;

console.log(restaurantName, restaurantVCategories, menu);

// 3) Mutating || Switch values
let a1 = 10;
let b1 = 20;

const obj = {
  a1: 4,
  b1: 5
};

({
  a1,
  b1
} = obj)
console.log(a1, b1);

// 4) Nested Object
const {
  fri: {
    open,
    close
  }
} = restaurant.openingHours;
console.log(open, close);

// 5) Pass object to funcation args

restaurant.orderDelivery({
  time: '2.00 pm',
  starterIndex: 2,
});

// ------------------Spread Operators-------------------------//
// Goal: 1) build new array , 2) path multiple variables to function params
console.log("---------Spread Operators------------");

// 1) Join 2 arrays or more
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

// 2) Copy array
const copyMenu = ["checken", ...fullMenu];
console.log(copyMenu);

// 3) Function args
function sum(num1, num2) {
  console.log(num1 + num2);
}

const numbers = [3, 4];
sum(...numbers);

// Copy object (shallow coping)
const copyRestuarant = {
  ...restaurant
};
console.log(copyRestuarant);


// ------------------Rest Operators-------------------------//
console.log("---------Rest Operators------------");

// SPREAD: because of on right of "="
const arrSp = [1, 2, ...[3, 4]];
// REST: because of on right of "="
const [firstEl, secondEl, ...others] = [20, 30, 40, 50];
console.log(firstEl, secondEl, others)

// 2) objects

const {
  fri,
  ...otherDays
} = restaurant.openingHours;
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