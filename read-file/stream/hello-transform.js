/*=notes
- And a bit like promises, streams can be chained **[RUN]**
*/

const fs = require('fs');
const Transform = require('stream').Transform;

fs.createReadStream(
  'hello.txt', 'utf-8'
).pipe(new Transform({
  transform: (chunk, encoding, callback) => {
    callback(null, `A good greeting: ${chunk.toString()}`);
  }
})).on('error', err => {
  console.error(`Whoops! ${err.message}`)
}).pipe(process.stdout);
