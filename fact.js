function factorial(fact){
    if(fact==0){
        return 1
    }
   return fact * factorial(fact-1) 
}
let value = 8
console.log(factorial(value))