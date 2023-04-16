let countries1 = ["japan", "china"];

let c = countries1.includes("ethopia");
console.log(c);
if (c === true) {
  console.log("found country");
} else if (c === false) {
  let d = countries1.push("ethopia");
  console.log(d);
  console.log(countries1);
}