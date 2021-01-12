import { adjectiveLists, nounLists } from '../data/data.js';
import { getTwoWords, createTitle, saveTitle } from './utils.js'
import { TITLES } from './constants.js';

const titleDisplayCase = document.querySelector('#title-display');
const titleButton = document.querySelector('#button-title');
const nameInput = document.querySelector('input');

titleButton.disabled = true;

nameInput.addEventListener('keyup', () => {
    titleDisplayCase.classList.add('hide');
    if(nameInput.value.length) {
        titleButton.disabled = false;
    } else {
        titleButton.disabled = true;
    }
})

titleButton.addEventListener('click', () => {
    const oldContainer = document.querySelector('.span-title');
    if(oldContainer) {
        oldContainer.remove();
    };
    
    const titleContainer = document.createElement('span');
    titleContainer.classList.add('span-title');
    titleContainer.classList.add('adjustment');
    
    const name = nameInput.value;
    const adjectives = getTwoWords(adjectiveLists);
    const nouns = getTwoWords(nounLists);
    const title = createTitle(name, adjectives, nouns);

    saveTitle(title, TITLES);

    titleDisplayCase.classList.remove('hide');
    titleDisplayCase.classList.add('fade-in');

    titleContainer.textContent = title;
    titleDisplayCase.appendChild(titleContainer);

    nameInput.value = '';
    titleButton.disabled = true;
});
