/*=notes
- **[RUN]** This does what we'd expect
*/

const readFile = require('./read-file');

readFile('hello.txt', 'utf-8').then(data => {
  process.stdout.write(data);
});
