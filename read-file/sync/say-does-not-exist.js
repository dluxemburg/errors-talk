/*=notes
- Also fixes silent failure **[RUN]**
- This is bad
  - **Blocks** execution
  - `-Sync` forces working serially

> And our silent failure fails in the appropriate place (as opposed to pushing bad output further down the line) **[RUN]**.

> Like I said, that's a bad thing to do. `readFileSync` *blocks* execution until it's complete. Our process sits there waiting for something external to it, hard disk IO in this case. Because this is a contrived example there's not a lot of consequence to that but what if we were reading dozens of files and doing compute-intensive comparisons of them? Not only would we have to wait for each one to finish before reading the next, we'd waste time we could be doing in-process computation work waiting for something else to happen. Using `-Sync` methods is bad because Node's fundamentally asynchronous orientation is an enormous part of what makes it great.
*/

const fs = require('fs');

let data = fs.readFileSync('does-not-exist.txt', 'utf-8');
process.stdout.write(`We say ${data}`);
