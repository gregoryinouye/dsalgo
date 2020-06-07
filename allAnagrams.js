/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// var allAnagrams = function(string) {
//   let resultArray = [];
//   let getAnagrams = function(current, remaining) {
//     if (remaining.length === 1) {
//       resultArray.push(current.push(remaining[0]).join(''));
//     } else {
//       remaining.forEach((letter, index) => getAnagrams(current.push(letter), remaining.splice(index, 1)));
//     }
//   };
//   getAnagrams([], [...string]);
//   return resultArray;
// };


var allAnagrams = function(string) {
  let resultArray = [];
  let getAnagrams = function(current, remaining) {
    if (remaining.length === 1) {
      resultArray.push(current + remaining);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        getAnagrams(current + remaining.slice(i, i + 1), remaining.slice(0, i) + remaining.slice(i + 1, remaining.length));
      }
    }
  };

  getAnagrams('', string);

  let resultSet = new Set();
  resultArray.forEach(item => resultSet.add(item));
  let finalResult = [];
  resultSet.forEach(item => finalResult.push(item));

  return finalResult;
};

// time complexity: quadratic