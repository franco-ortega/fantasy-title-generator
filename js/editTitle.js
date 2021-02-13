import { getTitles, setTitles, createButton } from './utils.js';
import { TITLES } from './constants.js';

export function editTitle(title, titleContainer, titleField, allTitles, i) {

    // Container to hold edit items: edit field AND edit buttons
    const editBox = document.createElement('div');
    editBox.classList.add('box-div');
    editBox.classList.add('hide');

    // Edit field
    const editField = document.createElement('input');
    editField.classList.add('edit-field');
    editField.value = title;
    
    // Container to hold edit buttons
    const editButtons = document.createElement('div');
    // editButtons.classList.add('button-holder');
    
    // Undo Button
    // const undoButton = createButton('Undo');
    // undoButton.addEventListener('click', () => {
    //     editBox.classList.add('hide');
    //     titleContainer.classList.remove('hide');
    // });

    const undoButton = undo(editBox, titleContainer)
    // console.log(undoButton);
    
    // Save Button
    // const saveButton = createButton('Save');

    // console.log(titleField);

    const saveButton = save(editBox, titleContainer, titleField, allTitles, editField, i, TITLES, title);
    
    // Append edit items
    editButtons.append(undoButton, saveButton);
    editBox.append(editField, editButtons);

    return editBox;
    

}


export function undo(editContainer, titleContainer) {
    const undoButton = createButton('Undo');
    undoButton.addEventListener('click', () => {
        editContainer.classList.add('hide');
        titleContainer.classList.remove('hide');
    });

    return undoButton;
}

export function save(editContainer, titleContainer, titleField, allTitles, editField, i, TITLES, title) {
    const saveButton = createButton('Save');
    saveButton.addEventListener('click', () => {
    console.log('Save button clicked.');
    console.log(allTitles[i]);
    console.log(title);


    editContainer.classList.add('hide');
    titleContainer.classList.remove('hide');

    titleField.textContent = editField.value;
    allTitles[i] = editField.value;
    console.log(TITLES);

    setTitles(TITLES, allTitles);
    });

    return saveButton;


}



export function tweetTitle(title) {

    const tweetButton = createButton('Tweet');

    tweetButton.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${title}`);
    });

    return tweetButton;


};