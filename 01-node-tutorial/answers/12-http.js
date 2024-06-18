const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`<h1>Home page.</h1>`);
    } else if (req.url === '/about') {
        res.end(`<h1>About page.</h1>`);
    } else {
        res.end(`
            <h1>Error page</h1>
            <a href="/">Back to home page</a>
        `);
    }
});

server.listen(3000);