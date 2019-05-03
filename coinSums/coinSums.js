/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// let currObj = {1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 200: 0};
// let currArr = [200, 100, 50, 20, 10, 5, 2, 1];
// let currSoln = [0, 0, 0, 0, 0, 0, 0, 0];

let calcValue = function(qtyArr) {
  let valArr = [200, 100, 50, 20, 10, 5, 2, 1];
  return qtyArr.reduce((accumulator, currVal, currIndex) => currVal * valArr[currIndex] + accumulator, 0);
}

var makeChange = function(total) {
  let solutions = 0;

  let makeChangeRecurser = function(currArr, index) {
    currArr[index] += 1;
    currentTotal = calcValue(currArr);
    if (currentTotal < total) {
      makeChangeRecurser(currArr, index);
    }
    if (currentTotal === total) {
      solutions += 1;
    }
    currArr[index] -= 1;
    if (index < 7) {
    makeChangeRecurser(currArr, index + 1);
    }
  }

  makeChangeRecurser([0, 0, 0, 0, 0, 0, 0, 0], 0);
  return solutions;
};