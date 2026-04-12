function flatten(arr, depth = Infinity) {
  const result = [];
 
  function helper(current, d) {
    for (const el of current) {
      if (Array.isArray(el) && d > 0) {
        helper(el, d - 1);
      } else {
        result.push(el);
      }
    }
  }
 
  helper(arr, depth);
  return result;
}

module.exports ={flatten};