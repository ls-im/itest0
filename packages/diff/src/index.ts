import http from 'node:http';

const server = http.createServer((req, resp) => {

    resp.writeHead(201, { 'Content-Type': 'text/plain' });
    resp.end('ok\n');
});

server.listen(3001, '127.0.0.1', () => {
    console.log('server is up');
});

