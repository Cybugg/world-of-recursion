const { generateParens} = require("./solution");

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Sort both arrays before comparing so order doesn't matter
function assertCombo(label, got, expected) {
  const g = [...got].sort();
  const e = [...expected].sort();
  const pass = JSON.stringify(g) === JSON.stringify(e);
  console.log(`${pass ? "✅" : "❌"} ${label}`);
  if (!pass) {
    console.log(`   Expected: ${JSON.stringify(e)}`);
    console.log(`   Got:      ${JSON.stringify(g)}`);
  }
}

// Every string must be a genuinely valid parentheses sequence
function isValid(str) {
  let balance = 0;
  for (const ch of str) {
    if (ch === "(") balance++;
    else balance--;
    if (balance < 0) return false;
  }
  return balance === 0;
}

function assertAllValid(label, got, n) {
  const allValid = got.every(isValid);
  const correctLength = got.every(s => s.length === 2 * n);
  const noDupes = new Set(got).size === got.length;
  const pass = allValid && correctLength && noDupes;
  console.log(`${pass ? "✅" : "❌"} ${label}`);
  if (!allValid)       console.log("   Some strings are not valid parentheses");
  if (!correctLength)  console.log("   Some strings have wrong length");
  if (!noDupes)        console.log("   Duplicates found");
}

// Known counts: number of valid combos = nth Catalan number
// n=1→1, n=2→2, n=3→5, n=4→14, n=5→42
function assertCount(label, got, expected) {
  const pass = got.length === expected;
  console.log(`${pass ? "✅" : "❌"} ${label}`);
  if (!pass) console.log(`   Expected ${expected} combinations, got ${got.length}`);
}

// ─── Test suite ───────────────────────────────────────────────────────────────

function runSuite(fn, name) {
  console.log(`\n── ${name} ──`);

  assertCombo("n=1", fn(1), ["()"]);
  assertCombo("n=2", fn(2), ["(())", "()()"]);
  assertCombo("n=3", fn(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);

  assertCount("n=4 count = 14", fn(4), 14);
  assertCount("n=5 count = 42", fn(5), 42);

  assertAllValid("n=1 all valid", fn(1), 1);
  assertAllValid("n=2 all valid", fn(2), 2);
  assertAllValid("n=3 all valid", fn(3), 3);
  assertAllValid("n=4 all valid", fn(4), 4);
  assertAllValid("n=5 all valid", fn(5), 5);
}

runSuite(generateParens,           "Approach : backtracking + closure");


console.log("\nDone.\n");