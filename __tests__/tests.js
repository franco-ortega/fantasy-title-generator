const { test } = QUnit;
import { adjectiveLists, nounLists, adjectiveOrNounList } from '../data/data.js';
import { getTwoWords, getTwoLists, createTitle, saveTitle } from '../js/utils.js';

// Word selection tests
//
QUnit.module('Word Selection Tests');

  test('should return two different adjectives', function(assert) {

    const adjectives = getTwoWords(adjectiveLists);

    assert.notEqual(adjectives[0], adjectives[1]);
  });

  test('should return two different nouns', function(assert) {

    const nouns = getTwoWords(nounLists);

    assert.notEqual(nouns[0], nouns[1]);
  });

  test('should return two different adjectives or nouns', function(assert) {

    const adjectivesOrNouns = getTwoWords(adjectiveOrNounList);

    assert.notEqual(adjectivesOrNouns[0], adjectivesOrNouns[1]);
  });

  test('should return a string', function(assert) {

    const words = getTwoWords(adjectiveLists);
  
    let trueOrFalseOne;
    if(typeof words[0] === 'string') { trueOrFalseOne = true; }
    else { trueOrFalseOne = false; };
    
    let trueOrFalseTwo;
    if(typeof words[1] === 'string') { trueOrFalseTwo = true; }
    else { trueOrFalseTwo = false; };
    
    assert.true(trueOrFalseOne);
    assert.true(trueOrFalseTwo);
  });


  // Create a Title
  //
  QUnit.module('Create a Title Test');

  test('should take in one name, two adjectives, and two nouns, and return the fantasy title as a string', function(assert) {

    const name = 'Lila';
    const adjectives = getTwoWords(adjectiveLists);
    const nouns = getTwoWords(nounLists);

    const expected = `Lila the ${adjectives[0]} ${nouns[0]} of ${adjectives[1]} ${nouns[1]}`

    const actual = createTitle(name, adjectives, nouns);
console.log(expected)
    assert.equal(actual, expected);
  });


// Array length test
QUnit.module('Array Length Test');

  test('should return an array with two items', function(assert) {

    const twoListsOne =  getTwoLists(adjectiveLists);
    const twoListsTwo =  getTwoLists(nounLists);
    const twoListsThree =  getTwoLists(adjectiveOrNounList);

    assert.equal(twoListsOne.length, 2);
    assert.equal(twoListsTwo.length, 2);
    assert.equal(twoListsThree.length, 2);
  });

// Place a Title in localStorage
QUnit.module('Place a Title in localStorage');

  test('should place a Title string in an array and save it to localStorage', function(assert) {

    const title = 'Lila the Silver Feather of Seven Winds';
    const TESTS = 'TESTS'
    
    localStorage.removeItem(TESTS);

    saveTitle(title, TESTS);

    const expected = ['Lila the Silver Feather of Seven Winds'];

    const actual = JSON.parse(localStorage.getItem(TESTS));

    assert.deepEqual(actual, expected);
    
  });
