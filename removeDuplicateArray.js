// const arr = [9,2,3,3,4,4,5]

// const uniqeArr= [...new Set(arr)]


// const uniqeArr =[]
// for(let i = 0; i < arr.length; i++){
//     if(!uniqeArr.includes(arr[i])){
//         uniqeArr.push(arr[i])
//     }
// }
// console.log(uniqeArr);


// const arr = [9, 2, 3, 3, 4, 4, 5];

// let k = 0;

// for (let i = 0; i < arr.length; i++) {
//     let duplicate = false;

//     for (let j = 0; j < k; j++) {
//         if (arr[j] === arr[i]) {
//             duplicate = true;
//             break;
//         }
//     }

//     if (!duplicate) {
//         arr[k] = arr[i];
//         k++;
//     }
// }

// arr.length = k;

// console.log(arr); 

















const arr =[2]
function removeDuplicateInArray(arr){
  let k = 0
for(let i = 0; i < arr.length; i++){
    let duplicate = false;
    for(let j = 0 ; j < k ; j++){
        if(arr[j] === arr[i]){
            duplicate= true
            break
        }
    }
    if(!duplicate){
        arr[k]= arr[i]
        k++
    }
}
arr.length = k
}
removeDuplicateInArray(arr)
console.log(arr);
