/*=title: Make An EventEmitter */

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
