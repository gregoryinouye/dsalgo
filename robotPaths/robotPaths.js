/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board = makeBoard(n), i = 0, j = 0) {
  const moveUp = () => [i - 1, j];
  const moveDown = () => [i + 1, j];
  const moveLeft = () => [i, j - 1];
  const moveRight = () => [i, j + 1];

  const isWithinGrid = position => position[0] >= 0 && position[0] < n && position[1] >= 0 && position[1] < n;
  const isValidMove = position => isWithinGrid(position) && !board.hasBeenVisited(position[0], position[1]);

  board.togglePiece(i, j);

  if (board.every(row => row.every(space => space))) {
    return 1;
  }

  const newPos = [];
  if (isValidMove(moveUp())) { newPos.push(moveUp()) }
  if (isValidMove(moveDown())) { newPos.push(moveDown()) }
  if (isValidMove(moveLeft())) { newPos.push(moveLeft()) }
  if (isValidMove(moveRight())) { newPos.push(moveRight()) }
  
  return newPos.map(element => robotPaths(n, board, element[0], element[1])).reduce((acc, curr) => acc + curr, 0);

};

console.log(robotPaths(2));
