const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('Error processing file');
  }
  else {
    const input = data.toString('utf8').split('\n');

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const doubleLetters = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => letter + letter);
    const restrictions = ['ab', 'cd', 'pq', 'xy'];

    // Check the rules.
    const isContainThreeVowels = string => string.split('').reduce((numVowels, char) => vowels.indexOf(char) === -1 ? numVowels : ++numVowels, 0) >= 3;
    const isContainDoubleLetter = string => doubleLetters.some(item => string.indexOf(item) !== -1);
    const isContainRestrictedLetters = string => restrictions.some(item => string.indexOf(item) !== -1);

    // ex. If result is true, true, !false = true, then !true = false, then !false = true
    const isNice = string => !!(isContainThreeVowels(string) && isContainDoubleLetter(string) && !isContainRestrictedLetters(string));

    const numNice = input.reduce((total, string) => isNice(string) ? ++total : total, 0);

    console.log(numNice);
  }
});
