function sumOddLengthSubarrays(arr) {
  // https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
  let sum = 0;
  for (let j = 1; j <= arr.length; j += 2) {
    for (let i = 0; i < arr.length - j + 1; i++) {
      sum += (arr.slice(i, i + j)).reduce((acc, val) => acc + val);
    }// end for
  }// end for
  return sum;
  // console.log(sumOddLengthSubarrays([1,4,2,5,3]))
}
