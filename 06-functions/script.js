'use strict';

// 1) Defual values
const bookings = [];
const trip = function (flightNum, passengerNum = 1, price = 50 * passengerNum) {
  const booking = {
    flightNum,
    passengerNum,
    price,
  };

  bookings.push(booking);
  console.log(bookings);
};

trip('1AB');
trip('1B', undefined, 100);

// Passing a premetive value vs Refrence value
const flightNumber = '15B';
const passenger = {
  name: 'Ahmed',
  password: 9838278,
};

const checkIn = function (flightNum, passengerData) {
  flightNum = '15C';
  passengerData.name = 'MS' + passengerData.name;
};

// Object value changed
checkIn(flightNumber, passenger);
console.log(flightNumber, passenger);

// babel convert es2015 and newer version to es5
// es5 supported with all brwosers

// higher oredering function
console.log('------------------Higher ordering function------------------');

const high = () => {
  console.log('Hi');
};

// addEventListener is higher order function and high is a callback function
document.body.addEventListener('click', high);

const firstUpperWord = str => {
  const [first, ...others] = str.split(' ');
  return first.toUpperCase();
};

const transform = (str, fn) => {
  console.log(fn(str));
};

transform('Hello Index group', firstUpperWord);

// function return function
console.log('------------------function return function------------------');

const greet = function (msg) {
  return function (name) {
    console.log(`${msg}: ${name}`);
  };
};

greet('Hello')('Ahmed');
