/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

// const board = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";

function sudokuChecker(board) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].every(element => checkAllNums(getColumn(board, element)) && checkAllNums(getRow(board, element)) && checkAllNums(getGrid(board, element)));
}

const getColumn = (board, col) => {
  let column = '';
  for (let i = 0; i < 9; i++) {
    column += board[10 * i + col];
  }
  return column;
}

const getRow = (board, row) => {
  return board.slice(row * 10, row * 10 + 9);
}

const getGrid = (board, grid) => {
  const firstPosition = [0, 3, 6, 30, 33, 36, 60, 63, 66][grid];
  return board.slice(firstPosition, firstPosition + 3) + board.slice(firstPosition + 10, firstPosition + 13) + board.slice(firstPosition + 20, firstPosition + 23);
}

const checkAllNums = ([...set]) => ['1', '2', '3', '4', '5', '6', '7', '8', '9'].every(element => set.includes(element));
