function reversse(x) {
  let rev = 0;

  while (x !== 0) {
    rev = rev * 10 + (x % 10);
      x = Math.trunc(x / 10);
  }

  return rev;
}

console.log(reversse(1235));         
