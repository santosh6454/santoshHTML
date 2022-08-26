// let array =[10,20,30,40,50,60,100,310]
// const sum =0
// const output = array.reduce( function(acc,curr) {
//     acc = acc+ curr
    
//     return acc

// },0)
// console.log(output)
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,

);
console.log(initialValue)
console.log(sumWithInitial);
// expected output: 10