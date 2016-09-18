/*=notes
- And again, trying on a missing file...
- ...we get an error this time, with no tricks!
- Uncaught `error` events automatically get promoted to process-level exceptions
*/

const FileReader = require('./file-reader');

let reader = new FileReader();

reader.on('data', data => {
  process.stdout.write(data);
});

reader.read('does-not-exist.txt', 'utf-8');
