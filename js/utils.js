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

export function saveTitle(titleToSave) {
    const titleEntry = {
        title: titleToSave
    }
    return titleEntry;
};