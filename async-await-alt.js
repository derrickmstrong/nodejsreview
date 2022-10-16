// Async Await w/ .promises instead of adding util module

const { readFile, writeFile } = require('fs').promises;

const getText = async (firsttxt, secondtxt) => { 
  try {
    const first = await readFile(firsttxt, 'utf8');
    const second = await readFile(secondtxt, 'utf-8');
    console.log(first, second);
    await writeFile('./asyncpatterns/result-async-await-alt.txt',
    `Here is the result of the async patterns (async-await): ${first}. ${second}. \n`,
    {flag: 'a'});
  } catch (err) {
    console.log(err);
  }
 }

getText('./content/first.txt', './content/second.txt');