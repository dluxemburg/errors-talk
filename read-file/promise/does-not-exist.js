/*=notes
- But when the file is missing **[RUN]** it fails silently, like the callback method
*/

const readFile = require('./read-file');

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
});
