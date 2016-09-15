/*=title: Pipe A Stream From A File */

const fs = require('fs');

let stream = fs.createReadStream('hello.txt', 'utf-8');

stream.pipe(process.stdout);
