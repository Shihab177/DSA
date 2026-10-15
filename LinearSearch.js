const arr = [3,6,66,34,8,9,4]

// function linearSearch (arr,target){
 
//    for(let i=0; i<arr.length; i++){
//     if(target === arr[i]){
//         return `target ${target} is found at index ${i}`;
//     }
//    }
//    return "not founded"
// }

// console.log(linearSearch(arr,3)) 


// Recursive Linear Search


function recursiveLinearSearch (arr , target,index=0){
    if(index >= arr.length) return "not founded"


    if (arr[index] === target){
        return `target ${target} is found at index ${index}`;
    }
    return recursiveLinearSearch(arr,target,index + 1)
}

console.log(recursiveLinearSearch(arr, 9));   // Output: target 9 is found at index 5
console.log(recursiveLinearSearch(arr, 3));   // Output: target 3 is found at index 0
console.log(recursiveLinearSearch(arr, 100));


