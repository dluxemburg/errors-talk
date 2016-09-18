/*=notes
- _Now_ with wrong file name...**[RUN]**
- ...no error—much worse
- "We've sent off output to who knows where—a user, another process, some persistence mechanism—and it's wrong _and_ we don't know it"
- Another problem: silent failures
*/

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  process.stdout.write(`We say ${data}`);
});
