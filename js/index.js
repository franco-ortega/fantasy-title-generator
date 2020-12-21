import { adjectiveLists, nounLists, adjectiveOrNounList } from '../data/data.js';
import { getWords, createTitle } from '../js/utils.js'

const titleSpan = document.querySelector('.span-title');
const titleButton = document.querySelector('.button-title');
const nameInput = document.querySelector('.input-name');

titleButton.addEventListener('click', () => {
    const name = nameInput.value;

    const adjectives = getWords(adjectiveLists);

    const nouns = getWords(nounLists);

    const title = createTitle(name, adjectives, nouns);

    titleSpan.textContent = title;
});
