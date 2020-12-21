// FUNCTIONS

// WORD SELECTION
// Randomly select one list (array of strings) from the collection (array of lists). Then, randomly select one word(string) from the list (array).
// Two adjectives will be selected this way from the Adjective Collection. Both adjectives can come from the same list. But each adjective must be different.
// Two nouns will be selected the same way with the same restrictions but from the Noun Collection.
// getWords() will return an array of two strings.
//
// How to do this:
// 1. Count the length of the Adj Collection array
    // 2a. Use Math.random to select one Adj List from the Adj Collection
        // 2b. Count the length of the Adj List array
        // 2c. Use Math.random to select one Adjective from the Adj List
        // 2d. Return the selected Adjective (2c)
    // 3a. (same as 2a)
        // 3b. (same as 2b)
        // 3c. (same as 2c)
        // 3d. Check if 3c is the same as 2c
            // 3d-1. If same, repeat step 3
            // 3d-2. If different, return the Adjective (3c)
// 4. Result: two different Adjectives (from the same or different Lists)
// 5. Repeat this process for the Noun Collection to select two different Nouns
//
// How many possible functions?
// 1. Count length of array (Collections and Lists): number = array.length
// 2. Get random index/item from array (List and Word): Math.floor(math.random() * number)
// 3. Check to see if two strings are different (Word vs Word): if(wordOne === wordTwo)
//
// How to test?
// Check to see if two strings have been selected
// Check to see if two strings are not equal


function selectRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
};

function getOneList(groupOfLists) {
    const randomList = selectRandomItem(groupOfLists);
    return randomList;
};

function getOneWord(listOfWords) {
    const randomWord =selectRandomItem(listOfWords);
    return randomWord;
};

export function getWords(groupOfLists) {
    const words = [];
    
    do {
        const list = getOneList(groupOfLists);
        const word = getOneWord(list);
        words.push(word);
        if(words[0] === words[1]) {
            words.pop();
        }
    } while (words.length < 2);

    return words;
};
















    // Select the second word; must not match first word
    // const listTwo = groupOfLists[Math.floor(Math.random() * numberOfLists)];
    
    // do {
    //     const listTwo = getOneList(groupOfLists);
    //     wordTwo = getOneWord(listTwo);
    // } while (wordOne === wordTwo);
    
        
        // numberOfWords = listTwo.length;
        // wordTwo = listTwo[(Math.floor(Math.random() * numberOfWords))];

    
    //return [wordOne, wordTwo];





    // let numberOfWords;
    
    // Select the first word
    // const numberOfLists = groupOfLists.length;
    // const listOne = groupOfLists[Math.floor(Math.random() * numberOfLists)];
    
    
    // numberOfWords = listOne.length;
    // const wordOne = listOne[(Math.floor(Math.random() * numberOfWords))];
    
    // let wordTwo

    // const listOne = getOneList(groupOfLists);
    // const wordOne = getOneWord(listOne);
    
    // const listTwo = getOneList(groupOfLists);
    // const wordTwo = getOneWord(listTwo);



//console.log(Math.floor(Math.random() * numberOfLists));
//console.log('Word One: ' + wordOne);
//console.log('Word Two: ' + wordTwo);