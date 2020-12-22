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
