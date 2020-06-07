/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quicksort = function(array) {
  if (array.length === 1) {
    return [array[0]];
  } else if (array.length === 0) {
    return [];
  }
  let pivot = array[0];
  let smallerArray = [];
  let largerArray = [];
  for (let i = 1; i < array.length; i++) {
    if (pivot < array[i]) {
      largerArray.push(array[i]);
    } else {
      smallerArray.push(array[i]);
    }
  }
  return quicksort(smallerArray).concat(pivot, quicksort(largerArray));
};