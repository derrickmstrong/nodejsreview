// Async Await w/ util module

const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile); // Returns a new Promise on the readFile module
const writeFilePromise = util.promisify(writeFile); // Returns a new Promise on the writeFile module

const start = async (firsttxt, secondtxt) => { 
  try {
    const first = await readFilePromise(firsttxt, 'utf8');
    const second = await readFilePromise(secondtxt, 'utf-8');
    console.log(first, second);
    await writeFilePromise('./asyncpatterns/result-async-await.txt',
    `Here is the result of the async patterns (async-await): ${first}. ${second}. \n`,
    {flag: 'a'});
  } catch (err) {
    console.log(err);
  }
 }

start('./content/first.txt', './content/second.txt');