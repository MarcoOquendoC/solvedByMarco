function balancedSums(arr) {
  // https://www.hackerrank.com/challenges/sherlock-and-array/problem
  let sum = arr.reduce((acc, val) => acc + val);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum -= arr[i];
    if (sum === leftSum) {
      return 'YES';
    }// end if
    leftSum += arr[i];
  }// end for
  return 'NO';
}

balancedSums([3, 2, 1, 6, 5, 4, 9, 3, 2]);
console.log('smile');
