import { adjectiveLists, nounLists, adjectiveOrNounList } from '../data/data.js';
import { getTwoWords, createTitle, saveTitle } from '../js/utils.js'
import { TITLES } from './constants.js';

const titleSpan = document.querySelector('.span-title');
const titleButton = document.querySelector('.button-title');
const nameInput = document.querySelector('.input-name');

titleButton.addEventListener('click', () => {
    const oldDiv = document.querySelector('.div-title');
    if(oldDiv) {
        oldDiv.remove();
    };
    
    const spanDiv = document.createElement('div');
    spanDiv.classList.add('div-title');

    const name = nameInput.value;

    const adjectives = getTwoWords(adjectiveLists);

    const nouns = getTwoWords(nounLists);

    const title = createTitle(name, adjectives, nouns);

    saveTitle(title, TITLES);

    // titleSpan.textContent = title;
    spanDiv.classList.add('fade-in');
    // spanDiv.classList.add('fade-in-down');
    spanDiv.textContent = title;
    titleSpan.appendChild(spanDiv);
});
