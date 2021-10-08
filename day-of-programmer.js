// Day of the Programmer is the date of the 256th
// Leap year
//      Divisible by 400.
//      Divisible by 4 and not divisible by 100.

// Input
// A single integer denoting year y

// Output
// Print the full date of Day of the Programmer during year y in the format dd.mm.yyyy, 
// where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

function dayOfProgrammer(year) {
    let isLeapYear = false;
    let dayOfProgrammer = '';
    if (year >= 1700 && year <= 1917) {
        if (year % 4 == 0) {
            isLeapYear = true;
        }
    } else {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            isLeapYear = true;
        }
    }

    if (year != 1918) {
        if (isLeapYear) {
            dayOfProgrammer = '12.09.' + year;
        } else {
            dayOfProgrammer = '13.09.' + year;
        }
    } else {
        dayOfProgrammer = '26.09.' + year;
    }
    return dayOfProgrammer;
}

console.log(dayOfProgrammer(1800))