
function code1(n) {
    if(n==0){
        return
    }
    console.log(n)
    code1(n-1)
}
code1(0)

// 2
function fun(n) {
    if(n==0){
        return "a"
    } 
    fun(n-1)
    console.log(n)
}

fun(0)


// 3
function fun(n) {
    if(n==0){
        return "a"
    }
    console.log(n) 
    fun(n-1)
    console.log(n)
}

fun(3)
///4
function fun(n) {
    if(n==0){
        return 0
    }
    return n + fun(n-1)
}


console.log(fun(3))
// 5
function fun(n) {
    if(n==0){
        return "a"
    }
    fun(n-1)
    console.log(n)
    fun(n-1)
}

fun(2)