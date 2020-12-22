import { getTitles } from './utils.js';
import { TITLES } from './constants.js';

const displayCase = document.getElementById('display-case');

const yourTitles = getTitles(TITLES);

for(let i = 0; i < yourTitles.length; i++) {
    const oneTitle = yourTitles[i];
    // console.log(oneTitle);
    const titleBlock = document.createElement('div');
    titleBlock.textContent = oneTitle;
    console.log(titleBlock);
    displayCase.appendChild(titleBlock);
};
