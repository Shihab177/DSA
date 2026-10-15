let str = "hello"
let strArr= str.split("")

let start = 0
let end = strArr.length -1

while(start < end){
    let tem = strArr[start]
    strArr[start] = strArr[end]
    strArr[end]= tem
    start++
    end--
}

console.log(
    strArr.join("")
);