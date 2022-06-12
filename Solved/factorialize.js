function factorialize(num) {
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
  let output = 1;
  for(let i = num; i > 0; i--){
      output *= i;
  }
  return output;
  //factorialize(3)
  }
