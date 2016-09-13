const FileReader = require('./file-reader');

let reader = new FileReader();

reader.on('data', data => {
  process.stdout.write(data.reverse());
});

reader.on('error', err => {
  console.error(`Uh-oh: ${err.message}`);
});

reader.read('hello.txt', 'utf-8');
