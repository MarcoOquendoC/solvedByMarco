function main() {
  const t = parseInt(readLine());
  for (let a0 = 0; a0 < t; a0++) {
    const n = parseInt(readLine());

    // https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem
    const N = BigInt(n) - 1n;
    const i3 = N / 3n;
    const i5 = N / 5n;
    const i15 = N / 15n;
    const m3 = 3n * i3 * (i3 + 1n);
    const m5 = 5n * i5 * (i5 + 1n);
    const m15 = 15n * i15 * (i15 + 1n);
    const sum = (m3 + m5 - m15) / 2n;
    console.log(sum.toString());
  }
  // Proyect euler001 multiples of 3 and 5
}/* multiples 3,5 */
