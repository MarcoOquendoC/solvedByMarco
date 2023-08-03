function extraLongFactorials(n) {
  // https://www.hackerrank.com/challenges/extra-long-factorials/problem
  const N = BigInt(n);
  let result = BigInt(1);
  for (let i = N; i > 1; i--) {
    result *= i;
  }// end for
  console.log(result.toString());
  // console.log(extraLongFactorials(25))
}
