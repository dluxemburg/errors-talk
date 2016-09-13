/*=notes
- What if we want to put the data in another string, like this **[RUN]**

> It gets worse. What if the data needs a little editing before sending out, like this:
*/

const fs = require('fs');

fs.readFile('hello.txt', 'utf-8', (err, data) => {
  process.stdout.write(`We say ${data}`);
});
