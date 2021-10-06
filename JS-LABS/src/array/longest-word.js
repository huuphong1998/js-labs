// Write a function to find the longest word
// for...i
// forEach
// reduce

function findLongestWordI(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

    let longestWord = wordList[0];
    for (let i = 0; i < wordList.length; i++) {
        const currentWord = wordList[i];
        if (currentWord.length > longestWord.length) longestWord = currentWord;
    }

    return longestWord;
}
console.log(findLongestWordI(['nguyen', 'huu', 'phongss']));

// forEach
function findLongestWordEach(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

    let longestWord = wordList[0];
    wordList.forEach((word) => {
        if (word.length > longestWord.length) longestWord = word;
    });

    return longestWord;
}
console.log(findLongestWordEach(['nguyen', 'huu', 'phongss']));

// reduce
