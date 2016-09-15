/*=title: Force An Error */

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  process.stdout.write(`We say ${data}`);
});
