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
