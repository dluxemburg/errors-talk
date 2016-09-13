/*=notes
- Try on file that doesn't exist
- Error "might be what broke but isn't what's wrong"
- Can figure it out, but not as good as a good error

> What happens when it doesn't work? Let's try it on a file that doesn't exist **[RUN]**

> Okay that might be what unrecoverably broke our little program, but it's not what's _wrong_ with it. **What's wrong is that it expects a file to exist that doesn't**.

> Sure, we can work backwards and figure it out. **That's not so bad but it's not nearly as good as something like "Error: no file, dummy".**
*/

const fs = require('fs');

fs.readFile('does-not-exist.txt', 'utf-8', (err, data) => {
  process.stdout.write(data);
});
