// In the following shopping cart add, remove, edit items



// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];


// - add 'Meat' in the beginning of your shopping cart if it has not been already added


let addMeatInTheStart = shoppingCart.unshift("Meat");
console.log(addMeatInTheStart);
console.log(shoppingCart);

// - add Sugar at the end of your shopping cart if it has not been already added


let addSugarInTheLast = shoppingCart.push("Sugar");
console.log(addSugarInTheLast);
console.log(shoppingCart);

// - remove 'Honey'


let removeHoney = shoppingCart.splice(4, 1);
console.log(removeHoney);
console.log(shoppingCart);

// - modify Tea to 'Green Tea'



let modifyGreenTeaToTea = shoppingCart.splice(3, 1, "Green Tea");
console.log(modifyGreenTeaToTea);
console.log(shoppingCart);