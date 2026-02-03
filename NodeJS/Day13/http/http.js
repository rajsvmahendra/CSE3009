import http from "http";

// const host = 'localhost';
// const port = 3000;

// const server = http.createServer((_req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.writeHead(200);
//     res.end('Hello, World!\n');

// });

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });


// import http from 'http';
// import url from 'url';

// http.createServer((req, res) => {
//     const q = url.parse(req.url, true).query;
//     let contentType = 'text/html';

//     if (q.json === 'true') {
//         contentType = 'application/json';
//     }

//     res.writeHead(200, { 'Content-Type': contentType });

//     if (contentType === 'text/html') {
//         res.write('<html><body><h1>Hello, World!</h1></body></html>');
//     } else {
//         res.write(JSON.stringify({ message: 'Hello, World!' }));
//     }

//     res.end();
// }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

const server = http.createServer((req, res) => {
    const responsObj = {
        success: true,
        message: "USER CREATED",
        userId: 1232
    };

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(responsObj));
});
server.listen(3000, () => {
    console.log("SERVER running at http://localhost:3000");
})
