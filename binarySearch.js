const arr = [33,66,74,75,88,90,96,97,100]


const binarySearch = (arr,tar)=>{
            
           let high= arr.length-1
           let low = 0

           while (low <= high) {
            const midIndex = Math.floor((low + high) / 2);
            const mid = arr[midIndex]
            if(mid === tar){
                return `target ${tar} is found at index ${midIndex}`;
            }else{
               
                mid < tar ? low = midIndex +1 : high = midIndex -1

            }
           }
           return "not found";

}
console.log(binarySearch(arr,190))
console.log(binarySearch(arr, 90));  // Output: target 90 is found at index 5
console.log(binarySearch(arr, 33));  // Output: target 33 is found at index 0
console.log(binarySearch(arr, 105));