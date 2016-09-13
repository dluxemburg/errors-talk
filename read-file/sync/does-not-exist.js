/*=notes
- Do a bad thing: `readFileSync` **[RUN]**
- Good error

> We can do a bad thing. We can use `readFileSync`. Our bad, misdirecting error turns into a good one: **[RUN]**
*/

const fs = require('fs');

let data = fs.readFileSync('does-not-exist.txt', 'utf-8');
process.stdout.write(data);
