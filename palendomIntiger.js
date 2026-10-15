var isPalindrome = function(x) {         
        let revHaf=0
        if(x<0 || x % 10 === 0 && x!=0){
           return false
        } 
        while(x>revHaf){
            let lastD = x % 10
            revHaf = revHaf * 10 + lastD
            x = Math.floor( x / 10)
        }
      return revHaf === x || x === Math.floor(revHaf / 10) ? true : false
};
console.log(isPalindrome(1221))

