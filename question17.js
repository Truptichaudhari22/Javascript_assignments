
// 17. Write a program which tells the number of days in a month.

function numberOfDays(month, year) {
    const d = new Date(year, month, 0).getDate();
    return d;
}

console.log(numberOfDays(1, 2021));
console.log(numberOfDays(9, 2028));