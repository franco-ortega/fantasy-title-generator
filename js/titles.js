import { getTitles } from './utils.js';
import { TITLES } from './constants.js';

const displayCase = document.getElementById('display-case');

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const oneTitle = allTitles[i];

    const titleHolder = document.createElement('div');
    titleHolder.textContent = oneTitle;

    displayCase.appendChild(titleHolder);
};
