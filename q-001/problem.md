#  q-001 : Flatten Arbitrarily Nested Arrays (Depth-Aware)

**Difficulty**: Medium  
**Topics**: Recursion, Array traversal, Depth control

---

## Problem

Write a recursive function `flatten(arr, depth)` that flattens a nested array up to a given depth.

- If `depth` is `Infinity`, flatten completely.
- If `depth` is `0`, return the array as-is.
- Negative depth should return the array as-is.

### Examples

```js
flatten([1, [2, [3, [4]]]], 1)
// → [1, 2, [3, [4]]]

flatten([1, [2, [3, [4]]]], 2)
// → [1, 2, 3, [4]]

flatten([1, [2, [3, [4]]]], Infinity)
// → [1, 2, 3, 4]

flatten([1, [2, [3]]], 0)
// → [1, [2, [3]]]

flatten([[1, [2]], [3, [4, [5]]]], Infinity)
// → [1, 2, 3, 4, 5]
```

### Constraints

- Array elements can be numbers, strings, booleans, `null`, or nested arrays
- Do **not** use `Array.prototype.flat()`
- Must be purely recursive (no loops in your recursive case)

---


## Complexity

| Approach | Time | Space |
|----------|------|-------|
| Recursive | O(n) where n = total elements | O(d) call stack depth |