const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('Error processing file');
  }
  else {
    const input = data.toString('utf8').split('\n');

    const isContainPair = string => /([a-z][a-z]).*\1/.test(string);
    const isContainRepeatLetter = string => /([a-z])[a-z]\1/.test(string);

    const isNice = string => !!(isContainPair(string) && isContainRepeatLetter(string));

    const numNice = input.reduce((total, string) => isNice(string) ? ++total : total, 0);

    console.log(numNice);
  }
});
