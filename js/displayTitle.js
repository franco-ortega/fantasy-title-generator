import { getTitles, setTitles, createButton } from './utils.js';
import { editTitle, undo, save, tweetTitle } from './editTitle.js';

export const displayTitles = (titles) => {

    const titleArray = [];

    const newArray = titles.map(title => {
        let i = 0;

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
            titleField.textContent = title;

            // Container to hold title buttons: edit, delete, tweet
            const titleButtons = document.createElement('div');
            // titleButtons.classList.add('button-holder');

            // Edit Button
            const editButton = createButton('Edit');
            
            // Delete Button
            const deleteButton = createButton('Delete');
            
            // Tweet Button
            // const tweetButton = createButton('Tweet');
            const tweetButton = tweetTitle(title);

            // Append title items
            titleButtons.append(editButton, deleteButton, tweetButton);
            titleBox.append(titleField, titleButtons);

            // Append edit items
            const editBox = editTitle(title, titleBox, titleField, titles, i);
            // console.log(editBox);

            // Append Display Shelf and Display Case items
            displayShelf.append(titleBox, editBox);
            // displayCase.appendChild(displayShelf);

            // EVENT LISTENERS
            // Edit button logic
            editButton.addEventListener('click', () => {
                titleBox.classList.add('hide');
                editBox.classList.remove('hide');
            });

            // Save button logic
            const saveButton = createButton('Save');
            saveButton.addEventListener('click', () => {
                console.log('Save button clicked.');

                editBox.classList.add('hide');
                titleBox.classList.remove('hide');

                titleField.textContent = editField.value;
                titles[i] = editField.value;
                // console.log(allTitles[i]);

                setTitles(TITLES, titles);
            });

            // Delete button logic
            deleteButton.addEventListener('click', () => {
                displayShelf.remove();
                const currentTitles = getTitles(TITLES);
                const editedTitles = currentTitles.filter(title => title !== title);
                setTitles(TITLES, editedTitles);
            })

            // console.log(displayShelf);
            titleArray.push(displayShelf);
        }, 500 * (i + 1));

    });
    // console.log(titleArray);

    return titleArray;
};
