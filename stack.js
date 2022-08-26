// let arr = []
// let CurrentSize = arr.length
// let max = 5
// function push(newValue){
//     if(CurrentSize >= max){
//         console.log(`Stack is full ${newValue}`)
//         arr[CurrentSize] = newValue;
//         CurrentSize+=1
//     }
  
// }
// push(20)
// console.log(arr)
let data = []
let size = data.length
let max = 10
function push(newValue){
    if(size >= max){
        console.log(`stack is full you can not add value ${newValue}`)
    }
    data[size] = newValue;
    size+=1;
}
function pop(){
    if(size > 0){
        size--;
        data.length = size;
    }
    else{
        console.log("stack is alredy empty")
    }
}
push(10)
push(20)
push(30)
push(40)
push(1)
push(2)
push(3)
push(4)
push(5)
push(6)
push(7)
push(8)
// pop()
// pop()
console.log(data)