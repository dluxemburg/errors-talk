/*=notes
- But that's not the right way to use streams
- Even though the are `EventEmitter`s, they have an API for linking streams together
- `process.stdout` is actually a _writable_ stream, so we can tell our read stream for the file to just send its data along
*/

const fs = require('fs');

fs.createReadStream('hello.txt', 'utf-8')
  .pipe(process.stdout);
