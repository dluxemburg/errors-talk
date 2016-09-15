/*=title: Domains (Still Deprecated) */

const domain = require('domain');
const fs = require('fs');

domain.create().on('error', (err) => {
  console.error(`Caught It! ${err.message}`)
}).run(() => {
  fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  });
});

