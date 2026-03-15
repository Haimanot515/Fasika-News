// server.js
const http = require('http');
const PORT = process.env.PORT || 3000;

// Simple server responding with Hello World
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Basic routing
  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello World! Taskflow Backend is running.');
  } else if (req.url === '/health' && req.method === 'GET') {
    res.end('OK');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});