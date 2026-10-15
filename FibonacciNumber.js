var fib = function(n) {
    if(n===0) return 0
    if(n===1) return 1
    let fast = 0
    let second = 1
    
    let fib;
    for(let i = 2; i <= n ; i++ ){
        fib = fast + second
        fast = second
        second = fib

    }
    return fib
};
console.log(fib(5));  