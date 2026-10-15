function recartion (n){
    if(n===0){
        return 1
    }
     return n*recartion(n-1)
    
    
}
console.log(recartion(5));
