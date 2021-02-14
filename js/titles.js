import { getTitles, setTitles, createButton } from './utils.js';
import { TITLES } from './constants.js';
import { createDisplayShelf, createTitleBox, createTitleField, createEditButton, createDeleteButton, createTweetButton, createEditBox, createEditField, updateTitles } from './titleUtils.js';

const displayCase = document.getElementById('display-case');

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const oneTitle = allTitles[i];

    setTimeout(() => {
        const displayShelf = createDisplayShelf();

        const titleBox = createTitleBox();
        const titleField = createTitleField(oneTitle);

        const editBox = createEditBox();
        const editField = createEditField(oneTitle);

        // TITLE BUTTONS
        const titleButtons = document.createElement('div');
        const editButton = createEditButton(titleBox, editBox);
        const deleteButton = createDeleteButton(TITLES, oneTitle, displayShelf);
        const tweetButton = createTweetButton(oneTitle);

        // const deleteButton = createButton('Delete');
        // deleteButton.addEventListener('click', () => {
        //     displayShelf.remove();
        //     updateTitles(TITLES, oneTitle);
        // });

        // EDIT BUTTONS
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


        // APPENDS
        titleButtons.append(editButton, deleteButton, tweetButton);
        titleBox.append(titleField, titleButtons);

        editButtons.append(undoButton, saveButton);
        editBox.append(editField, editButtons);

        // DISPLAY
        
        displayShelf.append(titleBox, editBox);
        displayCase.appendChild(displayShelf);
    }, 500 * i);
};
