/*=title: Read A File */

const fs = require('fs');

fs.readFile('hello.txt', 'utf-8', (err, data) => {
  process.stdout.write(data);
});
