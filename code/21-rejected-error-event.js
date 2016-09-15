/*=title: An Error Event Causes A Rejection */

const EventEmitter = require('events');

let ee = new EventEmitter();

process.on('unhandledRejection', (err) => { throw err; });

Promise.resolve().then(() => ee.emit('error', new Error('A mistake')));
