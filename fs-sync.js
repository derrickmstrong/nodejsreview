// File System

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/result-sync.txt', // File to write to; file will be created if it does not already exist
    `Here is the result-sync: ${first}, ${second}. \n`, // Content to write
    {flag: 'a'} // Set a flag stating that you should append to file (rather than overwrite it)
)