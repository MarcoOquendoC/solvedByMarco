function sumPrimes(num) {
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
  function PrimeTest(N){
    if(N==2 || N==3)return true
    if(N%2==0 || N%3==0)return false
    let n = Math.floor(Math.sqrt(N))
    for(let i=5, j=7 ; i<=n ; i+=6, j+=6){
      if(N%i==0)return false
      if(N%j==0)return false
    }//end for
    return true
  }//end PrimeTest
  function sumOfPrimes(num){
     let sum = 0
     for (let i=num ; i >= 2 ; i--) {
        if (PrimeTest(i)) {
           sum += i
        }//end if
      }//end for
    return sum;
  }//end sumOfPrimes
  return sumOfPrimes(num);
  //console.log(sumPrimes(977));
}
