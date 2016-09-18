/*=notes
- This is great!
- We can cover a lot of code with one handler, which we couldn't do before
*/

const readFile = require('./read-file');

readFile('hello.txt', 'utf-8').then(data => {
  return data.reverse();
}).then(data => {
  process.stdout.write(data);
}).catch(err => {
  console.error(`Uh-oh: ${err.message}`);
});

