function Day6LetsReview() {
  // https://www.hackerrank.com/challenges/30-review-loop/problem
  function processData(input) {
    const arr = input.split('\n');
    arr.shift();
    let result = '';
    for (let j = 0; j < arr.length; j++) {
      let even = [];
      let odd = [];
      for (let i = 0; i < arr[j].length; i++) {
        even += i % 2 == 0 ? arr[j][i] : '';
        odd += i % 2 == 0 ? '' : arr[j][i];
      }
      result += (`${even} ${odd}\n`);
    }
    console.log(result);
  }
}
console.log('smile');
