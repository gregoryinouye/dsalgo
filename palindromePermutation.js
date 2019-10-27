/*

https://leetcode.com/problems/palindrome-permutation/

Given a string, determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false
Example 2:

Input: "aab"
Output: true
Example 3:

Input: "carerac"
Output: true

*/

function hasPalindromePermutation(s) {
  const set = new Set();
  for (let char of s) {
    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  return set.size <= 1;
}