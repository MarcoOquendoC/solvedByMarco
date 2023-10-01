function translatePigLatin(str) {
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
  const arr = [...str];
  let output = '';
  if (vowelTest(arr)) {
    arr.push('way');
    output = arr.join('');
    return (output);
  }
  for (let i = 0; i < arr.length; i++) {
    if (vowelTest(arr) == false) {
      arr.push(arr.shift());// put first in last position
    }// end if
  }// end for
  // end else
  arr.push('ay');
  output = arr.join('');
  return (output);

  function vowelTest(array) {
    if (array[0] == 'a') return true;
    if (array[0] == 'e') return true;
    if (array[0] == 'i') return true;
    if (array[0] == 'o') return true;
    if (array[0] == 'u') return true;
    return false;
  }// end vowelTest()
  // console.log(translatePigLatin("try"))
}
