/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// var commonCharacters = function(string1, string2) {
//   let result = '';
//   for (let letter of string1) {
//     if (string2.includes(letter)) {
//       result = result.concat(letter);
//     }
//   }
//   return result;
// };

var commonCharacters = function(string1, ...strings) {
  let result = '';

  for (let letter of string1) {
    if (strings.every(element => element.includes(letter))) {
      result = result.concat(letter);
    }
  }

  return result;
};