/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  let targetIndex = null;
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let midIndex = Math.ceil(array.length / 2);

  while (minIndex !== maxIndex && !targetIndex) {
    if (target > array[midIndex]) {
      minIndex = midIndex;
      midIndex = Math.ceil((minIndex + maxIndex) / 2);
    } else if (target < array[midIndex]) {
      maxIndex = midIndex;
      midIndex = Math.floor((minIndex + maxIndex) / 2);
    } else if (target === array[midIndex]) {
      targetIndex = midIndex;
    }
  }

  return targetIndex;
};