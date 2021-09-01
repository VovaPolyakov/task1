let name = document.querySelector(".i-1").value;

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hello world');
});

server.listen(3000, '127.0.0.1', () => console.log('Сервер работает '));