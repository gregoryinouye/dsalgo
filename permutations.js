/*

const dict = { '1' : [a, b], '2': [c, d] };

Part 1:
Given an input string, return the permutations such that if you are given '12', the output is [ac, ad, bc, bd].

Part 2:
Assume you're given an input '1234' (and assume all keys exist). Instead of it just being 1,2,3, 4 it's actually 1,2,3,4 1,2,34, 1,23,4 1,234, 12,3,4, 12,34 123,4 1234.

dictionary keys:

1 : a, b
2: c, d
12: x
34: z
1234: abc

For Part 1, when you're given '12', the two keys you look at are just 1 and 2 since you go character by character, but in Part 2 return permutations using all enumerations of the number string.

*/