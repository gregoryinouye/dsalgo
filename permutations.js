/*

Part A:

const dict = { '1' : [a, b], '2': [c, d] };

Given an input string, return the permutations such that if you are given '12', the output is [ac, ad, bc, bd].



Part B:

Assume you're given an input '1234' (and assume all keys exist). Instead of the output just being permutations of the values for keys 1,2,3,4, return permutations of the values for the sets of keys as follows:

1,2,3,4
1,2,34
1,23,4
1,234
12,3,4
12,34
123,4
1234

{
  1: ['a', 'b']
  2: ['c', 'd']
  12: ['x']
  34: ['z']
  1234: ['abc']
}

*/