function main() {
  const t = parseInt(readLine());
  for (let a0 = 0; a0 < t; a0++) {
    const n = parseInt(readLine());
    /// //////////////code below here

    // https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem?isFullScreen=true
    let sum = 0;
    const f = (1 + Math.sqrt(5)) / 2;

    for (let i = 3; fib(i) < n; i += 3) {
      sum += fib(i);
    }
    console.log(sum);

    function fib(n) { // returns fibonnacci(n)
      return Math.round((f ** n - (1 - f) ** n) / Math.sqrt(5));
    }
  /// //////////////code above here
  }
  /* ///////////////another try code below here
  //https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem?isFullScreen=true
  //         let sum=2
  //         let i=1
  //         let j=2
  //         let x=0
  //         while(j+j<n){

  //             i+=j

  //             j+=i

  //             i+=j

  //             sum+=i+j

  //             x=i;i=j;j=x
  // console.log('i:'+i+'  j:'+j+'next iteration')
  //         }

  //         console.log(sum)
  /////////////////code above here */ /// //////////////another try while loop

  /* ////n fibonacci number formula
  ////((10^4+22361)^n-(10^4-22361)^n)/(22361*2^n*10^(4*(n-1))
  // let N=BigInt(n)
  // let SUM=BigInt(0)
  // for (let I=BigInt(3);fib(I)<N;I+=BigInt(3)){
  //     SUM+=fib(I)
  // }
  // console.log(parseInt(SUM.toString()))

  // function fib(I){//returns fibonnacci(I)
  //     let A=(BigInt(10)**BigInt(4)+BigInt(22361))**I
  //     let B=(BigInt(10)**BigInt(4)-BigInt(22361))**I
  //     let D=BigInt(4)*(I-BigInt(1))
  //     let C=BigInt(22361)*BigInt(2)**I*BigInt(10)**D
  //     return (A-B)/C
  // }
  */ /// //////////////another try BigInt
}/* evenFibonacciNumbers TestCase3 gets red */
