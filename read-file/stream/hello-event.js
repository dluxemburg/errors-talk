/*=notes
- But what if we didn't have to wire them up? What if our evented file-reader shipped with Node?
- It does! **[RUN]**
*/

const fs = require('fs');

let stream = fs.createReadStream('hello.txt', 'utf-8');

stream.on('data', data => process.stdout.write(data));
