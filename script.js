function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function daysOfAYear(y) {
  if (isLeapYear(y)) {
    return 366;
  } else {
    return 365;
  }
}
let year=Number(prompt("ENTER THE YEAR"));
alert(daysOfAYear(year));