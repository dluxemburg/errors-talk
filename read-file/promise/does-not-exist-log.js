const readFile = require('./read-file');

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
}).catch(err => {
  console.error(`Uh-oh: ${err.message}`);
});
