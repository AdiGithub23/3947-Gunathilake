// Importing required modules
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
    // Setting response header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Sending response
    res.end('Hello, world!\n');
});

// Specifying the port to listen on
const port = 3000;

// Start listening on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
