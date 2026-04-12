#!/usr/bin/env node

/**
 * utils/testRunner.js
 * Usage: node utils/testRunner.js q-001
 */

const path = require("path");

const { execSync } = require("child_process");

const folder = process.argv[2];

if (!folder) {
    console.error("Usage: node utils/testRunner.js <q-folder>");
    console.error("Example: node utils/testRunner.js q-001");
    process.exit(1);
}

const testPath = path.resolve(__dirname, "..", folder, "test.js");

try {
    console.log(`\nRunning tests for ${file}...\n`);
    execSync(`node "${testPath}"`, { stdio: "inherit" });
} catch {
    process.exit(1);
}
