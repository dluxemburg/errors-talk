/*=notes
- ...but we can get that behavior for errors we generate (or have caught)
*/

const fs = require('fs');
const Transform = require('stream').Transform;

fs.createReadStream(
  'hello.txt', 'utf-8'
).pipe(new Transform({
  transform: (chunk, encoding, callback) => {
    if (chunk.toString().length > 4) {
      return callback(new Error('Bad greeting: too long'));
    }
    callback(null, `A good greeting: ${chunk}`);
  }
})).on('error', err => {
  console.error(`Whoops! ${err.message}`)
}).pipe(process.stdout);
