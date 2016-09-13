/*=notes
- This doesn't scale, it's clear how this could get out of hand
- So while this works **[RUN]**...
- ...it doesn't support _composable_ error-handled code
- (Also, we could be reading both files at the same time _but how!?_)
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
