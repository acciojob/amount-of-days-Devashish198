function daysOfAYear(y) {
	if (year % 400 === 0) {
    return(366);
  } else if (year % 100 === 0) {
    return(365);
  } else {
    return year % 4 === 0;
  }
}

const year=Number(prompt("ENTER THE YEAR"));
alert(daysOfAYear(year));
