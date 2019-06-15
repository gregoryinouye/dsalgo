/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  let i = 0;
  let start = rotated[0];
  let current = rotated[0];
  let previous = null;
  let lowest = null;
  let targetIndex = null;

  while (!targetIndex && !lowest && i < rotated.length) {
    if (current < previous) {
      lowest = current;
    }
    if (current === target) {
      targetIndex = i;
    }
    i++;
    current = rotated[i];
  }

  while (!targetIndex && target > lowest && target < start && i < rotated.length) {
    if (current === target) {
      targetIndex = i;
    }
    i++;
    current = rotated[i];
  }

  return targetIndex;
};

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)) // 5
// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)) // null
// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1.5)) // null
// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], -1)) // null
