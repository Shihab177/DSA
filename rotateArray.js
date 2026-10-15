const arr = [1,2,3,4,5]
function revers(arr,start,end){
    
    while(start < end){
     [arr[start],arr[end]] = [arr[end],arr[start]]
     start++
     end--
    }
}
let k = 2
k = k % arr.length
// revers(arr,0,k-1)
// revers(arr,k,arr.length-1)
// revers(arr,0,arr.length-1)

 revers(arr,0,arr.length-1)
 revers(arr,0,k-1)
 revers(arr,k,arr.length-1)
console.log(arr);