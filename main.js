//Code Plan/Pseuo-code:

// .map() - 
//function that takes an array of items and a function that returns an array with each item manipulated by that function.

let nums = [15, 4, 10, 8, 9 ,7, 2, 6];
let addNums = [];

for (i = 0; i <nums.length; i++){
  addNums.push(nums[i]+1);
}
console.log(addNums)

//loops through the array
//modifies each item in array
//returns a modified array with each item that was changed
//does not change origianl array, but instead pushes to a new array (splice?)

// .reduce() - 
// function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer));

let orders = [15, 4, 10, 8, 9 ,7, 2, 6];
let total = 0;

for (i = 0; i <orders.length; i++){
  total += (parseInt(orders[i]));
}
console.log(total)



// loops through array
// takes the value of the price for food orders
// sums to food order values
// returns total sum of values

// .filter() - 
// function that takes an array of items and a function that returns an array with only the items that return true in the function.

let names = ["Michael", "Isaiah", "Scott", "Dominik", "Rachel", "Eddie", "Barret"];
let fiveLetter = [];

for (i = 0; i <names.length; i++){
  if (names[i].length = 5){
   names[i].length.push(fiveLetter)
  }
  console.log(fiveLetter)
}

// loops through array
// checks for condition to be met (boolion)
// pushes true items into new array
// returns new array of only true items




