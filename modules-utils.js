// Utils

const sayHi = name => {
  console.log(`Hi ${name}!`);
};

// When exporting only 1 item you don't need to use { }
module.exports = sayHi;