// Create web server
// 1. Load http module
import http from 'http';
import fs from 'fs';
import url from 'url';
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
});
connection.connect();
// 2. Create server
http.createServer(function (request, response) {
    // 3. Parse the request containing file name
    var pathname = url.parse(request.url).pathname;
    // 4. Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // Page found	  
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/html' });
            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body 
        response.end();
    });
}).listen(8081);
// Console will print the message
console.log('Server running at http://');
