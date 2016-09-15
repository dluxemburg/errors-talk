/*=title: Domains (Are Deprecated) */

const domain = require('domain');
const fs = require('fs');

domain.create().on('error', (err) => {
  console.error(`Caught It! ${err.message}`)
}).run(() => {
  fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
    process.stdout.write(data);
  });
});

