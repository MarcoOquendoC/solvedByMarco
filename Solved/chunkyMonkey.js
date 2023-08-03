// chunkArrayInGroups
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

function chunkArrayInGroups(arr, size) {
  const quantity = Math.floor(arr.length / size);
  const reminder = arr.length % size;
  const result = [];

  if (reminder) {
    const temp0 = [];
    for (let i = 1; i <= reminder; i++) {
      temp0.unshift(arr.pop());
    }
    result.unshift(temp0);
  }

  for (let i = 0; i < quantity; i++) {
    const temp = [];
    for (let j = 0; j < size; j++) {
      temp.unshift(arr.pop());
    }
    result.unshift(temp);
  }
  return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
