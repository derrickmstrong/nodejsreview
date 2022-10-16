const http = require('http');
const PORT = 8000;

const server = http.createServer((req, res) => {
  // req = Incoming request
  // res = What we are sending back to the server
  if (req.url === '/') {
    res.end('Homepage'); // Send msg to server
    return;
  }
  if (req.url === '/about') {
    // Blocking code = Bad - sync for loop
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log('i + j:', i, j);
      }
    }
    res.end('About page'); // Send msg to server
    return;
  }
  res.end(`Page does not exist.`);
  return;
});

server.listen(PORT, () => {
  console.log(`Server is now listening on port: ${PORT}`);
});
