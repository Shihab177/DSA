

const arr = [3,6,9,4,6,8]

let large = -Infinity
let secondLarge = -Infinity


for(let i =0; i < arr.length; i++){
    if(arr[i] > large){
        secondLarge = large
        large = arr[i]

    }else if(arr[i] > secondLarge && arr[i] !== large){
        secondLarge = arr[i]
    }
}

console.log(secondLarge);