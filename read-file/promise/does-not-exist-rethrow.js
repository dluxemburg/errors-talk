/*=notes
- We've been here before though. Let's just rethrow.
- Again...nothing
*/

const readFile = require('./read-file');

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
}).catch(err => {
  throw err;
});
