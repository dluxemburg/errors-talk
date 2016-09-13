/*=notes
- So let's build a promise generating function out of the callback-based `readFile` method
- Libraries to do it for you (and some that use promises as their interface)
*/

const fs = require('fs');

module.exports = (filename, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
