/*=notes
- This looks less like the other async code we've looked at and most like the `-Sync` version
- But it's not, the program continues after the piping has been kicked off **[RUN]**
*/

const fs = require('fs');

fs.createReadStream(
  'does-not-exist.txt', 'utf-8'
).pipe(process.stdout);

console.log(`3 * 7 = ${3 * 7}`);
