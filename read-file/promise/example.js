/*=notes
- Alternative #1: promises
- Promises work like this: we get a promise from somewhere (more on that in a second) and use these methods to get at the result (if the operation is successful) or an error object
- Looks a _little_ like callbacks
*/

somethingThatReturnsAPromise().then(data => {
  /* work work work */
}).catch(err => {
  /* handle handle handle */
});
