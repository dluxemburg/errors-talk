/*=title: Catch A Forced Error In A Promise */

const readFile = require('./read-file');

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
}).catch(err => {
  throw err;
}).catch(err => {
  console.error(`Whoops: ${err.message}`);
});
