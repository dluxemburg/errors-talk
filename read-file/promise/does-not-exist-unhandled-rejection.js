/*=notes
- So what _did_ happen to that throw?
- More generally, if we don't catch a rejected promise does that error just get missed (which is what happens with callbacks)?
- There's a process-level "unhandledRejection" event that we can listen for
*/

const readFile = require('./read-file');

process.on('unhandledRejection', (err) => { throw err; });

readFile('does-not-exist.txt', 'utf-8').then(data => {
  process.stdout.write(data);
});
