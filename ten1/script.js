// ! 1
// Days in the year
// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function yearDays(year) {
  const isLeapYear = (!(year % 4) && !!(year % 100)) || !(year % 400);

  return `${year} has ${isLeapYear ? 366 : 365} days`;
}
