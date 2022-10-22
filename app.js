// Events module (on/emit)

const EventEmitter = require('events');

// Setup custom event handler
const customEmitter = new EventEmitter();

// .on subscribes to the response event
// Must listen for event first (.on) then .(emit)
customEmitter.on('response', (name, age) => {
  console.log(`data: {
    name: ${name},
    age: ${age},
  }`);
});

// .emit fires off the response event
// Accepts arguments
customEmitter.emit('response', 'Derrick', 43);
