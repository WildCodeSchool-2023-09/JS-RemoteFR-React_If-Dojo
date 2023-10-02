const { calculerRayon } = require("./index");
const assert = require("node:assert").strict;

assert.strictEqual(typeof calculerRayon, "function");
assert.strictEqual(calculerRayon.length, 1);
assert.strictEqual(calculerRayon(2), 1);
assert.strictEqual(calculerRayon(4), 2);
assert.strictEqual(calculerRayon(6), 3);
