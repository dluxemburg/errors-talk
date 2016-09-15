/*=title: Catch An Error Event */

const FileReader = require('./file-reader');

let reader = new FileReader();

reader.on('error', err => {
  console.error(`Quietly now: ${err.message}`);
});

reader.on('data', data => {
  process.stdout.write(data);
});

reader.read('does-not-exist.txt', 'utf-8');
