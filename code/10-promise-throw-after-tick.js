/*=title: Forced An Error In A Promise After Tick */

const readFile = require('./read-file');

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
}).catch(err => {
  process.nextTick(() => { throw err });
})
