import { getTitles, setTitles } from './utils.js';
import { TITLES } from './constants.js';

const displayCase = document.getElementById('display-case');
// const container = document.createElement('div');
// displayCase.appendChild(container);

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const oneTitle = allTitles[i];

    setTimeout(() => {
        const deleteButton = document.createElement('button');
        const titleHolder = document.createElement('div');

        titleHolder.classList.add('fade-in');
        // titleHolder.classList.add('fade-in-down');
        titleHolder.textContent = `*${oneTitle}*`;

        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            const currentTitles = getTitles(TITLES);

            console.log('Delete button was clicked.');
            console.log(titleHolder);
            // titleHolder.remove();
            titleHolder.textContent = 'deleted';

            const oneLessTitle = currentTitles.filter(title => title !== oneTitle);

            setTitles(TITLES, oneLessTitle);

        })

        titleHolder.appendChild(deleteButton);
        
        displayCase.appendChild(titleHolder);
    }, 200 * i);
};
