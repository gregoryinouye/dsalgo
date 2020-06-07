/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

var deepEquals = function(apple, orange) {
  if (typeof apple === 'object' && typeof orange === 'object') {
    let keysOne = Object.keys(apple).sort();
    let keysTwo = Object.keys(orange).sort();
    if (!keysOne.every((element, index) => element === keysTwo[index])) {
      return false;
    }
    let valuesOne = keysOne.map(key => apple[key]);
    let valuesTwo = keysTwo.map(key => orange[key]);
    let compareArr = valuesOne.map((element, index) => deepEquals(element, valuesTwo[index]));
    return compareArr.reduce((accumulator, current) => accumulator && current, true);
  } else {
    return apple === orange;
  }
};