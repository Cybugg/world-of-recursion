function generateParens(n) {
  const result = [];
 
  function helper(current, open, close) {
    // Base case: string is complete
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
 
    // Branch 1: add "(" if we haven't used all n open brackets
    if (open < n) {
      helper(current + "(", open + 1, close);
    }
 
    // Branch 2: add ")" only if there's an unmatched "(" waiting
    if (close < open) {
      helper(current + ")", open, close + 1);
    }
  }
 
  helper("", 0, 0);
  return result;
}
 

module.exports = { generateParens };