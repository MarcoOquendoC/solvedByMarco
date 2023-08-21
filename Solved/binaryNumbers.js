function main() {
  // https://www.hackerrank.com/challenges/30-binary-numbers/problem
  const n = parseInt(readLine().trim(), 10);
  const N = n.toString(2);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < N.length; i++) {
    sum = N[i] == 1 ? sum + 1 : 0;
    result = sum > result ? sum : result;
  }
  console.log(result);
}
