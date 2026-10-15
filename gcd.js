let a = 12
let b = 18
let x =a
let y = b

while(y!==0){
 let rem = x % y
 x = y
 y = rem
}

let gcd = x
console.log(gcd);

let lcm = (a*b)/gcd

console.log(lcm);