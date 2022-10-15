// File System (Async) w//Callback Hell

const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => { 
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => { 
        if (err) return;
        console.log(result);
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is result-async: ${first} & ${second}. \n`,
            (err, result) => { 
                if (err) return;
                console.log(result); // undefined
            })
     })
 })