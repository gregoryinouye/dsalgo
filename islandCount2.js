/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  const map = mapStr.split('\n').map(element => [...element]);
  
  const isUpLand = (i, j) => map[i - 1] ? map[i - 1][j] === '0' : false;
  const isDownLand = (i, j) => map[i + 1] ? map[i + 1][j] === '0' : false;
  const isRightLand = (i, j) => map[i][j + 1] === '0';
  const isLeftLand = (i, j) => map[i][j - 1] === '0';

  const findConnectedLand = (i, j) => {
    if (map[i][j] !== '0') {
      return;
    } else {
      map[i][j] = 1;
      if (isUpLand(i, j)) {
        findConnectedLand(i - 1, j);
      }
      if (isDownLand(i, j)) {
        findConnectedLand(i + 1, j);
      }
      if (isRightLand(i, j)) {
        findConnectedLand(i, j + 1);
      }
      if (isLeftLand(i, j)) {
        findConnectedLand(i, j - 1);
      }
    }
  }

  let islandCount = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j ++) {
      if (map[i][j] === '0') {
        islandCount++;
        findConnectedLand(i, j);
      }
    }
  }

  return islandCount;
};
