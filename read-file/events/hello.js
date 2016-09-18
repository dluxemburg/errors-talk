/*=notes
- Works as expected
*/

const FileReader = require('./file-reader');

let reader = new FileReader();

reader.on('data', data => {
  process.stdout.write(data);
});

reader.read('hello.txt', 'utf-8');
