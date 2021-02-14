import { getTitles, setTitles, createButton } from './utils.js';

export const updateTitles = (titles, title) => {
    const currentTitles = getTitles(titles);
    const editedTitles = currentTitles.filter(currentTitle => currentTitle !== title);
    setTitles(titles, editedTitles);
};

export const createDisplayShelf = () => {
    const displayShelf = document.createElement('div');
    displayShelf.classList.add('display-shelf-div');
    displayShelf.classList.add('fade-in');

    return displayShelf;
};

export const createTitleBox = () => {
    const titleBox = document.createElement('div');
    titleBox.classList.add('box-div');
    return titleBox;
};

export const createTitleField = (title) => {
    const titleField = document.createElement('div');
    titleField.classList.add('title-field');
    titleField.textContent = title;
    return titleField;
};

export const createEditButton = (titleBox, editBox) => {
    const editButton = createButton('Edit');
    editButton.addEventListener('click', () => {
        titleBox.classList.add('hide');
        editBox.classList.remove('hide');
    });
    return editButton;
}

export const createDeleteButton = (titles, title, container) => {
    const deleteButton = createButton('Delete');
    deleteButton.addEventListener('click', () => {
        container.remove();
        updateTitles(titles, title);
    });
    return deleteButton;
}

export const createTweetButton = (title) => {
    const tweetButton = createButton('Tweet');
    tweetButton.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${title}`);
    });
    return tweetButton;
};

export const createEditBox = () => {
    const editBox = document.createElement('div');
    editBox.classList.add('box-div');
    editBox.classList.add('hide');
    return editBox;
};

export const createEditField = (title) => {
    const editField = document.createElement('input');
    editField.classList.add('edit-field');
    editField.value = title;
    return editField;
};
