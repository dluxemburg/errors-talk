/*=title: Make An Error Event Async */

const EventEmitter = require('events');

let ee = new EventEmitter();

ee.on('error', err => { process.nextTick(() => { throw err }) });

Promise.resolve().then(() => ee.emit('error', new Error('A mistake')));
