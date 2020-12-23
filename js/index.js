import { adjectiveLists, nounLists } from '../data/data.js';
import { getTwoWords, createTitle, saveTitle } from '../js/utils.js'
import { TITLES } from './constants.js';

const titleDisplayCase = document.querySelector('.title-display');
const titleButton = document.querySelector('.button-title');
const nameInput = document.querySelector('.input-name');

titleButton.addEventListener('click', () => {    
    const oldContainer = document.querySelector('.span-title');
    if(oldContainer) {
        oldContainer.remove();
    };
    
    const titleContainer = document.createElement('span');
    titleContainer.classList.add('span-title');
    
    const name = nameInput.value;
    const adjectives = getTwoWords(adjectiveLists);
    const nouns = getTwoWords(nounLists);
    const title = createTitle(name, adjectives, nouns);

    saveTitle(title, TITLES);

    titleContainer.classList.add('fade-in');
    titleContainer.textContent = title;
    titleDisplayCase.appendChild(titleContainer);
});
