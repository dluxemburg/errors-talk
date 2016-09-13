/*=notes
- One difference from callbacks is that promises can be chained, like this
- The catch covers both (error will propogate), and result of the second promise is yielded to the second "`then`"
*/

somethingThatReturnsAPromise().then(data => {
  /* work work work */
  return someNewPromiseWeMade;
}).then(additionalData => {
  /* work work work */
}).catch(err => {
  /* handle handle handle */
});
