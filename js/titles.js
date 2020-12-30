import { getTitles, setTitles } from './utils.js';
import { TITLES } from './constants.js';

const displayCase = document.getElementById('display-case');
// displayCase.setAttribute('class', 'fade-out');

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const oneTitle = allTitles[i];

    setTimeout(() => {
        const titleBox = document.createElement('div');
        titleBox.setAttribute('id', 'title-box');
        titleBox.classList.add('fade-in');

        const titleHolder = document.createElement('div');
        titleHolder.setAttribute('id', 'title-holder');
        titleHolder.classList.add('fade-in');
        titleHolder.textContent = `*${oneTitle}*`;
        // titleHolder.classList.add('fade-in-down');

        // const deleteHolder = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', 'delete-button');
        deleteButton.classList.add('fade-in');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            titleBox.remove();
            const currentTitles = getTitles(TITLES);
            const editedTitles = currentTitles.filter(title => title !== oneTitle);
            setTitles(TITLES, editedTitles);
        })

        titleBox.append(titleHolder, deleteButton);
        displayCase.appendChild(titleBox);
    }, 500 * i);

};

// setTimeout(() => {
//     displayCase.setAttribute('id', 'scroll');
//     displayCase.setAttribute('class', 'fade-in');
    
    
// }, 2000);
