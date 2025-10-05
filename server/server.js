import http from "node:http"

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Hello World</h1></body></html>");
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});
