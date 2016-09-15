/*=title: `uncaughtException` */

const fs = require('fs');

process.on('uncaughtException', (err) => {
  console.error(`Quietly now: ${err.message}`);
});

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  process.stdout.write(`We say ${data}`);
});
