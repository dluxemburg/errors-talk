/*=notes
- And just like events, we can handle the error ourselves if we want to **[RUN]**
*/

const fs = require('fs');

fs.createReadStream(
  'does-not-exist.txt', 'utf-8'
).on('error', err => {
  console.error(`Whoops! ${err.message}`);
}).pipe(process.stdout);
