function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i === 0) return false;
    }
    return true;  // ← এই লাইনটি আপনার কোডে ছিল না
}

// ইউজার থেকে ইনপুট নেওয়া
let n = prompt("Enter a positive number:");

// ইনপুট চেক করা
if (isNaN(n)) {
    console.log("Invalid input");
} else {
    n = Number(n);  // স্ট্রিং থেকে নাম্বারে কনভার্ট
    if (n > 0) {
        if (isPrime(n)) {
            console.log(n + " is a prime number");
        } else {
            console.log(n + " is not a prime number");
        }
    } else {
        console.log("Should be positive and more than 0");
    }
}