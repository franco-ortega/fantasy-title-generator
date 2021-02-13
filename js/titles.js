import { getTitles, setTitles, createButton } from './utils.js';
import { editTitle, undo, save, tweetTitle } from './editTitle.js';
import { TITLES } from './constants.js';

const displayCase = document.getElementById('display-case');

const allTitles = getTitles(TITLES);

for(let i = 0; i < allTitles.length; i++) {
    const oneTitle = allTitles[i];

    setTimeout(() => {
        // Container to hold containers for a title: title box AND edit box
        const displayShelf = document.createElement('div');
        displayShelf.classList.add('display-shelf-div');
        displayShelf.classList.add('fade-in');

        // Container to hold title items: title field AND title buttons
        const titleBox = document.createElement('div');
        titleBox.classList.add('box-div');

        // Container to display title
        const titleField = document.createElement('div');
        titleField.classList.add('title-field');
        // titleField.classList.add('fade-in');
        titleField.textContent = `${oneTitle}`;

        // Container to hold title buttons: edit, delete, tweet
        const titleButtons = document.createElement('div');
        // titleButtons.classList.add('button-holder');

        // Edit Button
        const editButton = createButton('Edit');
        
        // Delete Button
        const deleteButton = createButton('Delete');
        
        // Tweet Button
        // const tweetButton = createButton('Tweet');
        const tweetButton = tweetTitle(oneTitle);


        
        // Append title items
        titleButtons.append(editButton, deleteButton, tweetButton);
        titleBox.append(titleField, titleButtons);


        // Container to hold edit items: edit field AND edit buttons
        // const editBox = document.createElement('div');
        // editBox.classList.add('box-div');
        // editBox.classList.add('hide');

        // // Edit field
        // const editField = document.createElement('input');
        // editField.classList.add('edit-field');
        // editField.value = oneTitle;

        // // Container to hold edit buttons
        // const editButtons = document.createElement('div');
        // // editButtons.classList.add('button-holder');

        // // Undo Button
        // const undoButton = createButton('Undo');

        // // Save Button
        // const saveButton = createButton('Save');

        // // Append edit items
        // editButtons.append(undoButton, saveButton);
        // editBox.append(editField, editButtons);

        const editBox = editTitle(oneTitle, titleBox, titleField, allTitles, i);
        console.log(editBox);


        // Append Display Shelf and Display Case items
        displayShelf.append(titleBox, editBox);
        displayCase.appendChild(displayShelf);


        // EVENT LISTENERS
        // Edit button logic
        editButton.addEventListener('click', () => {
            titleBox.classList.add('hide');
            editBox.classList.remove('hide');
        });
        
        // Undo button logic
        // const undoButton = createButton('Undo');
        // undoButton.addEventListener('click', () => {
        //     editBox.classList.add('hide');
        //     titleBox.classList.remove('hide');
        // });
        
        // Save button logic
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

        // Delete button logic
        deleteButton.addEventListener('click', () => {
            displayShelf.remove();
            const currentTitles = getTitles(TITLES);
            const editedTitles = currentTitles.filter(title => title !== oneTitle);
            setTitles(TITLES, editedTitles);
        })

        // Tweet button logic
        // tweetButton.addEventListener('click', () => {
        //     window.open(`https://twitter.com/intent/tweet?text=${allTitles[i]}`);
        // });

    }, 500 * i);

};



// const editBox = editTitle(oneTitle, titleBox, titleField, allTitles, i);
// console.log(editBox);
