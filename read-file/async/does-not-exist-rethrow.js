/*=notes
- Let's backup and fix original
- "can't stress enough" don't use `-Sync`
- We can rethrow the error and it stops being so silent
- `if (err) throw err` should _usually_ make you feel bad, it's kind of a placeholder here for better handling in more elaborte contexts—we'll get to that at the end

> Okay, so let's back up to our original error case and fix it instead of going into that `readFileSync` hypothetical (can't stress enough, don't solve your problems that way) **[RUN]**.
*/

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  process.stdout.write(data);
});
