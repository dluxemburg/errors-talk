/*=notes
- We're working in Node and want to read from a file and write it to standard out

> Let's say we want to read something from a file and write it to standard out, just for fun **[RUN]**

> Okay. Great! "Hello!" It works—we're done
*/

const fs = require('fs');

fs.readFile('hello.txt', 'utf-8', (err, data) => {
  process.stdout.write(data);
});
