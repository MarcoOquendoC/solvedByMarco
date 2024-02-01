function miniMaxSum(arr) {
    // https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
    let x = arr.findIndex(val => val === (Math.max(...arr)));
    let w = arr.splice(x,1);
    let sum1 = arr.reduce((acc,val) => acc + val);
    arr.unshift(...w);
    let y = arr.findIndex(val1 => val1 === (Math.min(...arr)));
    arr.splice(y,1);
    let sum2 = arr.reduce((acc,val) => acc + val);
    console.log(sum1,sum2);
    return [sum1,sum2];
  // miniMaxSum([1,5,3,4,6])
}
console.log('smile');
