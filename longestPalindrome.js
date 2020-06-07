/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let palindrome = '';
  const input = string.toLowerCase();
  const isPalindrome = input => [...input].reverse().join('') === input;

  for (let i = 0; i < input.length; i++) {
    let j = 0;
    for (j = 0; j <= i; j++) {
      const evenPalindrome = input.slice(i - j + 1, i + j + 1);
      const oddPalindrome = input.slice(i - j, i + j + 1);
      if (isPalindrome(oddPalindrome) && oddPalindrome.length > palindrome.length) {
        palindrome = oddPalindrome;
      } else if (isPalindrome(evenPalindrome) && evenPalindrome.length > palindrome.length) {
        palindrome = evenPalindrome;
      }
    }
  }

  return palindrome;
};
