// File Path

const path = require('path');

const filePath = path.join('/content', 'test.txt');

const pathOptions = {
    Seperator: path.sep,
    Join: filePath,
    Basename: path.basename(filePath),
    Resolve: path.resolve(__dirname), // Absolute pathname
    Resolve2: path.resolve(__dirname, 'content', 'test.txt'), // Absolute pathname for test.txt
}

console.log('pathOptions', pathOptions);