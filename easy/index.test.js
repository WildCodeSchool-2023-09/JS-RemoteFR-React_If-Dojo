const { greeting } = require("./index");
const assert = require("node:assert").strict;

assert.strictEqual(typeof greeting, "function");
assert.strictEqual(greeting.length, 1);
assert.strictEqual(greeting("Samuel"), "Hello Samuel !");
assert.strictEqual(greeting("Anthony"), "Hello Anthony !");
