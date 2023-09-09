function plusMinus(arr) {
  // https://www.hackerrank.com/challenges/plus-minus/problem
    let x = 0; // less than zero
    let y = 0; // equal zero
    let z = 0; // more than zero
    let w = arr.length;

    let i = 0;
    while(i < arr.length){
    if(arr[i] < 0) x += 1;
    else if(arr[i] === 0) y++;
    else if(arr[i] > 0) z++;
    i++;
    }
    console.log((z/arr.length).toFixed(6))
    console.log((x/arr.length).toFixed(6))
    console.log((y/arr.length).toFixed(6))
  //plusMinus([1,0,3,-4,5,6])
}
