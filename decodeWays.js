/*

https://leetcode.com/problems/decode-ways/

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:

Input: "111"
Output: 3
Explanation: It could be decoded as "AAA" (1 1 1) or "KA" (11 1) or "AK (1 11)".

*/

var numDecodings = function(s) {
  if (s === '0') return 0;
  let result = 1;
  
  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '1') {
          const num = parseFloat(s[i + 1]);
          if (num > 0) {
              result++;
          }
      } else if (s[i] === '2') {
          const num = parseFloat(s[i + 1]);
          if (num > 0 && num < 7) {
              result++;
          }
      }
  }
  
  return result;
};
