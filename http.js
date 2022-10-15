const http = require('http');

const server = http.createServer((req, res) => { 
    // req = Incoming request
    // res = What we are sending back to the server
    if (req.url === '/') {
        res.end('Welcome to the homepage!'); // Send msg to server
    }
    if (req.url === '/about') {
        res.end('Welcome to the About page!'); // Send msg to server
    }
    res.end(`Page does not exist.`);
 });

 server.listen(8000);