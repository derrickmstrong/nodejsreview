// Modules - Encapsulate code (only share minimium)

// const carol = 'Carol';

// const sayHi = (name) => {
//     console.log(`Hi ${name}!`);
// }

// sayHi('Derrick');
// sayHi(carol);

const names = require('./modules-names');
const sayHi = require('./modules-utils');

console.log(names);
console.log(names.carol);
console.log(names.derrick);

sayHi(names.carol);
sayHi(names.derrick);
sayHi(names.strong);

