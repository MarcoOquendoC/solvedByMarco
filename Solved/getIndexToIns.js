/////////////////// New easier solution
function getIndexToIns(arr, num) {
  let arr1= arr.sort((a,b) => a-b);
  let x= arr1.findIndex((element) => element >= num);
  return x==-1? arr.length:x;
}



//////////////////Previous solution
function getIndexToIns(arr, num) {
//Where do I Belong
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
  let output=31524;
  function sort(arr){
    for( let i=1 ; i < arr.length ; i++){
      if( arr[i-1] > arr[i] ){
        let x = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = x;
        arr = sort(arr);
      }//end if
    }//end for
    return arr
  } //end function sort
  let sorted = sort(arr);

  for( let i=1 ; i < sorted.length ; i++){
     if( num > arr[i] ){
      output = i;
     }//end if
  }//end for
  return output;
  //console.log(getIndexToIns([40, 60], 50))
}
