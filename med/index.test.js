const { fizzbuzz } = require("./index");
const assert = require("node:assert").strict;

assert.strictEqual(typeof fizzbuzz, "function");
assert.strictEqual(fizzbuzz.length, 1);
assert.strictEqual(fizzbuzz(1), "");
assert.strictEqual(fizzbuzz(3), "Fizz");
assert.strictEqual(fizzbuzz(4), "");
assert.strictEqual(fizzbuzz(5), "Buzz");
assert.strictEqual(fizzbuzz(7), "");
assert.strictEqual(fizzbuzz(15), "FizzBuzz");
