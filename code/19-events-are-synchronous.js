/*=title: Event Handling Is Synchronous */

const EventEmitter = require('events');

let ee = new EventEmitter();

Promise.resolve().then(() => ee.emit('error', new Error('A mistake')));
