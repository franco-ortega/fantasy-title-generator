import { adjectiveLists, nounLists, adjectiveOrNounList } from '../data/data.js';
import { getTwoWords, createTitle, saveTitle } from '../js/utils.js'

const titleSpan = document.querySelector('.span-title');
const titleButton = document.querySelector('.button-title');
const nameInput = document.querySelector('.input-name');

titleButton.addEventListener('click', () => {
    const name = nameInput.value;

    const adjectives = getTwoWords(adjectiveLists);

    const nouns = getTwoWords(nounLists);

    const title = createTitle(name, adjectives, nouns);

    saveTitle(title);

    titleSpan.textContent = title;
});
