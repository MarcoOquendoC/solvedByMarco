function squares(a, b) {
  // https://www.hackerrank.com/challenges/sherlock-and-squares/problem
  let count = 0;
  let i = Math.ceil(Math.sqrt(a));
  let i2 = i * i;
  while (i2 <= b) {
    count++;
    i++;
    i2 = i * i;
  }// end while
  return count;

  // let count=0
  // let i=Math.ceil(Math.sqrt(a))
  // for(let i2=i*i;i2<=b;i2=i*i){
  //     count++
  //     i++
  // }//end for
  // return count
}
