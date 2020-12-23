import { getTitles } from './utils.js';
import { TITLES } from './constants.js';

const displayCase = document.getElementById('display-case');

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const container = document.createElement('div');
    displayCase.appendChild(container);

    setTimeout(() => {
    const oneTitle = allTitles[i];
    
        const titleHolder = document.createElement('div');
        titleHolder.classList.add('fade-in');
        titleHolder.classList.add('fade-in-down');
        titleHolder.textContent = `* ${oneTitle} *`;
        container.appendChild(titleHolder);

    }, 200 * i);

};
