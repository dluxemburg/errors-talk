/*=title: `unhandledRejection` */

const readFile = require('./read-file');

process.on('unhandledRejection', (err) => { throw err; });

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
});
