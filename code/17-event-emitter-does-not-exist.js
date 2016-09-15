/*=title: Fail To Read A File With An `EventEmitter` */

const FileReader = require('./file-reader');

let reader = new FileReader();

reader.on('data', data => {
  process.stdout.write(data);
});

reader.read('does-not-exist.txt', 'utf-8');
