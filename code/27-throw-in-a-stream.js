/*=title: Throw In A Stream */

const fs = require('fs');
const Transform = require('stream').Transform;

let stream = fs.createReadStream('hello.txt', 'utf-8')
let transform = new Transform({
  transform(chunk, encoding, callback) {
    throw new Error('Greeting too long!');
  }
});

stream.pipe(transform).on('error', err => {
  console.error(`Caught It! ${err.message}`);
}).pipe(process.stdout);
