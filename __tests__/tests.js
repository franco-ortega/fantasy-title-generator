const { test } = QUnit;
//import { add, addThree, addString } from './sample-tests.js';
import { adjectiveGroups, nounGroups, adjectiveOrNounGroup } from '../data/data.js';

// Word selection tests
QUnit.module('Word Selection Tests');

test('should return two different adjectives', function(assert) {

  const adjectives = getWords(adjectiveGroups);

  assert.notEqual(adjectives[0], adjectives[1]);
});

test('should return two different nouns', function(assert) {

  const nouns = getWords(nounGroups);

  assert.notEqual(nouns[0], nouns[1]);
});

test('should return two different adjectives or nouns', function(assert) {

  const adjectivesOrNouns = getWords(adjectiveOrNounGroup);

  assert.notEqual(adjectivesOrNouns[0], adjectivesOrNouns[1]);
});



// First set of sample tests


// QUnit.module('add', () => {
//   test('should add two numbers', function(assert) {
//       assert.equal(add(1, 1), 2, '1 + 1 = 2');
//   });    

//   test('should add two numbers', function(assert) {
//       const numOne = 5;
//       const numTwo = 6;
//       const expected = 11;

//       const actual = add(numOne, numTwo);

//       assert.equal(actual, expected, '5 + 6 = 11');
//   });    

//   test('should add two neagtive numbers', function(assert) {

//     const numOne = -1;
//     const numTwo = -2;
//     const expected = -3;

//     const actual = add(numOne, numTwo);

//       assert.strictEqual(actual, expected, `${numOne} + ${numTwo} = ${expected}`);
//   });    

//   QUnit.module('addThree', function() {
//     test('should add three numbers', function(assert) {
//       assert.equal(addThree(1, 1, 1), 3, '1 + 1 + 1 = 3');
//     });  
//   });  

// });  


