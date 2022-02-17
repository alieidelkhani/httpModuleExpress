const http = require("http")

const server = http.createServer((request, response) => {
    console.log('test')

    response.write("Hello Ali");

    response.end();

}).listen(5500); 