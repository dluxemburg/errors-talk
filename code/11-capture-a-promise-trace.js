/*=title: Capture A Stack Trace In A Promise */

const readFile = require('./read-file');

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
}).catch(err => {
  Error.captureStackTrace(err);
  process.nextTick(() => { throw err });
});
