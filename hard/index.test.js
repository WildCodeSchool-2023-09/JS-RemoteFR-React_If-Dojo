const { chessboard } = require("./index");
const assert = require("node:assert").strict;

assert.strictEqual(typeof chessboard, "function");
assert.strictEqual(chessboard().length, 8);
assert.strictEqual(chessboard()[0].length, 8);
assert.strictEqual(chessboard()[0][0], "a - 1");
assert.strictEqual(chessboard()[7][7], "h - 8");
assert.strictEqual(chessboard()[4][4], "e - 5");
