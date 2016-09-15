/*=title: `-Sync` (DO NOT USE) */

const fs = require('fs');

let data = fs.readFileSync('does-not-exist.txt', 'utf-8');
process.stdout.write(data);
