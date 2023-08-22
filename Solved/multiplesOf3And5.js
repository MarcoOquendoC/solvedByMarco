function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
      var n = parseInt(readLine());

  // https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem
      let N=BigInt(n)-1n;
      let i3=N/3n;
      let i5=N/5n;
      let i15=N/15n;
      let m3=3n*i3*(i3+1n);
      let m5=5n*i5*(i5+1n);
      let m15=15n*i15*(i15+1n);
      let sum=(m3+m5-m15)/2n;
      console.log(sum.toString());
  }
  // Proyect euler001 multiples of 3 and 5
}/*multiples 3,5*/
