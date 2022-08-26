const arr = [7,3,6,8,9,10,12]
const output = arr.map((x) => x*x*x)
console.log(output)
const arr1 = [2,3,5,7,9,10,5,,4,12,8]
const output1 =  arr1.filter((x) => x>2)
console.log(output1)
var array = [1,20,11,3,20]
let max =0
// for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i]
//     }
   
// }
// console.log(max)
const result = array.reduce(function(max,curr){
    if (curr>max)
    {
    max = curr
    }
    return max 
},0)
console.log(result)