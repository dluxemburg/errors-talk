/*=notes
- So much like promises, we can wrap the basic "`fs.readFile`" method to expose its error behavior this way
*/

const EventEmitter = require('events');
const fs = require('fs');

module.exports = class extends EventEmitter {
  read(path, encoding) {
    fs.readFile(path, encoding, (err, data) => {
      if (err) return this.emit('error', err);
      this.emit('data', data);
    });
  }
};
