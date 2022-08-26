// 1
function number1(n){
    
    if(typeof(n)=="number"){
        return n;
    }
    else if(typeof(n)=="string"){
         
        str = "0123456789."
        for(let i=0;i<n.length;i++){
            if(str.indexOf(n[i])==-1){
                return NaN
            }
        }
        
        // "12.2"

        let num = 0, flag = 0, c = 0
        for(let i=0;i<n.length;i++){
            if(n[i]=="."){
                flag = 1
                continue
            }
            let x = n.charCodeAt(i) // 49
            if (flag == 0){
              num = num*10 + x-48
            }
            else{
                c++
               num = num + (x-48)/10**c  
            }
        }
        return num
    }
    
}


console.log(number1(12))
console.log(number1(12.2))
console.log(number1("12"))
console.log(number1("12.2"))
console.log(number1("abc"))
console.log(number1("12p"))
console.log(number1("12.2p"))


// 2
// Ramesh
// e
function indexOf1(str, ch){
    
    for(i = 0; i<=str.length; i++){
        if(str[i]==ch){
            return i
        }
    }

    return -1
}

function lastIndexOf1(str, ch){
    let t = ch.charCodeAt()
    let ch1 = ""
    if(ch>"A" && ch<"Z"){
         ch1 = String.fromCharCode(t+32)
    }
    else if(ch>"a" && ch<"z"){
        ch1 = String.fromCharCode(t-32)
    }
    
    for(i = str.length-1; i>=0; i--){
        if(str[i]==ch || str[i]==ch1){
            return i
        }
    }

    return -1
}

console.log(lastIndexOf1("rE2ameseEh", "2"))
console.log(lastIndexOf1("ramesh", "f"))


// 3
// .length 
// length()

 //  Number()

//  1)Number()
//  let a = "12.2"
//  console.log(Number(a)) // 12.2 as an integer

//  2)  str = "ramesh"

//  indexOf("m") // gives you index of character 
//  lastIndexOf("m") // gives you last index of character




// 3) Push()

// arr = [1,2,3,4,5]

// 4)Pop()

// 5) shift()

// 6) unshift()

// 7) slice()

// str.charAt(2)