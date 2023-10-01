// This was the challenge in the final module on Microverse

console.log('Inventory');

let arr1 = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

arr2 = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

const updateInventory = (current, incoming) => {
  const hash = {};
  current.forEach((element) => hash[element[1]] = element[0]);

  incoming.forEach((iElement) => {
    hash[iElement[1]] = hash[iElement[1]]
      ? hash[iElement[1]] + iElement[0]
      : iElement[0];
  });

  const sortedList = Object.keys(hash).sort();
  const result = sortedList.map((item) => [hash[item], item]);
  return result;
};

console.log(arr1);
arr1 = updateInventory(arr1, arr2);
console.log(arr1);
