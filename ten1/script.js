/* eslint-disable no-unused-vars */
// ! 1
// Days in the year
// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function yearDays(year) {
  const isLeapYear = (!(year % 4) && !!(year % 100)) || !(year % 400);

  return `${year} has ${isLeapYear ? 366 : 365} days`;
}

// ! 2
// Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum(numbers) {
  return numbers.reduce((acc, elem) => acc + elem, 0);
}

//! 3
// Count the Monkeys!
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

function monkeyCount(n) {
  return Array.from({ length: n }, (_, idx) => idx + 1);
}

//! 4
// Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (_, idx) => 2 ** idx);
}
