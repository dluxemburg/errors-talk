/*=notes
- And the error case behaves the same way too **[RUN]**
*/

const fs = require('fs');

let stream = fs.createReadStream(
  'does-not-exist.txt', 'utf-8'
);

stream.on('data', data => process.stdout.write(data));
