/*=title: Read A File As A Stream */

const fs = require('fs');

let stream = fs.createReadStream('hello.txt', 'utf-8');

stream.on('data', data => process.stdout.write(data));
