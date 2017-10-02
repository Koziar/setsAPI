# Assignment #1 - Programming with sets Discrete Mathematics
### Lukasz Koziarski & William Bech

## A set API
In your favorite language, or in a language you want to explore, create an
API for handling sets. Sets can either be finite as {7, 9, 13} or infinite as Z.
Create methods for handling:
* Membership
* Intersection
* Union
* Difference
* Complement

Also create methods for handling subsets and equality as in exercise. Bevare,
that infinite sets might not be determined to be subsets, so we end up with
five cases:
* A ⊂ B: -1
* A = B: 0
* A ⊃ B: 1
* Undeterminable: 2
* A *⊂ B ∧ B *⊂ A: -2
