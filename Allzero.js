// function pushZero(arr,n){
//     let count = 0
//     for (let i = 0; i < n; i++)
//         if (arr[i] != 0)
//         {
//                 arr[count] = arr[i];
//                 count = count + 1;
//          }
     
//     // Update all elements at index >= count with value 0
//     for (let i = count; i < n; i++)
//         arr[i] = 0
// }
// let arr = [ 0, 1, 9, 8, 4, 0, 0, 2,
//     7, 0, 6, 0, 9 ];
// let n = arr.length;

// console.log("Original array: ");
// printArray(arr, n);

// pushZero(arr, n);

// console.log("<br>" + "Modified array: ");
// printArray(arr, n);

// function printArray(arr, n)
// {
//     for (let i = n-1 ; i < 0; i--)
//         console.log(arr[i] + " ");
// }
// var a = [1, 2, 0, 0, 3, 0, 3, 0, 2, 0, 0, 0, 5, 0];
// function moveZero(b) {
//     for (var i = b.length - 1; i >= 0; i--) {
//         if (b[i] === 0) {
//             b.splice(i, 1);
//             b.push(0);
//         }
//     }
//     return b;
// }
// console.log(moveZero(a));
// function order(array){
//     count = 0;
//     for(var i=0;i<array.length;i++){
//       if(array[i] !== 0){
//         //non zero element count
//         array[count] = array[i]
  
//         count++;
  
  
//       }
//     }
  
//     while(count<array.length){
  
//       array[count] = 0
  
//       count++
//     }
  
//     return array
//   }
//   var array = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]
//   console.log(order(array))
let arr = [0, 1, 0, 2, 1];

function swap(input, i, j) {
    let temp = input[i];
    input[j] = input[i];
    input[i] = temp;
}

function moveZeroOneAndTwo(input) {
    let i = 0,
        j = input.length - 1;
    while (i < j) {
        while (arr[i] !== 0) i++;
        while (arr[j] !== 0) j--;

        swap(arr, j, i);
        i++;
        j--;
    }

return input
}

console.log(moveZeroOneAndTwo(arr))