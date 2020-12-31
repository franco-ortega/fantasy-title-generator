import { getTitles, deleteTitle, createButton } from './utils.js';
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


        // EDIT BUTTON logics STARTS
        const editButton = document.createElement('button');
        editButton.classList.add('title-button');
        editButton.textContent = 'Edit';

        editButton.addEventListener('click', () => {
            const editBox = document.createElement('div');

            //Edit Input
            const editField = document.createElement('input');
            editField.setAttribute('id', 'edit-field');
            editField.value = oneTitle;

            //Edit Buttons; Buttons take in one string as an arugement
            //// Undo Button
            const undoButton = createButton('Undo');
            undoButton.classList.add('title-button');
            undoButton.addEventListener('click', () => {
                editBox.remove();
            })
            
            ////Save Button
            const saveButton = createButton('Save');
            saveButton.classList.add('title-button');




            editBox.append(editField, undoButton, saveButton)

            titleBox.appendChild(editBox);
        })




        // EDIT BUTTON logics ENDS

        const deleteButton = deleteTitle(TITLES, titleBox, oneTitle);


        titleBox.append(titleHolder, editButton, deleteButton);
        displayCase.appendChild(titleBox);
    }, 500 * i);

};

// setTimeout(() => {
//     displayCase.setAttribute('id', 'scroll');
//     displayCase.setAttribute('class', 'fade-in');
    
    
// }, 2000);
