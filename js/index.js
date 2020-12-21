import { adjectiveLists, nounLists, adjectiveOrNounList } from '../data/data.js';
import { getWords } from '../js/utils.js'

const titleSpan = document.querySelector('.span-title');
const titleButton = document.querySelector('.button-title');
const nameInput = document.querySelector('.input-name');

export function createTitle(name, adjectives, nouns) {
    const firstAdjective = adjectives[0];
    const firstNoun = nouns[0];
    const secondAdjective = adjectives[1];
    const secondNoun = nouns[1];
    
    return `${name} the ${firstAdjective} ${firstNoun} of ${secondAdjective} ${secondNoun}`;
};

titleButton.addEventListener('click', () => {
    const name = nameInput.value;

    const adjectives = getWords(adjectiveLists);

    const nouns = getWords(nounLists);

    const title = createTitle(name, adjectives, nouns);

    titleSpan.textContent = title;
});

