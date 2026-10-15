function reverse(x: number): number {
     const isNegative = x < 0; 
    let num = Math.abs(x);               
  let reverseNum = 0
  while(num>0){
     const lastNum = num % 10
     if(reverseNum > Math.floor(2147483647 / 10) || (reverseNum === Math.floor(2147483647 / 10) && lastNum > 7)){
      return 0
     }
     reverseNum = reverseNum * 10 + lastNum
     num = Math.floor(num / 10)

  }
    return isNegative ? -reverseNum : reverseNum;
};

console.log(reverse(-0))



