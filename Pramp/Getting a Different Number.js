// Getting a Different Number
// https://www.pramp.com/challenge/aK6V5GVZ9MSPqvG1vwQp

function getDifferentNumber(arr) {
  // [0,1,2,3,5] => 4
  const set1 = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (!set1.has(i)) return i; // arr[i] != i
  }
  return arr.length;
}

// find the smallest nonnegative integer that is NOT in the array
