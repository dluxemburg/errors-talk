/*=notes
- Events!
*/

const EventEmitter = require('events');

let emitter = new Emitter();

emitter.on('something', event => {
  /* work work work */
});

emitter.emit('something', {some: 'data'});
