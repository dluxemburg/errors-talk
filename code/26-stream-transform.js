/*=title: Transform A Stream */

const fs = require('fs');
const Transform = require('stream').Transform;

let stream = fs.createReadStream('hello.txt', 'utf-8')
let transform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, `A good greeting: ${chunk}`);
  }
});

stream.pipe(transform).pipe(process.stdout);
