/*=notes
- Sync version does not get to next step
- Direct link from asynchronous approach to bad errors and silent failures

> **[RUN]**, but the synchronous version doesn't.

> So there's a direct link from Node's (very valuable) asynchronous approach to things and the fact that it's easy to get bad errors or silent failures. We've got to put in some non-zero amount of work to account for the fact that our process keeps chugging along after it's done something that might go wrong.

> So, that's why error handling in an asynchronous world is particularly challenging. Because programs never wait on the outside world, by the time we know something has gone wrong we've already moved on. Two consequences of this that make life difficult are bad error messages that don't tell us exactly what went wrong and silent failures where a program is doing a bad thing without knowing it (or telling anyone).
*/

const fs = require('fs');

let data = fs.readFileSync('does-not-exist.txt', 'utf-8');
process.stdout.write(data);

console.log(`3 * 7 = ${3 * 7}`);
