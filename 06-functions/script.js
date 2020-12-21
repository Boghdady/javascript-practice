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
