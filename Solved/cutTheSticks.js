function cutTheSticks(arr) {
  // https://www.hackerrank.com/challenges/cut-the-sticks/problem
  const result = [];
  while (arr.length > 1) {
    result.push(arr.length);
    const min = Math.min(...arr);
    arr.forEach((value, index) => arr.splice(index, 1, value - min));
    while (arr.includes(0)) {
      arr.splice(arr.indexOf(0), 1);
    }
  }
  if (arr.length != 0) result.push(arr.length);
  return result;
}
console.log('smile');
