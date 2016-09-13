/*=notes
- But we _can_ handle the error ourselves if we want **[RUN]**
*/

const FileReader = require('./file-reader');

let reader = new FileReader();

reader.on('data', data => {
  process.stdout.write(data);
});

reader.on('error', err => {
  console.error(`Uh-oh: ${err.message}`);
});

reader.read('does-not-exist.txt', 'utf-8');
