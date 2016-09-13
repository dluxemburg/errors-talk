const readFile = require('./read-file');

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
}).catch(err => {
  throw new Error('Failed to print greeting');
}).catch(err => {
  console.error(`Uh-oh: ${err.message}`);
});
