/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let palindrome = '';
  string = string.toLowerCase();
  const isPalindrome = string => [...string].reverse().join('') === string;

  for (let i = 0; i < string.length; i++) {
    let j = 0;
    while (j <= i && isPalindrome(string.slice(i - j, i + j + 1)) && i + j < string.length) {
      const currrent = string.slice(i - j, i + j + 1);
      if (currrent.length > palindrome.length) {
        palindrome = currrent;
      }
      j++;
    }
  }

  return palindrome;
};
