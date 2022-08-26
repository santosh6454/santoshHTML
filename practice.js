// function greater(a,b){
//     if(a>b){
//         console.log(a)
//     }
//     else{
//         console.log(b)
//     }
// }
// greater(200,1000)



/// 2

// function evenOdd(a){
//     if(a%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("Odd")
//     }
// }
// evenOdd(12.3)

/// 3
// function positiveAndNegative(a){
//     if(a >= 0){
//         console.log("Positive number")
//     }
//     else{
//         console.log("negative number")
//     }
// }
// positiveAndNegative(-1)

// 4

// function divi(a){
//     if(a%3==0 || a%5==0){
//         console.log("number is divisiable 3 and 5")
//     }
//     else{
//         console.log("number is not diviable 3 and 5")
//     }
// }
// divi(10)


// 5

// function absoluteValue(a){
//     if (a < 0){

//         a = (-1) * a
        
//     }

//     console.log(` absolute value of ${a}`)

// } 
// absoluteValue(-10)

// 6
// function largest(n1,n2,n3){
//     if(n1 >= n2 && n1 >= n3){
//         console.log(n1)
//     }
//     else if(n2 >= n1 && n2 >= n3){
//         console.log(n2)
//     }
//     else if(n3 >= n1 && n3 >= n2){
//         console.log(n3)
//     }
// }
// largest(4,6,3)
// largest(600,400,100)
// using ternary operator
// function largest(a,b,c){
//     let big = 0
//     big = (a>b && a>c) ? (a) : ( (b>c)?(b):(c) );
//     console.log(big)
// }
// largest(10,20,30) 

// 7

function secondLargest(a,b,c){
    let sec = 0
     sec = (a > b) ? ((a>c)?((b>c)?b:c):((a>b)?a:c)):((b>c)?((a>c)?a:c):((a>b)?a:b));
    console.log(sec)
}
secondLargest(4,5,6)
