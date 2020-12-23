import { getTitles } from './utils.js';
import { TITLES } from './constants.js';

const displayCase = document.getElementById('display-case');
// const container = document.createElement('div');
// displayCase.appendChild(container);

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const oneTitle = allTitles[i];

    setTimeout(() => {    
        const titleHolder = document.createElement('div');
        titleHolder.classList.add('fade-in');
        // titleHolder.classList.add('fade-in-down');
        titleHolder.textContent = `*${oneTitle}*`;
        displayCase.appendChild(titleHolder);
    }, 200 * i);
};
