/*

Given a matrix of 1s and 0s, return the number of "islands" in the matrix.
A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

*/

const islands = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 1]
];

function getNumberOfIslands(binaryMatrix) {
  let count = 0;

  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        count++;
        islandSearch(i, j);
      }
    }
  }
    
  function islandSearch(i, j) {
    if (binaryMatrix[i][j] === 1) {
      binaryMatrix[i][j] = 2;

      if (i - 1 >= 0) islandSearch(i - 1, j);
      if (i + 1 < binaryMatrix.length) islandSearch(i + 1, j);
      if (j - 1 >= 0) islandSearch(i, j - 1);
      if (j + 1 < binaryMatrix[0].length) islandSearch(i, j + 1);
    }
  }
 
  return count;
};

console.log(getNumberOfIslands(islands)); // 4
