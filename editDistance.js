// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  let count = 0;
  let stringOne = str1;
  let stringTwo = str2;
  let j = 0;

  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] === stringTwo[j]) {
      j++;
      continue;
    } else if (stringOne.length - i > stringTwo.length - j) {
      // remaining string length of One > Two => prefer removal
      if (!stringTwo.slice(j).includes(stringOne[i])) {
        stringOne = stringOne.slice(0, i) + stringOne(i + 1);
      } else {
        count++;
        j++;
        continue;
      }
    } else if (stringOne.length - i < stringTwo.length - j) {
      // remaining string length of One < Two => prefer insertion
      if (stringTwo.slice(j).includes(stringOne[i])) {
        stringOne = stringOne.slice(0, i) + stringOne(i + 1);
      } else {
        count++;
        j++;
        continue;
      }
    } else {
      // remaining string length is equal => prefer replacement
      count++;
      j++;
      continue;
    }
  }

  // insertion - use if remaining str1 length < remaining str 2 length
  // removal - use if large part of remaining str1 matches str2
  // replacement - use if remaining str1 length is = str2 length
  return count;
}

console.log(editDistance('sring', 'string')); // 1 - insertion is faster than replacement
console.log(editDistance('ring', 'ding')); // 1 - replacement is faster than insertion/removal
console.log(editDistance('abcdf', 'abcdef')); // 1 - insertion in middle
console.log(editDistance('abcd', 'abcde')); // 1 - insertion at end
console.log(editDistance('abcdf', 'abcde')); // 1 - replacement at end
console.log(editDistance('abcdeftlmnop', 'abcdefghijklmnop')); // 5 - group insert/replacement where remaining length of second string is large
console.log(editDistance('abcdefghlmnopqijkl', 'abcdefghijklmnopq')); // 7 - group insert where remaining length of string is large
console.log(editDistance('opllerations', 'operations')); // 2 - string two removals
