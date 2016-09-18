/*=notes
- But...at least we're still able to do more than one thing at once **[RUN]**
*/

const FileReader = require('./file-reader');

let reader = new FileReader();

reader.on('data', data => {
  process.stdout.write(data);
});

reader.on('error', err => {
  console.error(`Uh-oh: ${err.message}`);
});

reader.read('hello.txt', 'utf-8');
reader.read('hi.txt', 'utf-8');

