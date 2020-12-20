const { test } = QUnit;
import { adjectiveLists, nounLists, adjectiveOrNounList } from '../data/data.js';
import { getWords } from '../js/utils.js'

// Word selection tests
QUnit.module('Word Selection Tests');

  test('should return two different adjectives', function(assert) {

    const adjectives = getWords(adjectiveLists);

    assert.notEqual(adjectives[0], adjectives[1]);
  });

  test('should return two different nouns', function(assert) {

    const nouns = getWords(nounLists);

    assert.notEqual(nouns[0], nouns[1]);
  });

  test('should return two different adjectives or nouns', function(assert) {

    const adjectivesOrNouns = getWords(adjectiveOrNounList);

    assert.notEqual(adjectivesOrNouns[0], adjectivesOrNouns[1]);
  });

  test('should return a string', function(assert) {

    const words = getWords(adjectiveLists);
  
    let trueOrFalseOne;
    if(typeof words[0] === 'string') { trueOrFalseOne = true; }
    else { trueOrFalseOne = false; };
    
    let trueOrFalseTwo;
    if(typeof words[1] === 'string') { trueOrFalseTwo = true; }
    else { trueOrFalseTwo = false; };
    
    assert.true(trueOrFalseOne);
    assert.true(trueOrFalseTwo);
  });
