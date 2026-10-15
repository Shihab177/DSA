const arr = [3, 4, 5];

function bubbleSort(arr) {
    let tem;
    let s = 0;

    for (let i = 0; i < arr.length - 1; i++) {

        let swapped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {

                tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;

                s++;
                swapped = true;
            }
        }

        if (swapped === false) {
            console.log(`Pass ${i + 1}: No swap`);
            break;
        }
    }

    console.log("Total swap:", s);
}

bubbleSort(arr);
console.log(arr);