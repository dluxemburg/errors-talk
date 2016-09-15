/*=title: No `then` in `unhandledRejection` (unless caught) */

const readFile = require('./read-file');

process.on('unhandledRejection', (err, promise) => {
  promise.then(() => 'okay').catch(() => 'okay');
});

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
});
