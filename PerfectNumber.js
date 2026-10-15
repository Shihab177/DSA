var checkPerfectNumber = function (num) {
  let sum = 1;
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i != num / i) {
        sum += num / i;
      }
    }
  }
  return num === sum ? true : false;
};

console.log(checkPerfectNumber(6));
