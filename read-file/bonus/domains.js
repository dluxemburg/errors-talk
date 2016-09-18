const domain = require('domain');
const fs = require('fs');

domain.create().on('error', (err) => {
  console.error(`Caught It! ${err.message}`);
}).run(() => {
  process.nextTick(() => {
    fs.readFileSync('does-not-exist.txt', 'utf-8');
  });
});

