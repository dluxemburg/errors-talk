/*=title: Stream Errors Don't Propogate */

const fs = require('fs');
const Transform = require('stream').Transform;

let stream = fs.createReadStream('does-not-exist', 'utf-8')
let transform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, `A good greeting: ${chunk}`);
  }
});

stream.pipe(transform).on('error', err => {
  console.error(`Caught It! ${err.message}`);
}).pipe(process.stdout);

