/*=title: Stream Errors Aren't Synchronous */

const fs = require('fs');

try {
  let stream = fs.createReadStream('does-not-exist.txt', 'utf-8');
  stream.pipe(process.stdout);
} catch (e) {
  console.error(`Caught It! ${err.message}`);
}

