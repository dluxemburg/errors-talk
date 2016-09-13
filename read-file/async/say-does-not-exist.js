/*=notes
- _Now_ with wrong file name...**[RUN]**
- ...no error—much worse
- "We've sent off output to who knows where—a user, another process, some persistence mechanism—and it's wrong _and_ we don't know it"
- "Two problems: uninformative errors and silent failures"
- How can we avoid them and—to start with—not do any more work?

> _Now_ if we've got the wrong file name...

> At least in the other case we got an error! This is much worse. We've sent off output to who knows where—a user, another process, some persistence mechanism—and it's wrong _and_ we don't know it.

> So, two problems: uninformative errors and silent failures. How can we avoid them?

> How can we avoid them without doing any more work?
*/

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  process.stdout.write(`We say ${data}`);
});
