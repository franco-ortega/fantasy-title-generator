

export function setTitles(key, value) {
    const stringyTitles = JSON.stringify(value);
    localStorage.setItem(key, stringyTitles);
};

export function getTitles(key) {
    const stringyTitles = localStorage.getItem(key);
    return JSON.parse(stringyTitles);
};

// Get a random item from an array
function selectRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
};

// Get one item from an array; this may be repetitive with the first function
function getOneItem(listOfItems) {
    const randomItem = selectRandomItem(listOfItems);
    return randomItem;
};

// Get two different arrays from an array of many arrays
export function getTwoLists(groupOfLists) {
    const twoLists = [];

    do {
        twoLists.push(getOneItem(groupOfLists));
        if(twoLists[0] === twoLists[1]) {
            twoLists.pop();
        };
    } while (twoLists.length < 2);

    return twoLists
};

// Get two words: one word each from two different arrays
export function getTwoWords(groupOfLists) {
    const twoWords = [];

    const lists = getTwoLists(groupOfLists)
        
    for (let i = 0; i < lists.length; i++) {
        const oneWord = getOneItem(lists[i]);
        twoWords.push(oneWord);
    };

    return twoWords;
};

// Create a title from one input value and two arrays with two strings each
export function createTitle(name, adjectives, nouns) {
    const firstAdjective = adjectives[0];
    const firstNoun = nouns[0];
    const secondAdjective = adjectives[1];
    const secondNoun = nouns[1];
    
    return `${name} the ${firstAdjective} ${firstNoun} of ${secondAdjective} ${secondNoun}`;
};

export function saveTitle(titleToSave, key) {
    const localStorageTitles = getTitles(key) || [];

    localStorageTitles.push(titleToSave);

    setTitles(key, localStorageTitles);

};


// titles.js utils
// Delete Button
export function deleteTitle(key, container, titleToDelete) {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('title-button');
    // deleteButton.classList.add('fade-in');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        container.remove();
        const currentTitles = getTitles(key);
        const editedTitles = currentTitles.filter(title => title !== titleToDelete);
        setTitles(key, editedTitles);
    })

    return deleteButton;
};

//Create Button
export function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}