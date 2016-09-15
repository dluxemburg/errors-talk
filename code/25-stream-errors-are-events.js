/*=title: Stream Errors Are Events */

const fs = require('fs');

let stream = fs.createReadStream('does-not-exist.txt', 'utf-8');

stream.on('error', err => {
  console.error(`Caught It! ${err.message}`);
});

stream.pipe(process.stdout);

