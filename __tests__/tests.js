const { test } = QUnit;
import { add, addThree, addString } from './sample-tests.js';
import { adjectiveGroups, nounGroups, adjectiveOrNounGroup } from '../data/data.js';

const test1 = adjectiveGroups;
const test2 = nounGroups;
const test3 = adjectiveOrNounGroup;
console.log(test1, test2, test3);

// First set of sample tests
QUnit.module('add', () => {
  test('should add two numbers', function(assert) {
      assert.equal(add(1, 1), 2, '1 + 1 = 2');
  });

  test('should add two numbers', function(assert) {
      const numOne = 5;
      const numTwo = 6;
      const expected = 11;

      const actual = add(numOne, numTwo);

      assert.equal(actual, expected, '5 + 6 = 11');
  });

  test('should add two neagtive numbers', function(assert) {

    const numOne = -1;
    const numTwo = -2;
    const expected = -3;

    const actual = add(numOne, numTwo);

      assert.strictEqual(actual, expected, `${numOne} + ${numTwo} = ${expected}`);
  });

  QUnit.module('addThree', function() {
    test('should add three numbers', function(assert) {
      assert.equal(addThree(1, 1, 1), 3, '1 + 1 + 1 = 3');
    });
  });

});

// Second suite of sample tests
QUnit.module('String Tests');

test('should add two strings', function(assert) {
  assert.equal(addString('Hello', 'there'), 'Hellothere', 'Hellothere');
});

test('should add two strings', function(assert) {
  assert.equal(addString('Hey', 'yo'), 'Heyyo', 'Heyyo');
});