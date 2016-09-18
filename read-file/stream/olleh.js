/*=notes
- ...but the transformation don't collect and forward synchronous errors the way promises do
*/

const fs = require('fs');
const Transform = require('stream').Transform;

fs.createReadStream(
  'hello.txt', 'utf-8'
).pipe(new Transform({
  transform(chunk, encoding, callback) {
    let backwards = chunk.toString().reverse();
    callback(null, `A good greeting: ${backwards}`);
  }
})).on('error', err => {
  console.error(`Whoops! ${err.message}`)
}).pipe(process.stdout);
