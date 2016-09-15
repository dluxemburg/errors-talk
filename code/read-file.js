/*=title: Make A Promise (generating function) */

const fs = require('fs');

module.exports = (filename, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
