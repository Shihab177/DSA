// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;

//     for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//         if (n % i === 0) return false;
//     }
//     return true;  // ← এই লাইনটি আপনার কোডে ছিল না
// }

// // ইউজার থেকে ইনপুট নেওয়া
// let n = prompt("Enter a positive number:");

// // ইনপুট চেক করা
// if (isNaN(n)) {
//     console.log("Invalid input");
// } else {
//     n = Number(n);  // স্ট্রিং থেকে নাম্বারে কনভার্ট
//     if (n > 0) {
//         if (isPrime(n)) {
//             console.log(n + " is a prime number");
//         } else {
//             console.log(n + " is not a prime number");
//         }
//     } else {
//         console.log("Should be positive and more than 0");
//     }
// }

// var countPrimes = function (n) {
//   if (n < 1) return 0;
 
//   let count = 0;
//   for (i = 2; i < n; i++) {
//      let isPrime = true;
//     for (let j = 2; j * j <= i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     isPrime && count++;
  
//   }
//   return count
// };
// console.log(countPrimes(10));

var countPrimes = function(n) {
    if (n <= 2) return 0;

    // isPrime[i] will store whether number i is prime
    const isPrime = new Uint8Array(n).fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;

    // Apply Sieve of Eratosthenes up to sqrt(n)
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    // Count all primes strictly less than n
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count; // Make sure this return is present!
};
