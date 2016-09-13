/*=notes
- Promises have some other features, like "`Promise.all`" which lets us run promised functions in parallel and get an array of results **[RUN]**
- And again, these can get a single handler, so this gets us a much nicer version of mutliple file reading than we got with callbacks
*/

const readFile = require('./read-file');

Promise.all([
  readFile('hello.txt', 'utf-8'),
  readFile('hi.txt', 'utf-8')
]).then(greetings => {
  let list = greetings.map(g => `'${g.trim()}'`).join(', ');
  process.stdout.write(`Some greetings are: ${list}`);
}).catch(err => {
  console.error(`Uh-oh: ${err.message}`);
});

