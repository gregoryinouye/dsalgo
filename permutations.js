/*

const dict = { '1' : [a, b], '2': [c, d] };

create a function that if given an input string
spits out the permutations
so if you're given '12'
the output is
[ac, ad, bc, bd]
that's the first part
the next part is
not assume you're given an input '1234' (assume all keys exist)
instead of it just being 1,2,3,4
it's actually
1,2,3,4 1,2,34, 1,23,4 1,234 12,3,4 12,34 123,4 1234

in your dictionary
it could be

1 : a, b
2: c, d
12: x
34: z
1234: abc
they just refer to different keys in the input dictioanry'
cause for part a, when you're given 12,
the two keys you look at are just 1 and 2
since you go character by character

*/