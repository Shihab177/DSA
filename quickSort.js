function partition (arr,st,end){
    let idx = st-1
    let pivot = arr[end]

    for( let j = st; j < end; j++){   
        if(arr[j] <= pivot){
            idx++
            [arr[idx],arr[j]]=[arr[j],arr[idx]]

        }

    }
    idx++
    [arr[idx],arr[end]]=[arr[end],arr[idx]]
    return idx
   
}


function quickSort(arr,st,end){
   
     if(st < end){
        let  pivIdx = partition(arr,st,end)
        quickSort(arr,st,pivIdx-1)
        quickSort(arr,pivIdx+1,end)

    }

    
}
const arr = [4,2,5,2,1,9,4]
quickSort(arr,0,arr.length-1)
console.log(arr);