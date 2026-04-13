# q-002: Generate All Valid Parentheses Combinations

**Difficulty**: Medium  
**Topics**: Backtracking, Recursion, String building

---

## Problem

Write a recursive function `generateParens(n)` that returns all valid combinations of `n` pairs of parentheses.

### Examples

```js
generateParens(1)
// → ["()"]

generateParens(2)
// → ["(())", "()()"]

generateParens(3)
// → ["((()))", "(()())", "(())()", "()(())", "()()()"]
```

### Constraints

- `n >= 1`
- Order of results doesn't matter
- No duplicates in the output

---



## Complexity

| Approach | Time | Space |
|----------|------|-------|
| Backtracking | O(4^n / √n) — nth Catalan number | O(n) call stack depth |