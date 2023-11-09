function getCount(objects) {
  // https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true
  let x = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      x++;
    }// end if
  }// end for
  return x;
  // getCount( {x:12,y:12} )
}
console.log('smile');
