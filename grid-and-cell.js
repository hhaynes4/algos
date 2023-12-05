// Interview Question 1:
// Problem: Given a grid and a cell (i, j), determine the valid neighboring cells the person at that position can move to.

// four possibilities, up (i - 1), down (i + 1), right (j + 1), left (j - 1)
// i = cells, j = rows
// grid[i][j]

function nextCell(grid, i, j) {
  const moves = [];
  // up (i - 1)
  // make sure we are in bounds
  if (i - 1 >= 0 && grid[i - 1][j] !== -1) {
    moves.push([i - 1, j]);
  }
  // down
  if (i + 1 <= grid.length && grid[i + 1][j] !== -1) {
    moves.push([i + 1, j]);
  }
  //left
  if (j - 1 >= 0 && grid[i][j - 1] !== -1) {
    moves.push([i, j - 1]);
  }
  if (j + 1 <= grid[0].length && grid[i][j + 1] !== -1) {
    moves.push([i, j + 1]);
  }

  return moves;
}

const grid = [
  [0, 1, -1, 3],
  [4, 5, 6, 7],
  [8, -1, 10, 11],
  [12, 13, 14, 15],
];

// Interview Question 2 (JavaScript):
// Problem: Given a cell (i, j), find the number of cells in the matrix reachable from that cell by moving forward.

function reachableCells(grid, i, j) {
  // keep track of visited positions in a set
  const visited = new Set();
  // helper function that takes the row and cell
  function dfs(cell, row) {
    // checking for: out of bounds, if exists in set, if the value is -1
    if (
      cell < 0 ||
      cell >= grid.length ||
      row < 0 ||
      row >= grid[0].length ||
      visited.has(`${cell}-${row}`) ||
      grid[cell][row] === -1
    ) {
      return 0;
    }
    visited.add(`${cell}-${row}`);

    let count = 1;

    count += dfs(cell - 1, row);
    count += dfs(cell + 1, row);
    count += dfs(cell, row - 1);
    count += dfs(cell, row + 1);

    return count;
  }
  return dfs(i, j);
}

const grid2 = [
  [0, 1, -1, 3],
  [4, 5, 6, 7],
  [8, -1, 10, 11],
  [12, 13, 14, 15],
];
console.log(reachableCells(grid2, 1, 3));
