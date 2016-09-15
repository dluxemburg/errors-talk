/*=title: Read A File With A Promise */

const readFile = require('./read-file');

readFile('hello.txt', 'utf-8').then(data => {
  process.stdout.write(data);
});
