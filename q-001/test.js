const { flatten } = require("./solution");

// #### Test runner 
function assert(label, got, expected) {
    const pass = JSON.stringify(got) === JSON.stringify(expected);
    console.log(`${pass ? "✅" : "❌"} ${label}`);
    if (!pass) {
        console.log(`   Expected: ${JSON.stringify(expected)}`);
        console.log(`   Got:      ${JSON.stringify(got)}`);
    }
}

function runSuite(fn, name) {
    console.log(`\n ---> ${name} <---`);

    assert("depth 1",
        fn([1, [2, [3, [4]]]], 1),
        [1, 2, [3, [4]]]
    );

    assert("depth 2",
        fn([1, [2, [3, [4]]]], 2),
        [1, 2, 3, [4]]
    );

    assert("depth Infinity",
        fn([1, [2, [3, [4]]]], Infinity),
        [1, 2, 3, 4]
    );

    assert("depth 0 — no change",
        fn([1, [2, [3]]], 0),
        [1, [2, [3]]]
    );

    assert("mixed types",
        fn([1, [null, [true, ["hello", [false]]]]]),
        [1, null, true, "hello", false]
    );

    assert("already flat",
        fn([1, 2, 3, 4]),
        [1, 2, 3, 4]
    );

    assert("empty array",
        fn([]),
        []
    );

    assert("nested empty arrays",
        fn([[], [[]], [[[]]]]),
        []
    );

    assert("multiple top-level nested",
        fn([[1, [2]], [3, [4, [5]]]], Infinity),
        [1, 2, 3, 4, 5]
    );

    assert("depth larger than actual nesting",
        fn([1, [2, [3]]], 10),
        [1, 2, 3]
    );
}

runSuite(flatten, "Approach -> use helper");

console.log("\nDone.\n");