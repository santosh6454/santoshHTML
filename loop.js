// const person = {fname:"santosh",lname:"kumar",age:25}
// let value=""
// for(let data in person){
// value+=person[data]

// }
// console.log(value + " ")
// const number = [4,5,6,7,8,9,1,2,3,10]
// let txt = ""
// for(let x in number){
//     txt+=number[x]
// }
// console.log(txt)
let number= [45,6,7,89,12,13,15]
let txt = "";
number.forEach(myFunction);
function myFunction(value){
    txt+= value
}
console.log(txt + "\n")
