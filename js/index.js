import { adjectiveLists, nounLists, adjectiveOrNounList } from '../data/data.js';
import { getWords } from '../js/utils.js'

export function createTitle(name, adjectives, nouns) {
    const firstAdjective = adjectives[0];
    const firstNoun = nouns[0];
    const secondAdjective = adjectives[1];
    const secondNoun = nouns[1];
    
    return `${name} the ${firstAdjective} ${firstNoun} of ${secondAdjective} ${secondNoun}`;
};

const adjectives = getWords(adjectiveLists);
const nouns = getWords(nounLists);
const title = createTitle('Deena', adjectives, nouns);

console.log(title);

