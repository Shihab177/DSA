// let prompt = require('prompt-sync')();
// let n = Number(prompt('enter a number'))

// for(let i=1; i<=n; i++){
//     for(let j = n; j>=i ; j--){
//        process.stdout.write('* ')
//     }
//     console.log();
// }
    // let text = "Visit W3Schools";
    //   let result = /w3schools/i.test(text);  
    //     console.log(result);

        //  let text = "12";
        //      let result = text.match(/\d{2,4}/);
        //      console.log(result);
//    let n =5
//         for (let i = 0; i < n; i++) {        
//     for (let j = 0; j < n; j++) {     
//         console.log(i, j);
//     }
// }

function sum (n){
    if(n===1) {
        return 1
    }

    return n + sum(n-1)
    

}
console.log(sum(5))

