/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  const output = [matrix[0][0]];
  let currentPos = [0, 0];
  const positionArray = matrix.map(row => row.map(element => false));
  const isWithinGrid = position => position[0] >= 0 && position[1] >= 0 && position[0] < matrix.length && position[1] < matrix[0].length;
  const visitedPos = () => positionArray[currentPos[0]][currentPos[1]] = true;
  const isVisited = position => positionArray[position[0]][position[1]];
  const isIncomplete = () => !positionArray.every(row => row.every(element => element));

  const moveRight = (position) => [position[0], position[1] + 1];
  const moveDown = (position) => [position[0] + 1, position[1]]
  const moveLeft = (position) => [position[0], position[1] - 1];
  const moveUp = (position) => [position[0] - 1, position[1]];

  let currentDirection = moveRight;
  visitedPos(currentPos);

  const changeDirection = () => {
    if (currentDirection === moveRight) {
      currentDirection = moveDown;
    } else if (currentDirection === moveDown) {
      currentDirection = moveLeft;
    } else if (currentDirection === moveLeft) {
      currentDirection = moveUp;
    } else {
      currentDirection = moveRight;
    }
  };

  while (isIncomplete()) {
    while (isWithinGrid(currentDirection(currentPos)) && !isVisited(currentDirection(currentPos)) && isIncomplete()) {
      currentPos = currentDirection(currentPos);
      visitedPos();
      output.push(matrix[currentPos[0]][currentPos[1]]);
    }
    changeDirection();
  }

  return output;
};
