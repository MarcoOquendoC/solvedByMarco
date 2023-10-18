function cavityMap(grid) {
  // https://www.hackerrank.com/challenges/cavity-map/problem
  grid.forEach((value, index) => grid.splice(index, 1, [...value]));
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      if (parseInt(grid[i][j]) > parseInt(grid[i][j - 1])
            && parseInt(grid[i][j]) > parseInt(grid[i][j + 1])
            && parseInt(grid[i][j]) > parseInt(grid[i - 1][j])
            && parseInt(grid[i][j]) > parseInt(grid[i + 1][j])) {
        grid[i][j] = 'X';
      }// end if
    }// end j loop
  }// end i loop
  grid.forEach((value, index) => grid.splice(index, 1, value.join('')));
  return grid;
}
console.log('smile');
