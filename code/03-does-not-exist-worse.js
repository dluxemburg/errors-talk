/*=title: Fail To Error */

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  process.stdout.write(`We say ${data}`);
});
