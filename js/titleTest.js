import { getTitles, setTitles, createButton } from './utils.js';
import { TITLES } from './constants.js';
import { createDisplayShelf, createTitleBox, createTitleField, tweetTitle, createEditBox, createEditField } from './titleUtils.js';

const displayCase = document.getElementById('display-case');

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const oneTitle = allTitles[i];

    setTimeout(() => {

        // TITLE BOX
        const titleBox = createTitleBox();
        const titleField = createTitleField(oneTitle);
        const titleButtons = document.createElement('div');

        const editButton = createButton('Edit');
        editButton.addEventListener('click', () => {
            titleBox.classList.add('hide');
            editBox.classList.remove('hide');
        });

        const deleteButton = createButton('Delete');
        deleteButton.addEventListener('click', () => {
            displayShelf.remove();
            const currentTitles = getTitles(TITLES);
            const editedTitles = currentTitles.filter(title => title !== oneTitle);
            setTitles(TITLES, editedTitles);
        });

        const tweetButton = tweetTitle(oneTitle);
        
        titleButtons.append(editButton, deleteButton, tweetButton);
        titleBox.append(titleField, titleButtons);

        // EDIT BOX
        const editBox = createEditBox();
        const editField = createEditField(oneTitle);
        const editButtons = document.createElement('div');

        const undoButton = createButton('Undo');
        undoButton.addEventListener('click', () => {
            editBox.classList.add('hide');
            titleBox.classList.remove('hide');
        });

        const saveButton = createButton('Save');
        saveButton.addEventListener('click', () => {
            console.log('Save button clicked.');

            editBox.classList.add('hide');
            titleBox.classList.remove('hide');

            titleField.textContent = editField.value;
            allTitles[i] = editField.value;
            console.log(allTitles[i]);

            setTitles(TITLES, allTitles);
        });

        editButtons.append(undoButton, saveButton);
        editBox.append(editField, editButtons);

        // DISPLAY
        const displayShelf = createDisplayShelf();
        displayShelf.append(titleBox, editBox);
        displayCase.appendChild(displayShelf);
    }, 500 * i);
};
