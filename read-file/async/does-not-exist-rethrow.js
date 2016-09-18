/*=notes
- We can rethrow the error and it stops being so silent
- `if (err) throw err` should _usually_ make you feel bad, it's kind of a placeholder here for better handling in more elaborte contexts—we'll get to that at the end
*/

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  process.stdout.write(data);
});
