const crypto = require('crypto');
const input = 'yzbqklnj';

const getHash = data => {
  return crypto.createHash('md5').update(data).digest('hex');
};

let count = 0;

while (getHash(`${input}${count}`).slice(0, 5) !== '00000') count++;

console.log(count);
