const http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer((request, response) => {
    let address = request.url,
        q = url.parse(address, true),
        filePath = '';

    fs.appendFile('log.txt', 'URL: ' + address + '\nTimestamp: ' + new Date() + '\n\n', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Added to log!');
        }
    });

    if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
    } else {
        filePath = 'index.html';
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            throw error;
        }

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();

    });

}).listen(8080);

console.log('My brain is mashed potatoes again!');