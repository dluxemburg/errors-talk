/*=notes
- Try on file that doesn't exist
- Error "might be what broke but isn't what's wrong"
- So, problem: Uninformative errors
*/

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  process.stdout.write(data);
});
