//Write a program which tells the number of days in a month, now consider leap year.

function numberOfDays(month,year){
    const d = new Date(year, month, 0).getDate();
    return d;
}
let storeDays = numberOfDays(2, 2024);
console.log(storeDays);

if (storeDays === 29) {
  console.log("leap year");
} else {
    console.log("Not leap year");
}