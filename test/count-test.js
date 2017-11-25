var test = require("tape"),
    wordCount = require("..")
    ;

test('Count should return an empty arry with an empty text', (assert) => {
  var result = wordCount.count('');
  assert.equal(result.count, 0);
  assert.end();
});

test('Count should return an array with two element with two words and accented chars', (assert) => {
  var result = wordCount.count('wordá other');
  assert.equal(result.count, 2);
  assert.end();
});

test('Count should return an array with two element with two words and other chars', (assert) => {
  var result = wordCount.count('- wordá, (other).');
  assert.equal(result.count, 2);
  assert.end();
});

test('Count should return an array with two element and ignore excluded words', (assert) => {
  var result = wordCount.count('- Un wordá, y (el other).');
  assert.equal(result.count, 2);
  assert.equal(result.total, 5);
  assert.end();
});
