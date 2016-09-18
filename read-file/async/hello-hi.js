/*=notes
- So while this works **[RUN]**...
- ...it demonstrates how this could easily get out of hand
- So, one more problem: repetitive handling (because we can combine error handling)
*/

const fs = require('fs');

fs.readFile('hello.txt', 'utf-8', (err, greeting1) => {
  if (err) throw err;
  fs.readFile('hi.txt', 'utf-8', (err, greeting2) => {
    if (err) throw err;
    process.stdout.write(
      `Some greetings are: '${greeting1.trim()}',` +
      ` '${greeting2.trim()}'`
    );
  });
});
