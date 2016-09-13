/*=notes
- Async means not waiting
  - So we don't know find out about error
  - Because the program keeps going about its business
- Async version gets to next step

> But! The reason we even had the chance for our file reader to error badly or fail silently is because the file reading it does is asynchronous. The process doesn't wait to find out about the system call it made to read some file, it gets on with its business, which is what we want.

> Look, we can add some additional work and the async version gets to it **[RUN]**.
*/

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  process.stdout.write(data);
});

console.log(`3 * 7 = ${3 * 7}`);
