// let arr = [1,3,4,5,6]
// arr.splice(1,2,7,8,9,10,11,12,13)
// console.log(arr)
let data = []
data.splice(0,0,1,2,3,4,5,6,7,8,9,10)
//console.log(data)
data.shift()
console.log(data)
// data.unshift(100)
// data.unshift(1,500,10)
console.log(data)
// let arr = ["I", "study", "JavaScript"];
// arr.splice(2, 0, "complex", "language");

// console.log( arr ); // "I", "study", "complex", "language", "JavaScript"
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log( arr ); // 1,2,3,4,5
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //fruits.pop();
// let length = fruits.push("pineApple","kivi")
// let dat = fruits.shift("Apple")
// fruits.unshift("lemon")
// fruits[0] = "van"
// fruits[fruits.length] = "watermellon"
// console.log(fruits)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

//const myChildren = myGirls.concat(myBoys);
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const arr4 = ["atharve","santosh","ratna"]
// const myChildren = arr1.concat(arr2, arr3,arr4);
// console.log(myChildren)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi");
//fruits.splice(0, 2, "Lemon", "Kiwi");
//fruits.splice(0, 1);
// fruits.slice(1, 2);
// console.log(fruits)
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction, 100);

// function myFunction(total, value) {
//   return total + value;
// }
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum)
