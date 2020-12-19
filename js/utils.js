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
