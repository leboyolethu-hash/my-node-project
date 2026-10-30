const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.write('Hello Node Server');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, '0.0.0.0', function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});