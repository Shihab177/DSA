// let arr =[4,76,88,88.5,33]
// let maxNumber = Math.max(...arr)
// console.log(maxNumber);

// const person = {
//     name:"shihab",
//     roll:55,
//     class:12
// }
// const {name,...restObj}= person
// console.log(name)
// console.log(restObj)


const sumNumber = (...numbers)=>{
    return numbers.reduce((accu, current)=> accu + current,0)
}

console.log(sumNumber(50,40,30))