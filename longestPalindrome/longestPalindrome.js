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
    while (j <= i && isPalindrome(input.slice(i - j, i + j + 1)) && i + j < input.length) {
      const currrent = input.slice(i - j, i + j + 1);
      if (currrent.length > palindrome.length) {
        palindrome = currrent;
      }
      j++;
    }

    j = 0;
    while (j <= i && isPalindrome(input.slice(i - j, i + j + 2)) && i + j < input.length) {
      const currrent = input.slice(i - j, i + j + 2);
      if (currrent.length > palindrome.length) {
        palindrome = currrent;
      }
      j++;
    }
  }

  return palindrome;
};



console.log('.',longestPalindrome('There was a tattarraat on the racecar. It made a funny noise, gfedcbabcdefg'),'.');
