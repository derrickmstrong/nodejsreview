// Events (Creating a server)

const http = require('http');
const PORT = 5002;

const server = http.createServer();

// event name has to be 'request' when creating a server
server.on('request', (req, res) => {
  res.end('Welcome to Node.js');
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
