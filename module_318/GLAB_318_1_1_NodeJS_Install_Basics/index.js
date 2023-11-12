const http = require('http');

const host = 'localhost';
const port = 3002;

// routes
const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);


// Request Listeners
const requestListeners = (req, res) => {
    switch(req.url) {
        case "/":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1 style="color: red">Hello World!</h1>');
            res.write('<p>I wonder what else we can send...</p>'); 
            res.end();
        case "/books":
            res.writeHead(200, { 'Content-Type':'application/json' });
            res.end(books);
            break;
        case "/authors":
            res.writeHead(200, { 'Content-Type':'application/json' });
            res.end(authors);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
};

const server = http.createServer(requestListeners);

server.listen(port, host, () => {
    console.log("Server running at "+ `http://${host}:${port}/`);
});