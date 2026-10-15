function mergeSort(arr, st, end) {
  if (st < end) {
    const mid = Math.floor(st + (end - st) / 2);

    mergeSort(arr, st, mid);
    mergeSort(arr, mid + 1, end);

    merge(arr, st, mid, end);
  }
}

function merge(arr, st, mid, end) {
  const temp = [];

  let i = st;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let idx = 0; idx < temp.length; idx++) {
    arr[st + idx] = temp[idx];
  }
}

// Test
const arr = [8, 3, 5, 4, 7, 6, 1, 2];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);

/////////////
const arr2 = [9, 4, 7, 3, 1];
function merge2 (arr,st,mid,end){
  let i = st
  let j = mid+1
  let tem = []
  while(i <= mid && j <= end){
    if(arr[i] <= arr[j]){
       tem.push(arr[i])
       i++
    }else{
      tem.push(arr[j])
      j++
    }
  }
  while(i <= mid){
    tem.push(arr[i])
    i++
  }
  while(j <= end){
    tem.push(arr[j])
    j++
  }

  for (let idx = 0; idx < tem.length; idx++){
    arr[st + idx] = tem[idx]
  }
}
function mergeSort2(arr, st, end) {
  if (st >= end) return
  const mid = Math.floor(st + (end - st) / 2);

  mergeSort2(arr, st, mid);
  mergeSort2(arr, mid + 1, end);
  merge2(arr, st, mid, end);
}

mergeSort2(arr2, 0, arr2.length - 1);
console.log(arr2);
